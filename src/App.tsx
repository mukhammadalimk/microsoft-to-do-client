import AllTooltips from "./components/AllTooltips";
import AllModals from "./components/Modals";
import Header from "./layout/Header";
import MainContentWrapper from "./layout/MainContentWrapper";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div id="app" className="theme-blue">
      <AllModals />
      <AllTooltips />
      <Header />

      <Routes>
        <Route path="/tasks/:listID" element={<MainContentWrapper />} />

        <Route path="*" element={<Navigate to="/tasks/myday" />} />
      </Routes>
    </div>
  );
}

export default App;
