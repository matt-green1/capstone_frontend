import React from 'react'
import { Form, Button, Header, Icon, Popup, TextArea } from 'semantic-ui-react'

class LetterForm extends React.Component {
    state = {
        letterObj: {
            user_id: this.props.currentUser.id, 
            letter_title: "",
            recipient_name: "",
            recipient_email: "",
            letter_text: "",
            letter_instructions: "",
            signoff: ""
                },
        gratitude: false,
        forgiveness :false,
        favemems: false,
        apology: false

    }

    letterChangeHelper = (e) => {
        this.setState({...this.state, letterObj: {...this.state.letterObj, [e.target.name]:e.target.value}})
    }

    componentDidMount = () => {
        if(this.props.toEdit) {
            this.setState({
                ...this.state, letterObj:
                    {
                        user_id: this.props.currentUser.id,
                        letter_title: this.props.toEdit.letter_title,
                        recipient_name: this.props.toEdit.recipient_name,
                        recipient_email: this.props.toEdit.recipient_email,
                        letter_text: this.props.toEdit.letter_text,
                        letter_instructions: this.props.toEdit.letter_instructions,
                        signoff: this.props.toEdit.signoff
                    }
                })
        }
    }

    createOrEditHelper = (e) => {
        e.preventDefault()
        this.props.createOrEditHandler(this.state.letterObj, this.props.toEdit)
        this.props.backToLetterList()
        this.setState({
            ...this.state, letterObj:
                    {
                        user_id: this.props.currentUser.id, 
                        letter_title: "",
                        recipient_name: "",
                        recipient_email: "",
                        letter_text: "",
                        letter_instructions: "",
                        signoff: ""
                    }
        })
    }

    //Un-dry (wet?) code to deal with changing state of radio buttons
    gratitudeChanger = (e) => {
        this.setState({
                    ...this.state, gratitude: !this.state.gratitude, forgiveness :false, favemems: false, apology: false
                })
    }

    forgivenessChanger = (e) => {
        this.setState({
                    ...this.state, forgiveness: !this.state.forgiveness, gratitude :false, favemems: false, apology: false
                })
    }

    favememsChanger = (e) => {
        this.setState({
                    ...this.state, favemems: !this.state.favemems, gratitude :false, forgiveness: false, apology: false
                })
    }

    apologyChanger = (e) => {
        this.setState({
                    ...this.state, apology: !this.state.apology, gratitude :false, forgiveness: false, favemems: false
                })
    }

    //renders the prompt text based on what radio button is clicked
    promptRenderer = () => {
        if(this.state.gratitude) {
            return (
                <>
                    <p className="radioprompt">Say thank you for things that the letter recipient(s) did for you over the years.</p>
                    <p className="radioprompt">Example: "I am so grateful for your friendship - you always had my back when things went wrong and picked me up when I was down. I feel so lucky to have had you in my life."</p>
                </>
            )
        } else if (this.state.forgiveness) {
            return (
                <>
                    <p className="radioprompt">If you're holding onto any bad feelings toward anyone, forgive them and let them know you care about them.</p>
                    <p className="radioprompt">Example: "I know I've been distant over the years. I think I was holding onto a grudge from when we were little. I just want to say that I forgive you and I love you."</p>
                </>
            )
        } else if (this.state.favemems) {
            return (
                <>
                    <p className="radioprompt">Think of memories with the letter recipient(s) that were joyful or meaningful to you.</p>
                    <p className="radioprompt">Example: "One of my fondest memories is when we built that snowman during the blizzard and dressed it in Dad's clothes which got frozen in place. I don't think I've ever laughed harder. It was worth getting grounded!"</p>
                </>
            )
        } else if (this.state.apology) {
            return (
                <>
                    <p className="radioprompt">Take the time to apologize for anything that is on your conscience.</p>
                    <p className="radioprompt">Example: "I'm so sorry that I wasn't there for you the way you needed after your divorce. I would do anything to be able to go back in time and do that over."</p>
                </>
            )
        }
    }

