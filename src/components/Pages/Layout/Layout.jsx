import Header from '../../Items/Header/Header';
import Footer from '../../Items/Footer/Footer';
import { Outlet } from 'react-router-dom';
// import PasswordProtect from '../../../PasswordProtect';

function Layout() {
    return (
        // <PasswordProtect>
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
        // </PasswordProtect>
    );
}

export default Layout;
