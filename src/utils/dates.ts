export const getDates = (pubDate: Date) => {
  return new Date(pubDate)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      weekday: "short",
    })
    .toString();
};
