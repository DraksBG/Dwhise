import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const inputFieldOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TaskAllocatorPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50_04 flex flex-col font-gilroy items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_6.svg"
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-end justify-start w-[72%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file_24X24.svg"
                        alt="file"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Task Management
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
            <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-8 w-full">
              <div className="flex flex-col gap-6 items-start justify-end pt-2.5 w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Task Management
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-end justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-end rounded-md w-[55%] md:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Select Department
                    </Text>
                    <SelectBox
                      className="!text-blue_gray-200 border border-blue_gray-300 border-solid font-medium text-base text-left w-[69%] sm:w-full"
                      placeholderClassName="!text-blue_gray-200"
                      indicator={
                        <Img
                          className="h-5 mr-3 w-[21px]"
                          src="images/img_arrowdown_black_900.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="InputField One"
                      options={inputFieldOneOptionsList}
                      isSearchable={false}
                      placeholder="Design"
                      color="white_A700"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:gap-5 gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user One"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file One"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Two"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen One"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen One"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve One"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message One"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Two"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Three"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Two"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Two"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Two"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message Two"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Three"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Four"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Three"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Three"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Three"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message Three"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Four"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Five"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Four"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Four"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Four"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message Four"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Five"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Six"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Five"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Five"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Five"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message Five"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Six"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Seven"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Six"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Six"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Six"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message Six"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Seven"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Eight"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Seven"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Seven"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Seven"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message Seven"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Eight"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Nine"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Eight"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Eight"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Eight"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message Eight"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Nine"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-[65px] h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-1 text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Ten"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Nine"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Nine"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Nine"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message Nine"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Ten"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-[65px] h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-1 text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Eleven"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Ten"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Ten"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Ten"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message Ten"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Eleven"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-[65px] h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-1 text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Twelve"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Eleven"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Eleven"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Eleven"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_message.svg"
                                alt="message Eleven"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Twelve"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Thirteen"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Twelve"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Twelve"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Twelve"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 mt-[3px] w-4"
                                src="images/img_message.svg"
                                alt="message Twelve"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 mt-[3px] w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Thirteen"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Fourteen"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Thirteen"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Thirteen"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Thirteen"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 mt-[3px] w-4"
                                src="images/img_message.svg"
                                alt="message Thirteen"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 mt-[3px] w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Fourteen"
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
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="md:h-16 h-[73px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtGilroySemiBold18Gray90002"
                              >
                                Brainstorming
                              </Text>
                              <Text
                                className="leading-[20.00px] mt-[3px] text-blue_gray-400 text-xs w-full"
                                size="txtGilroyMedium12"
                              >
                                <>
                                  Brainstorming brings team members&#39; diverse
                                  experience into play.{" "}
                                </>
                              </Text>
                            </div>
                            <Img
                              className="absolute h-6 right-[0] top-[0] w-6"
                              src="images/img_user.svg"
                              alt="user Fifteen"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="h-6 relative w-[21%]">
                              <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="EllipseFifteen Fourteen"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="EllipseThirteen Fourteen"
                                />
                              </div>
                              <Img
                                className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                src="images/img_ellipse12.png"
                                alt="EllipseTwelve Fourteen"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[55%]">
                              <Img
                                className="h-4 mt-[3px] w-4"
                                src="images/img_message.svg"
                                alt="message Fourteen"
                              />
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyMedium12"
                              >
                                12 comments
                              </Text>
                              <Img
                                className="h-4 mt-[3px] w-4"
                                src="images/img_file_16X16.svg"
                                alt="file Fifteen"
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
      </div>
    </>
  );
};

export default TaskAllocatorPage;
