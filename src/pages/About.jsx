import Skills from '../components/Skills'
import avatar from '/src/assets/images/avatar.jpg'
import landscape from '/src/assets/images/landscape.jpeg'


function About(){
    return(
        <>
            <div className='mt-5 '>
                <div className='p-5 flex justify-between items-center justify-start'>

                    <img src={avatar} alt='profile picture' className='h-36 rounded rotate-5 shadow-lg'/>
                    
                    <section className='p-2'>

                        <h1 className='font-medium text-lg text-right'>Gustavo de Magalhães</h1>

                        <p className='text-right'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ducimus sequi consequuntur amet molestias ad mollitia. Pariatur veniam neque temporibus quo exercitationem.
                        </p>

                    </section>
                    
                </div>

                <section className='relative flex'>

                    <img src={landscape} alt='landscape' className='h-90 w-90 m-auto rounded object-cover opacity-80'/>

                    <h1 className='absolute px-10 py-35 text-4xl font-bold text-white'>Lorem Ipsum</h1>
                    <h1 className='absolute px-10 py-45 text-3xl font-medium text-white'>some text</h1>
                    <h1 className='absolute px-10 py-70 text-3xl font-medium text-white'>
                        <button className='bg-white h-12 w-46 text-sky-800 opacity-80 rounded'>teste</button>
                    </h1>

                </section>

                <section className='p-6'>

                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officiis suscipit tenetur veniam numquam cum placeat ducimus atque. In alias provident illum! Error et eos quibusdam expedita vero atque fugiat?
                    </p>


                    <div className='mt-5 bg-sky-300 p-3 rounded-lg shadow-lg'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas dolorem vel, officiis, atque porro nisi sint voluptatum, quo quas modi velit exercitationem corrupti ea veritatis eos maxime praesentium temporibus.</p>
                    </div>


                    <div>
                        <Skills/>
                    </div>

                </section>

            </div>
        </>
    )
}

export default About