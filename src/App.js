// import React from "react";
// import "./App.scss";
// // import MyTabs from "./components/Tabbing/MyTabs";
// // import MyComponent from "./components/Tabbing/Slider";
// // import Filter from "./FilterBySearch";
// // import ImageCarousel from "./components/Tabbing";
// // import FetchAPITest from "./components/API Integration/FetchAPITest";
// // import UseRef from "./components/Hooks/useRef";
// // import LayoutEffect from "./components/Hooks/useLayoutEffect";
// // import MyComponent from "./components/Hooks/useEffect";
// // import FetchSpinner from "./components/API Integration/FetchSpinner";
// // import { InlineWidget, PopupWidget } from "react-calendly";

// function App() {
//   return (
//     <div className="App-header">
//       {/* <FetchSpinner /> */}
//       {/* <FetchAPITest /> */}
//       {/* <LayoutEffect /> */}
//       {/* <UseRef /> */}
//       {/* <MyComponent /> */}
//       {/* <MyComponent /> */}
//       {/* <InlineWidget url="https://calendly.com/husnain-arshad/first-event" /> */}
//       {/* <ImageCarousel /> */}
//       {/* <MyTabs /> */}
//       {/* <Filter /> */}
//       <h1>REDUX TO🥶LKIT</h1>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";
import Update from "./Update";

function App() {
  return (
    // <BrowserRouter>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route index element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
