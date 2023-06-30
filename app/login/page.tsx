import LoginHero from "@/assets/images/login-hero.jpg";
import LoginKeyImage from "@/assets/images/login-key.png";
import Image from "next/image";

const LoginPage = () => {
	return (
		<main className="w-full min-h-screen flex flex-col bg-primary-light">
			<div className="w-full h-screen flex items-center">
				<Image
					src={LoginHero.src}
					height={1568}
					width={960}
					alt=""
					className="h-full w-7/12 object-cover rounded-r-xl border-r-2 border-t-2 border-b-2 border-secondary-dark lg:block hidden"
				/>
				<div className="flex-1 h-screen flex flex-col">
					<div></div>
					<div className="flex-1 w-full flex flex-col items-center justify-center p-5">
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

						<p className="text-xl font-quicksand text-center tracking-widest mt-5 lg:w-full sm:w-2/3 w-full">
							{"Let's"} embrace the magic and power of knowledge
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
