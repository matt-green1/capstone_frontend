import React from 'react'
import Letter from '../Components/Letter'
import LetterForm from '../Components/LetterForm'

class LetterContainer extends React.Component {
    //form: can be null, edit, or create - this will control which form comes up and will feed in different props
    state = {
        form_status: null
    }

    createLetters = () => {
        return this.props.currentUser.letters.map(letterObj => <Letter key={letterObj.id} letterObject={letterObj} />)
    }

    createFormHelper = () => {
        this.setState({...this.state, form_status: "create"})
    }

    backToLetterList = () => {
        this.setState({...this.state, form_status: null})
    }

    render() {
        return(
            <>    
                {!this.state.form_status

                ?
                <>
                    <h2>{this.props.currentUser.username}'s Letters</h2>
                    
                    <button onClick={this.createFormHelper} >Create New Letter</button><br/><br/>
                    
                    {this.props.currentUser.letters.length < 1
                    ?
                        <>
                            <h2>You have no letters yet! Create one above!</h2>
                            <img src="https://media.giphy.com/media/dy4swYs1dp430jChRa/giphy-downsized.gif" />
                        </>
                    :
                    
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
                    }
                </>
                    
                    

                :
                <>
                {this.state.form_status === "create" 
                    ?

                    <LetterForm backToLetterList={this.backToLetterList}/>

                    :
                    <h1>badonadunk in the trunk</h1>
                    }
                </>
                }
                
                

            </>
        )
    }

}

export default LetterContainer