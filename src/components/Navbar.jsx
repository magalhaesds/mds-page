import { useState } from 'react'
import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

function Navbar() {
    const [state, setState] = useState(false)

    return(
        <>
            <div className='h-12 w-full bg-sky-200 flex shadow-md'>
                <button onClick={() => setState(!state)} className='mx-auto h-12 w-full justify-center items-center flex text-2xl'>
                    {state ? <TfiAngleUp/> : <TfiAngleDown/>}
                </button>

               
            </div>

            <div>
                {
                    state && (
                        <div className='w-full flex flex-col items-center shadow-md'>
                            <Link to='/' className='h-12 w-full py-2 text-center bg-sky-100'
                            onClick={() => setState(!state)}>Home</Link>
                            <Link to='/about' className='h-12 w-full py-2 text-center bg-sky-100'
                            onClick={() => setState(!state)}>About</Link>
                            <Link to='/articles' className='h-12 w-full py-2 text-center bg-sky-100'
                            onClick={() => setState(!state)}>Articles</Link>
                            <Link to='/contact' className='h-12 w-full py-2 text-center bg-sky-100'
                            onClick={() => setState(!state)}>Contact</Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Navbar