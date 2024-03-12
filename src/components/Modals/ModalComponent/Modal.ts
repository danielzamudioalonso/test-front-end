import styled, { keyframes } from 'styled-components'

const inAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerModal = styled.div`
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  animation: ${inAnimation} 0.3s ease-out;
`

export const ContentModal = styled('div')({
  backgroundColor: '#fff',
  margin: 'auto',
  border: '1px solid #888',
  borderRadius: '14px',
  width: '80%',
})

export const HeaderModal = styled('div')({
  padding: '15px 20px',
  borderBottom: '1px solid gray',
  display: 'flex',
  justifyContent: 'space-between',
})

export const ContentChildren = styled('div')({
  padding: '15px 20px',
})

export const ButtonsModal = styled('div')({
  display: 'flex',
  justifyContent: 'end',
  padding: '10px 20px 20px',
  gap: '12px',
})
