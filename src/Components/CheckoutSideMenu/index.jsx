import { useContext } from 'react'
import { ecommerceCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'

//component
import OrderCard from '../OrderCard'

import './CheckoutSideMenu.css'

const CheckoutSideMenu = () => {
  const context = useContext(ecommerceCartContext)

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
      <div className='px-6'>
        {
          context.carProduct.map(product => (
            <OrderCard 
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images}
            />
          ))
        }
      </div>
    </aside>
  )
}

export default CheckoutSideMenu


