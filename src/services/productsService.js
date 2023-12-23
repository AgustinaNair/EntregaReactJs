import axios from "axios"

/**
 * @name getProducts
 * @description obtengo productos de dummyjson API
 * @param {number} limit 
 * @returns {Promise}
 */
export async function getProducts(limit=20){
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}
export async function getProductById(id){
    return await axios.get(`https://dummyjson.com/products/${id}`)
}
export async function getProductByCategory(category){
    return await axios.get(`https://dummyjson.com/products/category/${category}`)
}