import React from 'react'

const Footer = () => {
    
    const date= new Date().getFullYear();
    console.log(date)
  return (
   <>
    <footer className="ambuj w-100 bg-light text-center">
        <p className='pt-3'>© {date} Ambuj Singh. All Rights Reserved | Terms and Conditions</p>
    </footer>
   </>
  )
}

export default Footer