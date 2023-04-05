import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class YodlrApi {

    static async register(data) {
        let res = await axios.post(`${BASE_URL}/users`, data);
        console.log(res.data);
    }

    static async getUser(id) {
        let res = await axios.get(`${BASE_URL}/users${id}`)
        return res.data
    }

    static async getUsers() {
        let res = await axios.get(`${BASE_URL}/users`);
        console.log(res.data)
        return res.data;
    }
}

export default YodlrApi;