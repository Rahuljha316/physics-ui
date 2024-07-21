import React from 'react'

function NavBar() {
  return (
    <div className='flex justify-around mt-8'>
        <div>
            Logo
        </div>
        
        <div className='flex justify-between gap-9'>
            <div>
                Login
            </div>
            <div>
                Register
            </div>

        </div>
    </div>
  )
}

export default NavBar