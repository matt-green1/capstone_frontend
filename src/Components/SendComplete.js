import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Header,  } from 'semantic-ui-react'

class SendComplete extends React.Component{

    backToProfileHelper = () => {
        this.props.history.push("/profile")
    }

    render(){
        return(
                <>    
                    <Header as="h1" id="successheader"> Letters sent successfully!</Header>
                    <img src="https://media.giphy.com/media/ckB9wvcONerp73fvkQ/source.gif" id="successimage"/>
                    <Header as="h3" className="successinstructions">Your executors will get an email shortly with instructions and information.</Header>
                    <Header as="h3" className="successinstructions">You will be CC'd so you can be sure they went through.</Header>
                    <div id="successpagedivspacer"></div>
                    <Button onClick={this.backToProfileHelper} id="successbutton">⇦ Back to Profile</Button>
                </>
              )
    }
}

export default withRouter(SendComplete)