export default function Tour() {
  return (
    <section>
      <p className="text-center mt-[5px] mb-[5px]">
        Вітаємо на сторінці турів. Оберіть зверху напрямок вашої подорожі. Або
        переглядайте всі
      </p>
      <ul className="flex justify-around gap-[30px] flex-wrap">
        <li className="w-[250px] flex flex-col items-center bg-orange-600 text-white p-[10px] rounded-[10px] gap-[5px]">
          <h3 className="font-bold text-[16px] text-center">Лондон</h3>
          <p className="text-center">Велике місто та один із бізнес-центрів</p>
          <button className="bg-gray-500 pt-[5px] pb-[5px] pl-[15px] pr-[15px] rounded-[5px]">
            Обрати
          </button>
        </li>
        <li className="w-[250px] flex flex-col items-center bg-orange-600 text-white p-[10px] rounded-[10px] gap-[5px]">
          <h3 className="font-bold text-[16px] text-center">Рим</h3>
          <p className="text-center">Колиска Римської Республіки та Імперії</p>
          <button className="bg-gray-500 pt-[5px] pb-[5px] pl-[15px] pr-[15px] rounded-[5px]">
            Обрати
          </button>
        </li>
        <li className="w-[250px] flex flex-col items-center bg-orange-600 text-white p-[10px] rounded-[10px] gap-[5px]">
          <h3 className="font-bold text-[16px] text-center">
            Будапешт, Братислава, Відень
          </h3>
          <p className="text-center">
            Міста на Дунаї, які були важливими в Австро-Угорщині
          </p>
          <button className="bg-gray-500 pt-[5px] pb-[5px] pl-[15px] pr-[15px] rounded-[5px]">
            Обрати
          </button>
        </li>
        <li className="w-[250px] flex flex-col items-center bg-orange-600 text-white p-[10px] rounded-[10px] gap-[5px]">
          <h3 className="font-bold text-[16px] text-center">
            Святогірська Лавра
          </h3>
          <p className="text-center">
            Прекрасна Лавра на схилі гори біля річки Сіверський Донець (Через
            безпекову ситуацію тур недоступний)
          </p>
          <button
            disabled
            className="bg-gray-500 pt-[5px] pb-[5px] pl-[15px] pr-[15px] rounded-[5px]"
          >
            Обрати
          </button>
        </li>
        <li className="w-[250px] flex flex-col items-center bg-orange-600 text-white p-[10px] rounded-[10px] gap-[5px]">
          <h3 className="font-bold text-[16px] text-center">Трускавець</h3>
          <p className="text-center">
            Популярне санаторне місто, яке неодмінно багатьом сподобається
          </p>
          <button className="bg-gray-500 pt-[5px] pb-[5px] pl-[15px] pr-[15px] rounded-[5px]">
            Обрати
          </button>
        </li>
        <li className="w-[250px] flex flex-col items-center bg-orange-600 text-white p-[10px] rounded-[10px] gap-[5px]">
          <h3 className="font-bold text-[16px]" text-center>
            Карпати
          </h3>
          <p className="text-center">
            Невисокі зелені гори з озерами та лісами
          </p>
          <button className="bg-gray-500 pt-[5px] pb-[5px] pl-[15px] pr-[15px] rounded-[5px]">
            Обрати
          </button>
        </li>
        <li className="w-[250px] flex flex-col items-center bg-orange-600 text-white p-[10px] rounded-[10px] gap-[5px]">
          <h3 className="font-bold text-[16px] text-center">
            Київські монастирі та церкви
          </h3>
          <p className="text-center">
            Київ є давнім містом та місцем для багатьох монастирів та церков
          </p>
          <button className="bg-gray-500 pt-[5px] pb-[5px] pl-[15px] pr-[15px] rounded-[5px]">
            Обрати
          </button>
        </li>
        <li className="w-[250px] flex flex-col items-center bg-orange-600 text-white p-[10px] rounded-[10px] gap-[5px]">
          <h3 className="font-bold text-[16px] text-center">Львів</h3>
          <p className="text-center">
            Прекрасне місто з європейськими рисами, центр якого оберігається
            ЮНЕСКО
          </p>
          <button className="bg-gray-500 pt-[5px] pb-[5px] pl-[15px] pr-[15px] rounded-[5px]">
            Обрати
          </button>
        </li>
      </ul>
    </section>
  );  
}