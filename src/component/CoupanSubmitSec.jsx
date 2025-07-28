import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addCoupan } from '../redux/slices/coupanSlice.js';
import { generateCode } from './CoupanCodeGenrater';
import { useState } from 'react';

function CoupanSubmitSec() {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.companies);
    
    const [company, setCompany] = useState('');
    const [product, setProduct] = useState('');
    const [offer, setOffer] = useState('');
    const [showCompanyList, setShowCompanyList] = useState(false);
    
    const navigate = useNavigate();
    
    function handleCompany() {
        navigate('/company');
    }

    function isOnlyNumbersWithSign(input) {
        return /^[+-]?\d+$/.test(input);
    }

    function validateString(input) {
        return /^[a-z ]+[0-9]*$/i.test(input);
    }

    const handleGenerate = (e) => {
        e.preventDefault();
        let x = generateCode();
        x = x.toUpperCase();
        
        if (!isOnlyNumbersWithSign(offer)) {
            alert('Offer should be an integer');
            return;
        }
        if (!validateString(company)) {
            alert('Enter proper company name');
            return;
        }
        if (!validateString(product)) {
            alert('Enter proper product name');
            return;
        }

        dispatch(addCoupan({
            text: x,
            company: company,
            product: product,
            offer: offer
        }));

        setCompany('');
        setProduct('');
        setOffer('');
    }

    const handleCompanySelect = (selectedCompany, selectedProducts) => {
        setCompany(selectedCompany);
        setProduct(selectedProducts);
        setShowCompanyList(false);
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Coupon Generator</h2>
            
            <div className="space-y-4">
                <div className="relative">
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                        <button
                            onClick={handleCompany}
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center"
                            type="button"
                        >
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            Add New Company
                        </button>
                    </div>
                    <input
                        id="company"
                        type="text"
                        placeholder="Enter company name"
                        onChange={e => setCompany(e.target.value)}
                        onFocus={() => setShowCompanyList(true)}
                        onBlur={() => setTimeout(() => setShowCompanyList(false), 200)}
                        value={company}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                    {showCompanyList && companies.length > 0 && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                            {companies.map(comp => (
                                <div 
                                    key={comp.id}
                                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
                                    onClick={() => handleCompanySelect(comp.company, comp.product)}
                                >
                                    <p className="font-medium text-gray-800">{comp.company}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                    <input
                        id="product"
                        type="text"
                        placeholder="Enter product name"
                        onChange={e => setProduct(e.target.value)}
                        value={product}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                </div>
                
                <div>
                    <label htmlFor="offer" className="block text-sm font-medium text-gray-700 mb-1">Offer</label>
                    <input
                        id="offer"
                        type="text"
                        placeholder="Enter offer (e.g., 10, -20, +15)"
                        onChange={e => setOffer(e.target.value)}
                        value={offer}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                </div>
                
                <div className="flex space-x-4">
                    <button
                        onClick={handleGenerate}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-md shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105"
                        type="button"
                    >
                        Generate Coupon
                        <span className="ml-2">✨</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoupanSubmitSec;