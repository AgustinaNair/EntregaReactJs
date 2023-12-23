import { useState, useEffect } from "react"
import { getProducts, getProductById, getProductByCategory } from '../services';


/**
 * @description Custom Hook for get products
 * @returns {Array}
 */
export const useGetProducts = (limit = 10) => {
    const [productsData, setproductsData] = useState([])

    useEffect (() => {
        getProducts(limit)
          .then((res)=>{
            setproductsData(res.data.products)
          })
          .catch(err => console.log(err))
      },[])

      return {productsData}
}

export const useGetProductById = (id) => {
  const [productData, setproductData] = useState({})

  useEffect (() => {
    getProductById(id)
      .then((res)=>{
        setproductData(res.data)
      })
      .catch(err => console.log(err))
  },[id])
  return {productData}
} 
export const useGetProductByCategory = (category) => {
  const [productsData, setproductsData] = useState([])

  useEffect (() => {
    getProductByCategory(category)
      .then((res)=>{
        setproductsData(res.data.products)
      })
      .catch(err => console.log(err))
  },[category])

  return {productsData}
} 
