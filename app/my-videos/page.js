import dynamic from "next/dynamic";
const DynamicMyVideos = dynamic(() => import("../components/myvideos"));

const UserFavourmyvideos = () => {
  return (
    <>
      <DynamicMyVideos />
    </>
  );
};

export default UserFavourmyvideos;
