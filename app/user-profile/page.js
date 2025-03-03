import dynamic from "next/dynamic";
const DynamicClientSay = dynamic(() => import("../components/clientsay"));

const ClientSayPage = () => {
    return (
        <>
            <DynamicClientSay />
        </>
    );
};

export default ClientSayPage;

