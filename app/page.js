import dynamic from "next/dynamic";
const DynamicHome = dynamic(() => import("./components/home"));

const HomePage = () => {
  return (
    <>
      <DynamicHome />
    </>
  );
};

export default HomePage;

