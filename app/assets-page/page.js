import dynamic from "next/dynamic";
const DynamicUserAssets = dynamic(() => import("../components/assetsPage"));

const UserAssetsPage = () => {
  return (
    <>
      <DynamicUserAssets />
    </>
  );
};

export default UserAssetsPage;
