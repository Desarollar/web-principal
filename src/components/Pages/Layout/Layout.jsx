import Header from '../../Items/Header/Header';
import Footer from '../../Items/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout () {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout