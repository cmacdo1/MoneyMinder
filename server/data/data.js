export const accounts = [
    {
        checking: [
            {
                name: "Costco",
                date: "01/01/22",
                month: "Jan",
                amount: "$359.25",
                credit_debit: "-",
                total: "$57943.67",
            },
            {
                name: "Sam's Club",
                date: "02/01/22",
                month: "Feb",
                amount: "$10030.21",
                credit_debit: "+",
                total: "$67973.88",
            },
            {
                name: "Pizza Hut",
                date: "03/01/22",
                month: "Mar",
                amount: "$60.25",
                credit_debit: "-",
                total: "$57913.63",
            },
            {
                name: "QuickTrip",
                date: "01/05/22",
                month: "Jan",
                amount: "$50.00",
                credit_debit: "-",
                total: "$54859.54"
            },
            {
                name: "Salary Deposit",
                date: "02/15/22",
                month: "Feb",
                amount: "$3000.00",
                credit_debit: "+",
                total: "$57859.54"
            },
            {
                name: "Starbucks",
                date: "03/10/22",
                month: "Mar",
                amount: "$5.75",
                credit_debit: "-",
                total: "$57853.79"
            },
            {
                name: "Amazon",
                date: "04/20/22",
                month: "Apr",
                amount: "$120.50",
                credit_debit: "-",
                total: "$57733.29"
            },
            {
                name: "Birthday Gift",
                date: "05/01/22",
                month: "May",
                amount: "$500.00",
                credit_debit: "+",
                total: "$58233.29"
            },
            {
                name: "Four Peaks Brewery",
                date: "06/12/22",
                month: "Jun",
                amount: "$80.75",
                credit_debit: "-",
                total: "$58152.54"
            },
            {
                name: "Bonus",
                date: "07/07/22",
                month: "Jul",
                amount: "$1000.00",
                credit_debit: "+",
                total: "$59152.54"
            },
            {
                name: "AMC",
                date: "08/18/22",
                month: "Aug",
                amount: "$40.00",
                credit_debit: "-",
                total: "$59112.54"
            },
            {
                name: "Target Refund",
                date: "09/25/22",
                month: "Sep",
                amount: "$25.00",
                credit_debit: "+",
                total: "$59137.54"
            },
            {
                name: "Safeway",
                date: "10/05/22",
                month: "Oct",
                amount: "$150.30",
                credit_debit: "-",
                total: "$58987.24"
            },
            {
                name: "Freelance Job",
                date: "11/10/22",
                month: "Nov",
                amount: "$500.00",
                credit_debit: "+",
                total: "$59487.24"
            },
            {
                name: "Fry's Electronics",
                date: "12/20/22",
                month: "Dec",
                amount: "$800.00",
                credit_debit: "-",
                total: "$58687.24"
            },
        ],
        savings: [
            {
                name: "Retirement",
                date: "01/25/22",
                month: "Jan",
                amount: "$10000",
                credit_debit: "+",
                total: "$49209.56",
            },
            {
                name: "Transfer",
                date: "02/07/23",
                month: "Feb",
                amount: "$1000.00",
                credit_debit: "-",
                total: "$48209.56",
            },
            {
                name: "Vacation",
                date: "03/01/23",
                month: "Mar",
                amount: "$5400.21",
                credit_debit: "+",
                total: "$53609.77",
            },
            {
                name: "Investment Dividend",
                date: "04/12/22",
                month: "Apr",
                amount: "$500.00",
                credit_debit: "+",
                total: "$54109.77"
            },
            {
                name: "Charitable Donation",
                date: "05/02/22",
                month: "May",
                amount: "$250.00",
                credit_debit: "-",
                total: "$53859.77"
            },           
            {
                name: "Business Expense",
                date: "06/18/22",
                month: "Jun",
                amount: "$300.75",
                credit_debit: "-",
                total: "$53559.02"
            },            
            {
                name: "Royalty Payment",
                date: "07/05/22",
                month: "Jul",
                amount: "$800.00",
                credit_debit: "+",
                total: "$54359.02"
            },            
            {
                name: "Insurance Premium",
                date: "08/10/22",
                month: "Aug",
                amount: "$150.50",
                credit_debit: "-",
                total: "$54208.52"
            },            
            {
                name: "Tax Refund",
                date: "09/15/22",
                month: "Sep",
                amount: "$1000.00",
                credit_debit: "+",
                total: "$55208.52"
            },
            {
                name: "Rental Income",
                date: "10/20/22",
                month: "Oct",
                amount: "$1200.00",
                credit_debit: "+",
                total: "$56408.52"
            },
            {
                name: "Car Repair",
                date: "11/03/22",
                month: "Nov",
                amount: "$300.00",
                credit_debit: "-",
                total: "$56108.52"
            },
            {
                name: "Scholarship Award",
                date: "12/12/22",
                month: "Dec",
                amount: "$2000.00",
                credit_debit: "+",
                total: "$58108.52"
            },
            {
                name: "Medical Expense",
                date: "01/05/23",
                month: "Jan",
                amount: "$450.00",
                credit_debit: "-",
                total: "$57658.52"
            },
            {
                name: "Freelance Payment",
                date: "02/18/23",
                month: "Feb",
                amount: "$800.00",
                credit_debit: "+",
                total: "$58458.52"
            },
            {
                name: "Subscription Renewal",
                date: "03/10/23",
                month: "Mar",
                amount: "$50.00",
                credit_debit: "-",
                total: "$58408.52"
            },
        ],
    },
];

