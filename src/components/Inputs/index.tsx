import { FormikProps, getIn } from 'formik'
import { Input } from './input'
import { Item } from '../../order.interface'

type Props = {
  type: 'text' | 'number'
  name: string
  placeholder: string
  formik: FormikProps<Item>
}

const InputComponent = ({ type, name, placeholder, formik }:Props) => {
  return(
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
      <label style={{ fontSize: '15px', display: 'flex' }}>{name}:</label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={String(getIn(formik.values, name))}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        style={getIn(formik.errors, name) ? {
          border: '2px solid red'
        } : {}}
      />
      {
        (type === 'number' ? !getIn(formik.errors, name) : getIn(formik.errors, name)) && getIn(formik.touched, name) &&
          <span style={{ color: 'red', fontSize: '10px', textAlign:'start' }}>
            {getIn(formik.errors, name)}
          </span>
      }
    </div>
  )
}

export default InputComponent