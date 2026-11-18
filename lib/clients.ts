export interface Client {
  name: string
  logo: string
}

// Logos live in /public/images/clients. Replace a file to update a logo.
export const clients: Client[] = [
  { name: 'Fujikin', logo: '/images/clients/fujikin.png' },
  { name: 'Attivo', logo: '/images/clients/attivo.png' },
  { name: 'HCM City National Sports Training Center', logo: '/images/clients/hcm-sports.png' },
  { name: 'HMB Group', logo: '/images/clients/hmb.png' },
  { name: 'CareEarth', logo: '/images/clients/careearth.png' },
  { name: '4B Medical', logo: '/images/clients/4b-medical.png' },
  { name: 'Sotatek', logo: '/images/clients/sotatek.png' },
  { name: 'Hitek', logo: '/images/clients/hitek.png' },
  { name: 'Hidrone', logo: '/images/clients/hidrone.png' },
  { name: 'LoonEyes Studio', logo: '/images/clients/looneyes.png' },
  { name: 'United Lifestyle', logo: '/images/clients/united-lifestyle.png' },
  { name: 'Sun Fitness & Pool', logo: '/images/clients/sun-fitness.png' },
  { name: 'Chi Pilates', logo: '/images/clients/chi-pilates.png' },
  { name: 'ActiveSG', logo: '/images/clients/activesg.png' },
  { name: 'Active Fox', logo: '/images/clients/active-fox.png' },
  { name: "Choi's", logo: '/images/clients/chois.png' },
  { name: 'Hanoi Sports Club', logo: '/images/clients/hsc.png' },
]
