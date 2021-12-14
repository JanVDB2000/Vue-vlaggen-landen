import axios from "axios";
const clientApiService = axios.create({
    baseURL:'https://restcountries.com/v3.1',
    withCredentials:false,
    headers:{
        Accept:'application',
        'Content-type': 'application',
    }
})

export default {
    getLanden(){
        return clientApiService.get('/all')
    },
}