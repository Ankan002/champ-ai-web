"use client";

import { Button } from "@/components/ui";
import { HeroMessage } from "../elements";
import { HeroAnimationNavbar } from "../hero-animation-navbar";
import { useEffect, useState, useRef } from "react";
import {
	typingMessage,
	loginHeroMessages,
	LoginHeroMessage,
} from "@/constants/login-hero-messages";
import { sleep } from "@/utils";
import { Send } from "lucide-react";

const LoginHeroAnimation = () => {
	const [typedMessage, setTypedMessage] = useState<string>("");
	const [messages, setMessages] = useState<Array<LoginHeroMessage>>([]);
	const [currentMessagePos, setMessageCurrentPos] = useState(-1);
	const [isAnswering, setIsAnswering] = useState<boolean>(false);
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
				setMessageCurrentPos(0);
			}
			currentPos++;
			await sleep(100);
		}
	};

	const addMessage = async () => {
		if (currentMessagePos < 0) return;

		if (
			currentMessagePos % 2 === 0 &&
			loginHeroMessages[currentMessagePos]
		) {
			setMessages([...messages, loginHeroMessages[currentMessagePos]]);
			setMessageCurrentPos((prev) => prev + 1);
		} else if (loginHeroMessages[currentMessagePos]) {
			setIsAnswering(true);
			await sleep(2000);
			setIsAnswering(false);
			setMessages([...messages, loginHeroMessages[currentMessagePos]]);
		}
	};

	useEffect(() => {
		if (isMounted.current) return;

		isMounted.current = true;
		showTypingMessage();
	}, []);

	useEffect(() => {
		addMessage();
	}, [currentMessagePos]);

	useEffect(() => {
		console.log(messages);
	}, [messages]);

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
					<input
						className="bg-secondary-light border border-black flex-grow focus:outline-none text-lg font-quicksand px-2 py-1 rounded-md tracking-wider mr-1"
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
