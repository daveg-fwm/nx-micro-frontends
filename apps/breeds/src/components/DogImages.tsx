import { Button, DogImage, ErrorTryAgain, Spinner } from "@shared";
import { useQuery } from "@tanstack/react-query";

import { getRandomDogBreedImages } from "~/api/dog-breeds";

type DogImagesProps = {
  selectedBreed: { label: string; value: string };
};

export function DogImages({ selectedBreed }: DogImagesProps) {
  const {
    data: images,
    isPending,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ["breeds", "randomDogBreedImages", selectedBreed.value],
    queryFn: () => getRandomDogBreedImages(selectedBreed.value),
    staleTime: Number.POSITIVE_INFINITY,
    refetchOnWindowFocus: false,
  });

  const onButtonClick = () => {
    refetch();
  };

  if (isPending || isFetching) {
    return (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <DogImage key={index} isLoading={isPending || isFetching} />
        ))}

        <div className="col-span-full mx-auto mt-8 h-10 w-10 animate-spin text-indigo-400">
          <Spinner />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="col-span-full mx-auto text-center">
          <ErrorTryAgain onClick={onButtonClick} />
        </div>

        {Array.from({ length: 3 }).map((_, index) => (
          <DogImage key={index} />
        ))}
      </>
    );
  }

  return (
    <>
      <DogImage url={images[0]} />
      <DogImage url={images[1]} />
      <DogImage url={images[2]} />

      <Button className="col-span-full mx-auto mt-8" onClick={onButtonClick}>
        {`Find more photos of ${selectedBreed.label}s`}
      </Button>
    </>
  );
}
