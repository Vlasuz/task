import { createFileRoute } from "@tanstack/react-router";
import { useTimer } from "../hooks/Timer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  // Я с RxJS мало знаком, пока не понимаю куда можно его вставить в тестовом проекте,
  // поэтому сделал просто тестовый таймер что бы RxJS присутствовал в нашем проекте.
  // В будущем я готов изучать его и применять в проектах.
  const { timer } = useTimer();

  return (
    <div>
      <h1>Main page named "Hello World!"</h1>

      <p className="text-2xl my-4 font-bold text-blue-600">{timer}</p>
    </div>
  );
}
