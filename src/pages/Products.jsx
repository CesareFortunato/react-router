import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

function Products() {

    const productsUrl = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(productsUrl)
            .then(res => { setProducts(res.data); })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <Card
                            name={product.title}
                            desc={product.description}
                            price={product.price}
                        />
                    </div>
                )
            })}
        </>
    )



}

export default Products
