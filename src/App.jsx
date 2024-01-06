import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import ForgotPassword from "./pages/ForgotPassword"
import Profile from "./pages/profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from "./Components/Header"


function App() {
  return (
   <>
      <Router>
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/offers" element={<Offers/>}/>
          <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/sign-in" element={<SignIn/>}/>
          <Route exact path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </Router>
   </>
  )
}

export default App
