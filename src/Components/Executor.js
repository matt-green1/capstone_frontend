import React from 'react'

class Executor extends React.Component {
    executorObject
    render(){
        return(
            <>
                <tr>
                    <td>{this.props.executorObject.executor_name}</td>
                    <td>{this.props.executorObject.executor_email}</td>
                    <td>{this.props.executorObject.instructions}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </>
        )
    }
}

export default Executor