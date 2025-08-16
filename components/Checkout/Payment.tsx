import React from 'react'
import { paymentmethods } from './Checkout'
import MobilePayment from './MobilePayment'
import Card from './Card'
interface Paymentprops{
  paymentType:paymentmethods
}
const Payment = ({paymentType}:Paymentprops) => {
  const renderPaymentType = (type:paymentmethods) => {
    switch (type) {
      case "momo":
       return <MobilePayment />
        
      case "card":
        return <Card/>
    }
  }

  return <>{renderPaymentType(paymentType)}</>
}

export default Payment