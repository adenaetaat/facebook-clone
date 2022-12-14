import React from 'react'
import { Button } from "@material-ui/core";
import "./Login.css";

function Login() {
   const signIn = () => {
        //sign in...

    };
    return <div className = "login">
        <div className = "login__logo">
             <img
                src="Https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                alt=""
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1024px-Facebook_Logo_%282019%29.svg.png"
                alt=""
            />
        </div>
        <Button type="submit" onClick={signIn}
        >
            Sign In
        </Button>
    </div>;
}

export default Login;