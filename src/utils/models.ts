// /src/utils/models.ts

export interface UserModel {
    id: number;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
    bvn: number;
    gender: string;
    maritalStatus: string;
    children: number;
    typeOfResidence: string;
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: number;
    socials: {
      twitter: string;
      facebook: string;
      instagram: string;
    };
    guarantor: {
      fullName: string;
      phoneNumber: string;
      emailAddress: string;
      relationship: string;
    };
  }
  