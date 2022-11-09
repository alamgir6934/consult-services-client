import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setAuthToken();
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero">
            <img className='w-full' src="https://i.ibb.co/0D37Qfr/gradient-luxury-background-23-2148999255.webp" alt="" />
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4 ml-20' src="https://i.ibb.co/wrdH8TZ/flat-laptop-computer-with-people-padlock-password-security-access-verification-code-notification-con.webp" alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 ml-16 py-20 ">
                    <h1 className='text-5xl font-bold text-center'>Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account?<Link className='text-orange-600 font-bold' to='/login'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;