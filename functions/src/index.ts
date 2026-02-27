import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineString, defineInt } from "firebase-functions/params";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

// SMTP configuration params (set in functions/.env or via firebase functions:config)
const smtpHost = defineString("SMTP_HOST", { default: "smtp.larksuite.com" });
const smtpPort = defineInt("SMTP_PORT", { default: 465 });
const smtpUser = defineString("SMTP_USER", { default: "info@minova.vn" });
const smtpPassword = defineString("SMTP_PASSWORD");
const adminEmail = defineString("ADMIN_EMAIL", { default: "du.vu@minova.vn" });
const fromEmail = defineString("FROM_EMAIL", { default: "info@minova.vn" });
const fromName = defineString("FROM_NAME", { default: "Mercury Solutions" });

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

function createTransporter() {
  const port = smtpPort.value();
  return nodemailer.createTransport({
    host: smtpHost.value(),
    port,
    secure: port === 465,
    auth: {
      user: smtpUser.value(),
      pass: smtpPassword.value(),
    },
  });
}

function buildAdminEmailHtml(data: ContactData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Contact Form Submission</h1>
      </div>
      <div style="padding: 20px; background-color: #f8fafc;">
        <h2 style="color: #1e40af; margin-top: 0;">Contact Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          ${data.phone ? `<tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${data.phone}</td></tr>` : ""}
          ${data.company ? `<tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td style="padding: 8px 0;">${data.company}</td></tr>` : ""}
          ${data.service ? `<tr><td style="padding: 8px 0; font-weight: bold;">Service:</td><td style="padding: 8px 0;">${data.service}</td></tr>` : ""}
        </table>
        <h3 style="color: #1e40af; margin-top: 20px;">Message</h3>
        <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #1e40af;">
          ${data.message.replace(/\n/g, "<br>")}
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #e0f2fe; border-radius: 5px;">
          <p style="margin: 0; font-size: 14px; color: #0369a1;">
            <strong>Quick Actions:</strong><br>
            Reply to customer: <a href="mailto:${data.email}?subject=Re: ${data.service || "Your inquiry"}">${data.email}</a>
          </p>
        </div>
      </div>
      <div style="background-color: #64748b; color: white; padding: 15px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">This email was sent from the Mercury Solution Homepage contact form</p>
        <p style="margin: 5px 0 0 0;">Mercury Solutions</p>
      </div>
    </div>
  `;
}

function buildWelcomeEmailHtml(firstName: string, service?: string, senderEmail?: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Welcome to Mercury Solutions!</h1>
      </div>
      <div style="padding: 20px;">
        <h2 style="color: #1e40af;">Hello ${firstName}!</h2>
        <p>Thank you for reaching out to us. We have received your inquiry and our team will get back to you within 24 hours.</p>
        ${service ? `<p>We noticed you're interested in our <strong>${service}</strong> services. We're excited to discuss how we can help you achieve your goals.</p>` : ""}
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e40af;">What happens next?</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Our team will review your inquiry</li>
            <li>We'll prepare a personalized response</li>
            <li>You'll hear from us within 24 hours</li>
            <li>We'll schedule a consultation if needed</li>
          </ul>
        </div>
        <p>If you have any urgent questions, feel free to reply to this email or contact us directly at <a href="mailto:${senderEmail}">${senderEmail}</a>.</p>
        <p>Best regards,<br><strong>The Mercury Solutions Team</strong></p>
      </div>
      <div style="background-color: #64748b; color: white; padding: 15px; text-align: center;">
        <p style="margin: 0 0 10px 0;"><strong>Mercury Solutions</strong></p>
        <p style="margin: 0; font-size: 14px;">
          Email: <a href="mailto:${senderEmail}" style="color: #93c5fd;">${senderEmail}</a>
        </p>
      </div>
    </div>
  `;
}

/**
 * Cloud Function: Triggered when a new contact submission is created in Firestore.
 * Sends admin notification + customer welcome email via SMTP (Nodemailer).
 */
export const onContactSubmission = onDocumentCreated(
  "contact_submissions/{docId}",
  async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
      console.log("No data in document");
      return;
    }

    const data = snapshot.data() as ContactData;
    const docRef = snapshot.ref;
    const sender = `${fromName.value()} <${fromEmail.value()}>`;

    console.log(`📨 New contact from: ${data.firstName} ${data.lastName} <${data.email}>`);

    try {
      const transporter = createTransporter();

      // 1. Send admin notification email to du.vu@minova.vn
      await transporter.sendMail({
        from: sender,
        to: adminEmail.value(),
        replyTo: data.email,
        subject: `New Contact Form - ${data.firstName} ${data.lastName} (${data.service || "General"})`,
        html: buildAdminEmailHtml(data),
      });
      console.log("✅ Admin email sent to:", adminEmail.value());

      // 2. Send welcome email to customer
      await transporter.sendMail({
        from: sender,
        to: data.email,
        subject: `Welcome to Mercury Solutions${data.service ? ` - ${data.service}` : ""}`,
        html: buildWelcomeEmailHtml(data.firstName, data.service, fromEmail.value()),
      });
      console.log("✅ Welcome email sent to:", data.email);

      // 3. Update document status
      await docRef.update({
        status: "emails_sent",
        processedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      console.log(`✅ Done processing contact from: ${data.email}`);
    } catch (error) {
      console.error("❌ Error sending email:", error);

      await docRef.update({
        status: "error",
        errorMessage: error instanceof Error ? error.message : "Unknown error",
        processedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    }
  }
);
