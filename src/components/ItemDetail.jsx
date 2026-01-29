import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemDetail() {

  const endPointItems = "https://fakestoreapi.com/products";
  const { id } = useParams();
  const [detailProducts, setDetailProducts] = useState([]);

  useEffect(() => {
        axios.get(`${endPointItems}/${id}`)
            .then(res => { setDetailProducts(res.data); })
            .catch(err => {
                console.log(err);
            });
    }, [id])

  return (
    <>
      <h1>
        sei nel detail di {id}
      </h1>


    </>
  )
}

export default ItemDetail