    render() {
        return(
            <>
                {this.props.toEdit ? <Header as="h2" className="letterformheader" >Edit Letter</Header> : <Header as="h2" className="letterformheader" >Add a Letter</Header> }
                
                <Button onClick={this.props.backToLetterList} id="letterbackbutton">⇦ Back to Letter List</Button>
                <div id="letterformdivspacer"></div>
                <Form onSubmit={this.createOrEditHelper}>
                    <Form.Group id="triadgroup">
                        <Form.Field>
                            <label className="letterformlabel">RECIPIENT FULL NAME</label>
                            <input name="recipient_name" onChange={this.letterChangeHelper} value={this.state.letterObj.recipient_name} type="text" className="letterformtriadinput" />
                        </Form.Field>
                        <Form.Field>
                            <label className="letterformlabel">RECIPIENT CONTACT EMAIL&nbsp;
                            <Popup
                                content="How your executor(s) will get in touch with the letter recipient."
                                mouseEnterDelay={1}
                                mouseLeaveDelay={300}
                                on='hover'
                                trigger={<Icon name='help circle'/>} />
                                </label>
                            <input name="recipient_email" onChange={this.letterChangeHelper} value={this.state.letterObj.recipient_email} type="text" className="letterformtriadinput" />
                        </Form.Field>
                        <Form.Field>
                            <label className="letterformlabel">LETTER TITLE</label>
                            <input name="letter_title" onChange={this.letterChangeHelper} value={this.state.letterObj.letter_title} type="text" className="letterformtriadinput" />
                        </Form.Field>
                    </Form.Group>

                        <Form.Field id="lettertextinputcenter">
                            <label id="lettertextinputlabel">LETTER TEXT</label>
                            <textarea name="letter_text" onChange={this.letterChangeHelper} value={this.state.letterObj.letter_text} type="text" id="lettertextinput" />
                        </Form.Field>

                        <div id="promptcenterer">{this.promptRenderer()}</div>

                        <Header as="h5" id="radioheader">Having trouble finding the right words? Click an option below for guidance.</Header>
                     
                    <Form.Group inline id="radiobuttoncenter">
                        <Form.Radio
                            label="Gratitude"
                            checked={this.state.gratitude}
                            onClick={this.gratitudeChanger}
                            className="radiotitle"
                        >
                            <input type="radio" name="gratitude" checked={this.state.gratitude} onClick={this.gratitudeChanger} />
                        </Form.Radio>
                        <Form.Radio
                            label="Forgiveness"
                            checked={this.state.forgiveness}
                            onClick={this.forgivenessChanger}
                            className="radiotitle"
                        >
                            <input type="radio" name="forgiveness" checked={this.state.forgiveness} onClick={this.forgivenessChanger} />
                        </Form.Radio>
                        <Form.Radio
                            label="Favorite Memories"
                            checked={this.state.favemems}
                            onClick={this.favememsChanger}
                            className="radiotitle"
                        >
                            <input type="radio" name="favemems" checked={this.state.favemems} onClick={this.favememsChanger} />
                        </Form.Radio>
                        <Form.Radio
                            label="Apology"
                            checked={this.state.apology}
                            onClick={this.apologyChanger}
                            className="radiotitle"
                        >
                        {/* <label>Apology </label> think I forgot to delete this before */}
                            <input type="radio" name="apology" checked={this.state.apology} onClick={this.apologyChanger} />
                        </Form.Radio>

                    </Form.Group>

                        {/* <div id="promptcenterer">{this.promptRenderer()}</div> */}
                    <Form.Group className="letterformdoublegroup"> 
                        <Form.Field>
                            <label className="letterformlabel">EXECUTOR INSTRUCTIONS</label>
                            <textarea name="letter_instructions" onChange={this.letterChangeHelper} value={this.state.letterObj.letter_instructions} type="text" className="letterformdoubleinput" />
                        </Form.Field>
                        <Form.Field>
                            <label className="letterformlabel">PERSONAL SIGN OFF&nbsp;
                            <Popup
                                content="How your letter will be 'signed' at the bottom."
                                mouseEnterDelay={1}
                                mouseLeaveDelay={300}
                                on='hover'
                                trigger={<Icon name='help circle'/>} /></label>
                            <textarea name="signoff" onChange={this.letterChangeHelper} value={this.state.letterObj.signoff} type="text" className="letterformdoubleinput" />
                        </Form.Field>
                    </Form.Group>
                        <Button input type="submit" id="addeditletterbutton" >{this.props.toEdit ? "Save Changes" : "Create Letter" }</Button>
                </Form>
                    <div id="letterformbottondivspacer"></div>
                    
            </>
        )
    }


}

export default LetterForm
