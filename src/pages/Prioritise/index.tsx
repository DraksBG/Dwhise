import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PrioritisePage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50_03 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_4.svg"
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
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[441px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[31%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Tasks
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[38%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_chartlineoutl.svg"
                        alt="chartlineOutl"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Activity
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[81%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Project management
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[39%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file.svg"
                        alt="file"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Reports
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
            <div className="flex flex-1 flex-col md:mt-0 mt-8 relative w-full">
              <div className="flex flex-col gap-7 items-center justify-start mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start rounded-md w-full">
                  <Text
                    className="md:mt-0 mt-[9px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    My Tasks
                  </Text>
                  <Button
                    className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center mb-0.5 md:ml-[0] ml-[748px] rounded-md w-[131px]"
                    rightIcon={
                      <Img
                        className="h-5 ml-3.5 mr-4 my-2"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    color="white_A700"
                    size="lg"
                  >
                    <div className="font-medium text-left text-sm">
                      This Week
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[75px] ml-6 md:ml-[0] md:mt-0 my-0.5 rounded-md"
                    leftIcon={
                      <Img
                        className="h-4 ml-3 mr-2 my-[9px]"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    }
                    size="md"
                  >
                    <div className="font-medium text-left text-sm">Add</div>
                  </Button>
                </div>
                <List
                  className="flex flex-col gap-[36.08px] items-center pt-[5px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-base text-blue-A700"
                      size="txtGilroySemiBold16BlueA700"
                    >
                      Monday, 12th May
                    </Text>
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-3.5 rounded-md shadow-bs w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <Text
                            className="md:mt-0 mt-2 text-base text-gray-900_01"
                            size="txtGilroySemiBold16Gray90001"
                          >
                            Buy groceries{" "}
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[94px] md:ml-[0] ml-[778px] text-center text-sm"
                            color="gray_100"
                          >
                            High Priority
                          </Button>
                          <Img
                            className="h-6 ml-10 md:ml-[0] md:mt-0 mt-[3px] w-6"
                            src="images/img_user.svg"
                            alt="user"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-3.5 rounded-md shadow-bs w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <Text
                            className="md:mt-0 mt-[7px] text-base text-gray-900_01"
                            size="txtGilroySemiBold16Gray90001"
                          >
                            Cardio at 6 pm
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[90px] md:ml-[0] ml-[771px] text-center text-sm"
                            color="deep_orange_50"
                          >
                            Low Priority
                          </Button>
                          <Img
                            className="h-6 ml-10 md:ml-[0] md:mt-0 mt-[3px] w-6"
                            src="images/img_user.svg"
                            alt="user One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-base text-blue-A700"
                      size="txtGilroySemiBold16BlueA700"
                    >
                      Wednesday, 14th May
                    </Text>
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-3.5 rounded-md shadow-bs w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <Text
                            className="md:mt-0 mt-2 text-base text-gray-900_01"
                            size="txtGilroySemiBold16Gray90001"
                          >
                            Buy groceries{" "}
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[94px] md:ml-[0] ml-[778px] text-center text-sm"
                            color="gray_100"
                          >
                            High Priority
                          </Button>
                          <Img
                            className="h-6 ml-10 md:ml-[0] md:mt-0 mt-[3px] w-6"
                            src="images/img_user.svg"
                            alt="user One"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-3.5 rounded-md shadow-bs w-full">
                        <div className="flex flex-row md:gap-10 items-end justify-between rounded w-full">
                          <Text
                            className="mb-0.5 mt-[7px] text-base text-gray-900_01"
                            size="txtGilroySemiBold16Gray90001"
                          >
                            Cardio at 6 pm
                          </Text>
                          <div className="flex flex-row gap-[38px] items-start justify-between rounded w-[16%]">
                            <Button
                              className="cursor-pointer font-medium min-w-[90px] text-center text-sm"
                              color="deep_orange_50"
                            >
                              Low Priority
                            </Button>
                            <div className="bg-blue_gray-50 h-6 md:h-[30px] my-[3px] px-0.5 relative rounded w-[18%]">
                              <Img
                                className="absolute h-6 inset-[0] justify-center m-auto w-6"
                                src="images/img_user.svg"
                                alt="user One One"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start ml-auto mr-[37px] mt-[-24px] p-4 rounded-md shadow-bs z-[1]">
                <Text
                  className="mt-[5px] text-black-900 text-sm"
                  size="txtGilroyMedium14Black900"
                >
                  Make High Priority
                </Text>
                <Text
                  className="mt-[21px] text-black-900 text-sm"
                  size="txtGilroyMedium14Black900"
                >
                  Move to Top
                </Text>
                <Text
                  className="mt-5 text-black-900 text-sm"
                  size="txtGilroyMedium14Black900"
                >
                  Edit
                </Text>
                <Text
                  className="mb-1 mt-[23px] text-red-700 text-sm"
                  size="txtGilroyMedium14Red700"
                >
                  Delete
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrioritisePage;
