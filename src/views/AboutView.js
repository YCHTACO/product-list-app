import {Link} from "react-router-dom"
import Layout from "../components/Layout";
const AboutView = () =>{
    return (
            <Layout title="About View">
                <h1>About View</h1>
                <Link to="/" className="btn btn-primary">GO Home page</Link>
            </Layout>
    )
}

export default AboutView;