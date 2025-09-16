
import { Link, useNavigate } from 'react-router-dom'
import LoginImage from '../assets/images/login-page.avif'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
    try {
        const response = await axios.post('https://dummyjson.com/auth/login',
            {username: data.username,password: data.password,},
            {headers: { "Content-Type": "application/json" }}
        );
        console.log("Response:", response.data);
        if (response.data && response.data.accessToken) {
            toast.success('Login successful!');
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('user', JSON.stringify(response.data));
            setTimeout(() => navigate('/dashboard'), 2000);
        }
    } catch (err) {
        console.error("Error:", err.response?.data || err.message);
        toast.error(err.response?.data?.message || "Invalid credentials");
    }
    };

    return (
        <div className="min-h-screen bg-blue-800 flex items-center justify-center px-4">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="bg-blue-100 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-4xl flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>
                    <p className="text-sm text-gray-600 mb-6">If you're not registered
                        <Link to="/signup" className="text-blue-600 "> Register here</Link>
                    </p>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-sm font-medium mb-1">Username</label>
                            <input
                            {...register('username', { required: 'Username is required' })}
                            type="text"
                            placeholder="Enter username"
                            className="w-full px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.username && <p className="text-red-600 text-sm">{errors.username.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                            {...register('password', { required: 'Password is required' })}
                            type="password"
                            placeholder="Enter password"
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
                    <img src={LoginImage} alt="Login Illustration" className="w-full max-w-md mx-auto" />
                </div>
            </div>
        </div>
    )
}

export default Login