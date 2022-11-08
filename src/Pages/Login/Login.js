import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
    }
    return (
        <div className="hero">
            <img className='w-full' src="https://i.ibb.co/0D37Qfr/gradient-luxury-background-23-2148999255.webp" alt="" />
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4 ml-20' src="https://i.ibb.co/wrdH8TZ/flat-laptop-computer-with-people-padlock-password-security-access-verification-code-notification-con.webp" alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 ml-16 ">
                    <h1 className='text-5xl font-bold text-center'>Login now</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;