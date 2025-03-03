import dynamic from "next/dynamic";
const DynamiUserslist = dynamic(() => import("../components/userslist"));

const UsersList = () => {
  return (
    <>
      <DynamiUserslist />
    </>
  );
};

export default UsersList;
