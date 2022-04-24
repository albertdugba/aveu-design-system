/// <reference types="react" />
export declare const StyledInputContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, {
    label: string;
    variant?: "default" | "outlined" | undefined;
    validationError?: boolean | undefined;
} & Pick<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof import("react").InputHTMLAttributes<HTMLInputElement>>, never>;
export declare const StyledLabel: import("styled-components").StyledComponent<"label", any, {
    label: string;
    variant?: "default" | "outlined" | undefined;
    validationError?: boolean | undefined;
} & Pick<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "key" | keyof import("react").LabelHTMLAttributes<HTMLLabelElement>>, never>;
