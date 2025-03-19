import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("access_token")?.value;
    
    console.log("Middleware kiểm tra token:", token); // Debug

    // Nếu không có token, chuyển hướng về trang login
    if (req.nextUrl.pathname.startsWith("/admin") && !token) {
        return NextResponse.redirect(new URL("/logins", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"], // Middleware chỉ áp dụng cho trang admin
};
