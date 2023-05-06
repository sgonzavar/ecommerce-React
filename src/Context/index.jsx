import { createContext } from 'react'

const ecommerceCartContext = createContext()

export const EcommerceCartContextProvider = ({ children }) => {
  return (
    <ecommerceCartContext.Provider>
      {children}
    </ecommerceCartContext.Provider>
  )

}
