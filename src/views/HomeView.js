import {Link} from "react-router-dom"
import Layout from "../components/Layout";
import db from "../lib/db"
import { collection, doc, getDocs} from "firebase/firestore";
import { useState ,useEffect} from "react";


const HomeView = () =>{
    const [productList, setProductList] = useState([]);

    useEffect(() =>{ 
        //畫面渲染後會被執行
        fetchProductList();
    }, [])

    const fetchProductList = async () => {
        console.log("==========準備撈取資料==========");
        const productDocList = await getDocs(collection(db , "productList"));
        const newsetProductList =[];
        productDocList.forEach(doc =>{
            const product =doc.data();
            product.id=doc.id;
            newsetProductList.push(product);
        })
        setProductList(newsetProductList);
        console.log(newsetProductList);
        console.log("==========撈取資料完畢==========");
    };

    const productListElement = productList.map(product => {
        return (
            <div className="col-md-4" key={product.id}>
                <div className="card">
                    <div className="card-body">
                        <h5>{product.name}</h5>
                        <p>$ {product.price}</p>
                    </div>
                </div>

            </div>
        )
    });

    return (
            <Layout title="Product List">
                <h1>Home View</h1>
                <Link to="/about" className="btn btn-primary">GO About page</Link>
                <div className="container">
                    <div className="row">
                        {productListElement}
                    </div>
                </div>
            </Layout>
    )
}

export default HomeView;