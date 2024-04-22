import { useNavigate } from "react-router-dom";

// category 
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/128/355/355081.png',
        name: 'Guitars'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/3100/3100386.png',
        name: 'Basses'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/1527/1527059.png',
        name: 'Keyboards'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/9288/9288585.png',
        name: 'Drums'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/3163/3163456.png',
        name: 'Microphones'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/4345/4345707.png',
        name: 'Mixers'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/2061/2061136.png',
        name: 'Speakers'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/3791/3791429.png',
        name: 'Headphones'
    }
]

const Category = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)}
                                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-gray-900 transition-all hover:bg-gray-800 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
        </div>
    );
}

export default Category;