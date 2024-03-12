import { useEffect, useState } from 'react'
import OrdersTable from '../components/Tables/OrdersTable'
import { Order } from '../order.interface'
import ModalOrder from '../components/Modals/ModalOrder'

type Props = {
  orders: Order[]
}

const Page = ({ orders }:Props) => {
  const [listOrders, setListOrders] = useState<Order[]>(orders)
  const [orderSelected, setOrderSelected] = useState<Order | undefined>(undefined)

  useEffect(() => {
    const updateOrderSelected = listOrders.find(ord => ord.id === orderSelected?.id)
    updateOrderSelected && setOrderSelected(updateOrderSelected)
  },[listOrders])

  return (
    <>
      {
        orderSelected && <ModalOrder order={orderSelected} orders={listOrders} setOrders={setListOrders} setOrderSelected={setOrderSelected} />
      }
      <h1>Orders</h1>
      <OrdersTable orders={listOrders} setOrderSelected={setOrderSelected}/>
    </>
  )
}

export default Page