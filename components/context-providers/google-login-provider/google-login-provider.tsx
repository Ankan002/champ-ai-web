"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";

interface Props {
	children: React.ReactNode;
}

const GoogleLoginProvider = (props: Props) => {
	const { children } = props;

	return (
		<GoogleOAuthProvider
			clientId={process.env["NEXT_PUBLIC_GOOGLE_ClIENT_ID"] ?? ""}
		>
			{children}
		</GoogleOAuthProvider>
	);
};

export default GoogleLoginProvider;
