import { useState } from 'react'
import { TfiMenu } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

function Navbar() {
    const [state, setState] = useState(false)

    return(
        <>
            <div className='h-12 w-full bg-red-200 flex shadow-md'>
                <button onClick={() => setState(!state)} className='mx-auto'>
                    <TfiMenu className='text-3xl'/>
                </button>

               
            </div>

            <div>
                {
                    state && (
                        <div className='w-full flex flex-col items-center shadow-md'>
                            <Link to='/' className='h-12 w-full py-2 text-center bg-red-100'
                            onClick={() => state(false)}>Home</Link>
                            <Link to='/about' className='h-12 w-full py-2 text-center bg-red-100'
                            onClick={() => state(false)}>About</Link>
                            <Link to='/articles' className='h-12 w-full py-2 text-center bg-red-100'
                            onClick={() => state(false)}>Articles</Link>
                            <Link to='/contact' className='h-12 w-full py-2 text-center bg-red-100'
                            onClick={() => state(false)}>Contact</Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Navbar