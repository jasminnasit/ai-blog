/**
 * Calculate approximate reading time in minutes based on word count
 */
export function getReadingTime(content: string): string {
  if (!content) return '1 min read';
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '');
  const words = clean.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
