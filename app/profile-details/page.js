import dynamic from "next/dynamic";
const DynamicUserProfile = dynamic(() =>
  import("../components/profiledetails")
);

const UserProfile = () => {
  return (
    <>
      <DynamicUserProfile />
    </>
  );
};

export default UserProfile;
