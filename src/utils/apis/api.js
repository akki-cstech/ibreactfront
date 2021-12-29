import axios from "axios";
import { BASE_URL } from "./baseURL";
axios.defaults.baseURL = BASE_URL;

export const getSearchRecord = async (id) => {
    try {
        const res = await axios.get(`/getSearchRecord/${id}/0/0/0/0/1`);
        // console.log(res);
        return { res }
    } catch (error) {
        return { error };
    }
};


export const getSearchRecordByPageNumber = async (id, page) => {
    try {
        const res = await axios.get(`/getSearchRecord/${id}/${id}/0/0/0/${parseInt(page)}`);
        // console.log(res);
        return { res }
    } catch (error) {
        return { error };
    }
};