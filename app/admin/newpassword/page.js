import dynamic from "next/dynamic";
const Dynamicnewpassword = dynamic(() =>
  import("../../components/admin/newpassword")
);

const newpassword = () => {
  return (
    <>
      <Dynamicnewpassword />
    </>
  );
};

export default newpassword;
