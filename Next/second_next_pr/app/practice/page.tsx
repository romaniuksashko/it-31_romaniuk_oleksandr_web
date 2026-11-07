import InteractiveList from "./InteractiveList";

// Рахується кількість та зберігаються дані

async function SchedulePage() {
  const lessons = await Promise.resolve([
    { id: 1, day: "Tuesday", subject: "Literature", room: 103 },
    { id: 2, day: "Friday", subject: "Programming", room: 201 },
    { id: 3, day: "Tuesday", subject: "Physics", room: 307 },
    { id: 4, day: "Monday", subject: "Math", room: 305 },
    { id: 5, day: "Thursday", subject: "Graphics", room: 204 },
    { id: 6, day: "Wednesday", subject: "Philosophy", room: 104 },
  ]);

  return (
    <main>
      <h1 className="text-center text-[24px] font-[600] leading-[1.25]">
        Lessons schedule
      </h1>
      <p className="text-center text-[16px] font-[400] leading-[1.25] pt-[5px]">
        Count All: {lessons.length}
      </p>
      <InteractiveList lessons={lessons} />
    </main>
  );
}

export default SchedulePage