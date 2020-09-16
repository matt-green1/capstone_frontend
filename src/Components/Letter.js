import React from 'react'

class Letter extends React.Component {

    render() {

        return(
            <>
                <tr>
                    <td>{this.props.letterObject.letter_title}</td>
                    <td>{this.props.letterObject.recipient_name}</td>
                    <td>{this.props.letterObject.letter_type}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </>
        )
    }


}

export default Letter