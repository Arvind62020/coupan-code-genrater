import { useDispatch, useSelector } from 'react-redux';
import { addCoupan } from '../redux/slices/coupanSlice.js';
import { generateCode } from './CoupanCodeGenrater';
import { useState } from 'react';

function CoupanSubmitSec() {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.companies); // Get companies from Redux store
    //const products = useSelector(state => state.companies); // Get companies from Redux store

    const [company, setCompany] = useState('');
    const [product, setProduct] = useState('');
    const [offer, setOffer] = useState('');
    const [showCompanyList, setShowCompanyList] = useState(false);
    const [showProductsList, setShowProductsList] = useState(false);

    function isOnlyNumbersWithSign(input) {
        return /^[+-]?\d+$/.test(input);
    }

    function validateString(input) {
        return /^[a-z ]+[0-9]*$/i.test(input); // Added 'i' flag for case-insensitive
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

        // Clear form after submission
        setCompany('');
        setProduct('');
        setOffer('');
    }

    const handleCompanySelect = (selectedCompany) => {
        setCompany(selectedCompany);
        setShowCompanyList(false);
    }
    const handleProductsSelect = (selectedProducts) => {
        setProduct(selectedProducts);
        setShowProductsList(false);
    }

    return (
        <>
            <div className="flex flex-col gap-4 mb-6 relative">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder='Company' 
                        onChange={e => setCompany(e.target.value)} 
                        onFocus={() => setShowCompanyList(true)}
                        value={company}
                        className="p-2 border rounded w-full" 
                    />
                    {showCompanyList && companies.length > 0 && (
                        <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-auto">
                            {companies.map(comp => (
                                <div 
                                    key={comp.id}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleCompanySelect(comp.company)}
                                >
                                    {comp.company}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
               <div className="relative">
                <input 
                    type="text" 
                    placeholder='Product' 
                    onChange={e => setProduct(e.target.value)} 
                    onFocus={() => setShowProductsList(true)}
                    value={product}
                    className="p-2 border rounded" 
                />
                {showProductsList && companies.length > 0 && (
                        <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-auto">
                            {companies.map(comp => (
                                <div 
                                    key={comp.id}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleProductsSelect(comp.product)}
                                >
                                    {comp.product}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <input 
                    type="text" 
                    placeholder='Offer' 
                    onChange={e => setOffer(e.target.value)} 
                    value={offer}
                    className="p-2 border rounded" 
                />
                <button 
                    onClick={handleGenerate} 
                    className='font-sans text-lg text-center px-4 py-2 bg-gray-500 rounded border-black border-solid shadow-sm hover:bg-blue-500 hover:text-white transition-colors' 
                    type='button'
                >
                    Generate Coupon
                </button>
            </div>
        </>
    )
}

export default CoupanSubmitSec;