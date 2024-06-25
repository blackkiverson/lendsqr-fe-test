import { FC, useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Define the Props interface
interface Props { }

// Define the LoginForm functional component
const LoginForm: FC<Props> = () => {
    // State to toggle password visibility
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    // State to manage loading state
    const [loading, setLoading] = useState<boolean>(false);
    // useNavigate hook from react-router-dom for navigation
    const navigate = useNavigate();
    // Initialize useForm hook from react-hook-form
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'all',
    });

    // Define the form submission handler
    const onSubmit = async (data: any) => {
        if (data) {
            setLoading(true);

            try {
                // Send login request to the server
                const response = await axios.post('/api/login', data);

                // Check if the login is successful
                if (response.status === 200) {
                    reset();
                    navigate('/dashboard');
                }
            } catch (error) {
                console.error('Login failed:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <section className="login-section">
            <div className="login-text">
                <h1>Welcome!</h1>
                <p>Enter details to login.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: 'Please enter your email',
                        })}
                    />
                    {errors.email && (
                        <span role="alert" className="input-error">
                            {(errors.email as FieldError).message}
                        </span>
                    )}
                </div>

                <div>
                    <div className="input-password">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Password"
                            {...register('password', {
                                required: 'Please enter your password',
                            })}
                        />
                        <p className="password-visible" onClick={() => setPasswordVisible(!passwordVisible)}>
                            {!passwordVisible ? 'SHOW' : 'HIDE'}
                        </p>
                    </div>
                    {errors.password && (
                        <span role="alert" className="input-error">
                            {(errors.password as FieldError).message}
                        </span>
                    )}
                </div>

                <p className="forgot-password">FORGOT PASSWORD?</p>

                <button type="submit" className="submit-btn">
                    {loading ? 'Loading...' : 'LOG IN'}
                </button>
            </form>
        </section>
    );
};

export default LoginForm;
