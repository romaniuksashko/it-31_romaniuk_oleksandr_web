import type { Metadata } from "next";
import "./globals.css"
import logo from "./images/logo.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Туристичний портал",
  description: "Сайт про подорожі",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-100 p-[15px]">
          <nav className="flex gap-[5px] justify-start items-center">
            <a href="/">
              <Image
                src={logo}
                alt="logo"
                loading="lazy"
                className="w-[40px] "
              />
            </a>
            <ul className="flex gap-[10px] justify-center items-center ml-[15px]">
              <li>
                <a href="/" className="hover:text-orange-500 font-bold">
                  Головна
                </a>
              </li>
              <li>
                <a href="/tours" className="hover:text-orange-500 font-bold">
                  Напрямки
                </a>
              </li>
              <li>
                <a href="/contacts" className="hover:text-orange-500 font-bold">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="p-[15px]">{children}</main>
        <footer className="bg-gray-100 p-[15px] flex justify-center">
          <p>Усі права захищено 2026</p>
        </footer>
      </body>
    </html>
  );
}
