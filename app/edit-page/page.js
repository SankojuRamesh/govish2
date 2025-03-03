import dynamic from "next/dynamic";
const DynamicUserEdit = dynamic(() => import("../components/editPage"));

const UserEditpPage = () => {
    return (
        <>
            <DynamicUserEdit />
        </>
    );
};

export default UserEditpPage;

