import * as React from 'react';
import { CSSProperties } from 'styled-components';
export declare type ButtonProps<T extends React.ElementType> = {
    children: React.ReactNode;
    label?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    startIcon?: React.ReactElement | string;
    endIcon?: React.ReactElement | string;
    disabled?: boolean;
    styleConfig?: CSSProperties;
    renderAs?: T | 'div';
} & React.ComponentPropsWithoutRef<T>;
export declare const Button: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    label?: string | undefined;
    variant?: "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    fullWidth?: boolean | undefined;
    startIcon?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    endIcon?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    disabled?: boolean | undefined;
    styleConfig?: CSSProperties | undefined;
    renderAs?: "button" | "div" | undefined;
} & Pick<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof React.ButtonHTMLAttributes<HTMLButtonElement>> & React.RefAttributes<HTMLButtonElement>>;
