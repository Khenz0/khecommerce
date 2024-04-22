/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-white body-font" style={{ backgroundColor: '#131311' }}>
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* para  */}
                    <h1 className='text-center text-2xl font-semibold mb-10 text-white' >What our <span className='text-blue-500'>customers</span> are saying</h1>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.insider.com/656647dbfe5bc6545ebd1229?width=1200&format=jpeg" />
                                <p className="leading-relaxed">"I stumbled upon this music store while searching for a reliable place to buy quality instruments online. From the moment I clicked onto the site, I was impressed by the wide selection of instruments available. Not only did I find the guitar I've been dreaming of, but the purchasing process was smooth, and the instrument arrived promptly and in perfect condition. I'll definitely be coming back here for all my musical needs!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 className="text-blue-300 font-medium title-font tracking-wider text-sm uppercase">Emily S.</h2>
                                <p className="text-gray-500">Music Enthusiast</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn.pixabay.com/photo/2024/01/23/19/47/ai-generated-8528151_1280.jpg" />
                                <p className="leading-relaxed">"As someone just starting their journey into music, finding the right gear can be overwhelming. Thankfully, I discovered this music store, and it's been a game-changer. Not only do they offer a fantastic range of beginner instruments at affordable prices, but their customer service is exceptional. They helped me pick out the perfect guitar and provided valuable advice on accessories and maintenance. Thanks to them, I feel confident diving into my musical aspirations!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 className="text-blue-300 font-medium title-font tracking-wider text-sm uppercase">Alex M.</h2>
                                <p className="text-gray-500">Aspiring Musician</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://framerusercontent.com/images/Hc1frjFAaTPhz8r5y5GOPVzJtcE.png" />
                                <p className="leading-relaxed">"As a professional musician, having reliable equipment is non-negotiable. That's why I trust this music store for all my gear needs. Whether I need to restock on strings, upgrade my studio setup, or find unique instruments for recording sessions, they always deliver top-notch products and unparalleled customer service. Plus, their attention to detail and dedication to customer satisfaction make them stand out from the rest. Highly recommended for musicians of all levels!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 className="text-blue-300 font-medium title-font tracking-wider text-sm uppercase">Sarah B.</h2>
                                <p className="text-gray-500">Professional Musician</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
