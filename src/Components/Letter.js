import React from 'react'
import { Table, Button } from 'semantic-ui-react'

class Letter extends React.Component {

    state = {
        deleteActivated : false
    }

    //Helper function for edit onClick. Calls editFormStateHelper which is passed down from letter container and passes in the letter object (Changes letter cont. state which brings up form which is filled with saved letter info).
    editFormFillHelper = () => {
        this.props.editFormStateHelper(this.props.letterObject)
    }

    //Helper function that flips state and reveals/conceals actual delete button (first button just there for validation)
    changeDeleteStatus = () => {
        this.setState({deleteActivated : !this.state.deleteActivated})
    }

    //Validation on delete button. Brings up warning message and allows you to delete if you press button again.
    deleteHelper = () => {
        this.props.deleteLetterHandler(this.props.letterObject)
        this.changeDeleteStatus()
    }

    render() {
        return(
            <>
                    <Table.Row className="letterdatarow">
                        <Table.Cell className="lettertabledata">{this.props.letterObject.letter_title}</Table.Cell>
                        <Table.Cell className="lettertabledata">{this.props.letterObject.recipient_name}</Table.Cell>
                        <Table.Cell className="lettertabledata">{this.props.letterObject.recipient_email}</Table.Cell>
                        <Table.Cell className="lettertabledata">{this.props.letterObject.letter_text}</Table.Cell>
                        <Table.Cell className="lettertabledata">{this.props.letterObject.letter_instructions}</Table.Cell>
                        <Table.Cell>
                            {this.state.deleteActivated === false 
                            ? 
                            <>
                                <Button onClick={this.editFormFillHelper} className="letterformbutton" >Edit</Button>
                                &nbsp;&nbsp;<Button onClick={this.changeDeleteStatus} className="letterformbutton" >Delete</Button>
                            </>
                            :
                            <>
                                <p className="delvalidation">ARE YOU SURE?</p>
                                <Button onClick={this.changeDeleteStatus} className="letterformbutton" >Cancel</Button>
                                <Button onClick={this.deleteHelper} className="letterformbutton" >Yes, Delete</Button>
                            </>                        
                            }
                        </Table.Cell>
                    </Table.Row>
                
            </>
        )
    }

}

export default Letter