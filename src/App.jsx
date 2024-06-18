import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<h1>잘못 들어오셨어요.</h1>} />
      </Routes>
    </>
  );
}

export default App;
