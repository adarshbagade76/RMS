// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// function LoginPage() {
//     const [Username, SetUsername] = useState("")
//     const [password, setpassword] = useState("")
//     const [allstoredata, setstoredata] = useState([])

//     const submitForm = (e) => {
//        e.preventDefault();
//         const newdata = { Username: Username, password: password };
//         setstoredata([...allstoredata, newdata])
//     }
    
 


//     return (
//         <>

//             <div className="login-root">
//                 <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
//                     <div className="loginbackground box-background--white padding-top--64">
//                         <div className="loginbackground-gridContainer">
//                             <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
//                                 <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}>
//                                 </div>
//                             </div>
//                             <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
//                                 <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }} />
//                             </div>
//                             <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
//                                 <div className="box-root box-background--blue800" style={{ flexGrow: 1 }} />
//                             </div>
//                             <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
//                                 <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }} />
//                             </div>
//                             <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
//                                 <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }} />
//                             </div>
//                             <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
//                                 <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }} />
//                             </div>
//                             <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
//                                 <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }} />
//                             </div>
//                             <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
//                                 <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }} />
//                             </div>
//                             <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
//                                 <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }} />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>

//                         <div className="formbg-outer">
//                             <div className="formbg">
//                                 <div className="formbg-inner padding-horizontal--48">
//                                     <span className="padding-bottom--15">Sign in to your account</span>
//                                     <form action="" onSubmit={submitForm} id="stripe-login">
//                                         <div className="field padding-bottom--24">
//                                             <label htmlFor="Username">Username</label>
//                                             <input type="Username" name="Username"
//                                                 value={Username}
//                                                 onChange={(e) => SetUsername(e.target.value)} />
//                                         </div>
//                                         <div className="field padding-bottom--24">
//                                             <div className="grid--50-50">
//                                                 <label htmlFor="password">Password</label>
//                                                 <div className="reset-pass">
//                                                     <a href="#">Forgot your password?</a>
//                                                 </div>
//                                             </div>
//                                             <input type="password" name="password"
//                                                 value={password}
//                                                 onChange={(e) => setpassword(e.target.value)}//get
//                                             />
//                                         </div>
//                                          <Link to={'/home'} className="button button1" type='submit'>login</Link>





//                                         <div className="field">
//                                             <a className="ssolink" href="#">signin with Google</a>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default LoginPage



import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap';



const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("")
    const [password, setPassword] = useState("");
    const [allinp, setAllInp] = useState({
        email: "",
        password: "",
    })
    useEffect(() => {
        setAllInp((preValue) => {
            return {
                ...preValue,
                email: email,
                password: password

            }

        })
    }, [email, password])

    const [logres, setLogres] = useState("")
    console.log(logres)



    const login = () => {
        
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(allinp)
        })
            .then(data => {
                data.json();
                setLogres(data);
                if (data.status == 200) {
                    navigate("/home");
                }
                else {
                    setError("Failed to log in")
                }
            }
            )
            .catch(error => console.error(error))

    }

    const submit = (e) => {
        e.preventDefault();
      
       


    }
    console.log(allinp);




    {
        return (
            <div className="text-center p-5 log">
                <h2 className='rms_head' style={{ 'fontWeight': '900', 'color': '#fff' }}>RMS Login</h2>
                
                {error && <Alert variant="danger" className='error'>{error}</Alert>}
                
              
                <form className='log_box' onSubmit={submit}>

                    <p>
                        <label className='labe' style={{ 'color': '#fff' }}>Email</label><br />
                        <input className='emaill' type="email"
                            placeholder='email'
                            name="Email"
                            required

                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </p>
                    {/* <p>
                        <label className='labp' style={{ 'color': '#fff' }}>Password</label>
                        <Link to="/forget-password"><label className="right-label" style={{ 'display': 'none' }}>Forget password?</label></Link>
                        <br />
                        <input className='pass' type="password"
                            name="password"
                            required
                            placeholder='password'

                            onChange={(e) => setPassword(e.target.value)} />
                    </p> */}
                    <p>
                        <button className='login_btn' type="submit" style={{ 'marginTop': '20px' }} >Login

                        </button>
                    </p>
                </form>
                <footer>
                    <p class><Link style={{ 'fontWeight': '900', 'color': '#fff', 'textDecoration': 'none','borderRadius':'2px' }} to="/">Back To Keka Login Page</Link>.</p>
                </footer>
            </div>

        )
    }
}
export default Login
