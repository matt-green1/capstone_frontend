import React from 'react'

class Letter extends React.Component {

    editFormFillHelper = () => {
        this.props.editFormStateHelper(this.props.letterObject)
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
                    &nbsp;&nbsp;&nbsp;<button onClick={this.editFormFillHelper}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>Delete</button>
                    </td>
                </tr><br/>
            </>
        )
    }


}

export default Letter