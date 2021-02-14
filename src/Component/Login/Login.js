import React from 'react'
import "./Login.css"
import Button from "@material-ui/core/Button"
import { auth, provider } from "../../Utils/firebase"

const Login = () => {
    const signIn = async () => {
        const result = await auth.signInWithPopUp(provider)
        console.log(result)
        // sign in...
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>

        </div>
    )
}

export default Login
