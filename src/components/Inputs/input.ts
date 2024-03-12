import styled from 'styled-components';

export const Input = styled('input')({
  border: '2px solid #aaa',
  borderRadius: '4px',
  padding: '8px',
  outline: 'none',
  transition: '0.3s',
  '&:focus': {
    borderColor: 'dodgerBlue',
  }
})