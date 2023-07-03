"use client";

import { Button } from "@/components/ui";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import { useGoogleLogin } from "@react-oauth/google";
import { useGetGoogleProfile } from "@/utils/queries";

export const LoginButton = () => {
	const [googleAccessToken, setGoogleAccessToken] = useState<string | null>(
		null
	);

	const { isLoading: isFetchingProfile } =
		useGetGoogleProfile(googleAccessToken, {
			enabled: googleAccessToken !== null,
			onSuccess: (data) => console.log(data),
			onError: (error) => console.log(error),
		});

	const googleLogin = useGoogleLogin({
		onError: (error) => {
			console.log(error.error_description);
			return;
		},
		onSuccess: async (tokenResponse) => {
			setGoogleAccessToken(tokenResponse.access_token);
		},
	});

	return (
		<Button
			className="outline-none mt-10 border-2 border-primary-dark bg-secondary-light text-primary-dark font-semibold text-lg font-quicksand tracking-widest hover:bg-secondary-light/50 hover:shadow-lg hover:shadow-primary-dark/20 disabled:bg-primary-yellow/80"
			disabled={isFetchingProfile}
			onClick={() => googleLogin()}
		>
			{isFetchingProfile ? (
				<Loader2 className="mr-2 h-5 w-5 animate-spin" />
			) : (
				<FaGoogle className="mr-3 text-xl" />
			)}
			Continue with Google
		</Button>
	);
};

export default LoginButton;
