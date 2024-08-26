export function formatMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}min`;
}

export function formatDate(dateString: string) {
  // Split the date and time
  const [datePart, timePart] = dateString.split(" ");

  // Extract day, month, and year
  const [day, month, year] = datePart.split("/").map(Number);

  // Extract hours and minutes
  const [hours, minutes] = timePart.split(":").map(Number);

  // Create a new Date object (month is 0-indexed in JavaScript)
  const date = new Date(year, month - 1, day, hours, minutes);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  return date;
}
