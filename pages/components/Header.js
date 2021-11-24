import React from 'react'
import Image from 'next/dist/client/image'


function Header() {
    
    const hoveredStyle = {
        cursor: 'pointer'
    };
    
    return (
        <div className="d-flex justify-content-center ">
        
            <Image
            src ="/urban.jpg"
            width="300"
            height="200"
            style={hoveredStyle}
            sx={{
                display: 'flex-inline'}}
            />
      
        </div>
      
       
    )
}

export default Header
