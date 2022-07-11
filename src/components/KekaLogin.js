import React from 'react'
import { Link } from 'react-router-dom'


function KekaLogin() {
  return (
    <>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-7 p-0'>
            <div className='login-image'>
            </div>
          </div>


         



          <div className='col-5'>

            
            <div className='content'>
            <div>
              <img class="logo" src="https://letmecall.keka.com/files/633574be-8541-4f76-8265-163af2e5ee71/orglogo/69581f6f3af14d4c83f5a444de119918.png"></img>
            </div>
             <h3 className='lginbtn'>Log In</h3>
              <p className='orgprara'>Your organization uses following login modes to access RMS</p>

              <Link type="button" class="btn1 btn-primary btn-lg" to={`/login`}>Login</Link>
            </div>
          
          </div>



        </div>
      </div>


    </>
  )
}

export default KekaLogin