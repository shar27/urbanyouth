import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'


function Nav() {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-warning ">
  <div class="container-fluid">
    <a class="navbar-brand">Urban Youth</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About us
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Our programmes
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our impact
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Work with us
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
         
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Support us
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
            <Link href="#">
            <li><a class="dropdown-item" >Action</a></li>
            </Link>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>        )
}

export default Nav
