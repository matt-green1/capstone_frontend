import React from 'react'
import Executor from '../Components/Executor'
import ExecutorForm from '../Components/ExecutorForm'


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
                    <h2>{this.props.currentUser.first_name}'s Executors</h2>
                    
                    <button onClick={this.createFormStateHelper}>Create New Executor</button><br/><br/>
                
                    {this.props.currentUser.executors.length < 1
                    ?
                        <>
                            <h2>You have no Executors yet! Create one above!</h2>
                            <img src="https://media.giphy.com/media/dy4swYs1dp430jChRa/giphy-downsized.gif" />
                        </>
                    :

                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <h3>|&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</h3>
                                </th>
                                <th>
                                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</h3>
                                </th>
                                <th>
                                    <h3>Relationship</h3>
                                </th>
                                <th>
                                    <h3>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit / Delete&nbsp;&nbsp;|</h3>
                                </th>
                            </tr>
                                {this.createExecutors()}
                        </tbody>
                    </table>
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