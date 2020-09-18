import React from 'react'


class Executor extends React.Component {
    
    editFormFillHelper = () => {
        this.props.editFormStateHelper(this.props.executorObject)
    }

    render(){
        return(
            <>
                <tr>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.executorObject.executor_name}</td>
                    <td>{this.props.executorObject.executor_email}</td>
                    <td>{this.props.executorObject.instructions}</td>
                    <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.editFormFillHelper}>Edit</button>&nbsp;&nbsp;&nbsp;
                        <button>Delete</button>
                    </td>
                </tr>&nbsp;
            </>
        )
    }
}

export default Executor