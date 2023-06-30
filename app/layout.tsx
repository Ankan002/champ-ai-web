import { ReactQueryProvider } from "@/components/context-providers";
import "./globals.css";

export const metadata = {
	title: "Champ AI",
	description: "A single app that can help you answer all questions to assist in your learning!!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</body>
		</html>
	);
}
