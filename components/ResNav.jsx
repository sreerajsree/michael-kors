import React from 'react'
import { MdLocationOn } from "react-icons/md";

const ResNav = () => {
  return (
    <nav className='w-full h-full'>
        <div className='bg-white absolute w-full z-40 top-14 left-0'>
            <ul className='font-semibold p-3 text-lg space-y-5 pt-5'>
                <li className='inline-flex items-center text-start'><MdLocationOn className='w-5 h-5 mr-2'/> Find A Store</li>
                <li>New</li>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Michael Kors Collection</li>
                <li>Handbags</li>
                <li>Shoes</li>
                <li>Accessoried</li>
                <li>Watches</li>
                <li>Gifts</li>
            </ul>
        </div>
    </nav>
  )
}

export default ResNav