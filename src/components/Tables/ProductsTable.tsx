import { Item } from '../../order.interface'
import { Table } from './Table'

type Props = {
  items: Item[]
}

const ProductsTable = ({ items }:Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Sku</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          items && items.map(item => (
            <tr key={item.id}>
              <td>{item.sku}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default ProductsTable