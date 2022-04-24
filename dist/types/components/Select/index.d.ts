import { FunctionComponent } from 'react';
interface SelectOption {
    label?: string;
    value?: string;
}
interface SelectProps {
    onOptionSelect?: (option: SelectOption, optionIndex: number) => void;
    options?: SelectOption[];
    label: string;
}
export declare const Select: FunctionComponent<SelectProps>;
export {};
