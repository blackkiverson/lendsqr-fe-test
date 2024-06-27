import '../../styles/UserPage.scss';
import { useState, useEffect } from 'react';
import Stats from '../../components/users/Stats';
import UsersTable from '../../components/users/Table';
import ReactPaginate from 'react-paginate';
import Loader from '../../components/users/Loader';
import { UserModel } from '../../utils/models';
import axios from 'axios';

const Users = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [users, setUsers] = useState<UserModel[]>([]);
	const [currentItems, setCurrentItems] = useState<UserModel[]>([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 9;

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % users.length;
		setItemOffset(newOffset);
	};

	const fetchUsers = async () => {
		setLoading(true);
		try {
			const response = await axios.get('https://run.mocky.io/v3/2fe94a95-b70a-4566-a79d-bd9c8c22b75e');
			console.log('Fetched data:', response.data);
			setUsers(response.data);
			setLoading(false);
		} catch (error) {
			console.error('Error fetching users:', error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(users.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(users.length / itemsPerPage));
		console.log('Current items:', currentItems);
	}, [itemOffset, itemsPerPage, users]);

	return (
		<section className="users">
			<h1>Users</h1>
			<div>
				<Stats />

				{loading ? (
					<div>
						<Loader />
					</div>
				) : (
					<>
						<UsersTable users={currentItems} loading={loading} />
						<div className="users-paginate">
							<div className="user-page-info">
								<p>
									Showing{' '}
									<span>
										{itemOffset + itemsPerPage} <img src="/icons/dropdown.svg" alt="down arrow" />
									</span>{' '}
									out of {users.length}
								</p>
							</div>
							<ReactPaginate
								nextLabel=">"
								onPageChange={handlePageClick}
								pageRangeDisplayed={3}
								marginPagesDisplayed={2}
								pageCount={pageCount}
								previousLabel="<"
								pageClassName="page-item"
								pageLinkClassName="page-link"
								previousClassName="arrow"
								nextClassName="arrow"
								breakLabel="..."
								containerClassName="pagination"
								activeClassName="active"
							/>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default Users;
