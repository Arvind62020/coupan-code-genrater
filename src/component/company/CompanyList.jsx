import { useSelector } from 'react-redux';
import CompanyItems from './ComapnyItems';
import { Link } from 'react-router-dom';

function CompanyList() {
    const companies = useSelector(state => state.companies);
    console.log("Company data: ", companies);
    
    return (
        <>
            <h3>Company List:</h3>
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
                    <Link to='/'>home</Link>
                    
                    </>
                    
                )
            })}
        </>
    )
}


export default CompanyList;