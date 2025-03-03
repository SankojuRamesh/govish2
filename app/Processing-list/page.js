import dynamic from "next/dynamic";
const DynamiProcessngList = dynamic(() =>
  import("../components/ProcessingList")
);

const UserProcessing = () => {
  return (
    <>
      <DynamiProcessngList />
    </>
  );
};

export default UserProcessing;
