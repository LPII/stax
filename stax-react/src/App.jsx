import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import Inputs from "./components/Inputs"
import Footer from "./components/Footer"

function App() {

  const [result, setResult] = useState("");

  const storeResult = (resultData) =>{
    setResult(resultData)
  }

  return (
    <>
      <Header />
      <Results  userResult={result} />
      <Inputs onResultReady={storeResult}/>
      <Footer />
    </>
  )
}

export default App
