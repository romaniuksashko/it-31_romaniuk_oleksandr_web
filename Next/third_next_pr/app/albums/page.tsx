type Album = { id: number; userId: number; title: string };

export default async function AlbumsPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums?_limit=8",
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Помилка завантаження");
  }

  const albums: Album[] = await res.json();

  return (
    <ul>
      {albums.map(({ id, userId, title }) => (
        <li key={id}>
          <h3>Title: {title}</h3>
          <p>ID: {id}</p>
          <p>UserID: {userId}</p>
        </li>
      ))}
    </ul>
  );
}
