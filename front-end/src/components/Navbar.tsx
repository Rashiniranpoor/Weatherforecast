import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Navbar() {
    const [active, setActive] = useState(false)
const navigate = useNavigate();
    const handleClick = () => {
      setActive(!active)
    }
    
  return (
    <>
      <nav className='flex items-center flex-wrap bg-blue-500 p-2 '>
        <p >
          <img className='h-12 w-12' src="../src/assets/logo1.png" />
        </p>
        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <p >
              <Link to='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                Home
              </Link>
            </p>
            <p >
              <Link to='reports' onClick={()=>{navigate("contactus")}} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Reports
              </Link>
            </p>
            <p>
              <Link to='aboutus' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                About us
              </Link>
            </p>
            <p>
              <Link to='contactus' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar