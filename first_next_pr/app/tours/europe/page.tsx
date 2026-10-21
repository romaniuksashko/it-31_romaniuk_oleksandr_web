export default function Tour() {
  return (
    <section>
      <p className="text-center mt-[5px] mb-[5px]">
        Європа - це один із центрів цивілізації. Тут з'явилася демократія та
        промисловість
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
      </ul>
    </section>
  );  
}