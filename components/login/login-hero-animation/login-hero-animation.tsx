"use client";

import { Button } from "@/components/ui";
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
		await sleep(2000);
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
