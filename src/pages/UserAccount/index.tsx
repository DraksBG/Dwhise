import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, Slider, Text } from "components";

const UserAccountPage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50_02 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[31px] items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray-50 flex flex-col gap-8 h-[1080px] md:h-auto items-center justify-start p-6 sm:px-5 w-[300px]">
            <Img
              className="h-[35px] w-[65%]"
              src="images/img_group_10.svg"
              alt="Group"
            />
            <div className="flex flex-col gap-8 h-[951px] md:h-auto items-start justify-between w-auto">
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <div className="flex flex-row gap-2 items-center justify-start py-4 rounded-lg w-[252px]">
                  <Line className="bg-blue-A700 h-6 w-0.5" />
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_minimize.svg"
                      alt="minimize"
                    />
                    <Text
                      className="text-base text-blue-A700 w-auto"
                      size="txtGilroySemiBold16BlueA700"
                    >
                      Dashboard
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_dollaraltsoli.svg"
                      alt="dollaraltSoli"
                    />
                    <Text
                      className="text-base text-blue_gray-700_01 w-auto"
                      size="txtGilroySemiBold16"
                    >
                      Payments
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_walletoutline.svg"
                      alt="walletOutline"
                    />
                    <Text
                      className="text-base text-blue_gray-700_01 w-auto"
                      size="txtGilroySemiBold16"
                    >
                      Wallet & Cards
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-base text-blue_gray-700_01 w-auto"
                      size="txtGilroySemiBold16"
                    >
                      Transactions
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_checkmark_24X24.svg"
                      alt="checkmark"
                    />
                    <Text
                      className="text-base text-blue_gray-700_01 w-auto"
                      size="txtGilroySemiBold16"
                    >
                      Analytics
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                    <Text
                      className="text-base text-blue_gray-700_01 w-auto"
                      size="txtGilroySemiBold16"
                    >
                      Messages
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-base text-blue_gray-700_01 w-auto"
                      size="txtGilroySemiBold16"
                    >
                      Settings
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-opensans items-center justify-start px-2 py-4 w-[252px]">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_question.svg"
                    alt="question"
                  />
                  <Text
                    className="text-base text-blue_gray-700_01 w-auto"
                    size="txtOpenSansRomanSemiBold16"
                  >
                    Help
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="flex-1 sm:h-[1077px] h-[1080px] md:h-[3417px] md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-8 inset-x-[0] items-end justify-start mx-auto top-[3%] w-[98%]">
            <div className="overflow-x-auto w-full">
              <Slider
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 2 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[1.00]"
                ref={sliderRef}
                className="w-full"
                items={[...Array(6)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <header className="flex items-center justify-center mx-2.5">
                      <div className="flex flex-row md:gap-10 gap-[797px] items-center justify-between w-auto">
                        <div className="header-row ">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-auto"
                            size="txtGilroySemiBold28"
                          >
                            Dashboard
                          </Text>
                          <div className="mobile-menu">
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div className="flex flex-row font-opensans gap-6 sm:hidden items-start justify-start w-auto">
                          <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
                            <div className="md:h-9 h-[35px] mb-1 relative w-9">
                              <Img
                                className="absolute bottom-[0] h-8 left-[0] w-8"
                                src="images/img_notification_32X32.svg"
                                alt="notification"
                              />
                              <div className="absolute bg-red-700 border border-blue_gray-50 border-solid flex flex-col h-[18px] items-start justify-start p-0.5 right-[0] rounded-[50%] top-[0] w-[18px]">
                                <Text
                                  className="mb-0.5 ml-0.5 md:ml-[0] text-white-A700 text-xs"
                                  size="txtOpenSansRomanSemiBold12"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start p-1 rounded-[50%] w-14">
                            <Img
                              className="h-12 md:h-auto rounded-[50%] w-12"
                              src="images/img_profileimglarg.png"
                              alt="ProfileImgLarg"
                            />
                          </div>
                        </div>
                      </div>
                    </header>
                  </React.Fragment>
                ))}
              />
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-md w-[64%] md:w-full">
                  <div className="flex flex-col gap-[21px] items-center justify-start mt-[3px] w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start mt-[7px] w-[32%]">
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          Spend Analysis
                        </Text>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_arrowgrowthou.svg"
                            alt="arrowgrowthOu"
                          />
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtGilroyRegular14Black900"
                          >
                            <span className="text-colors font-gilroy text-left font-normal">
                              88%
                            </span>
                            <span className="text-colors1 font-gilroy text-left font-normal">
                              {" "}
                              Compared to last week
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 h-[22px] md:h-auto items-center justify-between w-[104px]">
                        <Text
                          className="text-blue_gray-600 text-sm w-auto"
                          size="txtGilroySemiBold14Bluegray600"
                        >
                          This Week
                        </Text>
                        <Img
                          className="cursor-pointer h-5 w-5"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                          onClick={() => sliderRef.current?.slidePrev?.()}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-end py-[3px] w-full">
                      <div className="flex flex-col gap-[18px] items-end justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                          <div className="flex flex-col gap-[26px] items-start justify-start">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              25k
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              20k
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[3px] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              15k
                            </Text>
                            <Text
                              className="ml-0.5 md:ml-[0] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              10k
                            </Text>
                            <Text
                              className="ml-2 md:ml-[0] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              5k
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[7px] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              0k
                            </Text>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[200px] items-end justify-start p-[26px] sm:px-5 w-[96%] md:w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group9981.png')",
                            }}
                          >
                            <div className="flex flex-col items-center justify-start mb-[78px] mr-[136px] w-auto">
                              <div className="bg-black-900_01 flex flex-col items-center justify-center px-[11px] py-2.5 rounded-[5px] w-auto">
                                <Text
                                  className="text-white-A700 text-xs w-auto"
                                  size="txtGilroyMedium12WhiteA700"
                                >
                                  <>
                                    $2311.65
                                    <br />5 May
                                  </>
                                </Text>
                              </div>
                              <Img
                                className="h-2 w-3.5"
                                src="images/img_arrow.svg"
                                alt="Arrow"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[96%] md:w-full">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Mon
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Tue
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Wed
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[71px] text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Thu
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[73px] text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Fri
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Sat
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Sun
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-lg w-[35%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-[3px] w-[99%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="mt-[5px] text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Expense Tracking
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-between mb-[5px] w-[98px]">
                        <Text
                          className="text-blue_gray-600 text-sm w-auto"
                          size="txtGilroySemiBold14Bluegray600"
                        >
                          This Month
                        </Text>
                        <Img
                          className="cursor-pointer h-5 w-5"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown One"
                          onClick={() => sliderRef.current?.slideNext?.()}
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[200px] items-start justify-start mt-[35px] p-[35px] sm:px-5 w-[200px]"
                      style={{
                        backgroundImage: "url('images/img_group30.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-[47px] items-start justify-start mb-0.5 mt-[13px] w-[90%] md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[63px] justify-start mt-[18px]">
                          <Text
                            className="mr-2 text-base text-white-A700"
                            size="txtGilroySemiBold16WhiteA700"
                          >
                            28%
                          </Text>
                          <Text
                            className="ml-2.5 md:ml-[0] text-base text-white-A700"
                            size="txtGilroySemiBold16WhiteA700"
                          >
                            12%
                          </Text>
                        </div>
                        <div className="flex flex-col md:gap-10 gap-[63px] items-start justify-start mb-[18px]">
                          <Text
                            className="text-base text-white-A700"
                            size="txtGilroySemiBold16WhiteA700"
                          >
                            24%
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[3px] text-base text-white-A700"
                            size="txtGilroySemiBold16WhiteA700"
                          >
                            36%
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[13px] pt-[3px] w-[91%] md:w-full">
                      <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <div className="bg-blue-900 h-2 rounded-sm w-[31%]"></div>
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Travel
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <div className="bg-blue-800 h-2 rounded-sm w-[30%]"></div>
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Sports
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <div className="bg-blue-A700 h-2 rounded-sm w-[23%]"></div>
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Shopping
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <div className="bg-blue-A200 h-2 rounded-sm w-[24%]"></div>
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtGilroySemiBold14Bluegray900"
                            >
                              Medicine
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-[23px] sm:px-5 rounded-lg w-full">
                  <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                    <div className="flex flex-col items-center justify-start mt-1.5">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroySemiBold16Bluegray900"
                      >
                        Income vs Spending Report
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 h-[22px] md:h-auto items-center justify-start mb-1 w-[71px]">
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtGilroySemiBold14Bluegray600"
                      >
                        Yearly
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown Two"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[15px] h-[219px] md:h-auto items-start justify-start max-w-[1029px] mt-10 w-full">
                    <div className="flex flex-col gap-[13px] h-[219px] md:h-auto items-end justify-between pb-6 w-[30px]">
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        30K
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        25K
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        20K
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        15K
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        10K
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        5K
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtGilroyRegular14Bluegray900"
                      >
                        0K
                      </Text>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[30px] h-full items-end justify-start w-full">
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[30px] grid grid-cols-3 w-[23%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col h-full items-center justify-end w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row items-end justify-evenly w-full">
                              <div className="bg-blue-A700 h-[187px] rounded-[5px] w-[49%]"></div>
                              <div className="bg-blue-200 h-[87px] mt-[100px] rounded-[5px] w-[49%]"></div>
                            </div>
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Jan
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-full items-center justify-end w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row items-end justify-evenly w-full">
                              <div className="bg-blue-A700 h-20 mt-[82px] rounded-[5px] w-[49%]"></div>
                              <div className="bg-blue-200 h-[162px] rounded-[5px] w-[49%]"></div>
                            </div>
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Feb
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-full items-center justify-end w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <div className="bg-blue-A700 h-44 rounded-[5px] w-[49%]"></div>
                              <div className="bg-blue-200 h-44 rounded-[5px] w-[49%]"></div>
                            </div>
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Mar
                            </Text>
                          </div>
                        </div>
                      </List>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[30px] grid grid-cols-2 w-[15%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col h-full items-center justify-end w-full">
                          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                            <div className="flex flex-row items-end justify-evenly w-full">
                              <div className="bg-blue-A700 h-[181px] rounded-[5px] w-[49%]"></div>
                              <div className="bg-blue-200 h-[84px] mt-[97px] rounded-[5px] w-[49%]"></div>
                            </div>
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Apr
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-full items-center justify-end w-full">
                          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                            <div className="flex flex-row items-end justify-evenly w-full">
                              <div className="bg-blue-A700 h-[55px] mt-[127px] rounded-[5px] w-[49%]"></div>
                              <div className="bg-blue-200 h-[182px] rounded-[5px] w-[49%]"></div>
                            </div>
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              May
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-1 flex-col h-full items-center justify-end w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                          <div className="flex flex-row items-end justify-evenly w-full">
                            <div className="bg-blue-A700 h-[118px] mt-9 rounded-[5px] w-[49%]"></div>
                            <div className="bg-blue-200 h-[154px] rounded-[5px] w-[49%]"></div>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-sm w-auto"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Jun
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-full items-center justify-end w-full">
                        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                          <div className="flex flex-row items-end justify-evenly w-full">
                            <div className="bg-blue-A700 h-[163px] rounded-[5px] w-[49%]"></div>
                            <div className="bg-blue-200 h-[105px] mt-[58px] rounded-[5px] w-[49%]"></div>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-sm w-auto"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Jul
                          </Text>
                        </div>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[30px] grid grid-cols-2 w-[15%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col h-full items-center justify-end w-full">
                          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                            <div className="flex flex-row items-end justify-evenly w-full">
                              <div className="bg-blue-A700 h-[104px] rounded-[5px] w-[49%]"></div>
                              <div className="bg-blue-200 h-[79px] mt-[25px] rounded-[5px] w-[49%]"></div>
                            </div>
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Aug
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-full items-center justify-end w-full">
                          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                            <div className="flex flex-row items-end justify-evenly w-full">
                              <div className="bg-blue-A700 h-[121px] rounded-[5px] w-[49%]"></div>
                              <div className="bg-blue-200 h-[79px] mt-[42px] rounded-[5px] w-[49%]"></div>
                            </div>
                            <Text
                              className="text-blue_gray-900 text-sm w-auto"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Sep
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-1 flex-col h-full items-center justify-end w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                          <div className="flex flex-row items-end justify-evenly w-full">
                            <div className="bg-blue-A700 h-[154px] rounded-[5px] w-[49%]"></div>
                            <div className="bg-blue-200 h-[79px] mt-[75px] rounded-[5px] w-[49%]"></div>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-sm w-auto"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Oct
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-full items-center justify-end pt-[39px] w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                          <div className="flex flex-row items-end justify-evenly w-full">
                            <div className="bg-blue-A700 h-[148px] rounded-[5px] w-[49%]"></div>
                            <div className="bg-blue-200 h-[141px] mt-[7px] rounded-[5px] w-[49%]"></div>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-sm w-auto"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Nov
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-full items-center justify-end w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                          <div className="flex flex-row items-end justify-evenly w-full">
                            <div className="bg-blue-A700 h-[187px] rounded-[5px] w-[49%]"></div>
                            <div className="bg-blue-200 h-[161px] mt-[26px] rounded-[5px] w-[49%]"></div>
                          </div>
                          <Text
                            className="text-blue_gray-900 text-sm w-auto"
                            size="txtGilroySemiBold14Bluegray900"
                          >
                            Dec
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-center mt-[22px] w-1/5 md:w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="bg-blue-A700 h-2 rounded-sm w-[28%]"></div>
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtGilroySemiBold14Bluegray900"
                      >
                        Income
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="bg-blue-200 h-2 rounded-sm w-[23%]"></div>
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtGilroySemiBold14Bluegray900"
                      >
                        Spending
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-50_01 flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-6 sm:px-5 right-[0] w-[28%]">
            <div className="flex flex-row items-start justify-between mt-0.5 w-full">
              <Img
                className="h-6 mb-0.5 w-6"
                src="images/img_arrowleft_bluegray_900.svg"
                alt="arrowleft"
              />
              <Text
                className="mt-1 text-blue_gray-900 text-lg"
                size="txtGilroySemiBold18"
              >
                My Profile
              </Text>
              <Img
                className="h-6 mb-0.5 w-6"
                src="images/img_share.svg"
                alt="share"
              />
            </div>
            <div className="border-[1.79px] border-blue-A700_01 border-solid flex flex-col h-[100px] items-center justify-start md:ml-[0] ml-[69px] mt-8 p-[7px] rounded-[50%] w-[100px]">
              <Img
                className="h-[85px] md:h-auto rounded-[50%] w-[85px]"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg One"
              />
            </div>
            <Text
              className="md:ml-[0] ml-[62px] mt-[21px] text-blue_gray-900 text-lg"
              size="txtGilroySemiBold18"
            >
              Michelle Rock
            </Text>
            <div className="flex flex-row items-center justify-start mt-[37px] py-0.5 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_notification_24X24.svg"
                alt="notification One"
              />
              <div className="flex flex-col items-center justify-start ml-2 w-auto">
                <Text
                  className="text-blue_gray-900 text-lg w-auto"
                  size="txtGilroySemiBold18"
                >
                  Notifications
                </Text>
              </div>
              <Img
                className="h-6 ml-[91px] w-6"
                src="images/img_arrowright_bluegray_600.svg"
                alt="arrowright"
              />
            </div>
            <div className="flex flex-row items-start justify-start mt-6 pt-0.5 w-full">
              <Img
                className="h-6 mb-0.5 w-6"
                src="images/img_settings_24X24.svg"
                alt="settings Two"
              />
              <div className="flex flex-col items-center justify-start ml-2 mt-[5px] w-auto">
                <Text
                  className="text-blue_gray-900 text-lg w-auto"
                  size="txtGilroySemiBold18"
                >
                  Language
                </Text>
              </div>
              <Img
                className="h-6 mb-0.5 ml-[111px] w-6"
                src="images/img_arrowright_bluegray_600.svg"
                alt="arrowright One"
              />
            </div>
            <div className="flex flex-row items-center justify-start mt-6 py-0.5 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_moonoutline.svg"
                alt="moonOutline"
              />
              <div className="flex flex-col items-center justify-start ml-2 w-auto">
                <Text
                  className="text-blue_gray-900 text-lg w-auto"
                  size="txtGilroySemiBold18"
                >
                  Dark mode
                </Text>
              </div>
              <Img
                className="h-6 ml-[103px] w-6"
                src="images/img_arrowright_bluegray_600.svg"
                alt="arrowright Two"
              />
            </div>
            <div className="flex flex-row items-start justify-start mt-6 pt-0.5 w-full">
              <Img
                className="h-6 mb-0.5 w-6"
                src="images/img_settings_1.svg"
                alt="settings Three"
              />
              <div className="flex flex-col items-center justify-start ml-2 mt-1 w-auto">
                <Text
                  className="text-blue_gray-900 text-lg w-auto"
                  size="txtGilroySemiBold18"
                >
                  General settings
                </Text>
              </div>
              <Img
                className="h-6 mb-0.5 ml-[59px] w-6"
                src="images/img_arrowright_bluegray_600.svg"
                alt="arrowright Three"
              />
            </div>
            <div className="flex flex-row items-center justify-start mb-[553px] mt-6 py-0.5 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_dashboard.svg"
                alt="dashboard Two"
              />
              <div className="flex flex-col items-center justify-start ml-2 w-auto">
                <Text
                  className="text-blue_gray-900 text-lg w-auto"
                  size="txtGilroySemiBold18"
                >
                  Theme
                </Text>
              </div>
              <Img
                className="h-6 ml-[139px] w-6"
                src="images/img_arrowright_bluegray_600.svg"
                alt="arrowright Four"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccountPage;
