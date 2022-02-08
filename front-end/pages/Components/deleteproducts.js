import React from 'react'
import axios from 'axios';
import {useQuery} from 'react-query';
import { useState, useEffect } from 'react'
import Link from 'next/link'
export default class DeleteProduct extends React.Component {  
     
    state = {  
    posts: []  
  }  
    
  componentDidMount() {  
    axios.get(`http://localhost:3080/getallbrands`)  
      .then(res => {  
        const posts = res.data;  
        this.setState({ posts });  
      })  
  }  
    
  deleteRow(_id, e){  
    axios.delete(`http://localhost:3080/deletebrands/${_id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item._id !==_id);  
        this.setState({ posts });  
      })  
    
  } 
  render(){ 
  return (<>
   <nav className=" flex items-center justify-between px-2 py-3 bg-gray-500">
          <div className="">
                <div className="ml-15 flex items-baseline space-x-4">
                  
        <Link href="/Components/addproducts">
          <a  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Add Products</a>
        </Link>
     
        <Link href="/Components/fetchproducts">
          <a  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">View Products</a>
        </Link>
      
        <Link href="#">
          <a  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Delete Products</a>
        </Link>
       </div>
        </div>
        </nav>
    
    
  
        <div className='md:container md:mx-auto max-w-lg flex  items-center w-1/2  justify-center content-center h-screen'>
    
        <table className='align-center border-b border-solid border-seperate border-gray-200 w-1/3 shadow  justify-center mx-auto'>  
            <thead>  
              <tr className='font-mono'>  
                   
                  <th className='bg-gray-200 font-mono text-start'>Brand Name</th>  
                  <th className='bg-gray-200 font-mono text-start'>Model Name</th>  
                  <th className='bg-gray-200 font-mono text-start'>Price</th> 
                  <th className='bg-gray-200 font-mono text-start'></th>  

              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.posts.map((post) => (  
                <tr className='font-mono' key={post._id}>  
                   
                  <td>{post.brandname}</td>  
                  <td>{post.modelname}</td> 
                  <td>{post.price}</td>  
                  <td>  
                    <button className="h-8 w-20 bg-slate-400 p-1 rounded hover:bg-slate-700 text-white justify-center content-center" onClick={(e) => this.deleteRow(post._id, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
      
    </>)
  }

}


