import React from 'react'
import PageTitle from './PageTitle'
import { text } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

export default function Login() {
    const labelStyle = "block text-lg font-semibold text-primary dark:text-light mb-2";
    const textFieldStyle = "w-full px-4 py-2 text-base border rounded-md border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none dark:bg-gray placeholder-gray-500 dark:placeholder-lighter text-gray-900 dark:text-light";
    return (
        <div className='min-h-[852px] flex items-center justify-center bg-white dark:bg-darkbg font-primary dark:border-light '>
            <div className='bg-white dark:bg-gray-700 shadow-md rounded-lg max-w-md w-full px-8 py-6'>
                <PageTitle title="Login" />
                <form className='space-y-6'>
                    <div>
                        <label htmlFor="usename" className={labelStyle}>Username</label>
                        <input
                            id='username'
                            type="text"
                            name='username'
                            placeholder='Your Username'
                            required
                            className={textFieldStyle}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className={labelStyle}>Password</label>
                        <input
                            id='password'
                            type="password"
                            name='password'
                            placeholder='Your password'
                            required
                            className={textFieldStyle}
                        />
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='w-full px-6 py-2 text-white dark:text-black rounded-md durantion-200 bg-primary dark:bg-light hover:bg-dark dark:hover:bg-lighter'>
                            Login
                        </button>
                    </div>

                    <p className='text-center text-gray-600 dark:text-gray-400 mt-4'>
                        Don't have an account? {" "}
                        <Link
                            to=""
                            className='text-primary dark:text-light hover:text-dark dark:hover:text-lighter transition duration-200'
                        >
                            Register here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
