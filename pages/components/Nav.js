import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'


function Nav() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-warning ">
  <div className="container-fluid">
    <a className="navbar-brand">Urban Youth</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Our programmes
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our impact
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Work with us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
         
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Support us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a className="dropdown-item" >Action</a></li>
            </Link>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>        )
}

export default Nav
