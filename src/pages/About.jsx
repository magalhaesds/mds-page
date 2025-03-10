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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptatum placeat ab consequuntur adipisci alias. Omnis culpa odio et cupiditate aliquid facilis voluptates, reprehenderit nihil placeat adipisci illo ratione eaque!
                        </p>

                    </section>
                    
                </div>

                <section className=''>

                        <img src={landscape} alt='landscape' className='h-92 m-auto rounded object-cover opacity-80'/>

                        <h1 className='absolute top-5/8 left-1/5 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg'>teste</h1>

                </section>

            </div>
        </>
    )
}

export default About