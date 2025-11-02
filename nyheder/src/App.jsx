import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Archive from "./pages/Archive"
import Popular from "./pages/Popular"
import Settings from "./pages/Settings"

function App() {
  
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="archive/:name" element={<Archive />} />
      <Route path="popular/:name" element={<Popular />} />
      <Route path="settings/:name" element={<Settings />} />
    </Routes>
  )
}

export default App
