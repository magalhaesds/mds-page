import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'

function Skills() {
    return(
        <>

            <section className='mt-5'>

                <h1 className='p-5 text-lg text-center font-medium'>Front End Skills</h1>

                <div className='grid grid-cols-2 gap-5'>

                    <div className='flex'>
                        <div className='h-14 w-14 shadow flex items-center justify-center rounded-lg'>
                            <FaReact className='h-10 w-10 text-[#61DBFB]'/>
                        </div>
                        <div className='px-2 flex'>
                            <h1 className='text-lg font-medium flex items-center'>ReactJS</h1>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='h-14 w-14 shadow flex items-center justify-center rounded-lg'>
                            <FaJs className='text-amber-300 h-10 w-10 '/>
                        </div>
                        <div className='px-2 flex'>
                            <h1 className='text-lg font-medium flex items-center'>JavaScript</h1>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='h-14 w-14 shadow flex items-center justify-center rounded-lg'>
                            <FaHtml5 className='text-amber-600 h-10 w-10 '/>
                        </div>
                        <div className='px-2 flex'>
                            <h1 className='text-lg font-medium flex items-center'>HTML</h1>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='h-14 w-14 shadow flex items-center justify-center rounded-lg'>
                            <FaCss3Alt className='text-[#2965f1] h-10 w-10 '/>
                        </div>
                        <div className='px-2 flex'>
                            <h1 className='text-lg font-medium flex items-center'>CSS</h1>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='h-14 w-14 shadow flex items-center justify-center rounded-lg'>
                            <RiTailwindCssFill className='text-sky-500 h-10 w-10 '/>
                        </div>
                        <div className='px-2 flex'>
                            <h1 className='text-lg font-medium flex items-center'>Tailwind</h1>
                        </div>
                    </div>

                </div>

                

            </section>
            
        </>
    )
}

export default Skills