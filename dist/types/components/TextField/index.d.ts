import { ComponentPropsWithoutRef, ElementType } from 'react';
export declare type TextFieldProps<T extends ElementType> = {
    label: string;
    variant?: 'default' | 'outlined';
    validationError?: boolean;
} & ComponentPropsWithoutRef<T>;
export declare const TextField: import("react").ForwardRefExoticComponent<{
    label: string;
    variant?: "default" | "outlined" | undefined;
    validationError?: boolean | undefined;
} & Pick<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof import("react").InputHTMLAttributes<HTMLInputElement>> & import("react").RefAttributes<HTMLInputElement>>;
