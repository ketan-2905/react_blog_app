import React from 'react'
import Api from '../api/Posts'
import { useEffect } from 'react'
import { useState } from 'react'

const useAxiosApi = (url , method,object) => {

    const [data , setData] = useState(null)
    const [isPending , setIsPending] = useState(null)
    const [error , setError] = useState(null)

    useEffect(async () => {
            try{
                const response = await Api[method](url , object)
                setData(response.data)
            }catch(err){
                setError(err)
            }
           
    },[url , method , object])

  return {data , isPending ,error};
}

export default useAxiosApi
