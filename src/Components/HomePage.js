import React from 'react'

class HomePage extends React.Component {

    render() {
        console.log(this.props)
        return(
            <>
                <h4>Home Page</h4>
                <p>Welcome {this.props.currentUser.username}! Let's get started!</p>
                <ol>
                    <li>First, you'll want to set up your executors. They're who will take care of your final wishes and distribute the letters LINKHERE </li>
                    <li>Next, you can write your letters! Take your time, these are hard to write. LINKHERE</li>
                    <li>Once finished, you can mark your account finished HERE - BECAREFUL THOUGH - LINKHERE???</li>
                </ol>
            </>
        )
    }


}

export default HomePage