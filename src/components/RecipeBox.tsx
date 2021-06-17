import groupImg from "../assets/group.svg";
import timerImg from "../assets/timer.svg";

interface RecipeBoxProps {
  title: string;
  timer: string;
  group: string;
}

export function RecipeBox({ title, timer, group }: RecipeBoxProps) {
  return (
    <div className="flex items-center justify-between bg-gray-200 rounded py-2 px-4 h-20 max-h-20">
      <h1 className="text-lg">{title}</h1>

      <div className="flex flex-col justify-between h-full items-center text-sm">
        <div className="flex gap-2">
          <img src={timerImg} alt="Timer" />
          <h2>{timer}h</h2>
        </div>

        <div className="flex gap-2">
          <img src={groupImg} alt="Group" />
          <h2>{group}</h2>
        </div>
      </div>
    </div>
  );
}
