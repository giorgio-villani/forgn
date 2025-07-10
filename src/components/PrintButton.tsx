'use client'

import { useState } from 'react'

interface PrintButtonProps {
  title: string
  content: string
  date: string
  location?: string
}

export default function PrintButton({ title, content, date, location }: PrintButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    setIsGenerating(true)
    
    try {
      // Create a new window for printing
      const printWindow = window.open('', '_blank')
      if (!printWindow) {
        alert('Please allow pop-ups to generate PDF')
        return
      }

      // Format the date
      const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        const day = date.getDate()
        const dayWithSuffix = day + (['th','st','nd','rd'][(day%10>3||(day%100>=11&&day%100<=13))?0:day%10]||'th')
        return date.toLocaleString('en-US', { month: 'long' }) + ' ' + dayWithSuffix + ', ' + date.getFullYear()
      }

      const formattedDate = formatDate(date)
      const dateLocation = `${formattedDate}${location ? ', ' + location : ''}`

      // Convert markdown to HTML while preserving formatting
      const markdownToHtml = (markdown: string) => {
        return markdown
          // Convert headers
          .replace(/^### (.*$)/gim, '<h3>$1</h3>')
          .replace(/^## (.*$)/gim, '<h2>$1</h2>')
          .replace(/^# (.*$)/gim, '<h1>$1</h1>')
          // Convert bold
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          // Convert italic
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          // Convert links (keep as plain text for PDF)
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '<span style="color: #dc2626; text-decoration: underline;">$1</span>')
          // Convert line breaks
          .replace(/\n\n/g, '</p><p>')
          .replace(/\n/g, '<br>')
      }

      const htmlContent = markdownToHtml(content)

      // Create the HTML content for printing
      const fullHtmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>${title} - Forgn Studio</title>
          <style>
            @media print {
              body { 
                font-family: Arial, sans-serif; 
                line-height: 1.6; 
                color: #333; 
                max-width: 800px; 
                margin: 0 auto; 
                padding: 20px;
              }
              h1 { 
                font-size: 28px; 
                font-weight: bold; 
                margin-bottom: 10px; 
                color: #000;
              }
              h2 { 
                font-size: 20px; 
                font-weight: bold; 
                margin-top: 30px; 
                margin-bottom: 15px; 
                color: #000;
              }
              h3 { 
                font-size: 18px; 
                font-weight: bold; 
                margin-top: 25px; 
                margin-bottom: 10px; 
                color: #000;
              }
              p { 
                margin-bottom: 15px; 
                text-align: justify;
              }
              .date-location { 
                font-style: italic; 
                color: #666; 
                margin-bottom: 30px;
              }
              .contact-info { 
                margin-top: 40px; 
                padding-top: 20px; 
                border-top: 1px solid #ccc; 
                font-size: 14px; 
                color: #666;
              }
              .letterhead { 
                text-align: center; 
                margin-bottom: 40px; 
                padding-bottom: 20px; 
                border-bottom: 2px solid #dc2626;
              }
              .logo { 
                margin-bottom: 10px;
              }
              .logo img { 
                max-width: 200px; 
                height: auto;
              }
              .tagline { 
                font-size: 14px; 
                color: #666; 
                font-style: italic;
              }
              .press-release-title { 
                font-size: 24px; 
                font-weight: bold; 
                margin-bottom: 10px; 
                color: #000;
              }
            }
          </style>
        </head>
        <body>
          <div class="letterhead">
            <div class="logo">
              <img src="https://forgn.art/forgn_v2.png" alt="FORGN Studio Logo" />
            </div>
            <div class="tagline">Art & Technology Studio</div>
          </div>
          <div class="press-release-title">${title}</div>
          <div class="date-location">${dateLocation}</div>
          <p>${htmlContent}</p>
          <div class="contact-info">
            <strong>Media Contact:</strong><br>
            Forgn Studio<br>
            Giorgio Villani, Founder<br>
            Email: forgnstudio@gmail.com<br>
            Website: forgn.art
          </div>
        </body>
        </html>
      `

      printWindow.document.write(fullHtmlContent)
      printWindow.document.close()
      
      // Wait for content to load then print
      printWindow.onload = () => {
        printWindow.print()
        printWindow.close()
      }
      
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className="inline-flex items-center px-3 sm:px-4 py-2 bg-customButton text-white rounded-lg hover:bg-red-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
    >
      {isGenerating ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Generating PDF...
        </>
      ) : (
        <>
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Print PDF
        </>
      )}
    </button>
  )
} 