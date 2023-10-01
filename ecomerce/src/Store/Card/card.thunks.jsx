import { createAsyncThunk } from "@reduxjs/toolkit"

const key = 'pKqUWT3DQWgrvn_24S3T4hjh7qI1vhGgEOrat9TQhtKa7lsFnw'
export const getCarInfo = createAsyncThunk(
    '/Cars/GET',
    async(_, ThunkApi) => {
        try{
            const res = await fetch('/api/v1/todos', {
                headers :{
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer 0b_BsWBDs63sHFrUyEI_uo_ozlE4OFKC98Ajs3wJ4jACRn3v-g`
                }
            })
            
            const data = await res.json()
            if(data) return ThunkApi.fulfillWithValue(data)
        }catch{
            console.log('eror')
            return ThunkApi.rejectWithValue('something went wrong')
        }
    }

)

export const createcarCard = createAsyncThunk(
    'cars/createCarCard',
    async (body, ThunkApi) => {
      try {
        const key = '0b_BsWBDs63sHFrUyEI_uo_ozlE4OFKC98Ajs3wJ4jACRn3v-g';
  
        const res = await fetch('/api/v1/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${key}`,
          },
          body: JSON.stringify(body),
        });
        console.log(res)
  
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
  
        const data = await res.json();
        return ThunkApi.fulfillWithValue(data); 


      } catch (error) {
        console.error('Error:', error);
        throw error; 
      }
    }
  );
  