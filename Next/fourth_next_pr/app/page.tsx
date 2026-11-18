import RequestForm from "./components/RequestForm";
import "./globals.css"

export default function Home() {
  return (
    <main className="p-[5px]">
      <h1>Форма запиту книги</h1>
      <RequestForm />
    </main>
  );
}
