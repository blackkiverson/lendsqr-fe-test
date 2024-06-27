import { faker } from '@faker-js/faker';
import moment from 'moment';
import fs from 'fs';

interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
  bvn: string;
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
  loanRepayment: string;
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

const generateUserJoinDates = (numUsers: number): User[] => {
  const userJoinDates: User[] = [];
  for (let i = 0; i < numUsers; i++) {
    const joinDate = faker.date.between('2020-01-01T00:00:00.000Z', '2020-12-31T23:59:59.999Z');
    userJoinDates.push({
      id: i + 1,
      organization: faker.company.name(),
      username: faker.name.firstName(),
      email: faker.internet.email(),
      phoneNumber: '+234' + faker.phone.number().replace(/\D/g, '').substring(0, 10),
      dateJoined: moment(joinDate).format('MMM DD, YYYY hh:mm A'),
      status: faker.helpers.arrayElement(["Active", "Inactive", "Pending", "Blacklisted"]),
      bvn: '222' + faker.datatype.number({ min: 10000000, max: 99999999 }).toString(),
      gender: faker.helpers.arrayElement(["Male", "Female"]),
      maritalStatus: faker.helpers.arrayElement(["Single", "Married"]),
      children: faker.datatype.number({ min: 0, max: 3 }),
      typeOfResidence: faker.helpers.arrayElement(["Parent's Apartment", "Own Apartment", "Rented Apartment"]),
      levelOfEducation: faker.helpers.arrayElement(["B.Sc", "M.Sc", "PhD"]),
      employmentStatus: faker.helpers.arrayElement(["Employed", "Self-Employed", "Unemployed"]),
      sectorOfEmployment: faker.helpers.arrayElement(["FinTech", "Agriculture", "Education", "Healthcare"]),
      durationOfEmployment: faker.datatype.number({ min: 1, max: 10 }) + ' years',
      officeEmail: faker.internet.email(),
      monthlyIncome: '₦' + faker.datatype.number({ min: 50000, max: 500000 }).toString(),
      loanRepayment: faker.datatype.number({ min: 20000, max: 100000 }).toString(),
      socials: {
        twitter: '@' + faker.internet.userName(),
        facebook: faker.internet.userName() + '.' + faker.internet.userName(),
        instagram: '@' + faker.internet.userName()
      },
      guarantor: {
        fullName: faker.name.firstName() + ' ' + faker.name.lastName(),
        phoneNumber: '080' + faker.datatype.number({ min: 10000000, max: 99999999 }).toString(),
        emailAddress: faker.internet.email(),
        relationship: faker.helpers.arrayElement(["Sister", "Brother", "Friend"])
      }
    });
  }
  return userJoinDates;
};

// Generate 500 user join dates
const mockUserJoinDates = generateUserJoinDates(500);

// Save the generated user join dates to a file
fs.writeFileSync('mockUserJoinDates.json', JSON.stringify(mockUserJoinDates, null, 2), 'utf-8');

console.log('Mock data generated and saved to mockUserJoinDates.json');
