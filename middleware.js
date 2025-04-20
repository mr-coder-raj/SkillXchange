import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Public routes ko identify karne ke liye
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/api/create'])

export default clerkMiddleware(async (auth, req) => {
  try {
    // Agar route public nahi hai, toh authentication check karenge
    if (!isPublicRoute(req)) {
      await auth.protect()
    }
  } catch (error) {
    console.error("Middleware Error: ", error)
    throw error
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)', // API routes ko hamesha protected rakhna hai
  ],
}
