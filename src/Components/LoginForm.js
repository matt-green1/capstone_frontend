import React from 'react'

class LoginForm extends React.Component {

    render() {

        return(
            <>
                <h4>Login form here</h4>
                <input type="text" placeholder="Username here" />
                <input type="text" placeholder="Password here" />
                <input type="submit"  value="Log In" />
            </>
        )
    }


}

export default LoginForm