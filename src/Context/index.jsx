import { createContext, useState } from 'react'

export const ecommerceCartContext = createContext()

export const EcommerceCartContextProvider = ({ children }) => {
  // shoping cart / Increment quianity
  const [count, setCount] = useState(0)

  // product detail / open - close
  const [isProductDetailOpened, setIsProductDetailOpend] = useState(false)
  const openProductDetail = () => setIsProductDetailOpend(true)
  const closeProductDetail = () => setIsProductDetailOpend(false)
  
  // Product detail / show product
  const [productShow, setProductShow] = useState({})

  return (
    <ecommerceCartContext.Provider value={{ 
      count, 
      setCount,
      isProductDetailOpened,
      openProductDetail,
      closeProductDetail,
      productShow,
      setProductShow
      }}>
      {children}
    </ecommerceCartContext.Provider>
  )

}
