import { ClockIcon } from "@heroicons/react/outline";
import { UserGroupIcon } from "@heroicons/react/outline";

interface RecipeBoxProps {
  title: string;
  time: number;
  portions: number;
}

export function RecipeBox({ title, time, portions }: RecipeBoxProps) {
  return (
    <div className="flex items-center justify-between bg-gray-200 rounded py-2 px-4 h-20 max-h-20 cursor-pointer transition duration-300 hover:bg-yellow-500 group hover:text-white">
      <h1 className="text-lg">{title}</h1>

      <div className="flex flex-col justify-between h-full items-center text-sm">
        <div className="flex gap-1 items-center w-full justify-between">
          <ClockIcon className="h-6 w-6 text-gray-600 group-hover:text-white" />
          <h2>{time}h</h2>
        </div>

        <div className="flex gap-1 items-center w-full">
          <UserGroupIcon className="h-6 w-6 text-gray-600 group-hover:text-white" />
          <h2>{portions}</h2>
        </div>
      </div>
    </div>
  );
}
