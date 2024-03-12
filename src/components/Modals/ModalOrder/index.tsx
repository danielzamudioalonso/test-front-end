import { Dispatch, SetStateAction, useState } from 'react'
import { Item, Order } from '../../../order.interface'
import ProductsTable from '../../Tables/ProductsTable'
import ModalComponent from '../ModalComponent'
import AddProductForm from './AddProductForm'
import { useFormik } from 'formik'
import { ButtonFill } from '../../Buttons/button'

type Props = {
  order: Order
  orders: Order[]
  setOrders: Dispatch<SetStateAction<Order[]>>
  setOrderSelected: Dispatch<SetStateAction<Order | undefined>>
}

const ModalOrder = ({ order, orders, setOrders, setOrderSelected }:Props) => {
  const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false)

  const initialValues: Item = {
    id: '',
    name: '',
    price: 0,
    quantity: 0,
    sku: ''
  }

  const formik = useFormik({
    initialValues: initialValues,
    validate: (values) => {
      const errors: Partial<Item> = {}
      if (!values.sku) {
        errors.sku = 'SKU is Required'
      }
      if (!values.name) {
        errors.name = 'Name is Required'
      }
      if (values.quantity < 1) {
        errors.quantity = 0
      }
      if (values.price < 1) {
        errors.price = 0
      }
      return errors
    },
    onSubmit: (values) => {
      const newItem: Item = {
        id: values.name,
        name: values.name,
        price: values.price,
        quantity: values.quantity,
        sku: values.sku
      }
      handleSubmit(newItem)
    }
  })

  const handleSubmit = (newItem: Item) => {
    const updatedOrders: Order[] = orders.map(ord => {
      if (ord.id === order.id) {
        return {
          ...ord,
          items: [
            ...ord.items,
            newItem
          ]
        }
      }
      return ord
    })
    setOrders(updatedOrders)

    formik.resetForm({
      values: initialValues
    })
  }

  return(
    <ModalComponent title={'Num. Order: '+order.number} onClickClose={() => setOrderSelected(undefined)}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {
          isOpenAddModal && 
            <AddProductForm formik={formik} setIsOpen={setIsOpenAddModal} />
        }
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Products
              <ButtonFill onClick={() => setIsOpenAddModal(true)}>Add Product</ButtonFill>
            </div>
        <ProductsTable items={order.items} />
      </div>
    </ModalComponent>
  )
}

export default ModalOrder