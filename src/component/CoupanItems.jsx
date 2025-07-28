import { useDispatch } from "react-redux";
import { removeCoupan, updateCoupan } from "../redux/slices/coupanSlice";

function CoupanItems({id, text, company, product, offer, isUsed}){
    const dispatch = useDispatch();
    
    function removeCoupanItem(){
        dispatch(removeCoupan(id));
    }

    function handleCheckboxChange(){
        dispatch(updateCoupan({ id }));
    }
    
    return(
        <div className={`flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm border ${isUsed ? 'bg-gray-50' : ''}`}>
            <div className="flex items-center gap-4">
                <input 
                    type="checkbox" 
                    onChange={handleCheckboxChange}
                    checked={isUsed}
                    className="w-4 h-4 text-blue-600 cursor-pointer" 
                />
                <div className="flex gap-4">
                    <p className={`font-mono text-green-500 font-bold text-lg ${isUsed ? 'line-through text-red-500' : ''}`}>{text}</p>
                    <p className="text-gray-600">{company}</p>
                    <p className="text-gray-600">{product}</p>
                    <p className="text-blue-600 font-semibold">{offer}</p>
                </div>
            </div>
            <button 
                onClick={removeCoupanItem}
                className="px-2 py-1 text-red-600 hover:bg-red-100 rounded transition-colors"
            >
                ×
            </button>
        </div>
    );
}

export default CoupanItems;