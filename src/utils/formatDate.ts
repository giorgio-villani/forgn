export function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = date.getDate()
  const dayWithSuffix = day + (['th','st','nd','rd'][(day%10>3||(day%100>=11&&day%100<=13))?0:day%10]||'th')
  return date.toLocaleString('en-US', { month: 'long' }) + ' ' + dayWithSuffix + ', ' + date.getFullYear()
} 