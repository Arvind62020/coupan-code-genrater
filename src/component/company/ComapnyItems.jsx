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
        <div className="relative group p-5 mb-3 rounded-xl backdrop-blur-sm bg-white/30 shadow-lg transition-all duration-300 
                       border border-white/20 hover:shadow-xl hover:bg-white/40">
            {/* Gradient background element */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-xl"></div>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    {/* Company icon */}
                    <div className="p-3 rounded-lg bg-white/80 shadow-sm border border-white/20">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                    </div>
                    
                    {/* Company details */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                        <div>
                            <p className="text-lg font-semibold text-gray-800">{company}</p>
                            <p className="text-sm text-gray-600">{type}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                            </svg>
                            <span className="px-3 py-1 bg-blue-100/70 text-blue-800 text-sm font-medium rounded-full">
                                {product}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Delete button */}
                <button 
                    onClick={removeCompanyItem}
                    className="p-2 text-gray-500 hover:text-red-500 rounded-full transition-all
                               hover:bg-red-50/80 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                    title="Delete company"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>
            
        </div>
    );
}

export default CompanyItems;