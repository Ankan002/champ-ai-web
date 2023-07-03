import axios from "axios";
import { QueryFunction, useQuery } from "react-query";
import { z } from "zod";

const GoogleProfileResponseSchema = z.object({
	email: z.string().email(),
	email_verified: z.boolean(),
	family_name: z.string(),
	given_name: z.string(),
	locale: z.string().optional(),
	picture: z.string().url(),
	sub: z.string(),
});

export type GoogleProfileResponse = z.infer<typeof GoogleProfileResponseSchema>;

const getGoogleProfile: QueryFunction = async ({ queryKey }) => {
	if (queryKey.length !== 2) throw new Error("No Access Token Received!!");

	const token = queryKey[1];

	try {
		const response = await axios.get(
			"https://www.googleapis.com/oauth2/v3/userinfo",
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		const responseValidationResult = GoogleProfileResponseSchema.safeParse(
			response.data
		);

		if (!responseValidationResult.success)
			throw new Error(responseValidationResult.error.errors[0]?.message);

		return responseValidationResult.data;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw new Error("Internal Server Error!!");
	}
};

interface GetGoogleProfileOptions {
	onSuccess?: (data: GoogleProfileResponse) => void;
	onError?: (error: string | undefined) => void;
	enabled: boolean;
	retry?: number;
}

export const useGetGoogleProfile = (
	accessToken: string | null,
	options: GetGoogleProfileOptions
) => {
	return useQuery(["get-google-profile", accessToken], getGoogleProfile, {
		retry: 0,
		...options,
	});
};
