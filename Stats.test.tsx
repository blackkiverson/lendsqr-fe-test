import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Stats from './src/components/users/Stats';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('UsersStats Component', () => {
  it('renders the statistics correctly with mock data', async () => {
    const mockData = [
      {
        id: 1,
        status: 'Active',
        loanRepayment: 5000,
        savings: true,
      },
      {
        id: 2,
        status: 'Blacklisted',
        loanRepayment: 0,
        savings: false,
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: mockData });

    render(<Stats />);

    expect(await screen.findByText('Total Users')).toBeInTheDocument();
    expect(await screen.findByText('Active Users')).toBeInTheDocument();
    expect(await screen.findByText('Users with Loan')).toBeInTheDocument();
    expect(await screen.findByText('Users with Savings')).toBeInTheDocument();

    expect(await screen.findByText('2')).toBeInTheDocument(); // Total Users
    expect(await screen.findByText('1')).toBeInTheDocument(); // Active Users
    expect(await screen.findByText('1')).toBeInTheDocument(); // Users with Loan
    expect(await screen.findByText('1')).toBeInTheDocument(); // Users with Savings
  });

  it('handles no users scenario', async () => {
    mockedAxios.get.mockResolvedValue({ data: [] });

    render(<Stats />);

    expect(await screen.findByText('Total Users')).toBeInTheDocument();
    expect(await screen.findByText('0')).toBeInTheDocument(); // Total Users
    expect(await screen.findByText('Active Users')).toBeInTheDocument();
    expect(await screen.findByText('0')).toBeInTheDocument(); // Active Users
    expect(await screen.findByText('Users with Loan')).toBeInTheDocument();
    expect(await screen.findByText('0')).toBeInTheDocument(); // Users with Loan
    expect(await screen.findByText('Users with Savings')).toBeInTheDocument();
    expect(await screen.findByText('0')).toBeInTheDocument(); // Users with Savings
  });

  it('handles API error scenario', async () => {
    mockedAxios.get.mockRejectedValue(new Error('API error'));

    render(<Stats />);

    // Since the error would be caught, the component will not crash, and default state will be rendered
    expect(await screen.findByText('Total Users')).toBeInTheDocument();
    expect(await screen.findByText('0')).toBeInTheDocument(); // Total Users
    expect(await screen.findByText('Active Users')).toBeInTheDocument();
    expect(await screen.findByText('0')).toBeInTheDocument(); // Active Users
    expect(await screen.findByText('Users with Loan')).toBeInTheDocument();
    expect(await screen.findByText('0')).toBeInTheDocument(); // Users with Loan
    expect(await screen.findByText('Users with Savings')).toBeInTheDocument();
    expect(await screen.findByText('0')).toBeInTheDocument(); // Users with Savings
  });
});
