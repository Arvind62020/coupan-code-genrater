import { useSelector } from 'react-redux';
import CoupanItems from './CoupanItems';

function CoupanList(){
    const coupans = useSelector(state => state.coupans);
    console.log("x value: ",coupans);
    
    return (
        <>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to My coupan code Genrater:
        </h1>
        <div>
            Coupan List : <br />
            {coupans.map(coupanItem => {
                return(
                    <CoupanItems 
                        key={coupanItem.id} 
                        id={coupanItem.id} 
                        text={coupanItem.text} 
                        company={coupanItem.company} 
                        product={coupanItem.product} 
                        offer={coupanItem.offer} 
                        isUsed={coupanItem.isUsed}
                    />
                )
            })}
        </div>
        </>
    )
}
export default CoupanList;