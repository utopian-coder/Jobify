import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import PostJobPage from "./pages/PostJobPage";
import Layout from "./components/UI/Layout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/post-job' element={<PostJobPage />} />
      </Route>
    </Routes>
  );
}

export default App;
