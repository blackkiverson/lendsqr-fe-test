[
    '{{repeat(500)}}',
    {
      id: '{{index(1)}}',
      organization: '{{company()}}',
      username: '{{firstName()}}',
      email: '{{email()}}',
      phoneNumber: '+234{{phone()}}',
      dateJoined: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-DDThh:mm:ss")}}',
      status: '{{random("Active", "Inactive", "Pending", "Blacklisted")}}',
      bvn: '222{{integer(10000000, 99999999)}}',
      gender: '{{random("Male", "Female")}}',
      maritalStatus: '{{random("Single", "Married")}}',
      children: '{{integer(0, 3)}}',
      typeOfResidence: '{{random("Parent\'s Apartment", "Own Apartment", "Rented Apartment")}}',
      levelOfEducation: '{{random("B.Sc", "M.Sc", "PhD")}}',
      employmentStatus: '{{random("Employed", "Self-Employed", "Unemployed")}}',
      sectorOfEmployment: '{{random("FinTech", "Agriculture", "Education", "Healthcare")}}',
      durationOfEmployment: '{{integer(1, 10)}} years',
      officeEmail: '{{email()}}',
      monthlyIncome: '₦{{integer(50000, 500000)}}',
      loanRepayment: '{{integer(20000, 100000)}}',
      socials: {
        twitter: '@{{firstName().toLowerCase()}}',
        facebook: '{{firstName().toLowerCase()}}.{{surname().toLowerCase()}}',
        instagram: '@{{firstName().toLowerCase()}}'
      },
      guarantor: {
        fullName: '{{firstName()}} {{surname()}}',
        phoneNumber: '080{{integer(10000000, 99999999)}}',
        emailAddress: '{{email()}}',
        relationship: '{{random("Sister", "Brother", "Friend")}}'
      }
    }
]
