import axios from 'axios';
import { API_BASE } from "../Constant"

const fetchProduct = async (companyID, categoryID) => {
    const res = await axios.get(
        API_BASE +
        `company/${companyID}/product?product_category=${categoryID}`)
    return res;
};
const fetchAllProduct = async (companyID) => {
    const res = await axios.get(
        API_BASE +
        `company/${companyID}/product?`)
    return res;
};

export { fetchProduct, fetchAllProduct }