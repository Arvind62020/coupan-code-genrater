import Display from "./component/Display";
import CustomErrorBoundary from "./component/CustomErrorBoundary/CustomErrorBoundary";
import { Route, Routes } from "react-router-dom";
import AddCompanys from "./component/company/AddCompanys";
import CompanyList from "./component/company/CompanyList";
function Routing(){
    return(
    <CustomErrorBoundary>
        <Routes> 
        <Route path="/" element={<Display />} ></Route>
        <Route path="/company" element={<AddCompanys/>}></Route>
        <Route path="/companyList" element={<CompanyList/>}></Route>
        
    </Routes>
    </CustomErrorBoundary>
        
        
    )
}
export default Routing;