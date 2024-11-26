import footer from '../assets/images/cafe-removebg-preview.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer
        className="bg-[#5b4b45] text-white flex flex-row justify-center md:justify-between items-center py-6 md:py-12 px-28 md:px-8 lg:px-28 w-full">
        <div className="flex flex-col justify-center items-center">
            <img src={footer} className="w-32" alt=""/>
            <div className="flex flex-row">
                <i className="fa-brands fa-facebook text-white text-2xl p-5"></i>
                <i className="fa-brands fa-instagram text-white text-2xl p-5"></i>
                <i className="fa-brands fa-whatsapp text-white text-2xl p-5"></i>
            </div>
        </div>
        <div className="flex flex-col md:block">
            <h1 className="font-bold text-lg">Follow us</h1>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>

        <div className="flex flex-col md:block">
            <h1 className="font-bold text-lg">Contact Info</h1>
            <p>contactinfo@gmail.com</p>
            <p>+503 87989898</p>
            <p>1234 street name, city, country</p>
        </div>
        <div className="flex flex-col md:block">
            <h1 className="font-bold text-lg">Navigation</h1>
            <p>Home</p>
            <p>Services</p>
            <p>About us</p>
        </div>
    </footer>
    )
};

export default Footer;