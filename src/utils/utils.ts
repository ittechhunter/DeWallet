export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${day} ${month} ${hours}:${minutes}`;
  return formattedDate;
}
