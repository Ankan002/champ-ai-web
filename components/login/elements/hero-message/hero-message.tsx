import { LoginHeroMessage } from "@/constants/login-hero-messages";
import Image from "next/image";

interface Props {
	message: LoginHeroMessage;
}

const HeroMessage = (props: Props) => {
	const { message } = props;

	return (
		<div
			className={`w-full my-1 flex items-end ${
				message.sender === "user" ? "flex-row-reverse" : "flex-row"
			} ${message.id === 0 ? "mt-auto" : "mt-3"} mb-3`}
		>
			<Image
				src={message.senderImage}
				width={40}
				height={40}
				alt="image"
				className="w-8 h-8 p-1 border border-primary-dark mx-1 rounded-full"
			/>

			<div className="max-w-[75%] px-2 py-1 font-quicksand text-lg rounded-lg bg-secondary-light shadow-md shadow-primary-dark/40">
				{message.text}
			</div>
		</div>
	);
};

export default HeroMessage;
