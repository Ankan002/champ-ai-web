"use client";

import { Button, Skeleton } from "@/components/ui";
import { HeroMessage } from "../elements";
import { HeroAnimationNavbar } from "../hero-animation-navbar";
import { useEffect, useState } from "react";
import {
	typingMessage,
	loginHeroMessages,
	LoginHeroMessage,
} from "@/constants/login-hero-messages";
import { sleep } from "@/utils";
import { Send } from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";
import Image from "next/image";

const LoginHeroAnimation = () => {
	const [messages, setMessages] = useState<Array<LoginHeroMessage>>([]);
	const [isAnswering, setIsAnswering] = useState<boolean>(false);
	const [isTypingDone, setIsTypingDone] = useState<boolean>(false);

	const [typewriterText, { isDone: isTypeWriterDone }] = useTypewriter({
		words: [typingMessage],
		loop: 1,
	});

	const onTypingDone = async () => {
		setIsTypingDone(true);

		if (loginHeroMessages[0])
			setMessages((prev) => [...prev, loginHeroMessages[0]]);

		setIsAnswering(true);
		await sleep(3000);
		setIsAnswering(false);

		if (loginHeroMessages[1])
			setMessages((prev) => [...prev, loginHeroMessages[1]]);
	};

	useEffect(() => {
		if (isTypeWriterDone) {
			onTypingDone();
		}
	}, [isTypeWriterDone]);

	return (
		<div className="flex-1 w-full h-96 flex flex-col bg-secondary-light rounded-md">
			<HeroAnimationNavbar />

			<div className="flex-1 w-full flex flex-col overflow-scroll">
				<div className="flex-1 h-full w-full flex overflow-scroll">
					<div className="flex-1 px-3 w-full flex flex-col py-2">
						{messages.map((message) => (
							<HeroMessage key={message.id} message={message} />
						))}

						{isAnswering && (
							<div
								className="w-full my-1 flex items-end mt-3 mb-3"
							>
								<Image
									src="https://api.dicebear.com/6.x/bottts/png?seed=bot"
									width={40}
									height={40}
									alt="image"
									className="w-8 h-8 p-1 border border-primary-dark mx-1 rounded-full"
								/>

								<Skeleton className="w-[75%] h-32 rounded-lg bg-light-grey shadow-lg shadow-primary-dark/30" />
							</div>
						)}
					</div>
				</div>

				<div className="flex px-2 py-1.5 w-full">
					<div className="bg-secondary-light border border-black flex-grow focus:outline-none text-lg font-quicksand px-2 py-1 rounded-md tracking-wider mr-1">
						{!isTypingDone && typewriterText}
					</div>
					<Button
						className="ml-1 bg-primary-dark hover:bg-primary-dark text-primary-light hover:cursor-default"
						aria-label="send message"
					>
						<Send />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default LoginHeroAnimation;
