import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';
// import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session) {
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
    matcher: ["/product/:slug*"],
}