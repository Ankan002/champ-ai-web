import { NextRequest, NextResponse } from "next/server";
import { authenticatedRoutes, unAuthenticatedRoutes } from "@/constants/routes";

const middleware = (req: NextRequest) => {
	const accessToken = req.cookies.get("access-token")?.value;

	if (!accessToken) {
		if (authenticatedRoutes.includes(req.nextUrl.pathname)) {
			return NextResponse.redirect(`${process.env["DOMAIN"]}/login`);
		}

		return NextResponse.next();
	} else if (accessToken) {
		if (unAuthenticatedRoutes.includes(req.nextUrl.pathname)) {
			return NextResponse.redirect(`${process.env["DOMAIN"]}/dashboard`);
		}

		return NextResponse.next();
	}

	return NextResponse.next();
};

export default middleware;
