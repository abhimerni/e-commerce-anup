import React, { useEffect } from 'react'
import api from '../assets/axiosApi'

const Home = () => {
  const fetchAllProducts = async () =>{
    try {
      const res = await api.get('/product/all');
      console.log('res', res.data)
    } catch (error) {
      console.log('error', error)
    }
  }
  useEffect(()=>{
    fetchAllProducts()
  },[])

  return (
    <div>
        <h1 className="text-7xl">Hello from home page</h1>
    </div>
  )
}

export default Home