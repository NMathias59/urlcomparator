import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import stringSimilarity from "string-similarity";

export default function Form() {

    const [url, setUlr] = useState({
        url1: '',
        url2: ''
    })
    const [res, setRes] = useState(

    )

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setUlr(data);
        console.log(res)
        result();
    }

    const result = (url1, url2) => {
        let percent = stringSimilarity.compareTwoStrings(url.url1, url.url2);
        let formatPercent = percent * 100
        setRes(formatPercent);
    };

  useEffect(()=> {
    result(url.url1,url.url2)
  },[])


    return (
        <div className='container'>
            <h1 className=' row justify-content-md-center p-3'> past your urls </h1>
            <form onSubmit={handleSubmit(onSubmit)} className='row p-1 '>
                <input className='p-1 m-2' type="url" placeholder="url1" {...register("url1", { required: true })} />
                <input className='p-1 m-2' type="url" placeholder="url2" {...register("url2", { required: true })} />
                <div className='container row justify-content-md-center p-5' >
                    <input type="submit" className='btn btn-primary col col-lg-2' />
                    <p className='col col-lg-2'>
                        {res + `%`}
                    </p>
                </div>

            </form>
        </div>
    )
}
