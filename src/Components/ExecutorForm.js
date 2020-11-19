import React from 'react'
import { Form, Button, Header, Icon, Popup } from 'semantic-ui-react'

class ExecutorForm extends React.Component {
    state = {
        user_id: this.props.currentUser.id, 
        executor_name: "",
        executor_email: "",
        relationship: ""
    }

    //Controls form input
    executorChangeHelper = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value})
    }

    // If editing existing executor, fills form with saved executor info
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

    //Helper function when form submitted. Two functions live in App (one for creating new exec w/ POST and one for editing existing exec w PATCH)
    //Different function passed in from Executor container based on its state (create or edit)
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
                {this.props.toEdit ? <Header as="h1" className="execformheader">Edit Executor</Header> : <Header as="h1" className="execformheader">Add an Executor</Header>}
                <Button onClick={this.props.backToExecutorList} id="execbackbutton">⇦ Back to Executors</Button>
                <div id="execformdivspacer"></div>
                
                <div id="execformdiv">
                <Form onSubmit={this.createOrEditHelper}>
                    <Form.Field>
                        <label className="execformlabel">EXECUTOR FULL NAME</label>
                        <input name="executor_name" onChange={this.executorChangeHelper} value={this.state.executor_name} type="text" className="execforminput" />
                    </Form.Field>
                    <Form.Field>
                        <label className="execformlabel">EXECUTOR EMAIL&nbsp;
                            <Popup
                                content="How we deliver the letter link to your executors."
                                mouseEnterDelay={1}
                                mouseLeaveDelay={300}
                                on='hover'
                                trigger={<Icon name='help circle'/>} />

                        </label>
                        <input name="executor_email" onChange={this.executorChangeHelper} value={this.state.executor_email} type="text" className="execforminput" />
                    </Form.Field>
                    <Form.Field>
                        <label className="execformlabel">RELATIONSHIP TO EXECUTOR</label>
                        <input name="relationship" onChange={this.executorChangeHelper} value={this.state.relationship} type="text" className="execforminput" />
                    </Form.Field>
                    
                    <Button type="submit" id="addeditexecutorbutton" >{this.props.toEdit ? "Save Changes" : "Add Executor" }</Button>
                </Form>
                </div>
            </>
        )
    }
}

export default ExecutorForm