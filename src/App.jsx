import { RiArrowRightLine } from "react-icons/ri"
import blogImg from './assets/blog.png'
import './App.css'

function App() {

  return (
      <div className="App">

        <div className="blog-card">
            <img src={blogImg} alt="blog-img" />
            <div className="blog-card-content">
                <span className="tag">interior</span>
                <h3 className="blog-title">Top 5 Living Room Inspirations</h3>
                <p className="blog-para">Curated vibrant colors for your living, make it pop
                & claim in the same time</p>
                <a className="link"  href = "#">Read more <RiArrowRightLine/></a>

            </div>

        </div>

      </div>
  )
}

export default App
