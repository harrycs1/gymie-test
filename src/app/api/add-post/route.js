import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma";

export async function POST(request) {
    const res = await request.json()
    const { post_id, likes, session, description, session_id, user_id } = res;

    const result = await prisma.posts.create({
        data: {
            post_id,
            likes,
            session_name: session,
            description,
            session_id,
            user_id,
        }
    })

    return NextResponse.json({result})
}