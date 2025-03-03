import dynamic from "next/dynamic";
const DynamicUserorders = dynamic(() => import("../components/confirmorder"));

const Userorders = () => {
  return (
    <>
      <DynamicUserorders />
    </>
  );
};

export default Userorders;
