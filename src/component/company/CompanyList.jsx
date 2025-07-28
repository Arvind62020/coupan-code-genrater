import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import CompanyItems from './ComapnyItems';
import { Link } from 'react-router-dom';

function CompanyList() {
    const companies = useSelector(state => state.companies);

    const navigate = useNavigate();
    
    function handleCompany() {
        navigate('/company');
    }
    
    return (
        <div className="min-h-screen w-full bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Company List:</h3>
                {companies.map(company => {
                return (
                    <>
                    <CompanyItems 
                        key={company.id} 
                        id={company.id} 
                        company={company.company} 
                        type={company.type}
                        product={company.product} 
                    />
                    
                    
                    </>
                    
                )
            })}
            
            
            <Link 
                to='/' 
                className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Home
            </Link>
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
        </div>
    )
}

export default CompanyList;


