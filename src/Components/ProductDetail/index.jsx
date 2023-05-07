import { useContext } from 'react'
import { ecommerceCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css'

const ProductDetail = () => {

  const context = useContext(ecommerceCartContext)
  console.log(context.isProductDetailOpened)

  return (
    <aside className= {`${context.isProductDetailOpened ? 'block' : 'hidden' } product-detail-container flex-col fixed bg-white right-0 border border-black rounded`}  >
      <div className='flex justify-between items-center px-4 py-2'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <span>
          <XMarkIcon 
            onClick={() => context.closeProductDetail()} 
            className='h-6 w-6 text-black cursor-pointer'
          />
        </span>
      </div>
    </aside>
  )
}

export default ProductDetail


