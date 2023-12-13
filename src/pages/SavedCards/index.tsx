import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const SavedCardsPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[51px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_9.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
                    src="images/img_search_black_900.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#bac1ce"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setInputfieldvalue("")}
                    style={{
                      visibility:
                        inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                shape="round"
                size="sm"
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-[9px] text-base text-gray-900"
                    size="txtGilroyMedium16Gray900"
                  >
                    Orders
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900"
                    size="txtGilroyMedium16Gray900"
                  >
                    More
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1268px] mx-auto md:px-5 rounded-lg w-full">
          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg shadow-bs1 w-[68%] md:w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start mb-4 w-[97%] md:w-full">
              <Input
                name="Frame9983"
                placeholder="Saved Cards"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_01 sm:pr-5 sm:text-xl text-2xl text-left w-full"
                wrapClassName="pr-[35px] w-full"
                color="blue_gray_100"
                size="sm"
                variant="underline"
              ></Input>
              <div className="flex flex-col gap-6 items-center justify-start rounded w-full">
                <List
                  className="flex flex-col gap-6 items-center rounded w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-col items-center justify-start my-0 p-4 rounded w-full">
                    <div className="flex md:flex-col flex-row gap-2 items-center justify-start my-[7px] w-full">
                      <Img
                        className="h-9 w-9"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <div className="flex md:flex-1 md:flex-col flex-row gap-2 items-start justify-between w-[95%] md:w-full">
                        <Img
                          className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                          src="images/img_ellipse3.png"
                          alt="EllipseThree"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-[3px] pb-[5px]">
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtGilroyMedium20"
                          >
                            HDFC Debit Card
                          </Text>
                          <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtGilroyMedium16Bluegray400"
                            >
                              XXXX XXXX XXXX XX48
                            </Text>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtGilroyMedium16Bluegray400"
                            >
                              Exp : 03/22
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-col items-center justify-start my-0 p-4 rounded w-full">
                    <div className="flex md:flex-col flex-row gap-2 items-center justify-start my-[7px] w-full">
                      <Img
                        className="h-9 w-9"
                        src="images/img_search.svg"
                        alt="search One"
                      />
                      <div className="flex md:flex-1 md:flex-col flex-row gap-2 items-start justify-between w-[95%] md:w-full">
                        <Img
                          className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                          src="images/img_ellipse3_60X60.png"
                          alt="EllipseThree One"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-[3px] pb-[5px]">
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtGilroyMedium20"
                          >
                            SBI Credit Card
                          </Text>
                          <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtGilroyMedium16Bluegray400"
                            >
                              XXXX XXXX XXXX XX48
                            </Text>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtGilroyMedium16Bluegray400"
                            >
                              Exp : 03/22
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-4 rounded w-full">
                  <div className="flex flex-col gap-[30px] justify-start my-2 w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-[49%] md:w-full">
                      <Img
                        className="h-9 w-9"
                        src="images/img_radiobutton.svg"
                        alt="RadioButton"
                      />
                      <Text
                        className="text-black-900_02 text-xl"
                        size="txtGilroyMedium20Black90002"
                      >
                        Add New Credit/Debit/ATM Card
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start md:ml-[0] ml-[60px] w-[67%] md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-[500px] sm:w-full">
                        <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <Text
                            className="text-black-900_02 text-lg"
                            size="txtGilroyMedium18"
                          >
                            Name On Card
                          </Text>
                        </div>
                        <Input
                          name="InputField One"
                          placeholder="Enter Your First Name"
                          className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-medium md:h-auto p-0 sm:h-auto text-left text-lg w-full"
                          wrapClassName="border border-blue_gray-100 border-solid rounded w-full"
                          type="text"
                          shape="round"
                          size="sm"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <Text
                            className="text-black-900_02 text-lg"
                            size="txtGilroyMedium18"
                          >
                            Card Number
                          </Text>
                        </div>
                        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-3 rounded w-full">
                          <div className="flex flex-col items-start justify-end pr-1 py-1">
                            <Text
                              className="text-blue_gray-400 text-lg"
                              size="txtGilroyMedium18Bluegray400"
                            >
                              XXXX XXXX XXXX XX34
                            </Text>
                          </div>
                          <Img
                            className="sm:flex-1 h-[17px] md:h-auto object-cover w-[12%] sm:w-full"
                            src="images/img_rupaylogo1.png"
                            alt="RupayLogoOne"
                          />
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-[242px]">
                          <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                            <Text
                              className="text-black-900_02 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Expiry Date
                            </Text>
                          </div>
                          <Input
                            name="InputField Two"
                            placeholder="00/0000"
                            className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-medium md:h-auto p-0 sm:h-auto text-left text-lg w-full"
                            wrapClassName="border border-blue_gray-100 border-solid rounded w-full"
                            shape="round"
                            size="sm"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-[242px]">
                          <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                            <Text
                              className="text-black-900_02 text-lg"
                              size="txtGilroyMedium18"
                            >
                              CVV
                            </Text>
                          </div>
                          <Input
                            name="price Three"
                            placeholder="XXX"
                            className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-medium md:h-auto p-0 sm:h-auto text-left text-lg w-full"
                            wrapClassName="border border-blue_gray-100 border-solid rounded w-full"
                            shape="round"
                            size="sm"
                          ></Input>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium text-base text-center w-[500px]"
                        size="3xl"
                      >
                        Pay $1120.58
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-8 items-center justify-start mb-[500px] p-4 rounded-lg shadow-bs1 w-[31%] md:w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[92%] md:w-full">
              <Input
                name="Group883"
                placeholder="Price Details"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_01 sm:pr-5 sm:text-xl text-2xl text-left w-full"
                wrapClassName="pr-[35px] w-full"
                color="blue_gray_100"
                size="sm"
                variant="underline"
              ></Input>
              <div className="flex flex-col gap-7 items-center justify-start pt-[5px] w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18Bluegray400"
                  >
                    Price(2 iteam)
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtGilroyMedium18Black90001"
                  >
                    $1110.58
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18Bluegray400"
                  >
                    Discount
                  </Text>
                  <Text
                    className="text-green-600 text-lg"
                    size="txtGilroyMedium18Green600"
                  >
                    -$111.98
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18Bluegray400"
                  >
                    Delivery Charges
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtGilroyMedium18Black90001"
                  >
                    $10
                  </Text>
                </div>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
              <div className="flex flex-row gap-[68px] items-center justify-start w-[94%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  Total Amount
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  $1120.58
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold text-base text-center w-[326px]"
              size="3xl"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedCardsPage;
