import React from 'react'
import AccountCard from '../components/Account/Card'
import { data } from '../components/Account/data'
import CustomerLayout from '../components/CustomerLayout'


function Account() {

      const accountCard = data.map((item, index)=>{
                  return <AccountCard image={item.image} key={index} para={item.para} title={item.item}/>
      })


  return (
    <CustomerLayout>
      <div>
            <h3>Your Account</h3>
{accountCard}
      </div>
    </CustomerLayout>
  )
}

export default Account