import dynamic from "next/dynamic";
const DynamicInvitation = dynamic(() => import("../components/invitation"));

const InvitationPage = () => {
    return (
        <>
            <DynamicInvitation />
        </>
    );
};

export default InvitationPage;

