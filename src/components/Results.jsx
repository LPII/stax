const Results = ({ userResult }) => {

    if (!userResult) {
        return
    }

    const { numCost, taxRate, finalPrice, userStateName, statePercent, userDifference } = userResult

    return (
        <div className="row-wrap out-wrap">
            <div className="mes-wrap">
                <div className="container">
                    <div className="row">
                      
                        <div id="mesOutPut" className="twelve columns">

                            <p><span>{userStateName}</span> has a sales tax of <span> {statePercent}</span>%, which means you will pay an extra $<span>{userDifference.toFixed(2)}</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="twelve columns">
                        <h1>${finalPrice.toFixed(2)}</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Results