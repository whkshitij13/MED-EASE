import React from 'react'
const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* <img  src={logo}  alt='alt'/> */}
  <a class="navbar-brand" href="/">MED-EASE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

</nav>
    </div>
  )
}

export default Header