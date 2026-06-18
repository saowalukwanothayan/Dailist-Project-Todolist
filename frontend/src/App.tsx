import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import All from "./pages/All"
import AboutMe from "./pages/AboutMe"
import MainLayout from "./components/layout/MainLayout";

import AllTaskList from "./components/todolistcontent/AllTaskList.tsx";
import { SectionAllBox } from "./components/todolistcontent/SectionAllBox.tsx";


function App() {
  
  return (
    <Router>
      <MainLayout>
        <Routes>

          <Route path="/" element={<Navigate to="/all" />} />

          <Route path="/all" element={<All />}>
            <Route index element={<AllTaskList />} />
            <Route path=":section" element={<SectionAllBox />} />
          </Route>

          <Route path="/aboutme" element={<AboutMe />} />

        </Routes>
    </MainLayout>
    </Router>
  )
}
export default App