export const loansGraph = [
    {
      name: 'Student',
      data: [
        {
            date: "January",
            payment: "$90",
            interest: "30%",
            lateFee: "$20",
            remaining: 34500
        },
        {
            date: "February",
            payment: "$1250",
            interest: "20%",
            lateFee: "$10",
            remaining: 33150
        },
        {
            date: "March",
            payment: "$950",
            interest: "28%",
            lateFee: "$550",
            remaining: 34550
        },
        {
            date: "April",
            payment: "$100",
            interest: "33%",
            lateFee: "$2200",
            remaining: 37550
        },
        {
            date: "May",
            payment: "$1800",
            interest: "22%",
            lateFee: "$0",
            remaining: 35750
        },
        {
            date: "June",
            payment: "$2700",
            interest: "18%",
            lateFee: "$0",
            remaining: 33050
        },
        {
            date: "July",
            payment: "$1200",
            interest: "75%",
            lateFee: "$0",
            remaining: 31850,
        },
        {
            date: "August",
            payment: "$500",
            interest: "15%",
            lateFee: "$50",
            remaining: 31350,
        },
        {
            date: "September",
            payment: "$800",
            interest: "34%",
            lateFee: "$0",
            remaining: 30550,
        },
        {
            date: "October",
            payment: "$1500",
            interest: "5%",
            lateFee: "$100",
            remaining: 29050,
        },
        {
            date: "November",
            payment: "$700",
            interest: "28%",
            lateFee: "$0",
            remaining: 28350,
        },
        {
            date: "December",
            payment: "$2000",
            interest: "11%",
            lateFee: "$0",
            remaining: 26350,
        }
      ],
    },
    {
      name: 'Auto',
      data: [
        { 
            date: "January", 
            payment: "$550", 
            interest: "15%", 
            lateFee: "$30", 
            remaining: 27150 
        },
        { 
            date: "February", 
            payment: "$900", 
            interest: "12%", 
            lateFee: "$0", 
            remaining: 26250 
        },
        { 
            date: "March", 
            payment: "$350", 
            interest: "18%", 
            lateFee: "$15", 
            remaining: 25985 
        },
        { 
            date: "April", 
            payment: "$1200", 
            interest: "10%", 
            lateFee: "$0", 
            remaining: 24785 
        },
        { 
            date: "May", 
            payment: "$700", 
            interest: "20%", 
            lateFee: "$40", 
            remaining: 24045 
        },
        { 
            date: "June", 
            payment: "$1800", 
            interest: "15%", 
            lateFee: "$0", 
            remaining: 22245 
        },
        { 
            date: "July", 
            payment: "$400", 
            interest: "25%", 
            lateFee: "$25", 
            remaining: 21870 
        },
        { 
            date: "August", 
            payment: "$1000", 
            interest: "18%", 
            lateFee: "$0", 
            remaining: 20870 
        },
        { 
            date: "September", 
            payment: "$600", 
            interest: "22%", 
            lateFee: "$10", 
            remaining: 20280 
        },
        { 
            date: "October", 
            payment: "$1500", 
            interest: "12%", 
            lateFee: "$0", 
            remaining: 18780 
        },
        { 
            date: "November", 
            payment: "$800", 
            interest: "20%", 
            lateFee: "$50", 
            remaining: 17930 
        },
        { 
            date: "December", 
            payment: "$2000", 
            interest: "15%", 
            lateFee: "$0", 
            remaining: 15930 
        },
      ],
    },
];

