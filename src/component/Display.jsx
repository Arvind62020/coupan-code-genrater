import { useNavigate } from "react-router-dom";
import CoupanList from "./CoupanList";
import CoupanSubmitSec from "./CoupanSubmitSec";

function Display(){
    const navigate = useNavigate();

    function handleCompany(){
        navigate('/company');
    }

    return (
        <>
        
        <CoupanSubmitSec />
        <button onClick={handleCompany}>Add Company</button>
        <CoupanList />
        
        </>
    )
}
export default Display;