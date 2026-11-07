"use client"

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <p>Виникла помилка. Будь ласка, перезавантажте сторінку</p>
      <button onClick={() => reset()}>Перезавантажити сторінку</button>
    </div>
  );
}