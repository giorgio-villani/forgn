/**
 * Calculate the discounted end date based on the first session date
 * @param sessions - Array of session dates (YYYY-MM-DD format)
 * @param daysBefore - Number of days before the first session to end the discount
 * @returns Date string in YYYY-MM-DD format, or undefined if no sessions
 */
export function calculateDiscountedEndDate(sessions: string[] | undefined, daysBefore: number): string | undefined {
  if (!sessions || sessions.length === 0) {
    return undefined;
  }

  // Get the first session date
  const firstSessionDate = new Date(sessions[0] + 'T00:00:00');
  
  // Calculate the discounted end date
  const discountedEndDate = new Date(firstSessionDate);
  discountedEndDate.setDate(discountedEndDate.getDate() - daysBefore);
  
  // Format as YYYY-MM-DD
  return discountedEndDate.toISOString().split('T')[0];
}

/**
 * Check if Early Bird discount is active
 * @param endDate - Discount end date in YYYY-MM-DD format
 * @returns boolean indicating if discount is still active
 */
export function isEarlyBirdActive(endDate?: string): boolean {
  if (!endDate) return false;
  const now = new Date();
  const end = new Date(endDate + 'T23:59:59');
  return end.getTime() > now.getTime();
}

/**
 * Get countdown text for Early Bird discount
 * @param endDate - Discount end date in YYYY-MM-DD format
 * @returns countdown text or 'ended' if expired
 */
export function getEarlyBirdCountdown(endDate?: string): string {
  if (!endDate) return 'ended';
  
  const now = new Date();
  const end = new Date(endDate + 'T23:59:59');
  const diff = end.getTime() - now.getTime();
  
  if (diff <= 0) return 'ended';
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days > 0) return `${days} day${days === 1 ? '' : 's'} left`;
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} left`;
  
  return 'ending soon';
}
