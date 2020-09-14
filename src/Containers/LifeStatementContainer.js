import React from 'react'
import LifeStatement from '../Components/LifeStatement'
import LifeStatementForm from '../Components/LifeStatementForm'


class LifeStatementContainer extends React.Component {

    render() {
        return(
            <>    
                <h3>Life Statement Container -- I hold the mainstatement</h3>
                <LifeStatement />
                <LifeStatementForm/>
            </>
        )
    }

}

export default LifeStatementContainer 