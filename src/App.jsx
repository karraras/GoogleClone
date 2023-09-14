import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import All from "./Page/All";
import Images from "./Page/Images";
import Videos from "./Page/Videos";
import News from "./Page/News";
function App() {
  return (
    <section className="bg-content flex flex-col h-screen overflow-y-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="Images" element={<Images />} />
        <Route path="News" element={<News />} />
        <Route path="Videos" element={<Videos />} />
      </Routes>
    </section>
  );
}

export default App;
