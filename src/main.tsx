import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./widgets/header/ui/header";
// import Footer from './widgets/footer/ui/footer'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
  {/* <Footer/> */}
  <Header/>
  </StrictMode>,
);
