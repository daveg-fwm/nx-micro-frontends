export type SearchableDropdownItem = {
    label: string;
    value: string;
};
type SearchableDropdownProps = {
    label: string;
    items: SearchableDropdownItem[];
    selectedItem: SearchableDropdownItem;
    updateSelectedItem: (item: SearchableDropdownItem) => void;
};
export declare function SearchableDropdown({ label, items, selectedItem, updateSelectedItem, }: SearchableDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SearchableDropdown.d.ts.map