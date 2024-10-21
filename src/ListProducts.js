import { useEffect, useState } from "react";
import axios from "axios";
import './assets/css/layout.css';


const ListProducts=()=>
{

    const [lstproducts, setLstProducts]=useState([]);

    useEffect(()=>
    {

        const LaydulieutuAPI= async ()=>
        {
            try
            {
                const res= await axios.get("https://fakestoreapi.com/products/"); /*Cau lenh 1*/
                setLstProducts(res.data);/*Cau lenh 2*/

            }
            catch (err)
            {
                console.log(err.message);
            }

        }

        LaydulieutuAPI();

    }

    );

    return (
        <div>

                {
                    lstproducts.map(phantu=>{
                        return (
                            <div class="product">
                                <img src={phantu.image} alt="Sản phẩm 1"/>
                                <div class="product-info">
                                    <h2 class="product-title">{phantu.title}</h2>
                                    <p class="product-price">Giá: {phantu.price}$</p>
                                    <p class="product-description">{phantu.description}</p>
                                </div>
                            </div>
                        );
                    })
                }


        </div>
    );
}


export default ListProducts;