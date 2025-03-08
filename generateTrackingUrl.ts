#!/usr/bin/env node

const readline = require('readline')
const QRCode = require('qrcode')
const fs = require('fs')
const path = require('path')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const sourceToMedium = {
  'facebook': 'social',
  'instagram': 'social',
  'facebook-instagram': 'social',
  'email': 'email',
  'flyer': 'print'
} as const

const sources = Object.keys(sourceToMedium) as Array<keyof typeof sourceToMedium>
const campaigns = ['2025'] as const

type Source = keyof typeof sourceToMedium
type Medium = typeof sourceToMedium[Source]
type Campaign = typeof campaigns[number]

function displayMenu(options: readonly string[]): void {
  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`)
  })
}

function askQuestion(question: string, options?: readonly string[]): Promise<string> {
  return new Promise((resolve) => {
    if (options) {
      console.log('\nAvailable options:')
      displayMenu(options)
    }
    rl.question(`\n${question}: `, (answer: string) => {
      if (options) {
        const num = parseInt(answer)
        if (isNaN(num) || num < 1 || num > options.length) {
          console.log(`\nError: Please enter a number between 1 and ${options.length}`)
          resolve(askQuestion(question, options))
        } else {
          resolve(options[num - 1])
        }
      } else {
        resolve(answer)
      }
    })
  })
}

async function generateQRCode(url: string, filename: string) {
  const qrDir = path.join(process.cwd(), 'qrcodes')
  
  // Create qrcodes directory if it doesn't exist
  if (!fs.existsSync(qrDir)) {
    fs.mkdirSync(qrDir)
  }

  const filePath = path.join(qrDir, `${filename}.png`)
  
  try {
    await QRCode.toFile(filePath, url, {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 300
    })
    console.log(`\nQR Code generated: ${filePath}`)
  } catch (err) {
    console.error('Error generating QR code:', err)
  }
}

async function generateUrl() {
  console.log('\n=== UTM URL Generator ===\n')

  // Get workshop ID
  const workshopId = await askQuestion('Enter workshop ID (e.g., sculpture-101)')

  // Get source
  console.log('\nWhere is the traffic coming from?')
  const source = await askQuestion('Select source number', sources) as Source

  // Medium is automatically determined from source
  const medium = sourceToMedium[source]

  // Get campaign
  console.log('\nWhat campaign is this for?')
  const campaign = await askQuestion('Select campaign number', campaigns) as Campaign

  // Construct URL parameters
  const utmParams = `utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`
  const fullUrl = `https://forgn.art/workshops/${workshopId}?${utmParams}`
  
  console.log('\n=== Generated URLs ===')
  console.log(`Full URL:`)
  console.log(fullUrl)

  // Generate QR code
  const qrFilename = `${workshopId}-${source}-${campaign}`
  await generateQRCode(fullUrl, qrFilename)

  rl.close()
}

generateUrl().catch(console.error) 