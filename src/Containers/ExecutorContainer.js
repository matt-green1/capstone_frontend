import React from 'react'
import Executor from '../Components/Executor'
import ExecutorForm from '../Components/ExecutorForm'
import { Table, Button, Header } from 'semantic-ui-react'

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
                    <Header as="h1" >{this.props.currentUser.first_name}'s Executors</Header>
                    
                    <Button onClick={this.createFormStateHelper}>Create New Executor</Button>
                
                    {this.props.currentUser.executors.length < 1
                    ?
                        <>
                            <h2>You have no Executors yet! Create one above!</h2>
                            <img src="https://media.giphy.com/media/dy4swYs1dp430jChRa/giphy-downsized.gif" />
                        </>
                    :


                    <Table fixed>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>Relationship</Table.HeaderCell>
                                <Table.HeaderCell> Edit / Delete</Table.HeaderCell>
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