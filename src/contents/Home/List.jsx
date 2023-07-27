import React from 'react'

// components
import Container from '@/components/Container';


// assets
import GreenFrame from '@/assets/GreenFrame'
import WhiteFrame from "@/assets/WhiteFrame";


function List() {
  return (
    <Container>
    <div className="text-[#4D4D4D] space-y-4 mt-28 ml-8 mb-8 md:mb-0">
        <div className="flex items-center">
          <GreenFrame />
          <h3 className="ml-3">MISSIONS</h3>
        </div>
        <div className="flex items-center">
          <WhiteFrame />
          <h3 className="ml-3">CHARECTERS</h3>
        </div>
        <div className="flex items-center">
          <WhiteFrame />
          <h3 className="ml-3">LORDOUTS</h3>
        </div>
        <div className="flex items-center">
          <WhiteFrame />
          <h3 className="ml-3">EVENTS</h3>
        </div>
      </div>
      </Container>
  )
}

export default List