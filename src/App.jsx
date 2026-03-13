import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import Inputs from "./components/Inputs"
import Footer from "./components/Footer"


function App() {

  const [result, setResult] = useState("");
  const [userAlert, setUserAlert] = useState("")

  const storeResult = (resultData) => setResult(resultData)
  const sendAlert = (message) => {
    setUserAlert(message)
    setResult("") //wipe result
  }

  return (
    <>
      <Header alertText={userAlert}/>
      <Results  userResult={result} />
      <Inputs onResultReady={storeResult} sendAlert={sendAlert}/>
      <Footer />
    </>
  )
}

export default App
