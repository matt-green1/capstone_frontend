import React from 'react'
import Letter from '../Components/Letter'
import LetterForm from '../Components/LetterForm'
import { Table, Button, Header } from 'semantic-ui-react'

class LetterContainer extends React.Component {
    //form: can be null, edit, or create - this will control which form comes up and will feed in different props
    state = {
        form_status: null,
        toEdit: null
    }

    sortedLetters = () => {
        return this.props.currentUser.letters.sort((a,b) => a.id - b.id)
    }

    createLetters = () => {
        return this.sortedLetters().map(letterObj => <Letter key={letterObj.id} letterObject={letterObj} editFormStateHelper={this.editFormStateHelper} deleteLetterHandler={this.props.deleteLetterHandler}  />)
    }

    createFormStateHelper = () => {
        this.setState({...this.state, form_status: "create"})
    }

    //Note: This works because any truthy value that isn't "create" brings up edit - might want to make the logic more explicit later
    editFormStateHelper = (letterObj) => {
        this.setState({...this.state, form_status: "edit", toEdit: letterObj})
    }

    backToLetterList = () => {
        this.setState({...this.state, form_status: null, toEdit: null})
    }

    render() {
        return(
            <>    
                {!this.state.form_status

                ?
                <>
                    <Header as="h1">{this.props.currentUser.first_name}'s Letters</Header>
                    
                    <Button onClick={this.createFormStateHelper} >Create New Letter</Button><br/><br/>
                    
                    {this.props.currentUser.letters.length < 1
                    ?
                        <>
                            <h2>You have no letters yet! Create one above!</h2>
                            <img src="https://media.giphy.com/media/dy4swYs1dp430jChRa/giphy-downsized.gif" />
                        </>
                    :
                    
                    <Table fixed>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Title</Table.HeaderCell>
                                <Table.HeaderCell>Recipient</Table.HeaderCell>
                                <Table.HeaderCell>Recipient Email</Table.HeaderCell>
                                <Table.HeaderCell>Letter Text</Table.HeaderCell>
                                <Table.HeaderCell>Instructions</Table.HeaderCell>
                                <Table.HeaderCell> Edit / Delete</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>


                        <Table.Body>
                            {this.createLetters()}
                        </Table.Body>
                    </Table>
                    }
                </>
                    
                :
                <>
                {this.state.form_status === "create" 
                    ?

                    <LetterForm createOrEditHandler={this.props.createLetterHandler} backToLetterList={this.backToLetterList} toEdit={this.state.toEdit} currentUser={this.props.currentUser} />

                    :
                    <LetterForm createOrEditHandler={this.props.editLetterHandler} backToLetterList={this.backToLetterList} toEdit={this.state.toEdit} currentUser={this.props.currentUser} />
                    }
                </>
                }
                
                

            </>
        )
    }

}

export default LetterContainer