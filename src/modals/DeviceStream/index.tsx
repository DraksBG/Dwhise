import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Text } from "components";

const DeviceStreamModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[30%]"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start p-[18px] md:px-5 rounded-[10px] w-full">
          <Text
            className="mt-1.5 text-base text-blue_gray-300"
            size="txtGilroyRegular16"
          >
            No Device Available
          </Text>
          <div className="flex flex-row gap-4 items-start justify-start mt-[30px] w-3/5 md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_ciairplay.svg"
              alt="ciairplay"
            />
            <Text
              className="mt-1 text-base text-blue_gray-900"
              size="txtGilroyMedium16"
            >
              Airplay & Blutooth Devices
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start mt-[25px] w-[44%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_mdicellphonel.svg"
              alt="mdicellphonel"
            />
            <Text
              className="mt-[3px] text-base text-blue_gray-900"
              size="txtGilroyMedium16"
            >
              Link with TV Code
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start mb-1 mt-[26px] w-[32%] md:w-full">
            <Img className="h-6 w-6" src="images/img_info.svg" alt="info" />
            <a
              href="javascript:"
              className="mt-[3px] text-base text-blue_gray-900"
            >
              <Text size="txtGilroyMedium16">Learn More</Text>
            </a>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DeviceStreamModal;
