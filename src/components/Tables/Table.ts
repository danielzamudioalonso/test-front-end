import styled from 'styled-components';

export const Table = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left',
  fontFamily: 'sans-serif',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
  '& > thead > tr': {
    color: '#fff',
    backgroundColor: '#8AAEE0',
  },
  'th, td': {
    padding: '12px 15px',
  },
  '& > tbody > tr:nth-of-type(even)': {
    backgroundColor: '#f3f3f3',
  },
  '& > tbody > tr:last-of-type': {
    borderBottom: '2px solid #8AAEE0',
  },
  '& > tbody > tr:hover': {
    backgroundColor: '#D5DEEF'
  }
});
