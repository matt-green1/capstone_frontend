import React from 'react'
import { withRouter } from 'react-router-dom'
import UserForm from './UserForm'
import { Header, Button, Message, Grid, Container, Checkbox } from 'semantic-ui-react'

class Profile extends React.Component {

    state= {
        button : false,
        editButton : false
    }

    // Validation to make sure you've written letters before trying to finalize your account. Check is there's at least 1 letter.
    // Activates finalize account button and warning.
    exportButtonActivator = () => {    
        if(this.props.currentUser.letters.length > 0 && this.props.currentUser.executors.length > 0 ) {
            this.setState({...this.state, button: !this.state.button})
        } else {
            window.alert("Must have at least one letter and one executor to finalize account.")
        }
    }

    // Changes status of activated "export button" to "sent", calls exportLetters function in app (see app notes for details), calls and redirects to send-confirmation page
    exportLetterHelper = () => {
        this.setState({...this.state, button: !this.state.button})
        this.props.exportLetters()
        this.props.history.push("/complete")
    }

    // Changes state, brings up userForm
    editStatusChanger = () => {
        this.setState({...this.state, editButton: !this.state.editButton})
    }

    // Hides password on profile page - replaces each character with a "*"
    passwordRedactor = () => {
        let passwordLength = this.props.currentUser.password.length
        return "*".repeat(passwordLength)
    }

    // Formats date object - more user friendly
    niceDate = () => {
        // Splits date by underscores into an array
        let dateOrigArray = this.props.currentUser.last_batch.split("_")

        // Takes only first 4 elements and joins them into a string seperated by a space
        let dateOnly = dateOrigArray.slice(0,4)
        let formattedDate = dateOnly.join(" ")

        // Isolates just the military time hour and then converts it to normal time
        let militaryHour = parseInt(dateOrigArray[4])
        militaryHour > 12 ? militaryHour -=12 : militaryHour += 0

        // Gets the time elements that are NOT the hour
        let timeOnly = dateOrigArray.slice(5)

        // Combines the civilian-ized hour with the rest of the time array
        let fullTime = [militaryHour, ...timeOnly]

        // Joins array with a colon
        let formattedTime = fullTime.join(":")
        
        // Returns the date and time in a readable format
        return `${formattedDate} at ${formattedTime} `
    }

    render() {
        return (
            <>
                <Container>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Header as="h1" id="accountinfoheader">Account Information</Header>
                            {this.state.editButton
                            ?
                            <UserForm currentUser={this.props.currentUser} editStatusChanger={this.editStatusChanger} editUserInfoHandler={this.props.editUserInfoHandler}/>
                            :
                            <>
                                <div className="accounttextcenterer">
                                    <h3 className="accountgeneraltext">Name: {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h3>
                                    <h3 className="accountgeneraltext">Email: {this.props.currentUser.user_email} </h3>
                                    <h3 className="accountgeneraltext">Password: {this.passwordRedactor()} </h3>
                                    
                                    <Button onClick={this.editStatusChanger} id="editprofileinfobutton"> Edit Account Information </Button>
                                </div>
                            </>
                            }
                        </Grid.Column>

                        <Grid.Column>
                            <Header as="h1" id="accountletterinfoheader">My Letters</Header>
                                <div className="accounttextcenterer">
                                    <h3 className="accountgeneraltext">Letters last finalized: {this.niceDate()} </h3>
                                    <h3 className="accountgeneraltext">Number of Letters: {this.props.currentUser.letters.length} </h3>
                                    <h3 className="accountgeneraltext">Number of Executors: {this.props.currentUser.executors.length} </h3>                
                                </div>
                        </Grid.Column>
                    </Grid>
                </Container>

                <Container id="finalizecontainer">
                    <Header as="h1" id="finalizeheader">Finalize Account</Header>
                    <Header as="h1" id="letterstatusheader">Current Letter Status: <em>{this.props.currentUser.letter_status ? "Sent to Executors" : "Not Sent"}</em> </Header>
                        {this.props.currentUser.letter_status ? null :
                            <>
                                <Header as="h1" id="toggleheader">Mark letters ready to send:</Header>
                                <Checkbox 
                                    className="finalizetoggle"
                                    toggle
                                    onChange={this.exportButtonActivator}
                                    checked={this.state.button}
                                >
                                
                                </Checkbox>
                            </>
                        }
                    
                        <br/><br/>
                        
                        {this.props.currentUser.letter_status ? <Button onClick={this.props.markUnfinished} className="profilesendbutton" >Mark Account Unfinished</Button> : <Button onClick={this.state.button ? this.exportLetterHelper : null} className="profilesendbutton"> Send To Executors </Button> }
                        {this.state.button ? <Header as="h2" id="profilewarning">Warning: Clicking the button above will email your letters to your executors. It cannot be undone.</Header> : null}
                </Container>
            </>
        )
    }
}

export default withRouter(Profile)