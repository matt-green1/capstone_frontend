import React from 'react'
import Executor from '../Components/Executor'
import ExecutorForm from '../Components/ExecutorForm'
import { Table, Button, Header, Icon, Popup } from 'semantic-ui-react'

class ExecutorContainer extends React.Component {

    state = {
        form_status: null,
        toEdit: null
    }

    sortedExecutors = () => {
        return this.props.currentUser.executors.sort((a,b) => a.id - b.id)
    }

    createExecutors = () => {
    return this.sortedExecutors().map(executorObj => <Executor key={executorObj.id} executorObject={executorObj} editFormStateHelper={this.editFormStateHelper} deleteExecutorHandler={this.props.deleteExecutorHandler} />)
    }

    createFormStateHelper = () => {
        this.props.currentUser.executors.length >= 3 ? window.alert("You cannot have more than three executors.\nPlease delete one if you'd like to add a new one.") : this.setState({...this.state, form_status: "create"})
    }

    editFormStateHelper = (executorObj) => {
        this.setState({...this.state, form_status: "edit", toEdit: executorObj})
    }

    backToExecutorList = () => {
        this.setState({...this.state, form_status: null, toEdit: null})
    }

    render() {
        return(
            <>    
                {!this.state.form_status
                ?
                <>
                    <Header as="h1" id="execheader">{this.props.currentUser.first_name}'s Executors</Header>
                    <Header as="h3" id="execinstructions">An executor should be someone you trust completely and who is reliable enough to handle the responsibility of carrying out your last wishes.</Header>

                    <Button id="createexecbutton" onClick={this.createFormStateHelper}>Create New Executor</Button>
                    <div id="execspacerdiv"></div>
                
                    {this.props.currentUser.executors.length < 1
                    ?
                        <>
                            <h2 className="nothingcreatedyet">You have no Executors. Create one above.</h2>
                            <img className="nothingcreatedyetimage" src="https://media.giphy.com/media/dy4swYs1dp430jChRa/giphy-downsized.gif" />
                        </>
                    :

                    <Table id="exectable">
                        <Table.Header id="exectabletopheader">
                            <Table.Row id="exectoprow">
                                <Table.HeaderCell className="exectableheader">Name</Table.HeaderCell>
                                <Table.HeaderCell className="exectableheader">Email</Table.HeaderCell>
                                <Table.HeaderCell className="exectableheader">Relationship</Table.HeaderCell>
                                <Table.HeaderCell className="exectableheader">Modify</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.createExecutors()}
                        </Table.Body>
                    </Table>
                    
                    }
                </>

                :
                <>
                {this.state.form_status === "create"
                    ?
                    <ExecutorForm createOrEditHandler={this.props.createExecutorHandler} backToExecutorList={this.backToExecutorList} toEdit={this.state.toEdit} currentUser={this.props.currentUser}/>
                    :
                    <ExecutorForm createOrEditHandler={this.props.editExecutorHandler} backToExecutorList={this.backToExecutorList} toEdit={this.state.toEdit} currentUser={this.props.currentUser}/>
                }
            </>
            }
        </>
        )
    }

}

export default ExecutorContainer