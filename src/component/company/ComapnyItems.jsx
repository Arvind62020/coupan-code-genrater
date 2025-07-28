import { useDispatch } from "react-redux";
import { removeCompany, updateCompany } from "../../redux/slices/companySlice";

function CompanyItems({ id, company, type, product }) {
    const dispatch = useDispatch();
    
    function removeCompanyItem() {
        dispatch(removeCompany(id));
    }

    function handleCheckboxChange() {
        dispatch(updateCompany({ id }));
    }
    
    return (
        <div className={`flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm border`}>
            <div className="flex items-center gap-4">
                <div className="flex gap-4">
                    <p className="text-gray-600">{company}</p>
                    <p className="text-gray-600">{type}</p>
                    <p className="text-blue-600 font-semibold">{product}</p>
                </div>
            </div>
            <button 
                onClick={removeCompanyItem}
                className="px-2 py-1 text-red-600 hover:bg-red-100 rounded transition-colors"
            >
                ×
            </button>
        </div>
    );
}

export default CompanyItems;