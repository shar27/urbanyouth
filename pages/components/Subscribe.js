import React from 'react'

function Subscribe() {
    return (
        <div className="bg bg-light d-flex justify-content-center">
            <h1 className="display-4 text-center ">Subscribe to our newsletter</h1>
            <form className="container mt-4"> 
           
                <input className="form-label" placeholder="First name"></input>
                
                <input className="form-label" placeholder="Second name"></input>
                <input className="form-label" placeholder="Email"></input>
                <input className="form-label" placeholder="Company (if applicable)"></input>
                <button className="btn btn-primary  fw-bold">Submit</button>
            </form>
        </div>
    )
}

export default Subscribe
