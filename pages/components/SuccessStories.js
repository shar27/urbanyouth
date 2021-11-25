import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SuccessStories() {
    return (
     
<div className="row row-cols-1 row-cols-md-2 g-4 mt-4">

  <div className="col">
  
    <div className="card">
      <Image src="/uniform.jpg" 
      width="400"
      height="500"
       className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <figure>
  <blockquote className="blockquote">
    <p>Mollit mollit excepteur sint exercitation ut nostrud qui sit cillum sunt minim cupidatat dolor do.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone xxxxx <cite title="Source Title">John doe, 14</cite>
  </figcaption>
</figure>
      <Link href="/Success">
          <a className="btn btn-primary">Read more</a>
      </Link>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <Image src="/kid.jpg" 
      width="300"
      height="400"
       className="card-img-overlay" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
<figure>
  <blockquote className="blockquote">
    <p>Ipsum in incididunt id tempor aliquip officia ex cillum.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone xxxx <cite title="Source Title">john doe,14</cite>
  </figcaption>
</figure>
        <Link href="/Success">
          <a className="btn btn-primary">Read more</a>
      </Link>
      </div>
    </div>
  </div>
 </div>
        
    )
}

export default SuccessStories
