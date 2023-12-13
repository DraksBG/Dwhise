import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TaskAllocatorOnePage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50_04 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
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
                  wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 m-3"
                      src="images/img_search.svg"
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
                ></Input>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start md:px-5 w-[95%] md:w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[441px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start pr-4 py-4 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[56%] md:w-full">
                      <Img
                        className="h-6 ml-[7px] w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_1.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Users
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[49%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock_1.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Timesheets
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[55%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_companyoutline.svg"
                        alt="companyOutline"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Organisation
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification One"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_question.svg"
                      alt="question"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700_01"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </Sidebar>
            <div className="flex-1 md:h-[1289px] h-[632px] sm:h-[656px] md:mt-0 mt-8 relative w-full">
              <Text
                className="mt-[18px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtGilroySemiBold24"
              >
                Time Tracker
              </Text>
              <div className="absolute flex flex-col md:gap-10 gap-[62px] h-full inset-[0] items-end justify-center m-auto pt-[5px] w-full">
                <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-end w-[47%] md:w-full">
                  <div className="bg-blue-A700 h-[50px] w-[50px]"></div>
                  <Button
                    className="cursor-pointer font-medium rounded-md text-base text-center w-[396px]"
                    size="3xl"
                    variant="outline"
                  >
                    04:55:19
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Today : 5:00
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-6 w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start rounded-[23px] w-full">
                      <div className="h-[21px] md:h-[302px] relative w-full">
                        <Line className="absolute bg-blue-50 h-1.5 inset-x-[0] mx-auto rounded-[3px] top-[14%] w-full" />
                        <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-[78%]">
                          <Line className="bg-blue-A200 h-[21px] md:h-px md:w-full w-px" />
                          <Line className="bg-blue-A200 h-[21px] md:h-px md:ml-[0] ml-[195px] md:w-full w-px" />
                          <div className="bg-blue-A700 h-2 mb-[11px] ml-3.5 md:ml-[0] md:mt-0 mt-0.5 rounded w-[23%]"></div>
                          <Line className="bg-blue-A200 h-[21px] md:h-px ml-1 md:ml-[0] md:w-full w-px" />
                          <div className="bg-blue-A700 h-2 mb-[11px] md:ml-[0] ml-[9px] md:mt-0 mt-0.5 rounded w-[7%]"></div>
                          <div className="bg-blue-A700 h-2 mb-[11px] ml-1.5 md:ml-[0] md:mt-0 mt-0.5 rounded w-[4%]"></div>
                          <Line className="bg-blue-A200 h-[21px] md:h-px md:ml-[0] ml-[97px] md:w-full w-px" />
                          <Line className="bg-blue-A200 h-[21px] md:h-px md:ml-[0] ml-[195px] md:w-full w-px" />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between w-[81%] md:w-full">
                        <Text
                          className="text-blue-A700 text-sm"
                          size="txtGilroyMedium14BlueA700"
                        >
                          6 am
                        </Text>
                        <Text
                          className="text-blue-A700 text-sm"
                          size="txtGilroyMedium14BlueA700"
                        >
                          9 am
                        </Text>
                        <Text
                          className="text-blue-A700 text-sm"
                          size="txtGilroyMedium14BlueA700"
                        >
                          12 pm
                        </Text>
                        <Text
                          className="text-blue-A700 text-sm"
                          size="txtGilroyMedium14BlueA700"
                        >
                          3 pm
                        </Text>
                        <Text
                          className="text-blue-A700 text-sm"
                          size="txtGilroyMedium14BlueA700"
                        >
                          6 pm
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[81px] w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[84%] md:w-full">
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          Project List
                        </Text>
                        <Text
                          className="ml-64 md:ml-[0] text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          Productivity Count
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[278px] text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          Duration
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[52px] items-end justify-end sm:pr-5 pr-[26px] pt-[26px] w-full">
                        <div className="flex md:flex-col flex-row gap-[42px] items-center justify-start mr-[73px] w-[93%] md:w-full">
                          <Img
                            className="h-[30px] w-[30px]"
                            src="images/img_stopcirclesol.svg"
                            alt="stopcircleSol"
                          />
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[93%] md:w-full">
                            <div className="flex flex-row gap-3 items-center justify-start w-[13%] md:w-full">
                              <Text
                                className="bg-blue-A700 flex h-[30px] items-center justify-center rounded-[50%] text-center text-gray-50 text-lg w-[30px]"
                                size="txtGilroySemiBold18Gray50"
                              >
                                D
                              </Text>
                              <Text
                                className="text-blue-A700 text-lg"
                                size="txtGilroyMedium18BlueA700"
                              >
                                Dhiwise
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[311px] text-blue-A700 text-lg"
                              size="txtGilroyMedium18BlueA700"
                            >
                              89%
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[350px] text-blue-A700 text-lg"
                              size="txtGilroyMedium18BlueA700"
                            >
                              1:14:47
                            </Text>
                          </div>
                        </div>
                        <List
                          className="flex flex-col gap-[26px] items-center mr-[73px] w-[86%]"
                          orientation="vertical"
                        >
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <div className="flex md:flex-1 flex-row gap-3 items-end justify-start w-[26%] md:w-full">
                              <Text
                                className="bg-orange-A700 flex h-[30px] items-center justify-center rounded-[50%] text-center text-gray-50 text-lg w-[30px]"
                                size="txtGilroySemiBold18Gray50"
                              >
                                A
                              </Text>
                              <Text
                                className="mt-[7px] text-black-900 text-lg"
                                size="txtGilroyMedium18Black900"
                              >
                                Archies Technologies
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[203px] text-black-900 text-lg"
                              size="txtGilroyMedium18Black900"
                            >
                              89%
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[350px] text-black-900 text-lg"
                              size="txtGilroyMedium18Black900"
                            >
                              1:14:47
                            </Text>
                          </div>
                          <Line className="self-center h-px bg-blue_gray-100 w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <div className="flex md:flex-1 flex-row gap-3 items-center justify-start w-[12%] md:w-full">
                              <Text
                                className="bg-green-600 flex h-[30px] items-center justify-center rounded-[50%] text-center text-gray-50 text-lg w-[30px]"
                                size="txtGilroySemiBold18Gray50"
                              >
                                R
                              </Text>
                              <Text
                                className="text-black-900 text-lg"
                                size="txtGilroyMedium18Black900"
                              >
                                Revolt
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[323px] text-black-900 text-lg"
                              size="txtGilroyMedium18Black900"
                            >
                              89%
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[350px] text-black-900 text-lg"
                              size="txtGilroyMedium18Black900"
                            >
                              1:14:47
                            </Text>
                          </div>
                          <Line className="self-center h-px bg-blue_gray-100 w-full" />
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <div className="flex md:flex-1 flex-row gap-3 items-center justify-start w-1/5 md:w-full">
                              <Text
                                className="bg-red-700 flex h-[30px] items-center justify-center rounded-[50%] text-center text-gray-50 text-lg w-[30px]"
                                size="txtGilroySemiBold18Gray50"
                              >
                                C
                              </Text>
                              <Text
                                className="text-black-900 text-lg"
                                size="txtGilroyMedium18Black900"
                              >
                                Cardekho.com
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[254px] text-black-900 text-lg"
                              size="txtGilroyMedium18Black900"
                            >
                              89%
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[350px] text-black-900 text-lg"
                              size="txtGilroyMedium18Black900"
                            >
                              1:14:47
                            </Text>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskAllocatorOnePage;
