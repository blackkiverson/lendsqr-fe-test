import { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DetailHeader from '../../components/users/DetailHeader';
import DetailMain from '../../components/users/DetailMain';
import '../../styles/UserDetailsPage.scss';
import Loader from '../../components/users/Loader';
import axios from 'axios';

interface Props {}

const UserDetail: FC<Props> = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [user, setUser] = useState<any>(null);
	const { id } = useParams<{ id: string }>();

	const fetchUser = async () => {
		setLoading(true);
		try {
			console.log('Fetching user data...');
			const response = await axios.get('https://run.mocky.io/v3/2fe94a95-b70a-4566-a79d-bd9c8c22b75e');
			console.log('Response data:', response.data);
			const userData = response.data.find((u: any) => u.id === parseInt(id!));
			console.log('User data:', userData);
			setUser(userData);
		} catch (error) {
			console.error('Error fetching users:', error);
		} finally {
			setLoading(false);
		}
	};

	const handleStatusChange = async (status: string) => {
		if (user) {
		  try {
			// Here you would update the user status on the server
			const updatedUser = { ...user, status };
			setUser(updatedUser);
			// Make API call to update user status
			// await axios.put(`/api/users/${user.id}`, { status });
		  } catch (error) {
			console.error('Error updating user status:', error);
		  }
		}
	};

	useEffect(() => {
		fetchUser();
	}, [id]);

	return (
		<section className="user-details">
			<Link to="/dashboard/users" className="back">
				<img src="/icons/back.svg" alt="back" /> <span>Back to Users</span>
			</Link>
			<div className="header-btns">
				<h1>User Details</h1>
				<div className="">
				<button type="button" onClick={() => handleStatusChange('Blacklisted')}>BLACKLIST USER</button>
				<button type="button" onClick={() => handleStatusChange('Active')}>ACTIVATE USER</button>
				</div>
			</div>
			{loading ? (
				<Loader />
			) : (
				user ? (
					<div>
						<DetailHeader user={user} />
						<DetailMain user={user} />
					</div>
				) : (
					<p>User not found.</p>
				)
			)}
		</section>
	);
};

export default UserDetail;
