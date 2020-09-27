import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class SendComplete extends React.Component{

    backToProfileHelper = () => {
        this.props.history.push("/profile")
    }

    render(){
        return(
            <>
                <h1>Congrats!</h1>      
                <h2>Letters sent successfully (below image will be thumbs animation)</h2>
                <img src="https://media.giphy.com/media/l0ExgFoUtST2Q65yw/source.gif"/>
                <p>Your executors should get an email with instructions and informatiom about your letters and the other executoprs. (you will be CC's on this so you can be sure they went through)</p>
            
                <Button onClick={this.backToProfileHelper}>Back to Profile</Button>
            </>
              )
    }
}

export default withRouter(SendComplete)