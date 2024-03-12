import { useEffect, useState } from 'react'
import './App.css'
import { getOrders } from './axios'
import { Order } from './order.interface'
import Page from './pages'

function App() {
  const [orders, setOrders] = useState<Order[]>()

  useEffect(() => {
    const getListOrders = async() => {
      const response = await getOrders()
      setOrders(response.data.orders)
    }

    getListOrders()
  },[])

  return (
    <>
    {
      orders && <Page orders={orders}/>
    }
    </>
  )
}

export default App
