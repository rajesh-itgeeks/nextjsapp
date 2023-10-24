import axios from "axios";
export default class ProductServices {
    productListAll = async() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: process.env.APIURL+'/product',
            headers: {},
            data : {},
        };
        try {
            const result = await axios.request(config);
            return result;
        } catch (error) {
            console.log(error);
        }        
    }

    singleProduct = async(item) => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: process.env.APIURL+'/products/'+item,
            headers: {},
            data : {},
        };
        try {
            const result = await axios.request(config); 
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    productSearch = async(item) => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: process.env.APIURL+'/products/'+item,
            headers: {},
            data : {},
        };
        try {
            const result = await axios.request(config); 
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    groupAdd = async(item) => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: process.env.APIURL+'/addgroup',
            headers: {},
            data : item,
        };
        try {
            const result = await axios.request(config); 
            return result;
        } catch (error) {
            console.log(error);
        }
    }


    
}