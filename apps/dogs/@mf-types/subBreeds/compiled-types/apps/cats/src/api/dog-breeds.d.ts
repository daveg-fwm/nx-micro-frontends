type GetDogBreedListResponse = {
    label: string;
    value: string;
}[];
type GetRandomDogBreedImagesResponse = string[];
export declare function getDogBreedList(): Promise<GetDogBreedListResponse>;
export declare function getRandomDogBreedImages(breed: string): Promise<GetRandomDogBreedImagesResponse>;
export {};
//# sourceMappingURL=dog-breeds.d.ts.map