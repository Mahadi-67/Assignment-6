import Banner from "./banner"
import Footer from "./footer"
import NavBar from "./navbar"
import Models from "./models"
import StatsSection from "./statssection"

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {
  return (
    <>
    <NavBar />
    <Banner />
    <StatsSection />
    <div className="mt-20">
    <Models modelPromise ={modelPromise} />
    </div>
    <Footer />
   
    </>
    
  )
}

export default App
