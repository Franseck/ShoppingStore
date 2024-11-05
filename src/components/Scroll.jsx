import { useLocation } from "react-router-dom";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Scroll() {
  const { pathname } = useLocation();


  return pathname.includes("products") ? (
  
    <FaAngleDoubleUp onClick={() => window.scrollTo(0, 0)}  /> 
  
  ) : null

}