
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Header from './Header'
import Home from './Home'
import Hook from './Hook'
import MainContent from './MainContent'
import Navigation from './Navigation'
import Footer from './Footer'
import React_0818 from './react_0818/React_0818'
import Contact from './Contact'
import "./Navigation.css"
function App() {

  return (
    <>
    <div className="sticky-shell">
      <Header />
      <Navigation />
      </div>
      {/* </Header> */}
      <MainContent className="main-content-wrapper">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hook" element={<Hook />} />
          <Route path="React_0818/*" element={<React_0818 />} />
       
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContent>
      <Footer />

    </>
  )
}
export default App