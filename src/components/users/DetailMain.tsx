// /src/components/users/DetailsMain.tsx

import { FC } from 'react';

interface Props {
    user: any;
}

const DetailsMain: FC<Props> = ({ user }) => {
    console.log("DetailsMain user:", user); // Debugging log

    return (
        <div className="user-details-main">
            <div className="user-info-card">
                <h2>Personal Information</h2>
                <div className="user-info-main">
                    <div>
                        <p>FULL NAME</p>
                        <p>{`${user?.username}`}</p>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <p>{user?.phoneNumber}</p>
                    </div>
                    <div>
                        <p>Email Address</p>
                        <p>{user?.email}</p>
                    </div>
                    <div>
                        <p>Bvn</p>
                        <p>{user?.bvn}</p>
                    </div>
                    <div>
                        <p>Gender</p>
                        <p>{user?.gender}</p>
                    </div>
                    <div>
                        <p>Marital status</p>
                        <p>{user?.maritalStatus}</p>
                    </div>
                    <div>
                        <p>Children</p>
                        <p>{user?.children}</p>
                    </div>
                    <div>
                        <p>Type of residence</p>
                        <p>{user?.typeOfResidence}</p>
                    </div>
                </div>
            </div>

            <div className="user-info-card">
                <h2>Education and Employment</h2>
                <div className="user-info-main">
                    <div>
                        <p>Level of education</p>
                        <p>{user?.levelOfEducation}</p>
                    </div>
                    <div>
                        <p>Employment status</p>
                        <p>{user?.employmentStatus}</p>
                    </div>
                    <div>
                        <p>Sector of employment</p>
                        <p>{user?.sectorOfEmployment}</p>
                    </div>
                    <div>
                        <p>Duration of employment</p>
                        <p>{user?.durationOfEmployment}</p>
                    </div>
                    <div>
                        <p>Office email</p>
                        <p>{user?.officeEmail}</p>
                    </div>
                    <div>
                        <p>Monthly income</p>
                        <p>{user?.monthlyIncome}</p>
                    </div>
                    <div>
                        <p>Loan repayment</p>
                        <p>{user?.loanRepayment}</p>
                    </div>
                </div>
            </div>

            <div className="user-info-card">
                <h2>Socials</h2>
                <div className="user-info-main">
                    <div>
                        <p>Twitter</p>
                        <p>{user?.socials?.twitter}</p>
                    </div>
                    <div>
                        <p>Facebook</p>
                        <p>{user?.socials?.facebook}</p>
                    </div>
                    <div>
                        <p>Instagram</p>
                        <p>{user?.socials?.instagram}</p>
                    </div>
                </div>
            </div>

            <div className="user-info-card">
                <h2>Guarantor</h2>
                <div className="user-info-main">
                    <div>
                        <p>Full Name</p>
                        <p>{user?.guarantor?.fullName}</p>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <p>{user?.guarantor?.phoneNumber}</p>
                    </div>
                    <div>
                        <p>Email Address</p>
                        <p>{user?.guarantor?.emailAddress}</p>
                    </div>
                    <div>
                        <p>Relationship</p>
                        <p>{user?.guarantor?.relationship}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsMain;
