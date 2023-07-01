export interface LoginHeroMessage {
	id: number;
	text: string;
	sender: "user" | "AI";
	senderImage: string;
}

export const loginHeroMessages: Array<LoginHeroMessage> = [
	{
		id: 0,
		text: "Thermo Dynamics in 100 words.",
		sender: "user",
		senderImage:
			"https://api.dicebear.com/6.x/micah/png?seed=ankanbhattacharya89",
	},
	{
		id: 1,
		text: "Thermodynamics is the study of energy and its transformations in physical systems. It is governed by fundamental principles that describe the behavior of heat, work, and energy flow. These principles include the conservation of energy, the concept of entropy, and the laws of thermodynamics. The first law states that energy cannot be created or destroyed, only transferred or transformed. The second law introduces the concept of entropy, which tends to increase in isolated systems over time, leading to the directionality of processes. The third law states that as temperature approaches absolute zero, the entropy of a pure crystalline substance becomes zero. Thermodynamics provides a framework to understand and predict the behavior of energy in various systems, from engines and refrigerators to chemical reactions and celestial bodies.",
		sender: "AI",
		senderImage: "https://api.dicebear.com/6.x/bottts/png?seed=bot",
	},
];

export const typingMessage = "Thermo Dynamics in 100 words."
