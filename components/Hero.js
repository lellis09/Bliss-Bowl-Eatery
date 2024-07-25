import React from 'react'


const Hero = () => {
    return(
        <main className='text-white h-screen  -z-10 bg-cover '>
             <img className='opacity-50' src="/Untitled-design.svg"></img>
            <section className='opacity-none w-auto h-auto border-2 border-white'>
                {/* container styled for image */}
                {/* <div className=''>
                   
                </div> */}
                <div className='z-10 relative lg:bottom-[30rem] opacity-none'>
                    <h1 className='text-5xl font-bold pb-4 pt-8'>Welcome to Bliss Bowl</h1>
                    <h3 className='pb-8 text-2xl'>Where every bite is a delight</h3>
                </div>
            
            </section>
            {/* <div className='title-cont flex flex-col justify-center items-center z-10 md:relative 
            lg:bottom-[30rem] md:bottom-[48rem] sm:justify-start'>
                    <h1 className='text-5xl font-bold pb-4 pt-8'>Welcome to Bliss Bowl</h1>
                    <h3 className='pb-8 text-2xl'>Where every bite is a delight</h3>
                </div> */}
        </main>
    )
}

export default Hero
