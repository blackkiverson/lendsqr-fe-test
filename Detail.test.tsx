import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserDetail from './src/pages/users/UserDetail';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('UserDetail Component', () => {
  it('renders user details correctly with mock data', async () => {
    const mockData = [
      {
        id: 1,
        username: 'John Doe',
        profile: {
          firstName: 'John',
          lastName: 'Doe',
          avatar: '',
          phoneNumber: '1234567890',
          bvn: '12345678901',
          gender: 'Male',
        },
        email: 'john.doe@example.com',
        accountBalance: 50000,
        accountNumber: '1234567890',
        status: 'Active',
        loanRepayment: 0,
        savings: true,
        education: {
          level: 'Bachelors',
          employmentStatus: 'Employed',
          sector: 'IT',
          duration: '5 years',
          officeEmail: 'john.doe@work.com',
          monthlyIncome: [1000, 2000],
          loanRepayment: 100,
        },
        socials: {
          twitter: '@johndoe',
          facebook: 'johndoe',
          instagram: 'johndoe',
        },
        guarantor: {
          firstName: 'Jane',
          lastName: 'Doe',
          phoneNumber: '0987654321',
          address: '123 Street',
          relationship: 'Sister',
        },
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: mockData });

    render(
      <MemoryRouter initialEntries={['/user/1']}>
        <Routes>
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('John Doe')).toBeInTheDocument());
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });

  it('handles user not found scenario', async () => {
    mockedAxios.get.mockResolvedValue({ data: [] });

    render(
      <MemoryRouter initialEntries={['/user/1']}>
        <Routes>
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('User not found.')).toBeInTheDocument());
  });

  it('handles API error scenario', async () => {
    mockedAxios.get.mockRejectedValue(new Error('API error'));

    render(
      <MemoryRouter initialEntries={['/user/1']}>
        <Routes>
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('User not found.')).toBeInTheDocument());
  });
});
