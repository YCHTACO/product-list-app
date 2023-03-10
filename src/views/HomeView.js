import {Link} from "react-router-dom"
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import db from "../lib/db"
import { collection, doc, getDocs} from "firebase/firestore";
import { useState ,useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount} from '../silice/counterSlice'

const HomeView = () =>{
    const [productList, setProductList] = useState([]);
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
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
                <ProductCard product={product}/>
            </div>
        )
    });

    return (
            <Layout title="Product List">
                <div className="container">
                    <h1>Home View</h1>
                    <div className="mb-3">
                        <button onClick={() => dispatch(decrement())} className="btn btn-primary btn-sm me-2">-1</button>
                        <span className="me-2">{count}</span>
                        <button onClick={() => dispatch(increment())} className="btn btn-primary btn-sm me-2">+1</button>
                        <button onClick={() => dispatch(incrementByAmount(10))} className="btn btn-primary btn-sm me-2">
                            +10
                        </button>
                        <button onClick={() => dispatch(incrementByAmount(50))} className="btn btn-primary btn-sm me-2">
                            +50
                        </button>
                    </div>
                    <Link to="/about" className="btn btn-primary">GO About page</Link>
                    <div className="row mt-4" >
                        {productListElement}
                    </div>
                </div>
            </Layout>
    )
}

export default HomeView;