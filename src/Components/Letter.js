import React from 'react'
import { Table, Button } from 'semantic-ui-react'

class Letter extends React.Component {

    state = {
        deleteActivated : false
    }

    editFormFillHelper = () => {
        this.props.editFormStateHelper(this.props.letterObject)
    }

    changeDeleteStatus = () => {
        this.setState({deleteActivated : !this.state.deleteActivated})
    }

    deleteHelper = () => {
        this.props.deleteLetterHandler(this.props.letterObject)
        this.changeDeleteStatus()
    }



    render() {
        return(
            <>
                    <Table.Row>
                        <Table.Cell>{this.props.letterObject.letter_title}</Table.Cell>
                        <Table.Cell>{this.props.letterObject.recipient_name}</Table.Cell>
                        <Table.Cell>{this.props.letterObject.recipient_email}</Table.Cell>
                        <Table.Cell>{this.props.letterObject.letter_text}</Table.Cell>
                        <Table.Cell>{this.props.letterObject.letter_instructions}</Table.Cell>
                        <Table.Cell>
                            {this.state.deleteActivated === false 
                            ? 
                            <>
                                <Button onClick={this.editFormFillHelper}>Edit</Button>
                                <Button onClick={this.changeDeleteStatus} >Delete</Button>
                            </>
                            :
                            <>
                                <p>ARE YOU SURE?</p>
                                <Button onClick={this.changeDeleteStatus} >Go Back</Button>
                                <Button onClick={this.deleteHelper} >Yes, Delete</Button>
                            </>                        
                            }
                        </Table.Cell>
                    </Table.Row>
                
            </>
        )
    }


}

export default Letter