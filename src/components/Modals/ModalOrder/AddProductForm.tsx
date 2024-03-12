import { FormikProps } from 'formik'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Item } from '../../../order.interface'
import { ButtonFill, ButtonLine } from '../../Buttons/button'
import ModalComponent from '../ModalComponent'
import InputComponent from '../../Inputs'

type Props = {
  formik: FormikProps<Item>
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
const AddProductForm = ({ formik, setIsOpen }:Props) => {

  const manualValidate = (fields: string[], formik: FormikProps<Item>) => {
    fields.forEach(field => {
      formik.setFieldTouched(field)
    })
  }

  const handleOnClickCancel = () => {
    setIsOpen(false)
    formik.resetForm()
  }

  const handleOnAdd = () => {
    if (formik.isValid) {
      formik.submitForm()
      setIsOpen(false)
    }
  }

  useEffect(() => {
    manualValidate(['sku', 'name', 'quantity', 'price'], formik)
  }, [])

  return (
    <ModalComponent title='Add New Product' ContentModalStyle={{ width: '50%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <InputComponent
              type='text'
              placeholder='SKU'
              name='sku'
              formik={formik}
            />
            <InputComponent
              type='text'
              placeholder='Name'
              name='name'
              formik={formik}
            />
            <InputComponent
              type='number'
              placeholder='Quantity'
              name='quantity'
              formik={formik}
            />
            <InputComponent
              type='number'
              placeholder='Price'
              name='price'
              formik={formik}
            />
          </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <ButtonLine onClick={handleOnClickCancel}>Cancel</ButtonLine>
          <ButtonFill onClick={handleOnAdd} disabled={!formik.isValid}>Add</ButtonFill>
        </div>
      </div>
    </ModalComponent>
  )
}

export default AddProductForm