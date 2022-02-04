import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const getServerSideProps =async()=>{
  const res=await fetch('http://localhost:3080/getallbrands');
  const data=await res.json();
  console.log(data);
  return{
    props:{data}
  }
}

export default function Home ({data}){
    
     
  return( <>
  <nav className=" flex items-center justify-between px-2 py-3 bg-gray-500">
          <div className="">
                <div className="ml-15 flex items-baseline space-x-4">
                  
        <Link href="/Components/addproducts">
          <a className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" >Add Products</a>
        </Link>
     
        <Link href="/">
          <a className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" >View Products</a>
        </Link>
      
        <Link href="/Components/deleteproducts">
          <a className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" >Delete Products</a>
        </Link>
       </div>
        </div>
        </nav>
  
  {
    
      <div className='md:container md:mx-auto max-w-lg flex  items-center w-1/2  justify-center content-center h-screen'>
      
<table className='align-center border-b border-solid border-seperate border-gray-200 w-1/3 shadow  justify-center mx-auto'>
  <tr className='font-mono'>
    <th className='bg-gray-200 font-mono text-start'>Product ID</th>
    <th className='bg-gray-200 font-mono text-start'>Brand</th>
    <th className='bg-gray-200 font-mono text-start'>Model</th>
    <th className='bg-gray-200 font-mono text-start'>Price</th>
    
  </tr>
      <td >
              {data.map(brand => (
                <tr className='font-mono r' key={brand._id}>{brand._id}</tr>
                
              ))}
              </td>
        <td >
              {data.map(brand => (
                <tr className='font-mono r' key={brand._id}>{brand.brandname}</tr>
                
              ))}
              </td>
          <td>
             {data.map(brand => (
            <tr className='font-mono ' key={brand._id}>{brand.modelname}</tr>
            
          ))} 
          </td>
          <td>
             {data.map(brand => (
            <tr className='font-mono ' key={brand._id}>{brand.price}</tr>
            
          ))} 
          </td>
        
</table>
</div>
  
        }
        
       
  </>)
}