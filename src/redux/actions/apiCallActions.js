import axios from 'axios';

export const apiCall = () => {
    return async(dispatch)=>{
        try{
            const url = 'https://my-json-server.typicode.com/typicode/demo/posts'
            const response = await axios.get(url)
            dispatch({
                type: "SET_POST",
                payload: response.data
            });
        }catch (error){
            console.log(error)
        }
    }

  };

