import { Route, Routes } from "react-router-dom";
import JobDetail from "./pages/job-detail";

import Main from "./pages/main";
import Recruiting from "./pages/recruiting";
import Resume from "./pages/resume";
import Search from "./pages/search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/recruting" element={<Recruiting />} />
      <Route path="/job-detail/:companyId" element={<JobDetail />} />
      <Route path="/search" element={<Search />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
