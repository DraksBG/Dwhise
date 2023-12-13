import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroyRegular14Black900: "font-gilroy font-normal",
  txtGilroySemiBold16WhiteA700: "font-gilroy font-semibold",
  txtGilroySemiBold16Gray90001: "font-gilroy font-semibold",
  txtGilroySemiBold24Black90001: "font-gilroy font-semibold",
  txtGilroySemiBold28: "font-gilroy font-semibold",
  txtGilroyMedium16Gray900: "font-gilroy font-medium",
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtGilroyRegular14Bluegray900: "font-gilroy font-normal",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtGilroySemiBold14Bluegray600: "font-gilroy font-semibold",
  txtGilroySemiBold24Black900: "font-gilroy font-semibold",
  txtGilroyMedium14BlueA700: "font-gilroy font-medium",
  txtGilroyMedium18Black90001: "font-gilroy font-medium",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroySemiBold18Black900: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray900: "font-gilroy font-medium",
  txtGilroySemiBold16BlueA700: "font-gilroy font-semibold",
  txtGilroySemiBold18Gray50: "font-gilroy font-semibold",
  txtGilroyMedium18Black900: "font-gilroy font-medium",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyMedium18Green600: "font-gilroy font-medium",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroySemiBold14Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtGilroySemiBold12Green600: "font-gilroy font-semibold",
  txtGilroyMedium12WhiteA700: "font-gilroy font-medium",
  txtGilroyMedium14Black900: "font-gilroy font-medium",
  txtGilroyMedium14Black90001: "font-gilroy font-medium",
  txtGilroySemiBold12: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroyMedium20Black90002: "font-gilroy font-medium",
  txtGilroyRegular16Bluegray200: "font-gilroy font-normal",
  txtGilroySemiBold32Black900: "font-gilroy font-semibold",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtGilroySemiBold16Bluegray700: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium14Red700: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
  txtGilroySemiBold18Gray90002: "font-gilroy font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
