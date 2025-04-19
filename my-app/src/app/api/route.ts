import { NextResponse } from "next/server"

import { auth0 } from "@/lib/auth0"

export async function GET() {
  try {
    const token = await auth0.getAccessToken()
    // call external API with token...
    return NextResponse.json({
        token: token
    })
  } catch (err) {
    // err will be an instance of AccessTokenError if an access token could not be obtained
    NextResponse.json({
        token: null
    })
  }
}
