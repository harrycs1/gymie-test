import Link from "next/link";
import prisma from "../../lib/prisma";
import Post from "./components/Post";

async function getPosts(){
  const posts = await prisma.posts.findMany()
  return posts;
}

export default async function Home() {
  const posts = await getPosts()
  return (
    <main>
      <h1>Feed</h1>
      <ul>
        {
          posts.map((post) => {
            return (
              <li key={post.id} className="border rounded-lg mb-3 px-2 py-2">
                <Post post={post}/>
              </li>
            )
          })
        }
      </ul>
      <Link href="/add-post"><button>Add Post</button></Link>
    </main>
  )
}
