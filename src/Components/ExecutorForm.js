import React from 'react'

class ExecutorForm extends React.Component {

    render(){
        return(
            <>
                <h4>EXECUTOR FORM:</h4>
                <input type="text" placeholder="Executor Name" />
                <input type="text" placeholder="Executor Email" />
                <textarea type="text" placeholder="Executor instructions" />
                <input type="submit"  value="Save Executor" />
            </>
        )
    }
}

export default ExecutorForm