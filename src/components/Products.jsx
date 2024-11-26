import product1 from '../assets/images/bubbletaro.jfif';
import product2 from '../assets/images/bubble matcha.jfif';
import product3 from '../assets/images/bubble caramel.jfif';
import product4 from '../assets/images/bubbletaro.jfif';
import product5 from '../assets/images/bubblefresa.jfif';

const Products = () => {
    return (
        <section className="flex flex-col font-raleway w-full">
        <div className="flex flex-row pt-6 pb-2 justify-center items-center text-black font-bold hover:text-[#5b4b45]">
            <h1 className="px-2 md:px-8">Flavors</h1>
            <h1 className="px-2 md:px-8">Places</h1>
            <h1 className="px-2 md:px-8">Prices</h1>
        </div>
        <div className="flex flex-col lg:flex-row px-14 py-5">
            <div className="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                <div className="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                    <img src={product1} className="w-40 md:w-56 lg:w-40" alt="" />
                    <div className="pt-4 w-full">
                        <p className="text-center font-bold">Lorem, ipsum dolor.</p>
                        <h1 className="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                        <center>
                            <button
                                className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                now</button>
                        </center>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                <div className="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                    <img src={product2} className="w-40 md:w-56 lg:w-40" alt="" />
                    <div className="pt-4 w-full">
                        <p className="text-center font-bold">Lorem, ipsum dolor.</p>
                        <h1 className="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                        <center>
                            <button
                                className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                now</button>
                        </center>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                <div className="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                    <img src={product3} className="w-40 md:w-56 lg:w-40" alt="" />
                    <div className="pt-4 w-full">
                        <p className="text-center font-bold">Lorem, ipsum dolor.</p>
                        <h1 className="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                        <center>
                            <button
                                className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                now</button>
                        </center>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                <div className="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                    <img src={product4} className="w-40 md:w-56 lg:w-40" alt="" />
                    <div className="pt-4 w-full">
                        <p className="text-center font-bold">Lorem, ipsum dolor.</p>
                        <h1 className="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                        <center>
                            <button
                                className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                now</button>
                        </center>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-">
                <div className="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                    <img src={product5} className="w-40 md:w-56 lg:w-40" alt="" />
                    <div className="pt-4 w-full">
                        <p className="text-center font-bold">Lorem, ipsum dolor.</p>
                        <h1 className="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                        <center>
                            <button
                                className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                now</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};

export default Products;