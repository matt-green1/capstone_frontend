import React from 'react'
import Executor from '../Components/Executor'
import ExecutorForm from '../Components/ExecutorForm'


class ExecutorContainer extends React.Component {

    render() {
        return(
            <>    
                <h2>ExecutorContainer: </h2>
                <Executor/>
                <Executor/>
                <ExecutorForm/>
            </>
        )
    }

}

export default ExecutorContainer