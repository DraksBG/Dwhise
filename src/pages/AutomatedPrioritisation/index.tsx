import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AutomatedPrioritisationPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50_04 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_2.svg"
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
                    <div className="flex flex-row gap-2 items-start justify-start w-[91%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_24X24.svg"
                        alt="file"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Automated Prioritisation
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
            <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between rounded-md w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtGilroySemiBold24"
                >
                  Team Builder
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[104px] rounded-md"
                  leftIcon={
                    <Img
                      className="h-6 ml-4 mr-2 my-2.5"
                      src="images/img_filter.svg"
                      alt="filter"
                    />
                  }
                  size="xl"
                >
                  <div className="font-medium text-left text-lg">Filter</div>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[147px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user One"
                        />
                        <div className="flex flex-col items-start justify-start mt-7 w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="leading-[22.00px] mt-[3px] text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="red_700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user Two"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-[26px] w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Research
                          </Text>
                          <Text
                            className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            User research helps you to create an optional
                            product for users.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="orange_A700"
                      >
                        Due
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user Three"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-[26px] w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Wireframes
                          </Text>
                          <Text
                            className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            Low fiedility wireframes include the most basic
                            content and visuals.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="red_700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[147px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user Four"
                        />
                        <div className="flex flex-col items-start justify-start mt-7 w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="leading-[22.00px] mt-[3px] text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="red_700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user Five"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-[26px] w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Research
                          </Text>
                          <Text
                            className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            User research helps you to create an optional
                            product for users.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="orange_A700"
                      >
                        Due
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user Six"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-[26px] w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Wireframes
                          </Text>
                          <Text
                            className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            Low fiedility wireframes include the most basic
                            content and visuals.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="red_700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user Seven"
                        />
                        <div className="flex flex-col items-start justify-start mt-7 w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="leading-[22.00px] mt-1 text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="red_700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user Eight"
                        />
                        <div className="flex flex-col gap-2.5 items-start justify-start mt-[26px] w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Research
                          </Text>
                          <Text
                            className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            User research helps you to create an optional
                            product for users.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="orange_A700"
                      >
                        Due
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user Nine"
                        />
                        <div className="flex flex-col gap-2.5 items-start justify-start mt-[26px] w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Wireframes
                          </Text>
                          <Text
                            className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            Low fiedility wireframes include the most basic
                            content and visuals.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="red_700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user Ten"
                        />
                        <div className="flex flex-col items-start justify-start mt-7 w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Brainstorming
                          </Text>
                          <Text
                            className="leading-[22.00px] mt-1 text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            <>
                              Brainstorming brings team members&#39; diverse
                              experience into play.{" "}
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="red_700"
                      >
                        Overdue
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user Eleven"
                        />
                        <div className="flex flex-col gap-2.5 items-start justify-start mt-[26px] w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Research
                          </Text>
                          <Text
                            className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            User research helps you to create an optional
                            product for users.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="orange_A700"
                      >
                        Due
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 md:h-[148px] h-[185px] p-[15px] relative rounded-[10px] shadow-bs w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-1 w-[89%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user Twelve"
                        />
                        <div className="flex flex-col gap-2.5 items-start justify-start mt-[26px] w-full">
                          <Text
                            className="text-gray-900_02 text-lg"
                            size="txtGilroySemiBold18Gray90002"
                          >
                            Wireframes
                          </Text>
                          <Text
                            className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                            size="txtGilroyMedium14"
                          >
                            Low fiedility wireframes include the most basic
                            content and visuals.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            10/05/2021
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-medium left-[6%] min-w-[72px] text-center text-sm top-[10%]"
                        color="red_700"
                      >
                        Overdue
                      </Button>
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

export default AutomatedPrioritisationPage;
