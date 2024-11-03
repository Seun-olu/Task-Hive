import Image from "next/image";
import Logo from '../assets/image/taskhive.png'


const Navbar = () => {
    return (
        <div className="fixed top-0 z-50 w-full h-20 flex gap-2 items-center py-6 px-6 sm:px-8 lg:px-12 bg-[#212121] bg-opacity-70 backdrop-blur-md shadow-lg">
            <Image className=" cursor-pointer" src={Logo} width={28} height={28} alt="Oluwaseun's Logo" priority/>
            <p className="text-white font-Jersey">Task Hive</p>
        </div>
    );
}

export default Navbar;