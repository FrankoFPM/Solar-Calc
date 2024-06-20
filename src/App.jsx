import Footer from "./component/Footer"
import Header from "./component/Header"
import Content from "./component/Content"


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
