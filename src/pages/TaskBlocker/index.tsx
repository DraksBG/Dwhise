import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TaskBlockerPage: React.FC = () => {
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
                  src="images/img_group_7.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search.."
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
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[42%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_1.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-end justify-start w-[81%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_24X24.svg"
                        alt="file"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
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
                        alt="file One"
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
            <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-8 pt-0.5 w-full">
              <div className="flex flex-row md:gap-10 items-end justify-between rounded-md w-full">
                <Text
                  className="mt-2 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtGilroySemiBold24"
                >
                  Design Team
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[3px] min-w-[107px] rounded-md"
                  leftIcon={
                    <Img
                      className="h-4 ml-3 mr-2 my-[9px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  }
                  size="md"
                >
                  <div className="font-medium text-left text-sm">Add Task</div>
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-8 w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col gap-[13px] items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-md shadow-bs w-full">
                    <Img
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      src="images/img_ellipse6.png"
                      alt="EllipseSix"
                    />
                    <Text
                      className="mb-[5px] text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Pheonix Baker
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-[13px] items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-md shadow-bs w-full">
                    <Img
                      className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                      src="images/img_ellipse6_150X150.png"
                      alt="EllipseSix One"
                    />
                    <Text
                      className="mb-[5px] text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Demi Wilkinson
                    </Text>
                  </div>
                </List>
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-[15px] items-center justify-end p-[23px] sm:px-5 rounded-md shadow-bs w-[23%] md:w-full">
                  <Img
                    className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                    src="images/img_ellipse6_1.png"
                    alt="EllipseSix Two"
                  />
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Jose Cooper
                  </Text>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-[13px] items-center justify-start p-6 sm:px-5 rounded-md shadow-bs w-[23%] md:w-full">
                  <Img
                    className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                    src="images/img_ellipse6_2.png"
                    alt="EllipseSix Three"
                  />
                  <Text
                    className="mb-[5px] text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Lara Johnson
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-8 items-center justify-start mt-[39px] w-full">
                <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                  <Text
                    className="mb-[3px] mt-2.5 text-black-900 text-lg"
                    size="txtGilroySemiBold18Black900"
                  >
                    Task Priority
                  </Text>
                  <Button
                    className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center rounded-md w-[131px]"
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
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-sm"
                            color="red_700"
                          >
                            Overdue
                          </Button>
                          <Img
                            className="h-6 w-6"
                            src="images/img_user.svg"
                            alt="user One"
                          />
                        </div>
                        <Text
                          className="mt-[19px] text-gray-900_02 text-lg"
                          size="txtGilroySemiBold18Gray90002"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="leading-[20.00px] mt-[7px] text-blue_gray-400 text-xs w-full"
                          size="txtGilroyMedium12"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                src="images/img_ellipse6_1.png"
                                alt="EllipseFifteen"
                              />
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                src="images/img_ellipse6_150X150.png"
                                alt="EllipseThirteen"
                              />
                            </div>
                            <Img
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              src="images/img_ellipse6.png"
                              alt="EllipseTwelve"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              className="h-4 w-4"
                              src="images/img_menu.svg"
                              alt="menu"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              12 comments
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              0 files
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-sm"
                            color="red_700"
                          >
                            Overdue
                          </Button>
                          <Img
                            className="h-6 w-6"
                            src="images/img_user.svg"
                            alt="user Two"
                          />
                        </div>
                        <Text
                          className="mt-[19px] text-gray-900_02 text-lg"
                          size="txtGilroySemiBold18Gray90002"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="leading-[20.00px] mt-[7px] text-blue_gray-400 text-xs w-full"
                          size="txtGilroyMedium12"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                src="images/img_ellipse6_1.png"
                                alt="EllipseFifteen One"
                              />
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                src="images/img_ellipse6_150X150.png"
                                alt="EllipseThirteen One"
                              />
                            </div>
                            <Img
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              src="images/img_ellipse6.png"
                              alt="EllipseTwelve One"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              className="h-4 w-4"
                              src="images/img_menu.svg"
                              alt="menu One"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              12 comments
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder One"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              0 files
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-sm"
                            color="red_700"
                          >
                            Overdue
                          </Button>
                          <Img
                            className="h-6 w-6"
                            src="images/img_user.svg"
                            alt="user Three"
                          />
                        </div>
                        <Text
                          className="mt-[19px] text-gray-900_02 text-lg"
                          size="txtGilroySemiBold18Gray90002"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="leading-[20.00px] mt-[7px] text-blue_gray-400 text-xs w-full"
                          size="txtGilroyMedium12"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                src="images/img_ellipse6_1.png"
                                alt="EllipseFifteen Two"
                              />
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                src="images/img_ellipse6_150X150.png"
                                alt="EllipseThirteen Two"
                              />
                            </div>
                            <Img
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              src="images/img_ellipse6.png"
                              alt="EllipseTwelve Two"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              className="h-4 w-4"
                              src="images/img_menu.svg"
                              alt="menu Two"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              12 comments
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder Two"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              0 files
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-sm"
                            color="red_700"
                          >
                            Overdue
                          </Button>
                          <Img
                            className="h-6 w-6"
                            src="images/img_user.svg"
                            alt="user Four"
                          />
                        </div>
                        <Text
                          className="mt-[19px] text-gray-900_02 text-lg"
                          size="txtGilroySemiBold18Gray90002"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="leading-[20.00px] mt-2 text-blue_gray-400 text-xs w-full"
                          size="txtGilroyMedium12"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                src="images/img_ellipse6_1.png"
                                alt="EllipseFifteen Three"
                              />
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                src="images/img_ellipse6_150X150.png"
                                alt="EllipseThirteen Three"
                              />
                            </div>
                            <Img
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              src="images/img_ellipse6.png"
                              alt="EllipseTwelve Three"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              className="h-4 w-4"
                              src="images/img_menu.svg"
                              alt="menu Three"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              12 comments
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder Three"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              0 files
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-sm"
                            color="red_700"
                          >
                            Overdue
                          </Button>
                          <Img
                            className="h-6 w-6"
                            src="images/img_user.svg"
                            alt="user Five"
                          />
                        </div>
                        <Text
                          className="mt-[19px] text-gray-900_02 text-lg"
                          size="txtGilroySemiBold18Gray90002"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="leading-[20.00px] mt-2 text-blue_gray-400 text-xs w-full"
                          size="txtGilroyMedium12"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                src="images/img_ellipse6_1.png"
                                alt="EllipseFifteen Four"
                              />
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                src="images/img_ellipse6_150X150.png"
                                alt="EllipseThirteen Four"
                              />
                            </div>
                            <Img
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              src="images/img_ellipse6.png"
                              alt="EllipseTwelve Four"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              className="h-4 w-4"
                              src="images/img_menu.svg"
                              alt="menu Four"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              12 comments
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder Four"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              0 files
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-4 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] text-center text-sm"
                            color="red_700"
                          >
                            Overdue
                          </Button>
                          <Img
                            className="h-6 w-6"
                            src="images/img_user.svg"
                            alt="user Six"
                          />
                        </div>
                        <Text
                          className="mt-[19px] text-gray-900_02 text-lg"
                          size="txtGilroySemiBold18Gray90002"
                        >
                          Brainstorming
                        </Text>
                        <Text
                          className="leading-[20.00px] mt-2 text-blue_gray-400 text-xs w-full"
                          size="txtGilroyMedium12"
                        >
                          <>
                            Brainstorming brings team members&#39; diverse
                            experience into play.{" "}
                          </>
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-4 w-full">
                          <div className="h-6 relative w-[21%]">
                            <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                              <Img
                                className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                src="images/img_ellipse6_1.png"
                                alt="EllipseFifteen Five"
                              />
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                src="images/img_ellipse6_150X150.png"
                                alt="EllipseThirteen Five"
                              />
                            </div>
                            <Img
                              className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                              src="images/img_ellipse6.png"
                              alt="EllipseTwelve Five"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-evenly mt-1 w-[55%]">
                            <Img
                              className="h-4 w-4"
                              src="images/img_menu.svg"
                              alt="menu Five"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              12 comments
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder Five"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              0 files
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
        </div>
      </div>
    </>
  );
};

export default TaskBlockerPage;
