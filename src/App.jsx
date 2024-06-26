import Footer from "./components/Footer"
import Header from "./components/Header"
import Content from "./components/Content"


function App() {

  return (
    <div className="bg-custom min-h-screen flex flex-col justify-between items-center">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
