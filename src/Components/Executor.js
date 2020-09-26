import React from 'react'
import { Table, Button, Header } from 'semantic-ui-react'

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
                <Table.Row>
                    <Table.Cell>{this.props.executorObject.executor_name}</Table.Cell>
                    <Table.Cell>{this.props.executorObject.executor_email}</Table.Cell>
                    <Table.Cell>{this.props.executorObject.relationship}</Table.Cell>
                    <Table.Cell>
                        {this.state.deleteActivated === false 
                            ? 
                            <>
                                <Button onClick={this.editFormFillHelper}>Edit</Button>
                                <Button onClick={this.changeDeleteStatus} >Delete</Button>
                            </>
                            :
                            <>
                                <p>ARE YOU SURE?</p>
                                <Button onClick={this.changeDeleteStatus} >Go Back</Button>&nbsp;&nbsp;
                                <Button onClick={this.deleteHelper} >Yes, Delete</Button>
                            </>                        
                            }
                    </Table.Cell>
                </Table.Row>
            </>
        )
    }
}

export default Executor