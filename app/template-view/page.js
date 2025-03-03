import dynamic from "next/dynamic";
const DynamicTemplateView = dynamic(() => import("../components/templateVIew"));

const UserTemplate = () => {
  return (
    <>
      <DynamicTemplateView />
    </>
  );
};

export default UserTemplate;
