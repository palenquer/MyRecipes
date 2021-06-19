import portionsImg from "../assets/portions.svg";
import timerImg from "../assets/timer.svg";

interface RecipeBoxProps {
  title: string;
  time: number;
  portions: number;
}

export function RecipeBox({ title, time, portions }: RecipeBoxProps) {
  return (
    <div className="flex items-center justify-between bg-gray-200 rounded py-2 px-4 h-20 max-h-20">
      <h1 className="text-lg">{title}</h1>

      <div className="flex flex-col justify-between h-full items-center text-sm">
        <div className="flex gap-2">
          <img src={timerImg} alt="Timer" />
          <h2>{time}h</h2>
        </div>

        <div className="flex gap-2">
          <img src={portionsImg} alt="Portions" />
          <h2>{portions}</h2>
        </div>
      </div>
    </div>
  );
}
