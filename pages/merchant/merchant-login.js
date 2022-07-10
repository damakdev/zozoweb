import React from 'react'
import Image from "next/image";
import logo from "../../assets/logo.svg"

const MerchantLogin = () => {
  return (
    <div>
     <div className="flex">
      <div>
        <div className='pt-20'>
        <Image src={logo} />
        </div>
        
      </div>
     </div>
    </div>
  )
}

export default MerchantLogin
