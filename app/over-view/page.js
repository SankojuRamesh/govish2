import dynamic from "next/dynamic";
const DynamicOverView = dynamic(() => import("../components/overview"));

const UserOverView = () => {
  return (
    <>
      <DynamicOverView />
    </>
  );
};

export default UserOverView;
