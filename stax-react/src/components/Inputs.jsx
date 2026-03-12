import { useState } from 'react';
import stateTaxRates from '../data/stateTaxRates.json';



const Inputs = () => {

    const [userCost, setCost] = useState('');
    const [userTaxRate, setRate] = useState('');

    const handleCaclulate = () => {

        

        const numCost = parseFloat(userCost, 10);
        const taxRate = parseFloat(userTaxRate);

        console.log(numCost + (numCost * taxRate));
    };

    return (
        <div className="inp-wrap">
            <div className="container">
                <div className="row">
                    <div className="six columns">
                        <input 
                        id="theCost" 
                        placeholder="What is the price?" 
                        className="u-full-width" 
                        type="text" 
                        value={userCost}
                        onChange={(e) => setCost(e.target.value)} 
                        />
                    </div>
                    <div className="six columns">
                        <select className="u-full-width" id="stateSelect" onChange={(e) => setRate(stateTaxRates[e.target.value].rate) }>
                
                            {Object.keys(stateTaxRates).map((code) => (
                                <option key={code} value={code} data-rate={stateTaxRates[code].rate}>{stateTaxRates[code].name}</option>
                            ))}
                        </select>

                    </div>
                </div>

                <div className="btnrow row">
                    <div className="twelve columns">
    
                        <button
                            type="button"
                            className="btn"
                            onClick={handleCaclulate}
                        >
                            Calculate
                        </button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Inputs 