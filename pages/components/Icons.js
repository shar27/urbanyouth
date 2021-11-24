import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function Icons() {
    
    const hoveredStyle = {
        cursor: 'pointer'
    }
    
    return (
        <div className="d-flex justify-content-start">
        <FacebookIcon
          onClick={event => window.location.href='http://uylondon.org.uk/'}
          style={hoveredStyle}
          fontSize ="large"
          sx={{
              display: 'flex-inline'
          }}
          />
          <InstagramIcon
          onClick={event => window.location.href='http://uylondon.org.uk/'}
          style={hoveredStyle}
          fontSize ="large"
          sx={{
              display: 'flex-inline'
          }}
          />
        </div>
        
    )
}

export default Icons
