import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react';
import Link from 'next/link'
export default function AddProduct (){
  const url="http://localhost:3080/addbrands";
   const[data,setData]=useState({
    brandname:'',
    modelname:'',
    price:''
  })
  const {brandname,modelname,price}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  const submitHandler=e=>{
    e.preventDefault();
    axios.post('http://localhost:3080/addbrands',data).then(
      () =>{
        alert('Data send successfully');
        setData({...data,brandname:'',modelname:'',price:''})
    }).catch(err=> console.log(err))
}
  

  return (
    <>
     <nav className=" flex items-center justify-between px-2 py-3 bg-gray-500">
          <div className="">
                <div className="ml-15 flex items-baseline space-x-4">
                  
        <Link href="#">
          <a  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Add Products</a>
        </Link>
     
        <Link href="/Components/fetchproducts">
          <a  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">View Products</a>
        </Link>
      
        <Link href="/Components/deleteproducts">
          <a  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Delete Products</a>
        </Link>
       </div>
        </div>
        </nav>
    <div className='md:container md:mx-auto max-w-lg flex  items-center w-1/2  justify-center content-center h-screen'>
        <form className='flex flex-col items-center bg-zinc-300 max-w-2xl h-1/3 justify-center content-center rounded-md border-black 
        contrast-100 opacity-90' onSubmit={submitHandler} autoComplete='off'>
          <h1 className='text-xl antialiased font-bold flex mt-1'>Add Products</h1>
          <div className='px-4 ml-4 mr-4 flex items-center border-1
        bg-white shadow-sm  mt-11'>
          
  <label>
    Brand Name:
    <input type="text" name='brandname' value={brandname} onChange={changeHandler}/>
  </label>
  </div>
  <div className='px-4 ml-4 mr-4 flex items-center border-1
        bg-white shadow-sm mt-3'>
  <label>
    Model Name:
    <input type="text" name='modelname' value={modelname} onChange={changeHandler}/>
  </label>
  </div>
  <div className='px-4 ml-4 mr-4 flex items-center border-1
        bg-white shadow-sm  mt-3'>
  <label>
    Model Price:
    <input type="text" name='price' value={price} onChange={changeHandler}/>
  </label>
  </div>
  <div>
  <input className='h-10 w-30 px-5 mt-2 bg-slate-400 p-1 rounded hover:bg-slate-700 text-white' type="submit" value="Submit" />
</div>
</form>
</div>
    </>
  )
}