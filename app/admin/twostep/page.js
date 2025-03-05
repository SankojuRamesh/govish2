import dynamic from "next/dynamic";
const DynamiUserLogin = dynamic(() => import("../../components/admin/twostep"));

const twostep = () => {
  return (
    <>
      <DynamiUserLogin />
    </>
  );
};

export default twostep;
