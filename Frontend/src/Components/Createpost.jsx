import axios from "axios"
import { useNavigate } from "react-router-dom"
import bg from "../assets/bg.jpg"

const Createpost = () => {

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post("http://localhost:3000/create-post", formData)
      .then(() => {
        navigate("/feed")
      })
      .catch((err) => {
        console.log(err)
        alert("Error creating post")
      })
  }

  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          `url(${bg})`
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-7 w-[420px]">

        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Create Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* image input */}
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full text-white file:mr-4 file:py-2 file:px-4 
            file:rounded-lg file:border-0 file:text-sm file:font-semibold
            file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />

          {/* caption */}
          <input
            type="text"
            name="caption"
            placeholder="Write a caption..."
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* buttons */}
          <div className="flex gap-3">

            <button
              type="submit"
              className="flex-1 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
            >
              Share
            </button>

            <button
              type="button"
              onClick={() => navigate("/feed")}
              className="flex-1 py-2 rounded-lg bg-white/20 text-white border border-white/30 hover:bg-white/30 transition"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </section>
  )
}

export default Createpost