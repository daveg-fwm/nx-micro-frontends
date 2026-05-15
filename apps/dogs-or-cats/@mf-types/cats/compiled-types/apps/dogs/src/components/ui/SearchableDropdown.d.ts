export type Item = {
    label: string;
    value: string;
};
type SearchableDropdownProps = {
    label: string;
    items: Item[];
    selectedItem: Item;
    updateSelectedItem: (item: Item) => void;
};
export declare function SearchableDropdown({ label, items, selectedItem, updateSelectedItem, }: SearchableDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SearchableDropdown.d.ts.map