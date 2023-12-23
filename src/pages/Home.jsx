import { useEffect } from "react";
import ItemListContainer from "../components/ItemListConteiner/ItemListContainer";
import { useGetProducts } from '../hooks/useProducts';

export const Home = () => {
    
    useEffect(() => {
        document.title = "Garbarino"
    })

  const {productsData} = useGetProducts(20)

  return ( 
    <ItemListContainer products={productsData}/>
  )
}
