import Image from "next/image";
import Logo from '../../public/Task Hive.png'


const Navbar = () => {
    return (
        <div className=" flex w-full items-center justify-start gap-1 px-10 py-4 text-2xl text-[#494d4e] font-Pacifico font-[900] bg-[#fafafa]">
            <Image className=" cursor-pointer" src={Logo} width={28} height={28} alt="Oluwaseun's Logo" priority/>
            <p>Task Hive</p>
        </div>
    );
}

export default Navbar;