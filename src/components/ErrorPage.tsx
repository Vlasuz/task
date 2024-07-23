import { Link } from '@tanstack/react-router';
import React from 'react'

interface IErrorPageProps {
    
}

const ErrorPage:React.FC<IErrorPageProps> = () => {
    
    return (
        <div className='text-red-400'>
            Error page!!
            <br />
            <Link className='py-2 px-2 border-2 border-red-400 block w-fit rounded-lg mt-5 hover:bg-red-400 hover:text-white transition-all' to='/'>Go to main page</Link>
        </div>
    )
}

export default ErrorPage;
