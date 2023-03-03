import Header from "./Header"
import Footer from "./Footer"
const Layout = ({children ,title }) => {

    return (
        <div>
            <Header title={title}/>
            {children}
            <Footer />
        </div>
    )

}
export default Layout;