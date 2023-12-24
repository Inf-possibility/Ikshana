import { useEffect, useState } from "react"
import '../components/css/productlist.css'
import { BoxCard } from "./BoxCard";

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products");
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setProducts(data));
    }, [url]);

    useEffect(() => {
        console.log(counter);
    }, [counter]);

  return (
   <section>
    <BoxCard>  
        <div className="filter" >
            <button className="all" onClick={() => setCounter(counter + 1)}>{counter}</button>
            <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
        </div>
    </BoxCard> 
        { products.map((product) => (
        <div className="card" key={product.id}>
                <p className="id">{product.id}</p>
                <p className="name">{product.name}</p>
                <p className="info">
                    <span>${product.price}</span>
                    <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                </p>
            </div>

        )) }
    </section>
  )
}
