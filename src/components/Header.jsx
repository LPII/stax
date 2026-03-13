import topLogo from '../assets/top-logo.png';
import Alert from "../components/Alert";

const Header = ({ alertText }) => {
    return (
        <div className="top-wrap">
            <div className="container ">
                <div className="row">
                    <div className="twelve columns">
                        <header>
                            <img src={topLogo} alt="" />
                        </header>
                        <p>The price on the price tag may not be what you pay.<br />
                            Type your amount and select your state below to
                            calculate your dreaded sales tax.</p>
                    </div>
                    <div className="twelve columns">
                        <div className="alert"><Alert alertText={alertText} /></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header 