import Image from "next/image";
import MainLogo from "@/assets/images/champ-ai-logo.png"

const Logo = () => {
    return (
        <div className="flex items-center justify-center text-3xl font-quicksand font-bold tracking-wider text-primary-orange">
            <span>
                CHAMP
            </span>
            <Image src={MainLogo.src} height={169} width={188} className="w-6 h-6 object-contain mx-2" alt="logo" />
            <span>
                AI
            </span>
        </div>
    )
};

export default Logo;
