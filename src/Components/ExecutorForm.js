import React from 'react'

class ExecutorForm extends React.Component {
    state = {
        user_id: this.props.currentUser.id, 
        executor_name: "",
        executor_email: "",
        instructions: ""
    }

    executorChangeHelper = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value})
    }

    componentDidMount = () => {
        if(this.props.toEdit) {
            this.setState({
                user_id: this.props.currentUser.id, 
                executor_name: this.props.toEdit.executor_name,
                executor_email: this.props.toEdit.executor_email,
                instructions: this.props.toEdit.instructions
            })
        }
    }

    render(){
        console.log(this.state)
        return(
            <>
                <button onClick={this.props.backToExecutorList}>Back to Executor List</button>
                
                    {this.props.toEdit ? <h4>Edit Executor</h4> : <h4>Add an Executor</h4> }
                <form>
                    <label>Executor Name (The person who will be in charge of distributing the letters)</label><br/>
                    <input name="executor_name" onChange={this.executorChangeHelper} value={this.state.executor_name} type="text" placeholder="Carl Tart" />
                    <br/><br/>
                    <label>Executor Email (How we get the letters to the executor when you're ready)</label><br/>
                    <input name="executor_email" onChange={this.executorChangeHelper} value={this.state.executor_email} type="text" placeholder="carltart@gmail.com" />
                    <br/><br/>
                    <label>Instructions (How we get the letters to the executor when you're ready)</label><br/>
                    <textarea name="instructions" onChange={this.executorChangeHelper} value={this.state.instructions} type="text" placeholder="For the Mom email, send it twice" />
                    <br/><br/>
                    <input type="submit"  value={this.props.toEdit ? "Save Changes" : "Add Executor" } />
                </form>
            </>
        )
    }
}

export default ExecutorForm