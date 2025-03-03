import dynamic from "next/dynamic";
const DynamiUserBilling = dynamic(() => import("../components/mybilling"));

const UserBilling = () => {
  return (
    <>
      <DynamiUserBilling />
    </>
  );
};

export default UserBilling;
