"use client";

import { Button } from "@/components/ui";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Loader2 } from "lucide-react";

export const LoginButton = () => {
    const [ isSigningIn, setIsSigningIn ] = useState<boolean>(false);

	return (
		<Button className="outline-none mt-10 border-2 border-primary-dark bg-secondary-light text-primary-dark font-semibold text-lg font-quicksand tracking-widest hover:bg-secondary-light/50 hover:shadow-lg hover:shadow-primary-dark/20 disabled:bg-primary-yellow/80" disabled={isSigningIn} >
            {
                !isSigningIn ? (
                    <FaGoogle className="mr-3 text-xl" />
                ) : (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                )
            }
			Continue with Google
		</Button>
	);
};

export default LoginButton;
