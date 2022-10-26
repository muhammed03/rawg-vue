export function convertDateString(date) {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function mapGenres(genres) {
  const mappedGenres = genres
    .map((genre) => {
      return genre.name;
    })
    .join(", ");

  return mappedGenres;
}
