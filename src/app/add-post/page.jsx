'use client'
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddGymie() {
    const [session, setSession] = useState('')
    const [description, setDescription] = useState('')
    const router = useRouter()

    const post_id = 5;
    const likes = 0;
    const session_id = 3;
    const user_id = 3;

    const handleSessionChange = (event) => {
        setSession(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            await fetch('/api/add-post', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ post_id, likes, session, description, session_id, user_id })
            })

            router.refresh()
        } catch (error) {
            console.log(error)
        }

        setSession('')
        setDescription('')
    }

    return (
        <main>
            <Link href="/">View Feed</Link>
            <h1 className="text-2xl">Add Gymie</h1>
            <form onSubmit={handleSubmit} className="text-red-500">
                <div>
                    <label>Session Name
                        <input
                        type="text"
                        id="session_name"
                        value={session}
                        onChange={handleSessionChange}
                        required
                        />
                    </label>
                    <label>Content
                        <textarea
                        id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    )
}