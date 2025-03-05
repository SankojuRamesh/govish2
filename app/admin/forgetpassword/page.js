import dynamic from "next/dynamic";
const DynamiUserLogin = dynamic(() =>
  import("../../components/admin/forgetpassword")
);

const forgetpassword = () => {
  return (
    <>
      <DynamiUserLogin />
    </>
  );
};

export default forgetpassword;
