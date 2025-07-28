import { useNavigate } from "react-router-dom";
import CoupanList from "./CoupanList";
import CoupanSubmitSec from "./CoupanSubmitSec";

function Display(){
   

    return (
        <>
        
        <CoupanSubmitSec />
        
        <CoupanList />
        
        </>
    )
}
export default Display;