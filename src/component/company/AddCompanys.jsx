import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addCompany } from '../../redux/slices/companySlice.js';
import { Link } from 'react-router-dom';

function AddCompanys(){
    const dispatch = useDispatch();
    const [companyDetail,setCompanyDetails] = useState({company:'',companyType:'',companyProduct:''});
    const handelGenrater = (e) => {
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

    const companyListData = (e) => {
        e.preventDefault();
        
    }

    return(
       <>
            <input 
                type="text" 
                placeholder="company name" 
                onChange={e => setCompanyDetails({
                    ...companyDetail,
                    company: e.target.value
                })} 
                value={companyDetail.company}
                className="p-2 border rounded" 
            />
            <input 
                type="text" 
                placeholder="company Type" 
                onChange={e => setCompanyDetails({
                    ...companyDetail,
                    companyType: e.target.value
                })} 
                value={companyDetail.companyType}
                className="p-2 border rounded" 
            />
            <input 
                type="text" 
                placeholder="company Product" 
                onChange={e => setCompanyDetails({
                    ...companyDetail,
                    companyProduct: e.target.value
                })} 
                value={companyDetail.companyProduct}
                className="p-2 border rounded" 
            />                
            
            <button 
                onClick={handelGenrater} 
                className='font-sans text-lg text-center px-4 py-2 bg-gray-500 rounded border-black border-solid shadow-sm hover:bg-blue-500 hover:text-white transition-colors' 
                type='button'
            >
                Add Company
            </button>
                <Link to='/companyList'>company List</Link>
            
        </>
    )
}
export default AddCompanys;

