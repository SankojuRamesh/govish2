import dynamic from "next/dynamic";
const DynamicMyTemplete = dynamic(() => import("../components/mytemplete"));

const UserMyTemplete = () => {
  return (
    <>
      <DynamicMyTemplete />
    </>
  );
};

export default UserMyTemplete;
