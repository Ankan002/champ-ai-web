"use client";

import { Button, Input } from "@/components/ui";
import { MacAnimationBtn } from "../elements";
import { HeroAnimationNavbar } from "../hero-animation-navbar";
import { useEffect, useState, useRef } from "react";
import { typingMessage } from "@/constants/login-hero-messages";
import { sleep } from "@/utils";
import { Send } from "lucide-react";

const LoginHeroAnimation = () => {
	const [typedMessage, setTypedMessage] = useState<string>("");
	const isMounted = useRef<boolean>(false);

	const showTypingMessage = async () => {
		let currentPos = 0;

		// ! This method misses 2nd character so leave a space to render it properly.
		while (currentPos <= typingMessage.length) {
			if (currentPos < typingMessage.length) {
				setTypedMessage(
					(prev) => `${prev}${typingMessage.charAt(currentPos)}`
				);
			} else {
				setTypedMessage("");
			}
			currentPos++;
			await sleep(100);
		}
	};

	useEffect(() => {
		if (isMounted.current) return;

		isMounted.current = true;
		showTypingMessage();
	}, []);

	return (
		<div className="flex-1 w-full h-96 flex flex-col border-2 rounded-md border-primary-dark shadow-lg shadow-primary-dark/40">
			<div className="flex justify-end px-2 py-2 border-b-2 bg-secondary-light rounded-md border-b-primary-dark">
				<MacAnimationBtn backgroundColor="bg-primary-green" />
				<MacAnimationBtn backgroundColor="bg-primary-yellow" />
				<MacAnimationBtn backgroundColor="bg-primary-red" />
			</div>

			<HeroAnimationNavbar />

			<div className="flex-1 flex flex-col">
				<div className="flex-grow overflow-y-scroll"></div>
				<div className="flex px-2 py-1.5">
					<input
						className="bg-secondary-light border-2 border-black flex-grow focus:outline-none text-lg font-quicksand px-2 py-1 rounded-md tracking-wider mr-1"
						aria-label="message"
						disabled={true}
						value={typedMessage}
					/>
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
