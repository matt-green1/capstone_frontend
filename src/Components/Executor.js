import React from 'react'


class Executor extends React.Component {
    
    state = {
        deleteActivated : false
    }

    editFormFillHelper = () => {
        this.props.editFormStateHelper(this.props.executorObject)
    }

    changeDeleteStatus = () => {
        this.setState({deleteActivated : !this.state.deleteActivated})
    }

    deleteHelper = () => {
        this.props.deleteExecutorHandler(this.props.executorObject)
        this.changeDeleteStatus()
    }

    render(){
        return(
            <>
                <tr>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.executorObject.executor_name}</td>
                    <td>{this.props.executorObject.executor_email}</td>
                    <td>{this.props.executorObject.instructions}</td>
                    <td>
                        {this.state.deleteActivated === false 
                        ? 
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.editFormFillHelper}>Edit</button>&nbsp;&nbsp;&nbsp;
                            <button onClick={this.changeDeleteStatus} >Delete</button>
                        </>
                        :
                        <>
                            <p>ARE YOU SURE?</p>
                            <button onClick={this.changeDeleteStatus} >Go Back</button>&nbsp;&nbsp;
                            <button onClick={this.deleteHelper} >Yes, Delete</button>
                        </>                        
                        }
                    </td>

                </tr>&nbsp;
            </>
        )
    }
}

export default Executor