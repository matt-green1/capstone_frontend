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