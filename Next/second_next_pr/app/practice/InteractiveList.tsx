"use client";
import { useState } from "react";

type Lesson = { id: number, day: string, subject: string, room: number }

// Взаємодія з користувачем: фільтрація, показати/сховати аудиторії, показ уроків за днем тижня

function InteractiveList({lessons}: {lessons: Lesson[]}) {
  const [weekDay, setWeekDay] = useState("")
  const [showRoom, setShowRoom] = useState(true)

  const filteredSchedule = lessons.filter((item) => item.day.includes(weekDay))

  return (
    <>
      <div className="pt-[10px] pb-[10px] flex justify-center gap-[5px]">
        <select
          onChange={(event) => setWeekDay(event.target.value)}
          className="p-[5px] border-[2px] border-solid rounded-[10px]"
        >
          <option value="">All</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
        <button
          type="button"
          onClick={() => setShowRoom(!showRoom)}
          className="pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-blue-500 rounded-[10px] text-white"
        >
          {showRoom ? "Hide rooms" : "Show rooms"}
        </button>
      </div>
      <ul className="flex flex-col gap-[10px] items-center">
        {filteredSchedule ? (
          filteredSchedule.map(({ id, day, subject, room }) => (
            <li key={id}>
              <h2 className="text-center text-[16px] font-[600] leading-[1.25]">
                {subject}
              </h2>
              <p className="text-center text-[14px] font-[400] leading-[1.25]">
                {day}
              </p>
              {showRoom && (
                <p className="text-center text-[14px] font-[400] leading-[1.25]">
                  Room: {room}
                </p>
              )}
            </li>
          ))
        ) : (
          <p>Нічого не знайдено</p>
        )}
      </ul>
    </>
  );
}

export default InteractiveList;