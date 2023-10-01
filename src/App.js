import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/Rootlayout";
import HelpLayout from "./layouts/HelpLaout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="home" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
      <div className="App">
      <RouterProvider router={router}/>
      </div>
   
  );
}

export default App;
