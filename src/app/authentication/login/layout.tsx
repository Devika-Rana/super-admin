import Footer from '@/GlobalComponents/footer/Footer'
import Header from '@/GlobalComponents/Header'
import React from 'react'

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer />
    </div>
  )
}

export default Layout