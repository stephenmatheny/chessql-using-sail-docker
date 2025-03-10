import WebLayout from './WebLayout.jsx';
import MobileLayout from './MobileLayout.jsx';


const MainLayout = ({ user, header, children }) => {
    return (
        <>
            <WebLayout user={user} children={children} />
            <MobileLayout user={user} children={children} />
        </>
    );
}

export default MainLayout;
