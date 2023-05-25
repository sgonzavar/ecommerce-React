import { useContext } from 'react'
import { ecommerceCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice } from '../../utils/index'

//component
import OrderCard from '../OrderCard'

import './CheckoutSideMenu.css'

const CheckoutSideMenu = () => {
  const context = useContext(ecommerceCartContext)

  const handleDeleteOrderItem = (id) => {
    const filterDeleteProduct =  context.carProduct.filter(product => product.id != id)
    context.setCarProduct(filterDeleteProduct)
    context.setCount(context.count - 1)
  }

  return (
    <aside className= {`${context.isCheckoutSideMenuOpened ? 'flex' : 'hidden' } product-detail-container flex-col fixed bg-white right-0 border border-black rounded`}  >
      <div className='flex justify-between items-center px-4 py-2'>
        <h2 className='font-medium text-xl'>My order</h2>
        <span>
          <XMarkIcon 
            onClick={() => context.closeCheckoutSideMenu()} 
            className='h-6 w-6 text-black cursor-pointer'
          />
        </span>
      </div>
      <div className='px-6 pt-6 overflow-y-scroll'>
        {
          context.carProduct.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images}
              listenDelete={handleDeleteOrderItem}
            />
          ))
        }
      </div>
      <div className='px-6'> 
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.carProduct)}</span>
        </p>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu


