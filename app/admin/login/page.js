import dynamic from "next/dynamic";
const DynamiUserLogin = dynamic(() => import("../../components/admin/login"));

const UserLogin = () => {
  return (
    <>
      <DynamiUserLogin />
    </>
  );
};

export default UserLogin;
