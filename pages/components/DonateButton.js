import React from 'react'
import Link from 'next/link'

function DonateButton() {
    return (
        <div className="d-flex justify-content-center bg-warning">
        <div className="text-center">
        <h1 className="text-white display-4 mb-4">Want to support us?</h1>
        <p className="text-white fw-bold lead pb-2">Magna deserunt eiusmod qui adipisicing labore occaecat.</p>
        <p className="text-white fw-bold lead pb-2">Magna deserunt eiusmod qui adipisicing labore occaecat.</p>
        <p className="text-white fw-bold lead pb-2">Magna deserunt eiusmod qui adipisicing labore occaecat.</p>
            <Link href="/Donation">
                <a className=" stretched-link fw-bold btn btn-danger text-white ">Donate</a>
            </Link>
            </div>
        </div>
    )
}

export default DonateButton
