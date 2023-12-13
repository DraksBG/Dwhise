import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LeaveTrackerPage: React.FC = () => {
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
                  src="images/img_group_3.svg"
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
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
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
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock_24X24.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Tasks
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-end justify-start w-[42%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_24X24.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        My Team
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
            <div className="flex flex-1 flex-col gap-[33px] items-center justify-start md:mt-0 mt-8 w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtGilroySemiBold24"
                >
                  Leave Tracker
                </Text>
                <SelectBox
                  className="border border-blue_gray-100 border-solid sm:flex-1 font-medium text-left text-sm w-[13%] sm:w-full"
                  placeholderClassName="text-black-900_01"
                  indicator={
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="Dropdown"
                  options={dropdownOptionsList}
                  isSearchable={false}
                  placeholder="Today"
                  color="white_A700"
                  size="xs"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] shadow-bs w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[97%] md:w-full">
                      <Img
                        className="h-[90px] md:h-auto rounded-[50%] w-[90px]"
                        src="images/img_ellipse6_90X90.png"
                        alt="EllipseSix"
                      />
                      <div className="flex flex-col items-start justify-end pr-1 py-1">
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          Carmelo Rousseau
                        </Text>
                        <Text
                          className="mt-[15px] text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          Type : Sick Leave
                        </Text>
                        <Text
                          className="mt-[9px] text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          28 Oct 2021 - 31 oct, 2021
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] shadow-bs w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[97%] md:w-full">
                      <Img
                        className="h-[90px] md:h-auto rounded-[50%] w-[90px]"
                        src="images/img_ellipse6_5.png"
                        alt="EllipseSix One"
                      />
                      <div className="flex flex-col items-start justify-end pr-1 py-1">
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          Ali Comer
                        </Text>
                        <Text
                          className="mt-[15px] text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          Type : Sick Leave
                        </Text>
                        <Text
                          className="mt-[9px] text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          28 Oct 2021 - 31 oct, 2021
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] shadow-bs w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[97%] md:w-full">
                      <Img
                        className="h-[90px] md:h-auto rounded-[50%] w-[90px]"
                        src="images/img_ellipse6_6.png"
                        alt="EllipseSix Two"
                      />
                      <div className="flex flex-col items-start justify-end pr-1 py-1">
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          Kai Caudle
                        </Text>
                        <Text
                          className="mt-[15px] text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          Type : Sick Leave
                        </Text>
                        <Text
                          className="mt-[9px] text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          28 Oct 2021 - 31 oct, 2021
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] shadow-bs w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[97%] md:w-full">
                      <Img
                        className="h-[90px] md:h-auto rounded-[50%] w-[90px]"
                        src="images/img_ellipse6_7.png"
                        alt="EllipseSix Three"
                      />
                      <div className="flex flex-col items-start justify-end pr-1 py-1">
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          Man Marin
                        </Text>
                        <Text
                          className="mt-[15px] text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          Type : Sick Leave
                        </Text>
                        <Text
                          className="mt-[9px] text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          28 Oct 2021 - 31 oct, 2021
                        </Text>
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

export default LeaveTrackerPage;
