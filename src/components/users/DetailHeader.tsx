// /src/components/users/DetailsHeader.tsx

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const userNavItems: String[] = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'];

interface Props {
    user: any;
}

const DetailsHeader: FC<Props> = ({ user }) => {
    console.log("DetailsHeader user:", user); // Debugging log

    return (
        <div className="user-header">
            <div className="user-header-info">
                <div>
                    <img src={user?.profile?.avatar || '/images/avatar (1).svg'} alt="avatar" />
                    <div>
                        <p>{`${user?.username}`}</p>
                        <p>{user?.bvn}</p>
                    </div>
                </div>

                <div className="user-tier">
                    <p>User’s Tier</p>
                    <div className="star-rating">
                        <img src="/images/star-fill.svg" alt="star" />
                        <img src="/images/star-open.svg" alt="star" />
                        <img src="/images/star-open.svg" alt="star" />
                    </div>
                </div>

                <div>
                    <p>{user?.monthlyIncome}</p>
                    <p>{user?.bvn}/Providus Bank</p>
                </div>
            </div>
            <div className="user-header-nav">
                {userNavItems.map((item, index) => {
                    return (
                        <Link key={index} to="#">
                            <div>{item}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default DetailsHeader;
