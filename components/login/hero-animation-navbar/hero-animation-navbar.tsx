import Image from "next/image";

const HeroAnimationNavbar = () => {
    return (
        <div className="flex py-1 px-2 justify-between items-center border-b-2 border-b-primary-dark shadow-md shadow-black/20">
            <p className="font-quicksand text-lg tracking-wider">
                Create Context
            </p>
            <Image src="https://api.dicebear.com/6.x/micah/png?seed=ankanbhattacharya89" alt="" width={40} height={40} className="w-10 h-10 object-contain bg-primary-green border border-primary-dark rounded-full p-[1px]" />
        </div>
    );
};

export default HeroAnimationNavbar;
