import dynamic from "next/dynamic";
const DynamiOrderList = dynamic(() =>
  import("../components/favouritestemplete")
);

const UserOderlist = () => {
  return (
    <>
      <DynamiOrderList />
    </>
  );
};

export default UserOderlist;
