import styled from 'styled-components'

export const Button = styled('button')({
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  '&:hover': {
    cursor: 'pointer',
    opacity: '80%'
  }
})

export const ButtonFill = styled(Button)({
  color: 'white',
  backgroundColor: '#395886'
})

export const ButtonLine = styled(Button)({
  border: '1px solid #395886',
  color: '#395886',
  backgroundColor: 'transparent'
})