/// <reference types="react" />
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, {
    children: import("react").ReactNode;
    label?: string | undefined;
    variant?: "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    fullWidth?: boolean | undefined;
    startIcon?: string | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    endIcon?: string | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    disabled?: boolean | undefined;
    styleConfig?: import("styled-components").CSSProperties | undefined;
    renderAs?: "button" | "div" | undefined;
} & Pick<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof import("react").ButtonHTMLAttributes<HTMLButtonElement>>, never>;
