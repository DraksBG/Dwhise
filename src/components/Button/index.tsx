import React from "react";

const shapes = { round: "rounded" } as const;
const variants = {
  fill: {
    light_blue_100: "bg-light_blue-100 text-black-900",
    red_200: "bg-red-200 text-black-900",
    green_A100: "bg-green-A100 text-black-900",
    white_A700: "bg-white-A700 text-black-900_01",
    gray_100: "bg-gray-100 text-red-700",
    deep_orange_50: "bg-deep_orange-50 text-deep_orange-400",
    orange_A700: "bg-orange-A700 text-gray-50_05",
    gray_50: "bg-gray-50 text-blue-A700",
    gray_100_02: "bg-gray-100_02 text-green-600",
    gray_50_06: "bg-gray-50_06 text-amber-500",
    red_700: "bg-red-700 text-gray-100_01",
    blue_A700: "bg-blue-A700 text-white-A700",
  },
  outline: { blue_A700: "border border-blue-A700 border-solid text-blue-A700" },
} as const;
const sizes = {
  xs: "p-1",
  sm: "p-2",
  md: "pr-2.5 py-2.5",
  lg: "pl-[11px] py-[11px]",
  xl: "pr-[13px] py-[13px]",
  "2xl": "p-3.5",
  "3xl": "p-[18px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "sm",
  variant = "fill",
  color = "blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
