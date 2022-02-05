import axios from "axios";
import { BASE_URL } from "./baseURL";
axios.defaults.baseURL = BASE_URL;

export const getSearchRecord = async (id) => {
    try {
        const res = await axios.get(`/getSearchRecord_NonArcheived/${id.id}/0/${id.person}/${id.location}/${id.age}/${id.orientation}`);
        return { res }
    } catch (error) {
        return { error };
    }
};


export const getSearchRecordByPageNumber = async (id, page) => {
    console.log("page : ",page)
    try {
        const res = await axios.get(`/getSearchRecord_NonArcheived/${id}/${id}/0/0/0/${parseInt(page)}`);
        // console.log(res);
        return { res }
    } catch (error) {
        return { error };
    }
};

export const loginUser = async credentials => {
    // console.log('check credentials', credentials);
    try{
        const res = await axios.post('/loginUser', credentials)
        return res.data
    }catch(error){
        return error
    }
}
