import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({product}) => {
    const productItem = products?.map((product) => (
        <div key={product.id} className='hover:cursor-pointer  group relative overflow-hidden md:w-[48%] lg:w-[23%] mt-7 p-4 border-zinc-200	 flex flex-col items-center'>
            <Link to={`/product/${product.id}`}>
                <img src={product.images[0]} className='w-full h-[300px] object-contain' alt="" />
            </Link>
            <p className='text-red-500 font-[500]'>{product.discountPercentage} %</p>
            <h5 className='line-clamp-1 w-[48%] text-center'>{product.description}</h5>
            <h3 className='text-[21px] font-[500] text-center'>{product.title}</h3>
            <p className='font-bold'>{product.dimensions.width} x {product.dimensions.height} cm</p>
            <p className='text-[yellowgreen] font-bold mb-20'>{product.price} $</p>
            <div className='flex gap-[140px] group-hover:bottom-8 items-center absolute -bottom-16 justify-between duration-300'>
                <div className='flex gap-[15px] '>
                    <button disabled={offset <= 1} onClick={() => setOffset(p => p - 1)} className='bg-[rgb(245,245,245)] p-[12px] py-[3px]'>-</button>
                    <p>{offset}</p>
                    <button
                        onClick={handleClick} className='bg-[rgb(245,245,245)] p-[12px] py-[3px]'>+

                    </button>
                </div>
                <div className='flex'>
                    <img src={cart} alt="" />
                </div>
            </div>
        </div>

    ))
    return (

        <div>{productItem}</div>
    )
}

export default Cart