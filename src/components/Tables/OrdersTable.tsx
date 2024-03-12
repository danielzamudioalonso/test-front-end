import { Dispatch, SetStateAction } from "react"
import { Order } from "../../order.interface"
import { Table } from "./Table"

type Props = {
  orders: Order[]
  setOrderSelected: Dispatch<SetStateAction<Order | undefined>>
}

const OrdersTable = ({ orders, setOrderSelected }:Props) => {

  const handleOnClick = (order: Order) => {
    setOrderSelected(order)
  }

  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Number of Order</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.map((order, index) => (
            <tr key={order.id} onClick={() => handleOnClick(order)}>
              <td>{index + 1}</td>
              <td>{order.number}</td>
              <td>{order.name}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default OrdersTable