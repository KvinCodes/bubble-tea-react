import sabor1 from '../assets/images/bubble1.png';
import sabor2 from '../assets/images/bubble2.png';
import sabor3 from '../assets/images/bubble3.png';
import sabor4 from '../assets/images/bubble4.png';
import sabor5 from '../assets/images/bubble7.png';
import sabor6 from '../assets/images/bubble6.png';

const ServiFlavors = () => {
    return (
        <section className="flex flex-col items-center font-raleway text-xl w-full py-5 px-6 md:px-0">
            <h1 className="text-center font-bold">Do you want to try our flavors?</h1>
            <div className="flex flex-wrap md:flex-row w-full">
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={sabor1} alt="sabor1" className="w-32 h-32" />
                    <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={sabor2} alt="sabor1" className="w-32 h-32" />
                    <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={sabor3} alt="sabor1" className="w-32 h-32" />
                    <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={sabor4} alt="sabor1" className="w-32 h-32" />
                    <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={sabor5} alt="sabor1" className="w-32 h-32" />
                    <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={sabor6} alt="sabor1" className="w-32 h-32" />
                    <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

        </section>
    )
};

export default ServiFlavors;