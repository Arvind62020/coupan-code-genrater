import { useDispatch } from "react-redux";
import { removeCoupan, updateCoupan } from "../redux/slices/coupanSlice";

function CoupanItems({ id, text, company, product, offer, isUsed }) {
    const dispatch = useDispatch();
    
    function removeCoupanItem() {
        dispatch(removeCoupan(id));
    }

    function handleCheckboxChange(e) {
        e.stopPropagation(); // Prevent event bubbling
        dispatch(updateCoupan({ id }));
    }
    
    return (
        <div className={`relative group p-5 mb-3 rounded-xl shadow-lg transition-all duration-300 
                        ${isUsed ? 'bg-gradient-to-br from-gray-50 to-gray-100' : 'bg-gradient-to-br from-white to-blue-50'} 
                        border border-gray-200 hover:shadow-xl hover:border-blue-200`}>
            
            {/* Glow effect for active coupons */}
            {!isUsed && (
                <div className="absolute inset-0 rounded-xl bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            )}
            
            <div className="flex items-center justify-between">
                {/* Fixed custom checkbox */}
                <div className="flex items-center space-x-4">
                    <label className="relative flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            onChange={handleCheckboxChange}
                            checked={isUsed}
                            className="absolute opacity-0 w-0 h-0" // Fully hidden but still functional
                        />
                        <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all
                                        ${isUsed ? 'bg-green-500 border-green-600' : 'bg-white border-gray-300 group-hover:border-blue-400'}`}>
                            {isUsed && (
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            )}
                        </div>
                        <span className="ml-3 sr-only">Mark as {isUsed ? 'unused' : 'used'}</span>
                    </label>

                    {/* Coupon details - moved outside label to prevent accidental clicks */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <div className="flex items-center">
                            <span className={`font-mono text-xl font-bold tracking-wider 
                                            ${isUsed ? 'text-gray-400 line-through' : 'text-green-600'}`}>
                                {text}
                            </span>
                            {!isUsed && (
                                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                                    ACTIVE
                                </span>
                            )}
                        </div>

                        <div className="flex items-center space-x-1 text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                            <span>{company}</span>
                        </div>

                        <div className="flex items-center space-x-1 text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                            </svg>
                            <span>{product}</span>
                        </div>

                        <div className="flex items-center space-x-1">
                            <span className={`px-2 py-1 rounded-md text-sm font-bold 
                                            ${offer.startsWith('-') ? 'bg-red-100 text-red-800' : 
                                               offer.startsWith('+') ? 'bg-green-100 text-green-800' : 
                                               'bg-blue-100 text-blue-800'}`}>
                                {offer}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Delete button */}
                <button 
                    onClick={removeCoupanItem}
                    className="p-1 text-gray-400 hover:text-red-500 rounded-full transition-all
                               hover:bg-red-50 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    title="Delete coupon"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>

            {/* Used indicator */}
            {isUsed && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2">
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-md">
                        USED
                    </span>
                </div>
            )}
        </div>
    );
}

export default CoupanItems;