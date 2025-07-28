import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addCompany } from '../../redux/slices/companySlice.js';
import { Link } from 'react-router-dom';

function AddCompanys() {
    const dispatch = useDispatch();
    const [companyDetail, setCompanyDetails] = useState({
        company: '',
        companyType: '',
        companyProduct: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCompany({
            company: companyDetail.company,
            type: companyDetail.companyType,
            product: companyDetail.companyProduct,
        }));
        setCompanyDetails({
            company: '',
            companyType: '',
            companyProduct: ''
        });
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Company</h2>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                        id="company"
                        type="text"
                        placeholder="Enter company name"
                        onChange={e => setCompanyDetails({
                            ...companyDetail,
                            company: e.target.value
                        })}
                        value={companyDetail.company}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Company Type</label>
                    <input
                        id="type"
                        type="text"
                        placeholder="Enter company type"
                        onChange={e => setCompanyDetails({
                            ...companyDetail,
                            companyType: e.target.value
                        })}
                        value={companyDetail.companyType}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Company Product</label>
                    <input
                        id="product"
                        type="text"
                        placeholder="Enter company product"
                        onChange={e => setCompanyDetails({
                            ...companyDetail,
                            companyProduct: e.target.value
                        })}
                        value={companyDetail.companyProduct}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                    />
                </div>

                <div className="flex justify-between items-center pt-4">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-md shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105"
                    >
                        Add Company
                        <span className="ml-2">🏢</span>
                    </button>

                    <Link 
                        to='/companyList'
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors"
                    >
                        View Company List
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AddCompanys;