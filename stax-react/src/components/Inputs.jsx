import { useState } from 'react';
import stateTaxRates from '../data/stateTaxRates.json';



const Inputs = ({ onResultReady }) => {

    const [userCost, setCost] = useState('');
    const [userTaxRate, setRate] = useState('');
    const [userStateName, setStateName] = useState('');

    const roundNumber = (number) => {
        return (Math.round( number * 100) / 100)
    }

    const handleCalculate = () => {
        
        const numCost = parseFloat(userCost, 10)
        const taxRate = roundNumber(parseFloat(userTaxRate))
        const finalPrice = roundNumber(numCost + (numCost * taxRate))
        const result = {
            numCost,
            taxRate,
            finalPrice,
            userStateName,
            statePercent: roundNumber(taxRate * 100),
            userDifference: roundNumber(finalPrice - numCost)
        }
        if(!Number.isFinite(numCost) ){
            //error if number not entered 
            console.log("enter number")
            return
        } else if(!Number.isFinite(taxRate)){
            //error if no state selected
            console.log("pick state")
            return
        }
        onResultReady(result)
        console.log(result);
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
                        <select className="u-full-width" id="stateSelect" onChange={(e) => {
                            if(e.target.value){
                                setRate(stateTaxRates[e.target.value].rate)
                                setStateName(stateTaxRates[e.target.value].name)
                            }else{
                                console.log("select state")
                                setRate("")
                                setStateName("")
                            }
                            
                        } }>
                        <option value="">Select State</option>
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
                            onClick={handleCalculate}
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