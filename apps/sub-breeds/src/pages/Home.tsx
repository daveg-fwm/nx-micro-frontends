import { useState } from "react";

import { DogImage, ErrorTryAgain, HomeLoadingSkeleton, SearchableDropdown } from "@shared";
import type { SearchableDropdownItem } from "@shared";
import { useQuery } from "@tanstack/react-query";

import { getDogBreedList } from "~/api/dog-breeds";
import { DogImages } from "~/components/DogImages";

export function Home() {
  const [selectedBreed, setSelectedBreed] = useState({ label: "", value: "" });

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["subBreeds", "dogBreedList"],
    queryFn: getDogBreedList,
  });

  const onButtonClick = () => {
    refetch();
  };

  const updateSelectedItem = (item: SearchableDropdownItem) => {
    setSelectedBreed(item);
  };

  if (isPending) {
    return <HomeLoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center">
        <ErrorTryAgain onClick={onButtonClick} />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <DogImage key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section>
      <SearchableDropdown
        label="Choose your favourite sub-breed"
        items={data}
        selectedItem={selectedBreed}
        updateSelectedItem={updateSelectedItem}
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {selectedBreed.value ? (
          <DogImages selectedBreed={selectedBreed} />
        ) : (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <DogImage key={index} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
