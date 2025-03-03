import LoginForm from '../../components/login/LoginForm';
import '../../login.scss';

function Login() {
	return (
		<section className="login">
			<div className="login-div">
				<section className="login-images">
					<img src="/images/logo.svg" alt="logo" className="logo" />
					<div>
						<img src="/images/image.svg" alt="illustration" />
					</div>
				</section>

				<section className="login-form">
					<img src="/images/logo.svg" alt="logo" className="logo" />
					<LoginForm />
				</section>
			</div>
		</section>
	);
};

export default Login;
