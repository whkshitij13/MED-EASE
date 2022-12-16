import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <>
    
      
     <div style={{backgroundImage:'url("https://www.incimages.com/uploaded_files/image/1920x1080/getty_665996594_413303.jpg")',
     backgroundRepeat:'no-repeat',
     opacity:'1',
     backgroundSize:'cover'}} >
      <form  action="/result">
      <div style={{display:'flex',justifyContent: 'center',paddingTop:'10px'}}>
      <h1 style={{color:'white',textShadow: '2px 2px 4px #000000'}}>Select Symptoms</h1>
      </div>
      <div class='Textdesign'>Symptom 1
      <a class="dropdown">
  <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Choose
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/">Action</a>
    <a class="dropdown-item" href="/">Another action</a>
    <a class="dropdown-item" href="/">Something else here</a>
  </div>

</a>

      </div>
      
 
      <div class='Textdesign'>Symptom 2
      <a class="dropdown">
  <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Choose
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/">Action</a>
    <a class="dropdown-item" href="/">Another action</a>
    <a class="dropdown-item" href="/">Something else here</a>
  </div>

</a>
      </div>
      <div class='Textdesign'>Symptom 3
      <a class="dropdown">
  <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Choose
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/">Action</a>
    <a class="dropdown-item" href="/">Another action</a>
    <a class="dropdown-item" href="/">Something else here</a>
  </div>

</a>
      </div>
      <div class='Textdesign'>Symptom 4
      <a class="dropdown">
  <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     Choose
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/">Action</a>
    <a class="dropdown-item" href="/">Another action</a>
    <a class="dropdown-item" href="/">Something else here</a>
  </div>

</a>
      </div>
  
      <div class='Textdesign'>Symptom 5
      <a class="dropdown">
  <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Choose
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/">Action</a>
    <a class="dropdown-item" href="/">Another action</a>
    <a class="dropdown-item" href="/">Something else here</a>
  </div>

</a>
      </div>
      <div style={{display: 'flex', justifyContent: 'center',paddingBottom:'40px'}} >
      <button   class="btn btn-primary "  type='submit'>
    Predict</button>
      </div>
</form>
      </div>
      </>
  )
}

export default Home