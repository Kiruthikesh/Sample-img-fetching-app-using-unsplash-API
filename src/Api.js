import axios from 'axios';



const images=async (search) => {
    const result=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID NHqkbuWmfSB98HGGKEfrReEkQvRaBau568b9fnounkU'
        },
        params:{
            query:search
        }
    })
    console.log(result.data)     
    return result;
    }  
    
export default images;