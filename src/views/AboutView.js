import {Link} from "react-router-dom"
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
const AboutView = () =>{
    const count = useSelector(state => state.counter.value)
    return (
            <Layout title="About View">
                <div className="container">
                    <h1>About View  {count}</h1>
                    <Link to="/" className="btn btn-primary">GO Home page</Link>
                </div>
            </Layout>
    )
}

export default AboutView;