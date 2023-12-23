import axios from "axios"

export async function getCategories(id){
    return await axios.get(`https://dummyjson.com/products/categories`)
}