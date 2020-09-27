import React from 'react'
import { Form, Button, Header, Icon, Popup } from 'semantic-ui-react'

class ExecutorForm extends React.Component {
    state = {
        user_id: this.props.currentUser.id, 
        executor_name: "",
        executor_email: "",
        relationship: ""
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
                relationship: this.props.toEdit.relationship
            })
        }
    }

    createOrEditHelper = (e) => {
        e.preventDefault()
        this.props.createOrEditHandler(this.state, this.props.toEdit)
        this.props.backToExecutorList()
        this.setState({
            user_id: this.props.currentUser.id, 
            executor_name: "",
            executor_email: "",
            relationship: ""
        })
    }

    render(){
        return(
            <>
                <Button onClick={this.props.backToExecutorList}>Back to Executor List</Button>
                
                    {this.props.toEdit ? <Header as="h1">Edit Executor</Header> : <Header as="h1">Add an Executor</Header>}
                <Form onSubmit={this.createOrEditHelper} >
                    <Form.Field>
                        <label>Executor Full Name</label>
                        <input name="executor_name" onChange={this.executorChangeHelper} value={this.state.executor_name} type="text" placeholder="Carl Tart" />
                    </Form.Field>
                    <Form.Field>
                        <label>Executor Email&nbsp;
                            <Popup
                                content="How we send the letters to the executor."
                                mouseEnterDelay={1}
                                mouseLeaveDelay={300}
                                on='hover'
                                trigger={<Icon name='help circle'/>} />

                        </label>
                        <input name="executor_email" onChange={this.executorChangeHelper} value={this.state.executor_email} type="text" placeholder="carltart@gmail.com" />
                    </Form.Field>
                    <Form.Field>
                        <label>Relationship To Executor</label>
                        <input name="relationship" onChange={this.executorChangeHelper} value={this.state.relationship} type="text" placeholder="Mom, Friend, etc." />
                    </Form.Field>
                    
                    <Button type="submit" >{this.props.toEdit ? "Save Changes" : "Add Executor" }</Button>
                </Form>
            </>
        )
    }
}

export default ExecutorForm