import React from 'react'

class SignupForm extends React.Component {

    render() {

        return(
            <>
                <h4>Signup form here</h4>
                <input type="text" placeholder="Username here" />
                <input type="text" placeholder="Password here" />
                <input type="submit"  value="Sign Up" />
                <p>Already have an account? <a href="/login">Log in here</a></p>
            </>
        )
    }


}

export default SignupForm