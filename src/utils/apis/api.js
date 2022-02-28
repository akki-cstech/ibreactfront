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
    console.log("page : ", page)
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
    try {
        const res = await axios.post('/loginUser', credentials)
        return res.data
    } catch (error) {
        // console.log('check error', error.response.data)
        return error.response.data
    }
}

export const userRegistration = async formData => {
    // console.log('check formData', formData);
    try {
        const res = await axios.post('/userRegistration', formData)
        // console.log('check res of registered user', res)
        return res.data
    } catch (error) {
        // console.log('check error', error.response.data)
        return error.response.data
    }
}


export const forgotPwd = async email => {
    try {
        const res = await axios.post('/forgotPassword', email)
        console.log('check res', res)
        return res.data
    } catch (error) {
        // console.log('check error', error.response.data)
        return error.response.data
    }
}

export const pendingOrder = async email => {
    try{
        const res = await axios.post("/pendingOrder", email)
        return res.data
    }catch(error){
        return error.response.data
    }
}

export const confirmOrder = async email => {
    try{
        const res = await axios.post("/confirmOrder", email)
        return res.data
    }catch(error){
        return error.response.data
    }
}

export const subscriptionPlan = async email => {
    try{
        const res = await axios.post("/subscriptionPlan", email)
        return res.data
    }catch(error){
        return error.response.data
    }
}

export const highResImage = async email => {
    try{
        const res = await axios.post("/highResImage", email)
        return res.data
    }catch(error){
        return error.response.data
    }
}

export const subPlanOrder = async email => {
    try{
        const res = await axios.post("/subPlanOrder", email)
        return res.data
    }catch(error){
        return error.response.data
    }
}

export const oIDetailsList = async oId => {
    try{
        const res = await axios.post("/oIDetailsList", oId)
        return res.data
    }catch(error){
        return error.response.data
    }
}

export const confirmListImage = async oId => {
    try{
        const res = await axios.post("/confirmListImage", oId)
        return res.data
    }catch(error){
        return error.response.data
    }
}

export const subPlanInfo = async oId => {
    try{
        const res = await axios.post("/subPlanInfo", oId)
        return res.data
    }catch(error){
        return error.response.data
    }
}

export const ivSubPlanInfo = async oId => {
    try{
        const res = await axios.post("/ivSubPlanInfo", oId)
        return res.data
    }catch(error){
        return error.response.data
    }
}

export const getUser = async email => {
    try {
        const res = await axios.post('/getUser', email)
        return res.data
    } catch (error) {
        return error.response.data
    }
}

export const editUserForm = async formData => {
    // console.log('check FormData', formData)
    try {
        const res = await axios.post('/editUserForm', formData)
        return res.data
    } catch (error) {
        return error.response.data
    }
}

export const changePassword = async formData => {
    try {
        const res = await axios.post('/changePassword', formData)
        return res.data
    } catch (error) {
        return error.response.data
    }
}

export const sendMail = async formData => {
    try {
        const res = await axios.post('/sendMail', formData)
        return res.data
    } catch (error) {
        return error.response.data
    }
}

export const ReqForSearch = async formData => {
    try {
        const res = await axios.post('/reqForSearch', formData)
        return res.data
    } catch (error) {
        return error.response.data
    }
}

export const OrderProposalList = async email => {
    try {
        const res = await axios.post('/orderProposalList', email)
        return res.data
    } catch (error) {
        return error.response.data
    }
}

export const ProposalDetails = async data => {
    try {
        const res = await axios.post('/proposalDetails', data)
        return res.data
    } catch (error) {
        return error.response.data
    }
}

export const GetAProposalUser = async data => {
    try {
        const res = await axios.post('/getAProposalUser', data)
        return res.data
    } catch (error) {
        return error.response.data
    }
}

export const ProposalMail = async FormData => {
    try {
        const res = await axios.post('/proposalMail', FormData)
        return res.data
    } catch (error) {
        return error.response.data
    }
}