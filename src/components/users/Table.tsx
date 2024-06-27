// /src/components/users/Table.tsx

import React, { FC, useState } from 'react';
import { UserModel } from '../../utils/models';
import moment from 'moment';
import { Link } from 'react-router-dom';
import FormFilter from './FormFilter';
import MoreOptions from './MoreOptions';
import Loader from './Loader';

interface Props {
  users: UserModel[];
  loading: boolean;
}

const tableHeaders = ['Organization', 'Username', 'Email', 'Phone number', 'Date joined', 'Status', ''];

const UsersTable: FC<Props> = ({ users, loading }) => {
  const [isFilterOpen, setIsFilterOpen] = useState<null | number>(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState<null | number>(null);
  const [userList, setUserList] = useState<UserModel[]>(users);

  const handleStatusChange = (userId: number, newStatus: string) => {
    setUserList((prevUserList) =>
      prevUserList.map((user) => (user.id === userId ? { ...user, status: newStatus } : user))
    );
  };

  return (
    <div data-testid="user-table" className="users-table">
      {loading ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index}>
                  <div>
                    <span>{header}</span>
                    {header && (
                      <img
                        src="/icons/filter-results-button.svg"
                        alt="filter-icon"
                        onClick={() => (isFilterOpen === index ? setIsFilterOpen(null) : setIsFilterOpen(index))}
                      />
                    )}
                  </div>
                  {isFilterOpen === index ? <FormFilter /> : ''}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user: UserModel, index: number) => (
              <tr key={index}>
                <td>
                  <Link to={`/dashboard/users/${user.id}`}>{user.organization}</Link>
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{moment(user.dateJoined).format('MMM D, YYYY h:mm a')}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
                </td>
                <td>
                  <img
                    src="/icons/ic-more-vert-18px.svg"
                    alt="more"
                    onClick={() => (isOptionsOpen === index ? setIsOptionsOpen(null) : setIsOptionsOpen(index))}
                  />
                  {isOptionsOpen === index ? (
                    <MoreOptions
                      userId={user.id}
                      currentStatus={user.status}
                      onStatusChange={handleStatusChange}
                    />
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersTable;
