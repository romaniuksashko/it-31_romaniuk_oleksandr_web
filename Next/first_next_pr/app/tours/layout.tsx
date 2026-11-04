import Link from "next/link"

export default function TourLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="bg-gray-300 p-[5px]">
        <ul className="flex gap-[10px] justify-center">
          <li>
            <Link href="/tours" className="hover:text-orange-400 font-semibold">
              Всі
            </Link>
          </li>
          <li>
            <Link
              href="/tours/europe"
              className="hover:text-orange-400 font-semibold"
            >
              Європа
            </Link>
          </li>
          <li>
            <Link
              href="/tours/ukraine"
              className="hover:text-orange-400 font-semibold"
            >
              Україна
            </Link>
          </li>
        </ul>
      </div>
      <section>{children}</section>
    </>
  );  
}