export const loansData = [
    {
        student: [
            {
                date: "01/14/22",
                payment: "$90",
                interest: "30%",
                lateFee: "$20",
                remaining: 34500
            },
            {
                date: "02/02/22",
                payment: "$1250",
                interest: "20%",
                lateFee: "$10",
                remaining: 33150
            },
            {
                date: "03/19/22",
                payment: "$950",
                interest: "28%",
                lateFee: "$550",
                remaining: 34550
            },
            {
                date: "04/30/22",
                payment: "$100",
                interest: "33%",
                lateFee: "$2200",
                remaining: 37550
            },
            {
                date: "05/03/22",
                payment: "$1800",
                interest: "22%",
                lateFee: "$0",
                remaining: 35750
            },
            {
                date: "06/27/22",
                payment: "$2700",
                interest: "18%",
                lateFee: "$0",
                remaining: 33050
            },
            {
                date: "07/01/22",
                payment: "$1200",
                interest: "75%",
                lateFee: "$0",
                remaining: 31850,
            },
            {
                date: "08/13/22",
                payment: "$500",
                interest: "15%",
                lateFee: "$50",
                remaining: 31350,
            },
            {
                date: "09/29/22",
                payment: "$800",
                interest: "34%",
                lateFee: "$0",
                remaining: 30550,
            },
            {
                date: "10/12/22",
                payment: "$1500",
                interest: "5%",
                lateFee: "$100",
                remaining: 29050,
            },
            {
                date: "11/02/22",
                payment: "$700",
                interest: "28%",
                lateFee: "$0",
                remaining: 28350,
            },
            {
                date: "12/10/22",
                payment: "$2000",
                interest: "11%",
                lateFee: "$0",
                remaining: 26350,
            }
        ],
        auto: [
            { 
                date: "01/17/22", 
                payment: "$550", 
                interest: "15%", 
                lateFee: "$30", 
                remaining: 27150 
            },
            { 
                date: "02/28/22", 
                payment: "$900", 
                interest: "12%", 
                lateFee: "$0", 
                remaining: 26250 
            },
            { 
                date: "03/13/22", 
                payment: "$350", 
                interest: "18%", 
                lateFee: "$15", 
                remaining: 25985 
            },
            { 
                date: "04/01/22", 
                payment: "$1200", 
                interest: "10%", 
                lateFee: "$0", 
                remaining: 24785 
            },
            { 
                date: "05/05/22", 
                payment: "$700", 
                interest: "20%", 
                lateFee: "$40", 
                remaining: 24045 
            },
            { 
                date: "06/27/22", 
                payment: "$1800", 
                interest: "15%", 
                lateFee: "$0", 
                remaining: 22245 
            },
            { 
                date: "07/04/22", 
                payment: "$400", 
                interest: "25%", 
                lateFee: "$25", 
                remaining: 21870 
            },
            { 
                date: "08/25/22", 
                payment: "$1000", 
                interest: "18%", 
                lateFee: "$0", 
                remaining: 20870 
            },
            { 
                date: "09/03/22", 
                payment: "$600", 
                interest: "22%", 
                lateFee: "$10", 
                remaining: 20280 
            },
            { 
                date: "10/19/22", 
                payment: "$1500", 
                interest: "12%", 
                lateFee: "$0", 
                remaining: 18780 
            },
            { 
                date: "11/24/22", 
                payment: "$800", 
                interest: "20%", 
                lateFee: "$50", 
                remaining: 17930 
            },
            { 
                date: "12/25/22", 
                payment: "$2000", 
                interest: "15%", 
                lateFee: "$0", 
                remaining: 15930 
            },
        ],
    },
];