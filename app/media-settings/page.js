import dynamic from "next/dynamic";
const DynamicMediaSetting = dynamic(() => import("../components/mediasetting"));

const UserMediaSetting = () => {
  return (
    <>
      <DynamicMediaSetting />
    </>
  );
};

export default UserMediaSetting;
