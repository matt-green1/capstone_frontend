import React from 'react'
import Letter from '../Components/Letter'
import LetterForm from '../Components/LetterForm'

class LetterContainer extends React.Component {
    //form: can be null, edit, or create
    state = {
        form: null
    }

    createLetters = () => {
        return this.props.currentUser.letters.map(letterObj => <Letter key={letterObj.id} letterObject={letterObj} />)
    }




    render() {
        return(
            <>    
                <h2>{this.props.currentUser.username}'s Letters</h2>
                
                <button>Create New Letter</button><br/><br/>
                
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <h3>Title</h3>
                            </th>
                            <th>
                                <h3>Recipient</h3>
                            </th>
                            <th>
                                <h3>Letter Type</h3>
                            </th>
                            <th>
                                <h3>Edit / Delete</h3>
                            </th>
                        </tr>
                            {this.createLetters()}
                    </tbody>
                </table>
                
                
                <LetterForm/>

            </>
        )
    }

}

export default LetterContainer