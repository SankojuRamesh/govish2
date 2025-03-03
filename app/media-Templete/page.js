import dynamic from "next/dynamic";
const DynamiMediaTemplete = dynamic(() => import("../components/mediaTemplete"));

const UserMediaTemplete = () => {
    return (
        <>
            <DynamiMediaTemplete />
        </>
    );
};

export default UserMediaTemplete;

