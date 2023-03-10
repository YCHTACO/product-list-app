import Header from "./Header"
import Footer from "./Footer"
const Layout = ({children ,title ,bg}) => {

    return (
        <div>
            <Header title={title} bg={bg}/>
            {children}
            <Footer />
        </div>
    )

}
export default Layout;