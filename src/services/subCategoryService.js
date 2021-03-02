import axios from 'axios';
import { API_BASE } from "../Constant"

const fetchSubCategory = async (companyID, categoryID) => {
    const res = await axios.get(
        `${API_BASE}company/${companyID}/product?product_category=${categoryID}`
    )
    return res;
};

export { fetchSubCategory }