import React from 'react'
import Executor from '../Components/Executor'
import ExecutorForm from '../Components/ExecutorForm'


class ExecutorContainer extends React.Component {

    createExecutors = () => {
    return this.props.currentUser.executors.map(executorObj => <Executor key={executorObj.id} executorObject={executorObj} />)
    }

    render() {
        console.log(this.props.currentUser)
        return(
            <>    
                <h2>ExecutorContainer: </h2>
                <h2>{this.props.currentUser.username}'s Executors</h2>
                
                <button>Create New Executor</button><br/><br/>
                
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <h3>Name</h3>
                            </th>
                            <th>
                                <h3>Email</h3>
                            </th>
                            <th>
                                <h3>Instructions</h3>
                            </th>
                            <th>
                                <h3>Edit / Delete</h3>
                            </th>
                        </tr>
                            {this.createExecutors()}
                    </tbody>
                </table>
                <ExecutorForm/>
            </>
        )
    }

}

export default ExecutorContainer