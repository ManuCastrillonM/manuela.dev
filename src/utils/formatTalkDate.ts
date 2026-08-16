/** Formats a YYYY-MM-DD date string as "Jul 15, 2023", parsed as local time to avoid UTC day-shift. */
export function formatTalkDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
