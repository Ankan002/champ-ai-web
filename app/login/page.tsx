// import LoginHero from "@/assets/images/login-hero.jpg";
import LoginKeyImage from "@/assets/images/login-key.png";
import { Logo } from "@/components/elements";
import { LoginButton, LoginHeroAnimation } from "@/components/login";
import Image from "next/image";

const LoginPage = () => {
	return (
		<main className="w-full min-h-screen flex flex-col bg-primary-light">
			<div className="w-full h-screen flex items-center flex-row-reverse">
				<div className="w-1/2 h-screen lg:flex lg:flex-col hidden">
					<LoginHeroAnimation />
				</div>
				<div className="flex-1 h-screen flex flex-col px-5">
					<div className="flex pt-3">
						<Logo />
					</div>
					<div className="flex-1 w-full flex flex-col items-center justify-center">
						<Image
							src={LoginKeyImage.src}
							height={460}
							width={778}
							alt="login key"
							className="w-72 h-64 object-contain"
						/>

						<h1 className="font-quicksand text-4xl font-bold tracking-widest mt-6 text-center">
							WELCOME !
						</h1>

						<p className="text-xl font-quicksand text-center tracking-widest mt-4 lg:w-full sm:w-2/3 w-full">
							{"Let's"} embrace the magic and power of knowledge
						</p>

						<LoginButton />
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
