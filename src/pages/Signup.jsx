import { useState } from 'react';
import signupImage from '../assets/images/signup-page.avif';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/register', data);
            if (response.data.success) {
                toast.success('Registration successful!');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };
    return (
        <div className="min-h-screen bg-blue-800 flex items-center justify-center px-4">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="bg-blue-100 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-4xl flex flex-col md:flex-row items-center gap-10">
                
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign up</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Already have account? <Link to="/login" className="text-blue-600 ">Login here</Link>
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                {...register('name', { required: 'Name is required' })}
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                placeholder="Enter your name here"
                                className="w-full px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email ID</label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: 'Email is not valid'
                                    }
                                })}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Enter your email here"
                                className="w-full px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters'
                                    }
                                })}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Enter your password here"
                                className="w-full px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="w-full md:w-1/2">
                    <img src={signupImage} alt="Signup Illustration" className="w-full max-w-md mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
