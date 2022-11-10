import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)


                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // //get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        localStorage.setItem('consult-token', data.token);
                        navigate(from, { replace: true });

                    })


            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero">
            <img className='w-full' src="https://i.ibb.co/0D37Qfr/gradient-luxury-background-23-2148999255.webp" alt="" />
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4 ml-20' src="https://i.ibb.co/wrdH8TZ/flat-laptop-computer-with-people-padlock-password-security-access-verification-code-notification-con.webp" alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 ml-16 py-20 ">
                    <h1 className='text-5xl font-bold text-center'>Login now</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to consult here<Link className='text-orange-600 font-bold' to='/signup'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;