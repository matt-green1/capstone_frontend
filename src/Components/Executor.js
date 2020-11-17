import React from 'react'
import { Table, Button, Header } from 'semantic-ui-react'

class Executor extends React.Component {
    
    state = {
        deleteActivated : false
    }

    //Helper function for edit onClick. Calls editFormStateHelper which is passed down from Exec container and passes in the executor object (Changes exec cont. state which brings up form which is filled with saved exec info).
    editFormFillHelper = () => {
        this.props.editFormStateHelper(this.props.executorObject)
    }

    //Helper function that flips state and reveals/conceals actual delete button (first button just there for validation)
    changeDeleteStatus = () => {
        this.setState({deleteActivated : !this.state.deleteActivated})
    }
    
    //Validation on delete button. Brings up warning message and allows you to delete if you press button again.
    deleteHelper = () => {
        this.props.deleteExecutorHandler(this.props.executorObject)
        this.changeDeleteStatus()
    }

    render(){
        return(
            <>
                <Table.Row className="execdatarow">
                    <Table.Cell className="exectabledata">{this.props.executorObject.executor_name}</Table.Cell>
                    <Table.Cell className="exectabledata">{this.props.executorObject.executor_email}</Table.Cell>
                    <Table.Cell className="exectabledata">{this.props.executorObject.relationship}</Table.Cell>
                    <Table.Cell>
                        {this.state.deleteActivated === false 
                            ? 
                            <>
                                <Button onClick={this.editFormFillHelper} className="execformbutton">Edit</Button>
                                &nbsp;&nbsp;&nbsp;<Button onClick={this.changeDeleteStatus} className="execformbutton">Delete</Button>
                            </>
                            :
                            <>
                                <p className="delvalidation">ARE YOU SURE?</p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button onClick={this.changeDeleteStatus} className="execformbutton">Cancel</Button>
                                &nbsp;&nbsp;&nbsp;<Button onClick={this.deleteHelper} className="execformbutton">Yes, Delete</Button>
                            </>                        
                            }
                    </Table.Cell>
                </Table.Row>
            </>
        )
    }
}

export default Executor