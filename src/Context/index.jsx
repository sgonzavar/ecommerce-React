import { createContext, useState } from 'react'

export const ecommerceCartContext = createContext()

export const EcommerceCartContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpened, setIsProductDetailOpend] = useState(false)
  const openProductDetail = () => setIsProductDetailOpend(true)
  const closeProductDetail = () => setIsProductDetailOpend(false)
  
  return (
    <ecommerceCartContext.Provider value={{ 
      count, 
      setCount,
      isProductDetailOpened,
      openProductDetail,
      closeProductDetail
      }}>
      {children}
    </ecommerceCartContext.Provider>
  )

}
