import React from "react";

import { Button, Img, Text } from "components";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto pt-[35px] sm:px-5 px-[35px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group10392_22.svg"
                alt="Group10392"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
              <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Products
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Resouces
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown One"
                />
              </div>
              <Text
                className="sm:mt-0 mt-1 text-base text-gray-900"
                size="txtGilroyMedium16Gray900"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900">
                <Text size="txtGilroyMedium16Gray900">Sign in</Text>
              </a>
              <Button
                className="cursor-pointer font-medium min-w-[148px] rounded-md text-base text-center"
                size="2xl"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-10 items-center justify-end max-w-[1268px] mx-auto pt-[9px] md:px-5 w-full">
          <div className="flex flex-col gap-[27px] items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 underline"
              size="txtGilroySemiBold32Black900"
            >
              Terms and Conditions
            </Text>
            <Text
              className="leading-[29.00px] text-black-900 text-lg"
              size="txtGilroyRegular18"
            >
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
                molestie ullamcorper at tempor. Gravida id tempus nunc, ac
                tempus. Sapien porttitor sem etiam ipsum sed turpis hac in
                sagittis. Erat cras morbi adipiscing fringilla dolor nunc
                aliquam consequat dolor. Condimentum morbi et morbi eleifend
                viverra consequat consectetur lorem. Aliquet elit tortor eu
                sollicitudin eu nulla commodo phasellus. Mauris nunc mi aliquet
                pellentesque.
                <br />
                Arcu justo orci dolor in. Ac porttitor mi quis quam id varius.
                Amet vestibulum rhoncus massa bibendum nisl. Facilisis egestas
                quam non posuere proin tellus dolor. Commodo diam imperdiet
                lorem maecenas enim sit. Ullamcorper varius turpis pellentesque
                adipiscing turpis. Ipsum cursus sagittis nunc, enim. Vulputate
                etiam senectus nulla sociis quam et. Semper integer diam nulla
                et bibendum fringilla.
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl underline"
              size="txtGilroySemiBold24Black900"
            >
              Lorem ipsum
            </Text>
            <Text
              className="leading-[29.00px] text-black-900 text-lg w-full"
              size="txtGilroyRegular18"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
              molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
              Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
              cras morbi adipiscing fringilla dolor nunc aliquam consequat
              dolor. Condimentum morbi et morbi eleifend viverra consequat
              consectetur lorem. Aliquet elit tortor eu sollicitudin eu nulla
              commodo phasellus
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl underline"
              size="txtGilroySemiBold24Black900"
            >
              Lorem ipsum
            </Text>
            <Text
              className="leading-[29.00px] text-black-900 text-lg w-full"
              size="txtGilroyRegular18"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
              molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
              Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
              cras morbi adipiscing fringilla dolor nunc aliquam consequat
              dolor. Condimentum morbi et morbi eleifend viverra consequat
              consectetur lorem. Aliquet elit tortor eu sollicitudin eu nulla
              commodo phasellus
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl underline"
              size="txtGilroySemiBold24Black900"
            >
              Lorem ipsum
            </Text>
            <Text
              className="leading-[29.00px] text-black-900 text-lg w-full"
              size="txtGilroyRegular18"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
              molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
              Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
              cras morbi adipiscing fringilla dolor nunc aliquam consequat
              dolor. Condimentum morbi et morbi eleifend viverra consequat
              consectetur lorem. Aliquet elit tortor eu sollicitudin eu nulla
              commodo phasellus
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl underline"
              size="txtGilroySemiBold24Black900"
            >
              Lorem ipsum
            </Text>
            <Text
              className="leading-[29.00px] text-black-900 text-lg w-full"
              size="txtGilroyRegular18"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
              molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
              Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
              cras morbi adipiscing fringilla dolor nunc aliquam consequat
              dolor. Condimentum morbi et morbi eleifend viverra consequat
              consectetur lorem. Aliquet elit tortor eu sollicitudin eu nulla
              commodo phasellus
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
