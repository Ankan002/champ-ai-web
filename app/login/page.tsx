import { Logo } from "@/components/elements";
import { LoginButton, LoginHeroAnimation } from "@/components/login";

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
					<div className="flex-1 w-full flex flex-col justify-center px-5 lg:w-3/4 lg:items-start">
						<h1 className="font-quicksand text-4xl font-bold tracking-widest mt-6">
						&ldquo;The power of ENCYCLOPEDIA in the PaLM of your
							hands.
						</h1>

						<p className="text-xl font-quicksand tracking-widest mt-10 lg:w-full sm:w-2/3 w-full text-primary-dark/80">
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
