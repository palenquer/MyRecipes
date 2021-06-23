import { ExclamationCircleIcon } from "@heroicons/react/solid";

export function Page404() {
  return (
    <div className="h-96 flex justify-center items-center">
      <ExclamationCircleIcon className="w-10 h-10 text-yellow-500" />
      <h1 className="ml-2 text-2xl">Page not found</h1>
    </div>
  );
}
