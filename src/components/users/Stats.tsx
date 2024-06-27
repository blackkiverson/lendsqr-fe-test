import { FC, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  loanRepayment: number;
  status: string;
  savings: boolean;
}

interface StatsItem {
  icon: string;
  title: string;
  count?: number;
}

const Stats: StatsItem[] = [
  { icon: '/images/icon (1).svg', title: 'Total Users' },
  { icon: '/images/icon (2).svg', title: 'Active Users' },
  { icon: '/images/icon (3).svg', title: 'Users with Loan' },
  { icon: '/images/icon (4).svg', title: 'Users with Savings' },
];

interface Props { }

const UsersStats: FC<Props> = () => {
  const [userStats, setUserStats] = useState<{ total: number, active: number, withLoan: number, withSavings: number }>({ total: 0, active: 0, withLoan: 0, withSavings: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://run.mocky.io/v3/2fe94a95-b70a-4566-a79d-bd9c8c22b75e');
        const users: User[] = response.data;

        const total = users.length;
        const active = users.filter(user => user.status === 'Active').length;
        const withLoan = users.filter(user => user.loanRepayment > 0).length;
        const withSavings = users.filter(user => user.savings).length;

        setUserStats({ total, active, withLoan, withSavings });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div data-testid="users-stats" className="users-stats">
      {Stats.map((item, index) => {
        let count;
        switch (index) {
          case 0:
            count = userStats.total;
            break;
          case 1:
            count = userStats.active;
            break;
          case 2:
            count = userStats.withLoan;
            break;
          case 3:
            count = userStats.withSavings;
            break;
          default:
            count = 0;
            break;
        }
        return (
          <div key={index} className="users-stats-box">
            <img src={item.icon} alt="stat" />
            <p>{item.title}</p>
            <p>{count}</p> {/* Render count */}
          </div>
        );
      })}
    </div>
  );
};

export default UsersStats;
