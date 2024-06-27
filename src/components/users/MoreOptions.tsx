import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Props {
  userId: number;
  currentStatus: string;
  onStatusChange: (id: number, newStatus: string) => void;
}

const MoreOptions: FC<Props> = ({ userId, currentStatus, onStatusChange }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/dashboard/users/${userId}`);
  };

  const handleBlacklist = async () => {
    // Change status to Blacklisted
    await axios.patch(`https://run.mocky.io/v3/2fe94a95-b70a-4566-a79d-bd9c8c22b75e/${userId}`, {
      status: 'Blacklisted',
    });
    onStatusChange(userId, 'Blacklisted');
  };

  const handleActivate = async () => {
    // Change status to Active
    await axios.patch(`https://run.mocky.io/v3/2fe94a95-b70a-4566-a79d-bd9c8c22b75e/${userId}`, {
      status: 'Active',
    });
    onStatusChange(userId, 'Active');
  };

  return (
    <div className="options-dropdown">
      <ul>
        <li onClick={handleViewDetails}>
          <img src="/icons/view.svg" alt="eye icon" /> <span>View Details</span>
        </li>
        <li onClick={handleBlacklist}>
          <img src="/icons/blacklist.svg" alt="blacklist icon" /> <span>Blacklist User</span>
        </li>
        <li onClick={handleActivate}>
          <img src="/icons/activate.svg" alt="activate icon" /> <span>Activate User</span>
        </li>
      </ul>
    </div>
  );
};

export default MoreOptions;
