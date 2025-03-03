import dynamic from "next/dynamic";
const DynamicLatestTemplete = dynamic(() =>
  import("../components/latestTemplete")
);

const UserLatestTemplate = () => {
  return (
    <>
      <DynamicLatestTemplete />
    </>
  );
};

export default UserLatestTemplate;
