import React from 'react'

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
                <tr>
                    <td>{this.props.letterObject.letter_title}</td>
                    <td>{this.props.letterObject.recipient_name}</td>
                    <td>{this.props.letterObject.recipient_email}</td>
                    <td>{this.props.letterObject.letter_text}</td>
                    <td>
                        {this.state.deleteActivated === false 
                        ? 
                        <>
                            &nbsp;&nbsp;&nbsp;<button onClick={this.editFormFillHelper}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={this.changeDeleteStatus} >Delete</button>
                        </>
                        :
                        <>
                            <p>ARE YOU SURE?</p>
                            <button onClick={this.changeDeleteStatus} >Go Back</button>&nbsp;&nbsp;
                            <button onClick={this.deleteHelper} >Yes, Delete</button>
                        </>                        
                        }
                    </td>
                </tr><br/>
            </>
        )
    }


}

export default Letter