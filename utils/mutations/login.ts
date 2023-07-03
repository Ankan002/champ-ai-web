import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { z } from "zod";

const ArgsSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	profile_pic: z.string().url(),
	provider_id: z.string(),
});

type Args = z.infer<typeof ArgsSchema>;

const login = async (args: Args) => {
	const argsValidationResult = ArgsSchema.safeParse(args);

	if (!argsValidationResult.success) {
		throw new Error(argsValidationResult.error.errors[0]?.message);
	}

	try {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
			{
				...argsValidationResult.data,
			},
			{
				withCredentials: true,
			}
		);

		if (!response.data.success) {
			throw new Error(response.data?.error);
		}

		return {
			success: true,
		};
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.response?.data?.error);
		}

		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw new Error("Internal Server Error!!");
	}
};

interface SuccessArgs {
	success: boolean;
}

interface MutationOptions {
	onSuccess: (args: SuccessArgs) => void;
	onError: (error: unknown) => void;
}

export const useLoginMutation = (options: MutationOptions) => {
	return useMutation("login", login, {
		...options,
		retry: 0,
	});
};
