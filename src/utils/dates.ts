export const getDates = (pubDate: string) => {
  return new Date(pubDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });
};
