"use client"

export default function Error({
reset,
}: {
reset: () => void;
}) {
  return (<div>
    <p>Виникла помилка. Спробуйте перезавантажити сторінку</p>
    <button onClick={() => reset()}>Перезавантажити</button>  
  </div>

  )
}
// 