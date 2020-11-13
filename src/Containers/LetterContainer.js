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

    // sorts letters by the order in which you originally created them using their primary key
    sortedLetters = () => {
        return this.props.currentUser.letters.sort((a,b) => a.id - b.id)
    }

    //creates letter components
    createLetters = () => {
        return this.sortedLetters().map(letterObj => <Letter key={letterObj.id} letterObject={letterObj} editFormStateHelper={this.editFormStateHelper} deleteLetterHandler={this.props.deleteLetterHandler}  />)
    }

    // helper function for Create button onClick that brings up a blank, letter form for creating a new letter
    createFormStateHelper = () => {
        this.setState({...this.state, form_status: "create"})
    }

    // helper function that is passed as props to each letter component. Used for Edit button onClick - used to populate form with existing letter contents
    editFormStateHelper = (letterObj) => {
        this.setState({...this.state, form_status: "edit", toEdit: letterObj})
    }

    // helper function passed to letter form - closes out form and goes back to letter container page
    backToLetterList = () => {
        this.setState({...this.state, form_status: null, toEdit: null})
    }

    render() {
        return(
            <>    
                {!this.state.form_status
                ?
                <>
                    <Header as="h1" id="lettermainheader">{this.props.currentUser.first_name}'s Letters</Header>
                    <Header as="h3" id="letterinstructions">These messages an be intimidating to write, so don't worry about them being perfect immediately. Get a draft down and edit it until it's just right.</Header>

                    <Button onClick={this.createFormStateHelper} id="createletterbutton" >Create New Letter</Button><br/><br/>
                    <div id="lettertabledivspacer"></div>

                    {this.props.currentUser.letters.length < 1
                    ?
                        <>
                            <h2 className="nothingcreatedyet">You have no letters. Create one above.</h2>
                            <img className="nothingcreatedyetimage" src="https://media.giphy.com/media/dy4swYs1dp430jChRa/giphy-downsized.gif" />
                        </>
                    :
                    <>
                    <Table fixed singleLine id="lettertable" >
                        <Table.Header id="lettertabletopheader">
                            <Table.Row id="lettertoprow">
                                <Table.HeaderCell className="lettertableheader">Title</Table.HeaderCell>
                                <Table.HeaderCell className="lettertableheader">Recipient</Table.HeaderCell>
                                <Table.HeaderCell className="lettertableheader">Recipient Email</Table.HeaderCell>
                                <Table.HeaderCell className="lettertableheader">Letter Text</Table.HeaderCell>
                                <Table.HeaderCell className="lettertableheader">Instructions</Table.HeaderCell>
                                <Table.HeaderCell className="lettertableheader">Modify</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.createLetters()}
                        </Table.Body>
                        
                    </Table>
                    <div id="lettertabledivspacerbottom"></div>
                    </>
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