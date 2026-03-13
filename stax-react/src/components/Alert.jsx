const Alert = ({ alertText }) => {
    if(!alertText){
        return 
    }
    return <span className="alert-text">{alertText}</span>
}

export default Alert