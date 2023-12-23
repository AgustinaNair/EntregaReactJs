import ItemListContainer from "../components/ItemListConteiner/ItemListContainer";
import { useParams } from 'react-router-dom';
import { useGetProductByCategory } from "../hooks/useProducts";

export const Category = () => {

    const {id} = useParams ()
    const {productData} = useGetProductByCategory(id)

  return (
    <ItemListContainer products={productData}/>
  )
}
