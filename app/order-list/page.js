import dynamic from "next/dynamic";
const DynamiFavouritesTemplete = dynamic(() =>
  import("../components/orderlist")
);

const UserFavouritesTemplete = () => {
  return (
    <>
      <DynamiFavouritesTemplete />
    </>
  );
};

export default UserFavouritesTemplete;
