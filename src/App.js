import React from "react";
import "./App.scss";
import FetchAPITest from "./components/API Integration/FetchAPITest";
// import FetchSpinner from "./components/API Integration/FetchSpinner";

function App() {
  return (
    <div className="App-header">
      {/* <FetchSpinner /> */}
      <FetchAPITest />
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
