import { useDispatch } from 'react-redux';
import { addCoupan } from '../redux/slices/coupanSlice.js';
import { generateCode } from './CoupanCodeGenrater'
import { useState } from 'react';

function CoupanSubmitSec(){
    const dispatch = useDispatch();
    const [company, setCompany] = useState('');
    const [product, setProduct] = useState('');
    const [offer, setOffer] = useState('');

    function isOnlyNumbersWithSign(input) {
        return /^[+-]?\d+$/.test(input);
    }
    function validateString(input) {
        return /^[a-z ]+[0-9]*$/.test(input) || /^[a-z]+$/.test(input);
    }

    const handelGenrater = (e) => {
        e.preventDefault();
        let x = generateCode();
        x = x.toUpperCase();
        console.log(x);
        if(!isOnlyNumbersWithSign(offer)){
            alert('offer should be integer');
        }
        else if(!validateString(company)){
            alert('enter proper company name');
        }
        else if(!validateString(product)){
            alert('enter proper product name');
        } 
        else{
            dispatch(addCoupan({
            text: x,
            company: company,
            product: product,
            offer: offer
        }));
        }
        

        // Clear form after submission
        setCompany('');
        setProduct('');
        setOffer('');
    }

    return(
        <>
            <div className="flex flex-col gap-4 mb-6">
                <input 
                    type="text" 
                    placeholder='Company' 
                    onChange={e => setCompany(e.target.value)} 
                    value={company}
                    className="p-2 border rounded" 
                />
                <input 
                    type="text" 
                    placeholder='Product' 
                    onChange={e => setProduct(e.target.value)} 
                    value={product}
                    className="p-2 border rounded" 
                />
                <input 
                    type="text" 
                    placeholder='Offer' 
                    onChange={e => setOffer(e.target.value)} 
                    value={offer}
                    className="p-2 border rounded" 
                />
                <button 
                    onClick={handelGenrater} 
                    className='font-sans text-lg text-center px-4 py-2 bg-gray-500 rounded border-black border-solid shadow-sm hover:bg-blue-500 hover:text-white transition-colors' 
                    type='button'>
                    Generate Coupon
                </button>
            </div>
        </>
    )
}
export default CoupanSubmitSec;