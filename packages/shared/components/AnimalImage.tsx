import Spinner from "../images/spinner.svg?react";

type AnimalImageprops = {
  url?: string;
  isLoading?: boolean;
  Illustration: React.JSX.ElementType;
};

export function AnimalImage({ url, isLoading, Illustration }: AnimalImageprops) {
  return (
    <div className="relative mx-auto h-[400px] w-full overflow-hidden rounded-xl border-2 border-dashed border-indigo-400 text-indigo-400">
      {!url && !isLoading ? (
        <div className="m-auto flex h-full w-1/2 flex-col justify-center">
          <Illustration />
        </div>
      ) : null}

      {!url && isLoading ? (
        <div className="absolute inset-0 m-auto h-10 w-10 animate-spin">
          <Spinner />
        </div>
      ) : null}

      {url && <img className="h-full w-full object-cover" src={url} />}
    </div>
  );
}
