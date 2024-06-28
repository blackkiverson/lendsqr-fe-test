import { FC, useState, useEffect } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// Define the Props interface
interface Props { }

// Define the LoginForm functional component
const LoginForm: FC<Props> = () => {
    // State to toggle password visibility
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    // State to manage loading state
    const [loading, setLoading] = useState<boolean>(false);
    // State to manage login success
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    // useNavigate hook from react-router-dom for navigation
    const navigate = useNavigate();
    // Initialize useForm hook from react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'all',
    });

    // Define the form submission handler
    const onSubmit = async (data: any) => {
        setLoading(true);

        // Simulate an API call
        setTimeout(() => {
            localStorage.setItem('auth', 'true'); // Set auth in localStorage
            setLoading(false);
            setIsLoggedIn(true); // Set login success state
        }, 2000);
    };

    // useEffect to handle navigation after login
    useEffect(() => {
        if (!loading && isLoggedIn) {
            navigate('../../dashboard/DashboardLayout'); // Navigate to dashboard
        }
    }, [loading, isLoggedIn, navigate]);

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
