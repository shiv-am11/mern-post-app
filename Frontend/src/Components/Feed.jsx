import { useEffect, useState } from "react"
import axios from "axios"

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data.posts)
      })
  }, [])

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center p-10 bg-black" >
      <div className="w-full max-w-3xl space-y-8">

        <h1 className="text-3xl font-bold text-white">
          Feed
        </h1>

        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >

            <img
              src={post.image}
              className="w-full h-[350px] object-cover"
            />

            <div className="p-4 bg-black">
              <p className="text-gray-800 text-lg text-white ">
                {post.caption}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Feed