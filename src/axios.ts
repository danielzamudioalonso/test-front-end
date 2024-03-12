import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://eshop-deve.herokuapp.com/api/v2/',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzM DZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_ TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrq AF fnPldd8QzWvgVQ`
    }
})

export const getOrders = async() => {
    return await axiosInstance.get('orders')
}