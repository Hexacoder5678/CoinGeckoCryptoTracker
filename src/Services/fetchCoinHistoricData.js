import axios from "axios";
import axiosInsatnce from "../helpers/axiosInstance";

export async function fetchCoinHistoricData(id,interval,days=7,currency='usd'){
    try{
        const response=await axiosInsatnce.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
        return response.data;
    }catch(error){
        console.error(error);
        return null;
    }
}