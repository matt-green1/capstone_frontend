import React from 'react'
import { withRouter } from 'react-router-dom'
import UserForm from './UserForm'
import { Header, Button, Message, Divider } from 'semantic-ui-react'

class Profile extends React.Component {

    state= {
        button : false,
        editButton : false
    }

    exportButtonActivator = () => {    
        if(this.props.currentUser.letters.length > 0 && this.props.currentUser.executors.length > 0 ) {
            this.setState({...this.state, button: !this.state.button})
        } else {
            window.alert("Must have at least one letter and one executor to finalize account.")
        }
    }

    exportLetterHelper = () => {
        this.setState({...this.state, button: !this.state.button})
        this.props.exportLetters()
        this.props.history.push("/complete")
    }

    editStatusChanger = () => {
        this.setState({...this.state, editButton: !this.state.editButton})
    }

    passwordRedactor = () => {
        let passwordLength = this.props.currentUser.password.length
        return "*".repeat(passwordLength)
    }

    // prettifyDate = () => {
    //     let dateOrigArray = this.props.currentUser.last_batch.split("_")
    //     let [weekDay, month, monthDay, year, hour, minute, second] = dateOrigArray
    //     //why doesn't destructuring work above?
// need tyo play around with generating dates IN the script not in node - and figure out your conditions -- then write a note to check them wednesday and thursday
    // link: https://stackoverflow.com/questions/8224459/how-to-create-a-date-object-from-string-in-javascript    
    // lecture notes: https://www.notion.so/mattssandbox/Copy-of-8-17-Syntactic-Sugar-5e424af05113464da4c2f0d5a731c633
    //below we'll need to do some manual STRFTiming
    //     if weekday mon, tues, thurs, fri get "day added"
    //        wed, sat, sunday get custom add ons
            
        //n
    //     //console.log(weekday)
    // }

    render() {
        //this.prettifyDate()
        return (
            <>
                <Header as="h1">Account Information</Header>
                {this.state.editButton
                ?
                <UserForm currentUser={this.props.currentUser} editStatusChanger={this.editStatusChanger} editUserInfoHandler={this.props.editUserInfoHandler}/>
                :
                <>
                    <h3>Name: {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h3>
                    <h3>Email: {this.props.currentUser.user_email} </h3>
                    <h3>Password: {this.passwordRedactor()} </h3>
                    
                    <Button onClick={this.editStatusChanger}> Edit Account Information </Button>
                </>
                }
                <Divider section/>
                
                <Header as="h1">My Letters</Header>
                    <h3>Letters last sent to executors on: {this.props.currentUser.last_batch} </h3>
                    <h3>Number of Letters: {this.props.currentUser.letters.length} </h3>
                    <h3>Number of Executors: {this.props.currentUser.executors.length} </h3>                

                <Divider section/>

                <Header as="h1">Finalize Account</Header>
                {this.props.currentUser.letter_status ? null :
                    <div className="ui toggle checkbox">
                        <input type="checkbox" name="public" onChange={this.exportButtonActivator} checked={this.state.button} />
                        <label>Letters ready to send?</label>
                    </div>
                    
                }
                
                <br/><br/>
                {this.props.currentUser.letter_status ? <Button onClick={this.props.markUnfinished}>Mark Account Unfinished</Button> : <Button onClick={this.state.button ? this.exportLetterHelper : null}> SEND TO EXECUTORS </Button> }
                {this.state.button ? <Message warning 
                header="Warning: Clicking the button above will email your letters to your executors. It cannot be undone."
                /> : null}
                <h4>Current Letter Status: {this.props.currentUser.letter_status ? "Sent to Executors" : "Not Sent"} </h4>
            </>
        )
    }

}

export default withRouter(Profile)