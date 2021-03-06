import React from 'react'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function ResultsBanner() {
    const hoveredStyle = {
        cursor: 'pointer'
    }
    return (
<div className="bg-primary text-center text-white">
<h1 className="display-5 mb-4">Check us out</h1>
  <div className="row">
    <div className="col">
      <h3 className="display-5 fw-bold">Useful links</h3>
            <ul className="list-unstyled lead">
            <Link href="/">
          <li className="text-decoration-none fw-bold">Safeguarding</li>
          </Link>
          <Link href="/">
          <li className="text-decoration-none fw-bold">Sitemap</li>
          </Link>
          <Link href="/">
          <li className="text-decoration-none fw-bold">Accessibility</li>
          </Link>
          <Link href="/">
          <li className="text-decoration-none fw-bold">Terms & conditions</li>
          </Link>
      </ul>
    </div>
    <div className="col">
      <h1 className="display-5 fw-bold">Follow us</h1>
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
    <p className="lead fw-bold">Urban youth is a registered charity</p>
    </div>

    <div className="col">
      <h1 className="display-5 fw-bold">Contact us</h1>
    <p className="lead fw-bold">Email: <span>test@gmail.com</span></p>
    <p className="lead fw-bold">Phone number: <span>00000 676255</span></p>
    <p className="lead fw-bold">Registered address: <span>122 Minories, London EC3N 1NT</span></p>
    </div>

  </div>
</div>
    )
}

export default ResultsBanner
