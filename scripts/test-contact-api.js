#!/usr/bin/env node

/**
 * Test script for the contact form API
 * Run with: node scripts/test-contact-api.js
 */

const API_URL = process.env.API_URL || 'http://localhost:3000';

async function testContactAPI() {
  console.log('🧪 Testing Contact Form API...\n');

  const testCases = [
    {
      name: 'Valid submission',
      data: {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        phone: '+84 123 456 789',
        company: 'Test Company Ltd.',
        message: 'This is a test message for the contact form API.',
        service: 'software'
      },
      shouldSucceed: true
    },
    {
      name: 'Missing required fields',
      data: {
        first_name: '',
        last_name: 'Doe',
        email: 'invalid-email',
        message: '',
        service: ''
      },
      shouldSucceed: false
    },
    {
      name: 'Invalid email format',
      data: {
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'not-an-email',
        message: 'Test message',
        service: 'tvc'
      },
      shouldSucceed: false
    }
  ];

  for (const testCase of testCases) {
    console.log(`📋 Test: ${testCase.name}`);
    console.log('Data:', JSON.stringify(testCase.data, null, 2));
    
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testCase.data),
      });

      const result = await response.json();
      
      console.log(`Status: ${response.status}`);
      console.log('Response:', JSON.stringify(result, null, 2));
      
      if (testCase.shouldSucceed && result.success) {
        console.log('✅ Test passed - Expected success, got success');
      } else if (!testCase.shouldSucceed && !result.success) {
        console.log('✅ Test passed - Expected failure, got failure');
      } else {
        console.log('❌ Test failed - Unexpected result');
      }
      
    } catch (error) {
      console.error('❌ Test error:', error.message);
    }
    
    console.log('\n' + '-'.repeat(50) + '\n');
  }

  // Test unsupported method
  console.log('📋 Test: Unsupported GET method');
  try {
    const response = await fetch(`${API_URL}/api/contact`);
    const result = await response.json();
    
    console.log(`Status: ${response.status}`);
    console.log('Response:', JSON.stringify(result, null, 2));
    
    if (response.status === 405) {
      console.log('✅ Test passed - GET method correctly rejected');
    } else {
      console.log('❌ Test failed - GET method should be rejected');
    }
  } catch (error) {
    console.error('❌ Test error:', error.message);
  }

  console.log('\n🏁 Testing completed!');
}

// Run the test if this script is executed directly
if (require.main === module) {
  testContactAPI().catch(console.error);
}

module.exports = { testContactAPI };