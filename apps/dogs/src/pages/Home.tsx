import { Link } from "react-router";

import { DogIllustration } from "@shared";

export function Home() {
  return (
    <>
      <p className="text-center text-2xl text-indigo-500 mb-4">Choose a collection:</p>
      <div className="grid gap-4 lg:grid-cols-2">
        <Link
          to="/breeds"
          className="relative mx-auto h-[400px] w-full overflow-hidden rounded-xl border-2 border-dashed border-indigo-400 text-indigo-400 flex hover:text-indigo-500"
        >
          <div className="flex m-auto flex-col h-1/2 w-1/4 justify-center">
            <DogIllustration />
            <p className="text-xl font-bold underline mt-4 text-center ">BREEDS</p>
          </div>
        </Link>

        <Link
          to="/sub-breeds"
          className="relative mx-auto h-[400px] w-full overflow-hidden rounded-xl border-2 border-dashed border-indigo-400 text-indigo-400 flex hover:text-indigo-500"
        >
          <div className="flex m-auto flex-col h-1/2 w-1/4 justify-center">
            <DogIllustration />
            <p className="text-xl font-bold underline mt-4 text-center ">SUB-BREEDS</p>
          </div>
        </Link>
      </div>
    </>
  );
}
