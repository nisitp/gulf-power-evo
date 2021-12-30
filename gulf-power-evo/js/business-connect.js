// business-connect.js
// Alexander Rhett Crammer
// Monday, 25 June, 2016
// Hot Sauce
//
$(document).ready(function () {
  // Businesses
  var businesses = [{
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "Venture Hive",
    "overview": "The City of Fort Walton Beach and Venture Hive have partnered to bring two unique training programs for U.S. military veteran entrepreneurs (including veterans, ex-military, and military spouses and dependents), connecting them to the resources and support they need to grow and scale their businesses. \n\nThe Pre-accelerator is a part-time, 12-week structured program providing nascent veteran entrepreneurs with mentoring and workshops to turn their ideas into a minimum viable product with a clear go-to-market strategy. The accelerator is an intensive full-time 12-week structured program providing selected veteran owned tech businesses access to a dedicated group of business coaches, highly customized training and a relevant network to scale their ventures, driving the economic growth of the region.\n\n",
    "site": "https://veterans.venturehive.com/",
    "contactLink": "https://veterans.venturehive.com/",
    "countiesServed": "All Counties",
    "industry": "Aerospace & Aviation, Healthcare, IT/Cybersecurity, Manufacturing, Professional, Scientific & Technical Services",
    "id": 0,
    "logoFilename": "Venture-Hive.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "U.S. Small Business Administration (SBA)",
    "overview": "The U.S. Small Business Administration (SBA) was created in 1953 as an independent agency of the federal government to aid, counsel, assist and protect the interests of small business concerns, to preserve free competitive enterprise and to maintain and strengthen the overall economy of our nation. \n\nThe U.S. Small Business Administration Learning Center has numerous online workshops and programs to support and grow your business, including, but not limited to:\n• Business Opportunities: A Guide to Winning Federal Contracts\n• Taking Your High-Tech Product to Market\n• Buying a Business\n• Crime Prevention: A Guide for Small Business\n• How to Prepare a Loan Package",
    "site": "https://www.sba.gov/tools/sba-learning-center/search/training",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 1,
    "logoFilename": "US-Small-Business-Administration.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "How to Start Your Business Guide",
    "organizationName": "U.S. Small Business Administration (SBA)",
    "overview": "The U.S. Small Business Administration (SBA) was created in 1953 as an independent agency of the federal government to aid, counsel, assist and protect the interests of small business concerns, to preserve free competitive enterprise and to maintain and strengthen the overall economy of our nation. \n\nStarting a business is an exciting proposition, but it’s also an incredibly challenging undertaking. The resources on our website will help you learn about what it takes to start a business like: \n\n• How to Start a Business\n• How to Write Your Business Plan\n• Choosing Your Business Structure\n• Choosing & Registering Your Business\n• Choosing Your Business Location & Equipment\n",
    "site": "https://www.sba.gov/starting-business",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 2,
    "logoFilename": "US-Small-Business-Administration.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "How to Start Your Business Guide",
    "organizationName": "Florida Department of State",
    "overview": "You're starting a business in Florida, either new or an expansion and you need help finding assistance. Our site will help your business navigate the start-up process by providing continually updated links to web resources including the following topics: \n\n• Business Registration\n• Selecting a Location\n• Tax Registration\n• International Trade Info\n• Land Use & Permitting\n• Industry Reports",
    "site": "http://www.sunbiz.org/startbus.html",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 3,
    "logoFilename": "Florida-Department-of-State.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Tips for Running a Green Business",
    "organizationName": "U.S. Small Business Administration (SBA)",
    "overview": "Green Businesses\n\nThe explosion of organic and eco-friendly products on retail store shelves is more than just a passing fad. It's big business. This reality presents opportunities for environmentally minded entrepreneurs ready to start their own small business.\n\nSuccessful green businesses not only benefit the environment, but also use green business practices as a means to market their products. \n\nClick on our link if you are thinking of starting a green business.",
    "site": "https://www.sba.gov/starting-business/how-start-business/business-types/green-businesses",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 4,
    "logoFilename": "US-Small-Business-Administration.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Business Guides by Industry",
    "organizationName": "U.S. Small Business Administration (SBA)",
    "overview": "Business Guides by Industry\nExplore information about a variety of industries. Find invaluable information targeted to your specific line of business. Industries include:\n\n• Aerospace & Defense\n• Manufacturing\n• Consumer Goods & Services\n• Food & Beverage\n• Health Care\n• And more!",
    "site": "https://www.sba.gov/managing-business/business-guides-industry",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 5,
    "logoFilename": "US-Small-Business-Administration.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Business Consulting Services",
    "organizationName": "Florida Small Business Development Center (SBDC)",
    "overview": "Florida SBDCs offer access to confidential, no-cost professional business consulting for Floridians who want to grow their business. Our professionally certified business consultants have the knowledge and tools to help emerging and growing businesses design growth strategies and make better business decisions to realize their goals and growth.\n\nThe SBDC's consulting expertise focuses on areas that are vital to accelerating the growth of businesses:\n\n• Strategic Market Research\n• Business and Strategic Plan Development\n• Market and Revenue Growth Strategy Development and Implementation\n• Capital Access and Loan Packaging\n• Financial Analysis and Assessment\n• Accounting Systems and Financial Literacy\n• Feasibility Analysis and Start-up Assistance",
    "site": "http://floridasbdc.org/services/professional-business-consulting/",
    "contactLink": "http://uwf.edu/cob/community-outreach/florida-small-business-development-center-at-uwf/about-us/contact-us/",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 6,
    "logoFilename": "Florida-Small-Business-Development-Center.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Business Consulting Services",
    "organizationName": "Venture Hive",
    "overview": "The City of Fort Walton Beach and Venture Hive have partnered to bring two unique training programs for U.S. military veteran entrepreneurs (including veterans, ex-military, and military spouses and dependents), connecting them to the resources and support they need to grow and scale their businesses. \n\nThe Pre-accelerator is a part-time, 12-week structured program providing nascent veteran entrepreneurs with mentoring and workshops to turn their ideas into a minimum viable product with a clear go-to-market strategy. The accelerator is an intensive full-time 12-week structured program providing selected veteran owned tech businesses access to a dedicated group of business coaches, highly customized training and a relevant network to scale their ventures, driving the economic growth of the region.\n\n",
    "site": "https://veterans.venturehive.com/",
    "contactLink": "https://veterans.venturehive.com/",
    "countiesServed": "All Counties",
    "industry": "Aerospace & Aviation, Healthcare, IT/Cybersecurity, Manufacturing, Professional, Scientific & Technical Services",
    "id": 7,
    "logoFilename": "Venture-Hive.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Government Contracting Help",
    "organizationName": "Florida Small Business Development Center (SBDC)",
    "overview": "Florida SBDC Government Contracting consulting, training, and information services are available at no cost to Florida businesses, large or small, that possess the interest and potential to perform work — as a prime contractor or a subcontractor — for federal, state or local government agencies.\n\nOur Government Contracting Specialists provide high-value confidential one-on-one consulting, at no cost, to help Florida businesses research and bid on government contracts. Our consultants are knowledgeable, experienced and eager to assist you in making selling to the government less complicated and more profitable.",
    "site": "http://floridasbdc.org/services/research/",
    "contactLink": "http://uwf.edu/cob/community-outreach/florida-small-business-development-center-at-uwf/about-us/contact-us/",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 8,
    "logoFilename": "Florida-Small-Business-Development-Center.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "Florida Small Business Development Center (SBDC)",
    "overview": "Florida SBDC offers well over a thousand training workshops and seminars annually throughout the state. These training events provide current and practical information on business topics ranging from the basics to more advanced business management skills. The depth of our training ensures that business owners and entrepreneurs avail themselves of invaluable insights to help manage and grow a successful business. The training is designed to meet the needs of the local community and delivered at little or no cost.",
    "site": "http://floridasbdc.org/get-training/",
    "contactLink": "http://floridasbdc.org/locations/pensacola/",
    "countiesServed": "Escambia, Santa Rosa",
    "industry": "All",
    "id": 9,
    "logoFilename": "Florida-Small-Business-Development-Center.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "Florida Small Business Development Center (SBDC)",
    "overview": "Florida SBDC offers well over a thousand training workshops and seminars annually throughout the state. These training events provide current and practical information on business topics ranging from the basics to more advanced business management skills. The depth of our training ensures that business owners and entrepreneurs avail themselves of invaluable insights to help manage and grow a successful business. The training is designed to meet the needs of the local community and delivered at little or no cost.",
    "site": "http://floridasbdc.org/get-training/",
    "contactLink": "http://floridasbdc.org/locations/fort-walton-beach/",
    "countiesServed": "Okaloosa, Walton",
    "industry": "All",
    "id": 10,
    "logoFilename": "Florida-Small-Business-Development-Center.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "Florida Small Business Development Center (SBDC)",
    "overview": "Florida SBDC offers well over a thousand training workshops and seminars annually throughout the state. These training events provide current and practical information on business topics ranging from the basics to more advanced business management skills. The depth of our training ensures that business owners and entrepreneurs avail themselves of invaluable insights to help manage and grow a successful business. The training is designed to meet the needs of the local community and delivered at little or no cost.",
    "site": "http://floridasbdc.org/get-training/",
    "contactLink": "http://floridasbdc.org/locations/panama-city/",
    "countiesServed": "Bay, Holmes, Washington, Jackson",
    "industry": "All",
    "id": 11,
    "logoFilename": "Florida-Small-Business-Development-Center.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "CareerSource Okaloosa/Walton",
    "overview": "CareerSource is committed to providing valuable employer services and resources to meet your business needs.\n\nOn-The-Job Training Program: \nThis program provides an incentive for businesses to hire qualified individuals who  may not have the experience required for open positions.  By hiring an employee in a training capacity, the business can be reimbursed for a portion of that employee's salary for a specific period of time. \n\nEmployed Worker Training Program: \nThis program can help a business offset training costs for current  employees who currently meets the local definition of self-sufficiency, and  who require skill upgrading in order to maintain or advance  their current employment. This may include training on new equipment, product lines, internal management changes, etc. Employers may be reimbursed for instructor costs and training materials. \n\nIncumbent Worker Training Program: \nThis program provides both workers and employers with the opportunity to build and maintain a quality workforce.  Incumbent Worker Training can assist to avert potential layoffs of employees or to increase the skill levels of employees so they can be promoted within the company and create backfill opportunities for employers.  The business may use public, private or its own in-house training provider based on the nature of the training.",
    "site": "https://www.careersourceokaloosawalton.com/pages/employers",
    "contactLink": "https://www.careersourceokaloosawalton.com/pages/employers",
    "countiesServed": "Okaloosa, Walton",
    "industry": "All",
    "id": 12,
    "logoFilename": "CareerSource.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Hiring Assistance Programs",
    "organizationName": "CareerSource Okaloosa/Walton",
    "overview": "CareerSource Business  is dedicated to providing employment and training assistance to area employers. We’re here to make the hiring process easier for you!\n\nCareerSource can provide assistance with recruitment, employee training, labor market information, and outplacement services. \n\nPosting Jobs to Employ Florida Marketplace Website: \nCareerSource can assist area employers with creating and monitoring an Employ Florida Marketplace account, utilizing EFM as a recruitment tool and screen applicants skill-set.",
    "site": "https://www.careersourceokaloosawalton.com/pages/employers\n",
    "contactLink": "https://www.careersourceokaloosawalton.com/pages/employers",
    "countiesServed": "Okaloosa, Walton",
    "industry": "All",
    "id": 13,
    "logoFilename": "CareerSource.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "CareerSource Escarosa",
    "overview": "CareerSource is committed to providing valuable employer services and resources to meet your business needs.\n\nOn-The-Job Training Program: \nThis program can help you develop training programs for new employees. It can also help pay up to half their wages for up to six months while you teach them to do their job. \n\nEmployed Worker Training Program: \nThis program can help a business offset training costs for current employees who require skill upgrading in order to maintain their current employment. This may include training on new equipment, product lines, internal management changes, safety, etc. Employers may be reimbursed for instructor costs and training materials. \n\nIncumbent Worker Training Program: \nThis program provides grant funding for customized training for existing for-profit businesses. The business may use public, private, or its own in-house training provider based on the nature of the training.",
    "site": "http://careersourceescarosa.com/employers",
    "contactLink": "http://careersourceescarosa.com/employers",
    "countiesServed": "Escambia, Santa Rosa",
    "industry": "All",
    "id": 14,
    "logoFilename": "CareerSource.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Hiring Assistance Programs",
    "organizationName": "CareerSource Escarosa",
    "overview": "CareerSource Escarosa  is dedicated to providing employment and training assistance to area employers. We’re here to make the hiring process easier for you!\n\nBusiness Services: \nCareerSource can provide assistance with recruitment, employee training, labor market information, employer tax incentives, and outplacement services. \n\nPosting Jobs to Employ Florida Marketplace Website: \nCareerSource can assist area employers with creating and monitoring an Employ Florida Marketplace account, utilizing EFM as a recruitment tool and screen applicants skill-set.",
    "site": "http://careersourceescarosa.com/employers",
    "contactLink": "http://careersourceescarosa.com/employers",
    "countiesServed": "Escambia, Santa Rosa",
    "industry": "All",
    "id": 15,
    "logoFilename": "CareerSource.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "CareerSource Gulf Coast",
    "overview": "CareerSource is committed to providing valuable employer services and resources to meet your business needs.\n\nOn-The-Job Training Program: \nThis program can help you develop training programs for new employees. It can also help pay up to half their wages for up to six months while you teach them to do their job. Program is offered when funding is available.\n\nEmployed Worker Training Program: \nThis program can help a business offset training costs for current employees who require skill upgrading in order to maintain their current employment. This may include training on new equipment, product lines, internal management changes, safety, etc. Employers may be reimbursed for instructor costs and training materials. Program is offered when funding is available.\n",
    "site": "http://careersourcegc.com/employers",
    "contactLink": "http://careersourcegc.com/about/contact-us",
    "countiesServed": "Bay",
    "industry": "All",
    "id": 16,
    "logoFilename": "CareerSource.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "Gulf Coast State College, Advanced Technology Center",
    "overview": "The GCSC ATC is a transormative facility embracing a philosophy grounded in innovative partnerships cross the key sectors of business, industry, government and education within a \"future-forward\" framework. This premier facility will be the tipping point of the region, harnessing the intellectual capital of the brightest minds in business and academia to create a truly synergistic system grounded in innovation and the formation of knowledge and technology clusters.\n\nThe Business, Technology, & Culinary Division of Gulf Coast State College offers a wide variety of Degree and Certificate programs which enable the student to either transfer to the University upper division with an Associate of Arts Degree, or enter the workforce with an Associate of Science, or Certificate within a specific major subject emphasis.",
    "site": "http://www.gulfcoast.edu/atc/",
    "contactLink": "http://www.gulfcoast.edu/atc/",
    "countiesServed": "Bay, Walton",
    "industry": "All",
    "id": 17,
    "logoFilename": "Gulf-Coast-State-College.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "University of West Florida Center for Entrepreneurship",
    "overview": "The Center for Entrepreneurship serves as a source of support for the complete life cycle of the entrepreneur.\n\nThe Center is housed in the College of Business and hosts numerous activities and initiatives related to creating a culture of entrepreneurial thinking. Additionally, affiliate units and organizations create a synergistic support for entrepreneurial efforts and innovation. Quint Studer serves as the Entrepreneur-in-Residence to mobilize a professional network of entrepreneurs that positively impact the Center through contributions to advisement, seminars, classes, workshops and a host of other initiatives.",
    "site": "http://uwf.edu/centers/center-for-entrepreneurship/",
    "contactLink": "http://uwf.edu/centers/center-for-entrepreneurship/",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 18,
    "logoFilename": "University-of-West-Florida-Office-of-Economic-Development-and-Engagement.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "Northwest Florida State College",
    "overview": "The Costa Leadership Institute provides a variety of professional and business skills opportunities through open enrollment trainings, customized training, leadership programs, continuing education units for professionals, preparation courses for certifications, certification exams through our testing center and more. Our instructors are experts in their field of study and provide a tremendous depth of experience and knowledge in their fields.\n\nThe programs of the Costa Leadership Institute are specially designed to support the economic and workforce development of our region and our vital role in the state and global economy. We are committed to providing the highest standard of achievement for our participants and developing strong and ethical leaders to guide our community.",
    "site": "http://www.nwfsc.edu/Community/ContEd/LI/",
    "contactLink": "http://www.nwfsc.edu/Community/ContEd/LI/contact.cfm",
    "countiesServed": "Okaloosa, Walton",
    "industry": "All",
    "id": 19,
    "logoFilename": "Northwest-Florida-State-College.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "Pensacola State College",
    "overview": "Welcome to the Business Development And Entrepreneurship (BDENT-CT) Program.\n\nThis program is designed to provide an opportunity for persons interested in the Business Development and Entrepreneurship to become skilled in the basic practices of this area of Business. The Business and Development and Entrepreneurship College Credit Certificate Program is 25 college hours of classroom instruction. All courses and credits earned can be applied towards the Business Administration AS (BUS-AS).",
    "site": "http://www.pensacolastate.edu/program_page.asp?DeptID=6714&ProgID=1291",
    "contactLink": "http://www.pensacolastate.edu/program_page.asp?DeptID=6714&ProgID=1292",
    "countiesServed": "Escambia, Santa Rosa",
    "industry": "All",
    "id": 20,
    "logoFilename": "Pensacola-State-College.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Hiring Assistance Programs",
    "organizationName": "CareerSource Gulf Coast",
    "overview": "CareerSource Gulf Coast  is dedicated to providing high quality services to assist businesses recruitment, screen and hire talent.  We’re here to make the hiring process easier for you!\n\nTalent Recruitment: \nCareerSource Gulf Coast can help your business find qualified, ready candidates in virtually any industry, and all free of charge. With thousands of individuals registered in our system at any given time, CareerSource Gulf Coast can help you tap into a large pool of local talent. Let us help you design a customized outreach plan. Possible recruitment strategies include: Advertising/Job Posting through the Employ Florida Marketplace and other online and print outlets, targeted candidate searches, or recruitment/hiring events. \n\nCandidate Screening and Assessments: \nDon’t waste your time reviewing applications and resumes from candidates that aren’t qualified. Let CareerSource Gulf Coast do the work for you. Through our system we can screen candidates based on specific job requirements, greatly reducing the amount of time and money involved in the hiring process. In addition, CareerSource Gulf Coast can also administer employment assessments to objectively evaluate an applicant’s personality or proficiency in a certain skill. We have over 1,300 validated assessments for skills and behavioral attributes for clerical, software, technical, call center, industrial, financial, legal, medical positions and much more. \n\nLabor Market Data: \nCareerSource Gulf Coast is your resource for valuable workforce information. Our workforce professionals have the ability to pull local and up-to-date data—we can even customize a report specifically for your business or industry. Our most popular data requests include information on prevailing wage statistics, occupational supply/demand reports and information on tax credits for hiring qualified workers.\n\nAvailable Office Space \nCareerSource Gulf Coast offers professional office/meeting space for assisting with your hiring or training needs. Space available includes various size conference rooms, computer lab, and  multiple individual offices with access to business machines (computer, printer, fax, copier, and telephone). \n",
    "site": "http://careersourcegc.com/employers",
    "contactLink": "http://careersourcegc.com/about/contact-us",
    "countiesServed": "Bay",
    "industry": "All",
    "id": 21,
    "logoFilename": "CareerSource.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Training Programs / Workshops",
    "organizationName": "CareerSource Chipola",
    "overview": "CareerSource is committed to providing valuable employer services and resources to meet your business needs.\n\nOn-The-Job Training Program: \nThis program can help you develop training programs for new employees. It can also help pay up to half their wages for up to six months while you teach them to do their job. \n\nEmployed Worker Training Program: \nThis program can help a business offset training costs for current employees who require skill upgrading in order to maintain their current employment. This may include training on new equipment, product lines, internal management changes, safety, etc. Employers may be reimbursed for instructor costs and training materials. \n\nIncumbent Worker Training Program: \nThis program provides grant funding for customized training for existing for-profit businesses. The business may use public, private, or its own in-house training provider based on the nature of the training.",
    "site": "https://www.careersourcechipola.com/pages/employers",
    "contactLink": "https://www.careersourcechipola.com/pages/Locations",
    "countiesServed": "Holmes, Jackson, Washington",
    "industry": "All",
    "id": 22,
    "logoFilename": "CareerSource.jpg"
  }, {
    "category": "Help Starting or Managing Your Business",
    "subcategory": "Hiring Assistance Programs",
    "organizationName": "CareerSource Chipola",
    "overview": "CareerSource Business  is dedicated to providing employment and training assistance to area employers. We’re here to make the hiring process easier for you!\n\nBusiness Services: \nCareerSource can provide assistance with recruitment, employee training, labor market information, employer tax incentives, and outplacement services. \n\nPosting Jobs to Employ Florida Marketplace Website: \nCareerSource can assist area employers with creating and monitoring an Employ Florida Marketplace account, utilizing EFM as a recruitment tool and screen applicants skill-set.",
    "site": "https://www.careersourcechipola.com/pages/employers",
    "contactLink": "https://www.careersourcechipola.com/pages/Locations",
    "countiesServed": "Holmes, Jackson, Washington",
    "industry": "All",
    "id": 23,
    "logoFilename": "CareerSource.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Energy Efficiency Incentives",
    "organizationName": "Gulf Power Company - Earth Cents Program",
    "overview": "Improving the efficiency of the places we work, play and learn helps save energy and that saves you money. Not only can we help you with learning how to use efficient and renewable energy resources, we also have financial incentives to offset the cost of becoming more efficient. All projects associated with potential incentive payments require pre-authorization by Gulf Power prior to commencement.",
    "site": "http://www.gulfpower.com/business/earthcents/",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 24,
    "logoFilename": "Gulf-Power-Logo.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Small Business Loans and Grants",
    "organizationName": "U.S. Small Business Administration (SBA)",
    "overview": "The U.S. Small Business Administration (SBA) was created in 1953 as an independent agency of the federal government to aid, counsel, assist and protect the interests of small business concerns, to preserve free competitive enterprise and to maintain and strengthen the overall economy of our nation. \n\nSBA offers a variety of loan and grant programs for very specific purposes. Take some time to study the programs on our website to see if you qualify to participate.\n",
    "site": "https://www.sba.gov/loans-grants",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 25,
    "logoFilename": "US-Small-Business-Administration.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Small Business Loans and Grants",
    "organizationName": "Enterprise Florida (EFI)",
    "overview": "Enterprise Florida, Inc.’s (EFI) Minority & Small Business, Entrepreneurship and Capital (MaSBEC) division partners with outside organizations to provide small, minority and entrepreneurial companies with training, development and financing options.  EFI has an extensive network of state, federal and non-profit resources ready to assist small businesses in accessing capital, entering new markets, and creating revenue growth and job creation.",
    "site": "https://www.enterpriseflorida.com/small-business/",
    "contactLink": "https://www.enterpriseflorida.com/contact/?contact=David+Rodriguez",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 26,
    "logoFilename": "Enterprise-Florida.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Job Creation Incentives",
    "organizationName": "Gulf Power Company",
    "overview": "Gulf Power Company is committed to business expansion and growth in Northwest Florida. Our Job Creation Rate Incentive offers base rate electric price incentives over a four-year period for new or expanding businesses that meet certain electric load, job creation and capital investment requirements.\n\nThe potential savings to businesses over the four-year program may range from $11,000 for a 200-kilowatt business customer to more than $1.2 million for a 4-megawatt customer. This incentive helps offset the costs of starting up, expanding or moving operations to Northwest Florida.",
    "site": "http://www.gulfpower.com/business/economic-development/job-creation-rate.cshtml",
    "contactLink": "http://www.gulfpower.com/business/economic-development/",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 27,
    "logoFilename": "Gulf-Power-Logo.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Job Creation Incentives",
    "organizationName": "Enterprise Florida (EFI)",
    "overview": "Enterprise Florida, Inc. (EFI) is a public-private partnership between Florida’s business and government leaders and is the principal economic development organization for Florida. EFI’s mission is to expand and diversify the state’s economy through job creation. \n\nFlorida offers bottom-line advantages for long term profitability for all types of businesses, from corporate headquarters to manufacturing plants to service firms.",
    "site": "https://www.enterpriseflorida.com/why-florida/business-climate/incentives/",
    "contactLink": "https://www.enterpriseflorida.com/contact/?contact=Heather+Shubirg",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 28,
    "logoFilename": "Enterprise-Florida.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Job Creation Incentives",
    "organizationName": "Santa Rosa County Economic Development",
    "overview": "Santa Rosa Economic Development offers numerous incentives to industries that relocate to Northwest Florida. Incentives range from tax exemptions and credits, to loan programs, to workforce training and assistance through development permitting. But, what really sets Santa Rosa County apart, in terms of incentives, is its pricing guidelines program for publicly owned industrial property. This innovative, unique, and attractive incentive offers new and expanding industry discounted land, based on what you bring to our community (i.e. employment capacity, wages, company's performance, capital investment).\n\nBetter business and better jobs makes for happier families and an overall better community. And that is exactly what we are about. Contact us to learn more!",
    "site": "http://www.santarosaedo.com/incentives.cfm",
    "contactLink": "http://data1.santarosa.fl.gov/santarosaEDO/about-us.cfm",
    "countiesServed": "Santa Rosa",
    "industry": "All",
    "id": 29,
    "logoFilename": "Santa-Rosa-County-Economic-Development.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Job Creation Incentives",
    "organizationName": "Opportunity Florida",
    "overview": "Opportunity Florida can be a valuable benefit in helping your business succeed. As a nine county regional economic development alliance, Opportunity Florida is focused on strengthening the existing businesses within Calhoun, Franklin, Gadsden, Gulf, Holmes, Jackson, Liberty, Wakulla and Washington counties. We strive to provide the connectivity, resources, knowledge and leverage to help make things happen for your business. In short, our goal is to create \"opportunities\" for our regional businesses and workers. \n\nBetter business and better jobs makes for happier families and an overall better community. And that is exactly what we are about. Contact us to learn more!",
    "site": "http://www.opportunityflorida.com/incentives.cfm",
    "contactLink": "http://www.opportunityflorida.com/contact-us.cfm",
    "countiesServed": "Holmes, Washington, Jackson",
    "industry": "All",
    "id": 30,
    "logoFilename": "Opportunity-Florida.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Job Creation Incentives",
    "organizationName": "Holmes County Development Commission",
    "overview": "The Holmes County Development Commission spearheads the effort to pursue that Holmes County promotes the growth of an Enterprise Zone which ensures that local businesses and residents are zone certified. The 20 square mile zone is divided into three non-contiguous areas covering Bonifay, Ponce de Leon and Esto.\n\nThe Development Commission acts as the official representative of Enterprise Zone activity to ensure that businesses and residents located in the zone will be able to receive numerous incentives. ",
    "site": "http://www.holmescountyonline.com/development.html",
    "contactLink": "http://www.holmescountyonline.com/contactus.html",
    "countiesServed": "Holmes",
    "industry": "All",
    "id": 31,
    "logoFilename": "Holmes-County-Development-Commission.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Job Creation Incentives",
    "organizationName": "Bay County Economic Development Alliance (EDA)",
    "overview": "The Bay Economic Development Alliance will work to negotiate an incentive package for your company 's relocation or expansion project. An incentive award could include tax refunds and exemptions, workforce training and, for qualifying projects, even cash grants from local, regional and state resources. For eligible projects, award amounts are based on many factors, including number of jobs, wage levels, employee benefit packages, capital investment, financial history, economic impact and amount of incentive awards from competing communities.",
    "site": "http://www.bayeda.com/site-selection-incentives.aspx",
    "contactLink": "http://www.bayeda.com/contact-us.aspx",
    "countiesServed": "Bay ",
    "industry": "All",
    "id": 32,
    "logoFilename": "Bay-County-Economic-Development-Alliance.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Job Creation Incentives",
    "organizationName": "FloridaWest Economic Development Alliance",
    "overview": "FloridaWest Economic Development Alliance is the economic development organization located in Pensacola, Florida wholly dedicated to advancing the economic health and vitality of the areas we serve.\n\nThe Pensacola region offers a variety of local and state incentives to assist your business with choosing to locate and/or expand in the region. Contact us to learn more!",
    "site": "http://www.floridawesteda.com/",
    "contactLink": "http://www.choosegreaterpensacola.com/Contact-Us.aspx",
    "countiesServed": "Escambia ",
    "industry": "All",
    "id": 33,
    "logoFilename": "FloridaWest-Economic-Development-Alliance.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Job Creation Incentives",
    "organizationName": "Economic Development Council of Okaloosa County, Florida",
    "overview": "The Economic Development Council for Okaloosa County, Florida is a non-profit, public-private partnership serving Okaloosa County as its primary economic development organization committed to continual growth and diversification through existing industry retention and expansion, workforce development and expansion of key industry clusters.\n\nOkaloosa County offers a variety of local and state incentives to assist your business with choosing to locate and/or expand in the region. Contact us to learn more!",
    "site": "http://www.florida-edc.org/site-selectors/financing-and-incentives.aspx",
    "contactLink": "http://www.florida-edc.org/contact-us.aspx",
    "countiesServed": "Okaloosa ",
    "industry": "All",
    "id": 34,
    "logoFilename": "Economic-Development-Council-of-Okaloosa-County-Florida.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Job Creation Incentives",
    "organizationName": "Walton County Economic Development Alliance",
    "overview": "The Walton County Economic Development Alliance is charged with incentivizing and simplifying new business investment in Walton County. \n\nPublic entities ranging from the State of Florida to local municipalities partner with Walton County to provide incentive packages specifically crafted to meet the needs of expanding firms. Program offerings include tax credits, training assistance and grants. Contact us to learn more!",
    "site": "http://wcedafl.com/business-info/financing-incentives",
    "contactLink": "http://wcedafl.com/who-we-are/contact-us",
    "countiesServed": "Walton ",
    "industry": "All",
    "id": 35,
    "logoFilename": "Walton-County-Economic-Development-Alliance.jpg"
  }, {
    "category": "Funding and Incentives for Your Business",
    "subcategory": "Disaster Assistance for Your Business",
    "organizationName": "Florida Small Business Development Center (SBDC)",
    "overview": "When disaster strikes, Florida businesses can find the education, training, and assistance needed to survive through the Florida SBDC Network’s (FSBDCN) Business Continuation Services. Our professionally certified business consultants provide consulting training at little to no cost to help you minimize losses and increase survivability when affected by natural and man-made disasters. They can also help prepare a comprehensive Business Continuity, Emergency Preparedness, and Disaster Recovery Plan at no cost.",
    "site": "http://floridasbdc.org/services/business-continuation/",
    "contactLink": "http://uwf.edu/cob/community-outreach/florida-small-business-development-center-at-uwf/about-us/contact-us/",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 36,
    "logoFilename": "Florida-Small-Business-Development-Center.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Business Incubators & Shared Workspaces",
    "organizationName": "Business Innovation Center (BIC) at Florida State University Panama City",
    "overview": "The BIC will provide new and emerging innovative businesses with an environment to support their start-up phase and increase their likelihood of success. Currently, the BIC includes facility space at FSU-PC, offering office space, shared use of common office equipment, direct business assistance and guidance, mentoring, networking to capital, and other technical resources. The BIC will deliver more than office space – it will seek to provide the ideal blend of business opportunities, resources and synergies to enhance entrepreneurial success in Northwest Florida.",
    "site": "http://www.bicpc.com/",
    "contactLink": "http://www.bicpc.com/Contact-Us.aspx",
    "countiesServed": "Bay",
    "industry": "Arts, Entertainment & Recreation, Construction, Healthcare, IT/Cybersecurity, Manufacturing, Aerospace & Aviation, Professional, Scientific & Technical Services",
    "id": 37,
    "logoFilename": "Business-Innovation-Center-at-Florida-State-University-Panama-City.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Business Incubators & Shared Workspaces",
    "organizationName": "Gulf Coast Center for Innovation & Entrepreneurship (CIE) ",
    "overview": "The Gulf Coast CIE targets early-stage, high-growth companies to increase their chances of success by providing shared office space, support services and business coaching. Our mission is to act as a catalyst to support innovative entrepreneurs who create jobs and can sustain long-term economic growth for Greater Pensacola.",
    "site": "http://gulfcoastinnovation.com/",
    "contactLink": "http://gulfcoastinnovation.com/contact-us/",
    "countiesServed": "Escambia, Santa Rosa",
    "industry": "Arts, Entertainment & Recreation, Construction, Healthcare, IT/Cybersecurity, Manufacturing, Aerospace & Aviation, Professional, Scientific & Technical Services",
    "id": 38,
    "logoFilename": "Gulf-Coast-Center-for-Innovation-Entrepreneurship.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Business Incubators & Shared Workspaces",
    "organizationName": "Cowork @nnex ",
    "overview": "Cowork @nnex provides members access to the same amenities of a Fortune 500 company for just a little more than the cost of a gym membership. Our historically restored, 10,000 sft space located in the Brent Annex building of the reimagined and renovated One Palafox Place development will be professionally designed and outfitted with the best in modern, sustainable furniture suited for coworking at shared tables, designated desks, hot desks, private offices, meeting and conference rooms. \n\nAdditionally, the space will feature a full kitchen, play area (yeah, you read that right!) a gym, the fastest WiFi in town, all situated above a new coffee shop. Our Community Builder will work extra hard to curate, connect and collaborate with our members and sponsors so that, ultimately, we all conquer our business goals, and maybe even some of our life goals, too!",
    "site": "http://coworkannex.com/ ",
    "contactLink": "http://coworkannex.com/#About",
    "countiesServed": "Escambia, Santa Rosa",
    "industry": "Arts, Entertainment & Recreation, Construction, Healthcare, IT/Cybersecurity, Manufacturing, Aerospace & Aviation, Professional, Scientific & Technical Services",
    "id": 39,
    "logoFilename": "cowork-annex.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Business Incubators & Shared Workspaces",
    "organizationName": "WorkBase",
    "overview": "WorkBase provides a place in your neighborhood to get things done, alongside others doing just the same. We have everything you need: unlimited coffee, fast WiFi, color printers, and reservable conference rooms. WorkBase encourages you to step outside of the lonely living room, noisy coffee shop, and boring office. Come to WorkBase and maximize your productive.",
    "site": "http://workbase.us/",
    "contactLink": "http://workbase.us/#Contact",
    "countiesServed": "Escambia, Santa Rosa",
    "industry": "All",
    "id": 40,
    "logoFilename": "WorkBase.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Business Incubators & Shared Workspaces",
    "organizationName": "TechFarms",
    "overview": "TechFarms is a technology incubator that provides tech startups with low cost office space, business mentoring and access to equipment and other key resources such as accounting & legal assistance. The culture at TechFarms is very relaxed and admitted companies enjoy a fun work environment that encourages collaboration, learning and the sharing of ideas. TechFarms currently houses both hardware and software startups and is actively searching for motivated and passionate entrepreneurs who want to turn their dreams into profitable companies.",
    "site": "http://www.techfarms.com/",
    "contactLink": "http://www.techfarms.com/contact/",
    "countiesServed": "Bay ",
    "industry": "Arts, Entertainment & Recreation, Construction, Healthcare, IT/Cybersecurity, Manufacturing, Professional, Scientific & Technical Services",
    "id": 41,
    "logoFilename": "TechFarms.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Sites and Building Databases",
    "organizationName": "Gulf Power's Florida First Sites",
    "overview": "Florida First Sites — launched by Gulf Power Company — offers project-ready industrial sites with the due diligence complete to minimize risk and accelerate speed to market. Find the one that’s right for your next location decision. Our Economic Development Team is here to expedite and guide you through the process. ",
    "site": "http://www.floridafirstsites.com/",
    "contactLink": "http://www.floridafirstsites.com/contact-us.cshtml",
    "countiesServed": "All Counties",
    "industry": "Arts, Entertainment & Recreation, Construction, Healthcare, IT/Cybersecurity, Manufacturing, Aerospace & Aviation, Professional, Scientific & Technical Services",
    "id": 42,
    "logoFilename": "Gulf-Powers-Florida-First-Sites.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Sites and Building Databases",
    "organizationName": "Enterprise Florida (EFI)",
    "overview": "Enterprise Florida, Inc. (EFI) is a public-private partnership between Florida’s business and government leaders and is the principal economic development organization for Florida. EFI’s mission is to expand and diversify the state’s economy through job creation. \n\nCheck out our easy to use database highlights 100's of sites and buildings available throughout the State of Florida. ",
    "site": "http://www.enterpriseflorida.com/find-properties/",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "Arts, Entertainment & Recreation, Construction, Healthcare, IT/Cybersecurity, Manufacturing, Aerospace & Aviation, Professional, Scientific & Technical Services",
    "id": 43,
    "logoFilename": "Enterprise-Florida.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Sites and Building Databases",
    "organizationName": "Economic Development Council of Okaloosa County, Florida",
    "overview": "Okaloosa County has launched a website dedicated to powerful business information research and access to available properties and sites. This economic development tool is a partnership between the Economic Development Council of Okaloosa County and the Emerald Coast Association of Realtors. Using Geographic Information System (GIS) Software, the website provides immediate access to in-depth information that previously took weeks to research. Now, data including dynamic real estate, demographic, and industry breakdowns are available free and instantly for all cities in Okaloosa County, along with a database of available properties with images.",
    "site": "www.okaloosasites.com",
    "contactLink": "http://www.florida-edc.org/contact-us.aspx",
    "countiesServed": "Okaloosa",
    "industry": "All",
    "id": 44,
    "logoFilename": "Economic-Development-Council-of-Okaloosa-County-Florida.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Sites and Building Databases",
    "organizationName": "FloridaWest Economic Development Alliance",
    "overview": "Whether you are a site selection consultant, real estate broker/developer, one of our valued local companies or a business seeking a location, we are here to serve you. Our easy to use database highlights available sites and buildings in our region.",
    "site": "http://choosegreaterpensacola.com/Find-Properties.aspx",
    "contactLink": "http://www.floridawesteda.com/",
    "countiesServed": "Escambia ",
    "industry": "All",
    "id": 45,
    "logoFilename": "FloridaWest-Economic-Development-Alliance.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Sites and Building Databases",
    "organizationName": "Santa Rosa County Economic Development",
    "overview": "Santa Rosa County, Florida is serious about helping you grow your business. Our easy to use database highlights over 100 sites and buildings available throughout our region. The Santa Rosa County Economic Development is here to expedite and guide you through the process. ",
    "site": "http://www.santarosasites.com/",
    "contactLink": "http://data1.santarosa.fl.gov/santarosaEDO/about-us.cfm",
    "countiesServed": "Santa Rosa",
    "industry": "All",
    "id": 46,
    "logoFilename": "Santa-Rosa-County-Economic-Development.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Sites and Building Databases",
    "organizationName": "Opportunity Florida",
    "overview": "Opportunity Florida can be a valuable benefit in helping your business succeed. As a nine county regional economic development alliance, Opportunity Florida is focused on strengthening the existing businesses within Calhoun, Franklin, Gadsden, Gulf, Holmes, Jackson, Liberty, Wakulla and Washington counties.  \n\nCheck out our easy to use database highlights sites and buildings available throughout our region. Our Opportunity Florida staff is here to expedite and guide you through the process. ",
    "site": "http://www.opportunityflorida.com/interactivemaps.cfm",
    "contactLink": "http://www.opportunityflorida.com/contact-us.cfm",
    "countiesServed": "Holmes, Washington, Jackson",
    "industry": "All",
    "id": 47,
    "logoFilename": "Opportunity-Florida.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Sites and Building Databases",
    "organizationName": "Bay County Economic Development Alliance (EDA)",
    "overview": "The Bay Economic Development Alliance (EDA) is your source for fast, accurate data for your location search with the knowledge, expertise and hands-on service to match. The EDA’s team of professionals is dedicated to matching your company’s or client’s needs with the assets in our vibrant business community.\n\nCheck out our easy to use database highlights sites and buildings available throughout our region. Our Bay EDA staff is here to expedite and guide you through the process. ",
    "site": "http://www.bayeda.com/site-selection-sites-buildings.aspx",
    "contactLink": "http://www.bayeda.com/contact-us.aspx",
    "countiesServed": "Bay",
    "industry": "All",
    "id": 48,
    "logoFilename": "Bay-County-Economic-Development-Alliance.jpg"
  }, {
    "category": "Available Sites and Buildings",
    "subcategory": "Office Space Size Calculator",
    "organizationName": "Cresa Real Estate Group",
    "overview": "Cresa's Office Space Calculator provides you with a free, easy to use way to estimate how large of an office space you will need to meet your business's needs.  ",
    "site": "http://www.cresa.com/officecalc.aspx",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 49,
    "logoFilename": "Cresa-Real-Estate-Group.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Economic Development Agencies",
    "organizationName": "FloridaWest Economic Development Alliance",
    "overview": "FloridaWest Economic Development Alliance is the economic development organization located in Pensacola, Florida wholly dedicated to advancing the economic health and vitality of the areas we serve.",
    "servicesOffered": "<li>Confidential project management assistance</li><li>Customized presentations tailored to your company's specific location requirements</li><li>Information on city, county, regional and statewide financial incentives, grants and business assistance programs</li><li>Real estate office, industrial and site searches</li><li>Demographics, labor market and wage information</li><li>Personalized community tours and site visits</li><li>Introductions to established business and industry management and service organizations</li><li>Liaison services with state and local government officials and agencies.",
    "site": "http://www.floridawesteda.com/",
    "contactLink": "None",
    "countiesServed": "Escambia ",
    "industry": "Aerospace & Aviation, Healthcare, IT/Cybersecurity, Manufacturing, Professional, Scientific & Technical Services",
    "id": 50,
    "logoFilename": "FloridaWest-Economic-Development-Alliance.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Economic Development Agencies",
    "organizationName": "Santa Rosa County Economic Development",
    "overview": "Santa Rosa County, Florida is serious about helping you grow your business. And we are ready to help you every step of the way from site selection, incentives, workforce recruitment and training, to your grand opening the Santa Rosa County Economic Development Office is here to expedite and guide you through the process. Coupled with Florida’s stable and highly favorable tax climate, Santa Rosa County provides advantages that make growing with us easy and profitable.",
    "servicesOffered": "<li>Business location and site selection assistance</li><li>Employee recruitment and training assistance</li><li>Start up advice, training and resources</li><li>Financial assistance with loans, grants and tax-exempt bonds</li><li>Assistance with finding and implementing incentives</li><li>Education and training opportunities for business</li><li>And more!</li>",
    "site": "http://www.santarosaedo.com/",
    "contactLink": "http://data1.santarosa.fl.gov/santarosaEDO/about-us.cfm",
    "countiesServed": "Santa Rosa ",
    "industry": "All",
    "id": 51,
    "logoFilename": "Santa-Rosa-County-Economic-Development.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Economic Development Agencies",
    "organizationName": "Economic Development Council of Okaloosa County, Florida",
    "overview": "The Economic Development Council for Okaloosa County, Florida is a non-profit, public-private partnership serving Okaloosa County as its primary economic development organization committed to continual growth and diversification through existing industry retention and expansion, workforce development and expansion of key industry clusters.",
    "servicesOffered": "<li>Confidential project management assistance</li><li>Customized presentations tailored to your company's specific location requirements</li><li>Information on city, county, regional and statewide financial incentives, grants and business assistance programs</li><li>Real estate office, industrial and site searches</li><li>Demographics, labor market and wage information</li><li>Personalized community tours and site visits</li><li>Introductions to established business and industry management and service organizations</li><li>Liaison services with state and local government officials and agencies.</li>",
    "site": "http://www.florida-edc.org/",
    "contactLink": "http://www.florida-edc.org/contact-us.aspx",
    "countiesServed": "Okaloosa ",
    "industry": "Aerospace & Aviation, Healthcare, IT/Cybersecurity, Manufacturing, Professional, Scientific & Technical Services",
    "id": 52,
    "logoFilename": "Economic-Development-Council-of-Okaloosa-County-Florida.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Economic Development Agencies",
    "organizationName": "Walton County Economic Development Alliance",
    "overview": "The Walton County Economic Development Alliance is charged with incentivizing and simplifying new business investment in Walton County.  The goal is creation of new, family-wage jobs for a talented and trained workforce, and concurrent growth in overall community wealth and quality of life.  WCEDA's activities are designed to leverage our region's numerous assets, ranging from a superb transportation system to a variety of developable properties, such that business enterprise prospers.  Our mission also emphasizes ongoing relationships with the businesses that are already here, furnishing support and advocacy where needed.\n\nOur Alliance helps companies looking for a place to grow, a place with a trained, eager labor force and economical access to markets large and small.  Our first task is listening, getting a feel for your requirements and the type of site that will work for your business.  ",
    "site": "http://wcedafl.com/",
    "contactLink": "http://wcedafl.com/who-we-are/contact-us",
    "countiesServed": "Walton ",
    "industry": "Aerospace & Aviation, Healthcare, IT/Cybersecurity, Manufacturing, Professional, Scientific & Technical Services",
    "id": 53,
    "logoFilename": "Walton-County-Economic-Development-Alliance.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Economic Development Agencies",
    "organizationName": "Bay County Economic Development Alliance (EDA)",
    "overview": "The Bay Economic Development Alliance (EDA) is your source for fast, accurate data for your location search with the knowledge, expertise and hands-on service to match. The EDA’s team of professionals is dedicated to matching your company’s or client’s needs with the assets in our vibrant business community.",
    "servicesOffered": "<li>Confidential Project Management</li><li>Site Selection Assistance</li><li>Customized Research Demographic and Labor Market Analysis</li><li>State and Local Incentives Assistance</li><li>Workforce Development</li><li>Introductions to Corporate and Community Leadership</li>",
    "site": "http://www.bayeda.com/",
    "contactLink": "http://www.bayeda.com/contact-us.aspx",
    "countiesServed": "Bay ",
    "industry": "Aerospace & Aviation, Healthcare, IT/Cybersecurity, Manufacturing, Professional, Scientific & Technical Services",
    "id": 54,
    "logoFilename": "Bay-County-Economic-Development-Alliance.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Economic Development Agencies",
    "organizationName": "Jackson County Development Council, Inc.",
    "overview": "The Jackson County Development Council, Inc. helps businesses within Jackson County grow and attracts new businesses to our communities. We are a leadership organization, investing in our communities’ assets to grow and improve our prosperity and quality of life.",
    "site": "http://www.jacksoncounty.com/",
    "contactLink": "http://www.jacksoncounty.com/contact/",
    "countiesServed": "Jackson ",
    "industry": "All",
    "id": 55,
    "logoFilename": "Jackson-County-Economic-Development-Council.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Economic Development Agencies",
    "organizationName": "Washington County Economic Development Council",
    "overview": "The Washington County EDC helps businesses within Washington County grow and attracts new businesses to our communities. We are a leadership organization, investing in our communities’ assets to grow and improve our prosperity and quality of life.",
    "site": "http://www.washcomall.com/home/sitepages/story.php?sid=4",
    "contactLink": "http://www.washcomall.com/home/sitepages/story.php?sid=26 ",
    "countiesServed": "Washington",
    "industry": "All",
    "id": 56,
    "logoFilename": "Washington-County-Economic-Development-Council.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Economic Development Agencies",
    "organizationName": "Holmes County Development Commission",
    "overview": "The Holmes County Development Commission,  (HCDC)  is the economic development organization (EDO) for Holmes County.  HCDC is here to serve the existing businesses and industries, as well as those businesses and industries looking at locating to Holmes County. We work closely with Florida's “Department of Economic Opportunity”, “Enterprise Florida”, “Opportunity Florida”, “Florida's Great North West,” as well as our Regional EDOs. ",
    "site": "http://www.holmescountyonline.com/development.html",
    "contactLink": "http://www.holmescountyonline.com/contactus.html",
    "countiesServed": "Holmes",
    "industry": "All",
    "id": 57,
    "logoFilename": "Holmes-County-Development-Commission.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Economic Development Agencies",
    "organizationName": "Opportunity Florida",
    "overview": "Opportunity Florida can be a valuable benefit in helping your business succeed. As a nine county regional economic development alliance, Opportunity Florida is focused on strengthening the existing businesses within Calhoun, Franklin, Gadsden, Gulf, Holmes, Jackson, Liberty, Wakulla and Washington counties. We strive to provide the connectivity, resources, knowledge and leverage to help make things happen for your business. In short, our goal is to create \"opportunities\" for our regional businesses and workers. \n\nBetter business and better jobs makes for happier families and an overall better community. And that is exactly what we are about. Contact us to learn more!",
    "site": "http://www.opportunityflorida.com/index.cfm",
    "contactLink": "http://www.opportunityflorida.com/contact-us.cfm",
    "countiesServed": "Holmes, Jackson, Washington",
    "industry": "All",
    "id": 58,
    "logoFilename": "Opportunity-Florida.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Greater Pensacola Chamber",
    "overview": "Founded in 1889, the Greater Pensacola Chamber is committed to promoting, improving and enhancing the Pensacola Region through economic development, community involvement and unity of private and public sectors.\n\nThe Chamber is an organization of passionate, innovative leaders who are driven to provide professional, personable and positive assistance for companies and organizations, entrepreneurs, prospective new partners, and individuals and families interested in relocating to Pensacola.",
    "site": "http://pensacolachamber.com/",
    "contactLink": "http://pensacolachamber.com/about-the-chamber/contact/",
    "countiesServed": "Escambia ",
    "industry": "All",
    "id": 59,
    "logoFilename": "Greater-Pensacola-Chamber.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Perdido Key Chamber of Commerce",
    "overview": "Our goal at the Perdido Key Area Chamber of Commerce is to help our members grow, so our community can remain a fantastic place to live, work, and play. We offer a variety of programs that give our members the opportunity to get out and meet other new business owners as well seasoned business owners that offer a wealth of information on how to succeed. \n\nBenefits for Chamber Members:\n• Networking Opportunities\n• Visibility on the Chamber website and marketing materials\n• Involvement in the business community\n• Professional development through an informative seminar series",
    "site": "http://www.visitperdido.com/",
    "contactLink": "http://business.visitperdido.com/contact/",
    "countiesServed": "Escambia ",
    "industry": "All",
    "id": 60,
    "logoFilename": "Perdido-Key-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Bay County Chamber of Commerce",
    "overview": " The Bay County Chamber of Commerce was formed in 1913 to promote the industrial and economic growth of Bay County while serving the cities of Callaway, Lynn Haven, Mexico Beach, Panama City Beach, Panama City, Parker, Springfield and unincorporated Bay County. The Chamber exists to make Bay County a better place to live, work and play and is always striving to create value for our membership and helping your business grow.\n\nMembers enjoy many well-attended networking functions, and gain personal and professional development with various continuing education and seminar opportunities. Getting involved is easy with numerous committees such as the Governmental Affairs Committee who represents Bay County businesses on legislative issues at local, state and national levels.",
    "site": "http://www.panamacity.org/",
    "contactLink": "http://members.baychamberfl.com/sbaweb/members/newmemberapplication.asp?&id=5542&wpid=-101&webpage=/sbaweb/members/newmemberapplication.asp&newsession=TRUE&sid=943226216",
    "countiesServed": "Bay ",
    "industry": "All",
    "id": 61,
    "logoFilename": "Bay-County-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Greater Fort Walton Beach Chamber of Commerce",
    "overview": "The Greater Fort Walton Beach Chamber of Commerce brings together the business, non-profit, and cultural leaders of our area, strengthening local businesses and enhancing the quality of life in our community by providing services which help businesses help themselves. As the largest Chamber from Pensacola to Tallahassee, we host the largest (and friendliest!) regular business networking events in Northwest Florida. \n\nAdditionally, we organize a variety of community festivals throughout the year, including the world-famous Billy Bowlegs Pirate Festival in June. The Chamber offers business promotion, advocacy, and exposure to its members, along with various opportunities to serve the community. ",
    "site": "http://www.fwbchamber.org/",
    "contactLink": "https://fortflcoc.wliinc28.com/cwt/external/wcpages/about_the_chamber/join_us.aspx",
    "countiesServed": "Okaloosa ",
    "industry": "All",
    "id": 62,
    "logoFilename": "Greater-Fort-Walton-Beach-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Panama City Beach Chamber of Commerce",
    "overview": "The Panama City Beach Chamber of Commerce is a voluntary partnership of business and professional people working in unison to create a healthy economy and improve the quality of life for individuals in Panama City Beach. The Chamber exists to strengthen, enhance, and encourage the prosperity of existing businesses and the development of new ones. \n\nBenefits of Becoming a Member Include:\n• Business through referrals\n• Free listing in the Vacation Planner Business Directory & Relocation Guide\n• Advertising and marketing partnership opportunities\n• Member-to-Member discounts\n• New Member Ribbon cutting and picture in the Circuit Magazine\n• Networking Opportunities\n• Community, Legislative and Chamber updates through our email network",
    "site": "http://www.pcbeach.org/",
    "contactLink": "http://www.pcbeach.org/about-us/contact.php",
    "countiesServed": "Bay ",
    "industry": "All",
    "id": 63,
    "logoFilename": "Panama-City-Beach-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Santa Rosa County Chamber of Commerce",
    "overview": "The Santa Rosa County Chamber of Commerce is a voluntary partnership of business and professional people working in unison to create a healthy economy and improve the quality of life for individuals in Santa Rosa County. The Chamber exists to strengthen, enhance, and encourage the prosperity of existing businesses and the development of new ones. ",
    "site": "http://www.srcchamber.com/business/",
    "contactLink": "http://www.srcchamber.com/business/contact.asp",
    "countiesServed": "Santa Rosa ",
    "industry": "All",
    "id": 64,
    "logoFilename": "Santa-Rosa-County-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Pensacola Beach Chamber of Commerce",
    "overview": "The Pensacola Beach Chamber of Commerce is a voluntary partnership of business and professional people working in unison to create a healthy economy and improve the quality of life for individuals on Pensacola Beach. The Chamber exists to strengthen, enhance, and encourage the prosperity of existing businesses and the development of new ones. ",
    "site": "http://pensacolabeachchamber.com/",
    "contactLink": "http://pensacolabeachchamber.com/ContactUs.aspx",
    "countiesServed": "Escambia ",
    "industry": "All",
    "id": 65,
    "logoFilename": "Pensacola-Beach-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Washington County Chamber of Commerce",
    "overview": "Our goal at the Washington County Chamber of Commerce is to help our members grow, so our community can remain a fantastic place to live, work, and play. We offer a variety of programs that give our members the opportunity to get out and meet other new business owners as well seasoned business owners that offer a wealth of information on how to succeed. ",
    "site": "http://www.washcomall.com/",
    "contactLink": "http://www.washcomall.com/home/sitepages/story.php?sid=26 ",
    "countiesServed": "Washington ",
    "industry": "All",
    "id": 66,
    "logoFilename": "Washington-County-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Walton Area Chamber of Commerce",
    "overview": "The Walton Area Chamber of Commerce works to develop and publicize business opportunities in the community, as well as work towards the betterment of local schools and other community institutions. The Walton Area Chamber of Commerce offers educational and networking opportunities, business resources such as directories and mailing lists, and government advocacy to protect and advance the interest of the business community. The Walton Area Chamber of Commerce is a private, not-for-profit organization. The Chamber is not a government body.\n\nJoining the Walton Area Chamber of Commerce is easy, simply visit our contact page.",
    "site": "http://waltonareachamber.com/",
    "contactLink": "http://business.waltonareachamber.com/contact?_ga=1.19954876.589819129.1464123281",
    "countiesServed": "Walton",
    "industry": "All",
    "id": 67,
    "logoFilename": "Walton-Area-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Century Chamber of Commerce",
    "overview": "Welcome to Century, the \"Northern Gate to the Sunshine State.\" The Century Chamber of Commerce and Welcome Center was established in the late 1980's by an all-volunteer group of citizens and business owners to promote Century's local businesses and provide economic development opportunities within our community.\n\nIf you are interested in becoming a member of the Century Chamber of Commerce, please check out our website. ",
    "site": "http://www.centuryflorida.com/chamber",
    "contactLink": "http://www.centuryflorida.com/chamber",
    "countiesServed": "Escambia",
    "industry": "All",
    "id": 68,
    "logoFilename": "Century-Florida-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Navarre Beach Area Chamber of Commerce",
    "overview": "The Navarre Beach Area Chamber of Commerce is a vibrant membership organization with more than 530 business, civic and individual members. The Chamber serves as a collective voice representing their interests. Additionally, the Chamber organizes a host of community-centered activities and events.\n\nOn our website you will find useful information about our members and the community.",
    "site": "http://www.navarrechamber.com/",
    "contactLink": "http://www.navarrechamber.com/",
    "countiesServed": "Santa Rosa",
    "industry": "All",
    "id": 69,
    "logoFilename": "Navarre-Beach-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Jackson County Chamber of Commerce",
    "overview": "Our goal at the Jackson County Chamber of Commerce is to help our members grow, so our community can remain a fantastic place to live, work, and play. We offer a variety of programs that give our members the opportunity to get out and meet other new business owners as well seasoned business owners that offer a wealth of information on how to succeed. \n\nPrograms for Chamber Members:\n• Ambassadors Program\n• Jackson County Young Professionals (JCYP)\n• Leadership Jackson County\n• Power Lunches",
    "site": "http://www.jacksoncounty.com/about-us",
    "contactLink": "http://www.jacksoncounty.com/contact/",
    "countiesServed": "Jackson",
    "industry": "All",
    "id": 70,
    "logoFilename": "Jackson-County-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Pace Chamber of Commerce ",
    "overview": "We are a nonprofit organization comprised of businesses, professionals, residents, and other community groups working together to achieve a healthy economic and socioeconomic environment that benefits the entire community. The chamber of commerce harnesses the tremendous potential of the private enterprise system and the community, enabling our members to accomplish collectively what no one individual or business could do.\n\nBecome a part of a thriving business community in Florida by joining the Pace Area Chamber of Commerce. From architects to volunteer fire departments, we represent all businesses and organizations.",
    "site": "http://www.pacechamber.com/ ",
    "contactLink": "http://www.pacechamber.com/Chamber-of-Commerce-Location-Contact-Pace-FL.html",
    "countiesServed": "Santa Rosa",
    "industry": "All",
    "id": 71,
    "logoFilename": "Pace-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Gulf Breeze Chamber of Commerce ",
    "overview": "The Gulf Breeze Area Chamber of Commerce is the premier resource for business and community partnerships.  While serving as the voice of the business community, the Chamber contributes to the development of an attractive business environment by facilitating opportunities for our members and the community to connect.\n\nFounded in 1988, the Gulf Breeze Area Chamber’s mission is to develop an attractive business environment that provides opportunity for economic growth while improving the quality of life and enhancing the standard of living for the entire Gulf Breeze area. Our staff and dedicated volunteers are ready to serve you and help you accomplish your business goals.  The membership is a tightly knit group of small business owners/representatives working alongside large businesses, governmental agencies, non-profit organizations, and individuals to ensure the continued strength of this community. \n",
    "site": "http://gulfbreezechamber.com/",
    "contactLink": "http://business.gulfbreezechamber.com/contact",
    "countiesServed": "Escambia, Santa Rosa",
    "industry": "All",
    "id": 72,
    "logoFilename": "Gulf-Breeze-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Crestview Chamber of Commerce ",
    "overview": "We are the premier business advocate in the Crestview area community, providing membership services and proactive leadership to promote responsible economic development, business success, and a high quality of life.\n\n For over 50 years, thousands of businesses and community leaders, as members of the chamber, have given of themselves to make this community what it has become today: a beautiful, bustling place we call home.",
    "site": "http://www.crestviewchamber.com/",
    "contactLink": "http://www.crestviewchamber.com/contact/",
    "countiesServed": "Okaloosa",
    "industry": "All",
    "id": 73,
    "logoFilename": "Crestview-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Chambers of Commerce",
    "organizationName": "Gulf Coast African American Chamber of Commerce ",
    "overview": "The GCAACC is the only organization currently focused and positioned to meet the needs of the minority community relative to economic development. Many of our major industries are downsizing or totally dissolving, which is causing more and more workers to choose to create their own businesses, therefore making GCAACC a vital part of our local economy. \n\nThrough workshops, seminars, training, mentorship programs, consulting and technical assistance to our members, we will constantly strive to serve our members and fulfill our mission to promote and assist in community and economic development. The focus of these events is to create civic, industrial, and commercial ventures that are diverse and reflect the views of the Gulf Coast community. ",
    "site": "http://www.gcaacc.info/ ",
    "contactLink": "http://www.gcaacc.info/page-1574544",
    "countiesServed": "Escambia, Santa Rosa",
    "industry": "All",
    "id": 74,
    "logoFilename": "Gulf-Coast-African-American-Chamber-of-Commerce.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Industry Associations",
    "organizationName": "Armed Forces Communications and Electronics Association (AFCEA)",
    "overview": "AFCEA, (Armed Forces Communications and Electronics Association) is a non-profit membership association serving the military, government, industry, and academia as an ethical forum for advancing professional knowledge and relationships in the fields of communications, IT, intelligence, and global security.\n\nThe Blue Angels Pensacola AFCEA chapter’s primary goals are to provide a strong ethical forum where C4I professionals can exchange ideas and learn of the latest technologies available in order to satisfy command and control, electronics, and intelligence requirements and award scholarships to those in pursuit of such endeavors. Our chapter helps foster close cooperative relationships among civil government agencies, the military and industry.",
    "site": "http://www.afceapensacola.org/ ",
    "contactLink": "http://www.afceapensacola.org/index.php/contact-us",
    "countiesServed": "Escambia, Santa Rosa",
    "industry": "IT/Cybersecurity & Professional, Scientific, and Technical Services",
    "id": 75,
    "logoFilename": "Armed-Forces-Communications-and-Electronics-Association.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Industry Associations",
    "organizationName": "Information Technology Association of the Gulf Coast (ITGulfCoast)",
    "overview": "The mission of IT Gulf Coast! is to be the premiere professional association for the IT community in Northwest Florida with a goal of creating educational and networking opportunities for our membership to foster the growth of the technology industry and entrepreneurship in our area.\n\nWe invite you to join IT Gulf Coast! As a member, you have access to the numerous IT-related resources and people in the greater Pensacola region.",
    "site": "http://itgulfcoast.org/ ",
    "contactLink": "http://itgulfcoast.org/contact",
    "countiesServed": "Escambia, Santa Rosa, Okaloosa",
    "industry": "IT/Cybersecurity",
    "id": 76,
    "logoFilename": "ITGulfCoast.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Industry Associations",
    "organizationName": "Northwest Florida Manufacturers Council",
    "overview": "The Northwest Florida Manufacturers Council exists to strengthen the economic competitiveness of the region's manufacturers by acting as a single voice to address common interests. The program of work will be developed through input from the members, but will at least initially serve to deepen the manufacturing talent pool by working with education and workforce development partners to create programs that develop skillsets (technical and employability) that are needed in the region's manufacturing industry. \n\nMembers can expect to see a greater awareness of manufacturing careers in the region, greater preparedness by program graduates for these careers, and ultimately a reduction in costs associated with recruiting, hiring, and training entry-level workers.\n",
    "site": "http://www.nwfmc.org/ ",
    "contactLink": "http://www.nwfmc.org/Home.aspx",
    "countiesServed": "All Counties",
    "industry": "Manufacturing",
    "id": 77,
    "logoFilename": "Northwest-Florida-Manufacturers-Council.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Industry Associations",
    "organizationName": "Innovation Coast",
    "overview": "Innovation Coast is an alliance of technology and knowledge based companies in Northwest Florida. Its mission is to grow, sustain, and showcase the region’s successful, vibrant ecosystem of technology companies, professionals, and investment opportunities.",
    "site": "http://www.innovationcoast.com/",
    "contactLink": "http://www.innovationcoast.com/page/contact-us/",
    "countiesServed": "Escambia, Santa Rosa, Okaloosa, Walton, Bay",
    "industry": "IT/Cybersecurity & Professional, Scientific, and Technical Services",
    "id": 78,
    "logoFilename": "Innovation-Coast.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Visitor Bureaus",
    "organizationName": "Visit Pensacola",
    "overview": "Tourism partnerships are available to any business interested in boosting awareness of their services to visitors. A two-tiered memberships structure now makes it easy and affordable to participate at a level that best suits your business needs. Partnering with Visit Pensacola offers promotional opportunities such as:\n\n• Brochure placement at the Visitors Information Center\n• Discounted advertising rates\n• Enhanced Visitor Guide and web listings\n• Participation in sales missions and trade shows\n\nTourism partnerships will not only benefit your business but will ensure the success of our tourism industry by showcasing the Pensacola Bay area as a premier travel destination.",
    "site": "http://www.visitpensacola.com/",
    "contactLink": "http://www.visitpensacola.com/content/join-visit-pensacola",
    "countiesServed": "Escambia",
    "industry": "Arts, Entertainment, & Recreation, Hotel/Motel, Restaurant, Retail, Grocery Stores ",
    "id": 79,
    "logoFilename": "Visit-Pensacola.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Visitor Bureaus",
    "organizationName": "Okaloosa County Tourist Development Council",
    "overview": "The Tourist Development Department consists of an overall director and a convention center manager among qualified, experienced staff, who perform the mission of the Tourist Development Council, referred to as the “TDC” and known as the Convention & Visitors Bureau, or “CVB”, outside the local area. Objectives include:\n\nThe TDC's primary role is to promote tourism sales and increase overall visitation through marketing and advertising of our beautiful Emerald Coast to the outside world, generating a maximum return on investment for the local economy.",
    "site": "http://www.co.okaloosa.fl.us/tourist-development/home",
    "contactLink": "http://www.co.okaloosa.fl.us/bcc_contact",
    "countiesServed": "Okaloosa",
    "industry": "Arts, Entertainment, & Recreation, Hotel/Motel, Restaurant, Retail, Grocery Stores ",
    "id": 80,
    "logoFilename": "Okaloosa-County-Tourist-Development-Council.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Visitor Bureaus",
    "organizationName": "Panama City Beach Convention & Visitors Bureau",
    "overview": "The mission of the Panama City Beach Convention & Visitors Bureau and the Bay County Tourist Development Council is to promote a positive image for Panama City Beach, increase tourism, and coordinate the marketing efforts to the total tourism community.\n\nThe Panama City Beach Convention & Visitors Bureau and Visitors Information Center offer visitors a resource for current Panama City Beach information about attractions, events, restaurants, and accommodations. Anything you need to know about Panama City Beach, we’re here to help!",
    "site": "http://www.visitpanamacitybeach.com/",
    "contactLink": "http://www.visitpanamacitybeach.com/partners/contact-us/",
    "countiesServed": "Bay",
    "industry": "Arts, Entertainment, & Recreation, Hotel/Motel, Restaurant, Retail, Grocery Stores ",
    "id": 81,
    "logoFilename": "Panama-City-Beach-Convention-Visitors-Bureau.jpg"
  }, {
    "category": "Local  Business Support & Industry Associations",
    "subcategory": "Local Visitor Bureaus",
    "organizationName": "Visit South Walton",
    "overview": "The Mission of the Walton County TDC is to direct and manage activities that will strengthen the position of the South Walton brand in the tourism marketplace, in order to increase the tourism economy of Walton County. The TDC will manage and maintain our beaches as a primary attraction and serve as a responsible industry organization to take a leadership role in addressing issues that affect tourism and the quality of life in Walton County.\n\nPartner programs include free business listings on our website, listings in our Visitor Guide, the Special Event Marketing Grant program, and more.  ",
    "site": "http://www.visitsouthwalton.com/",
    "contactLink": "http://www.visitsouthwalton.com/industry/contact",
    "countiesServed": "Walton",
    "industry": "Arts, Entertainment, & Recreation, Hotel/Motel, Restaurant, Retail, Grocery Stores ",
    "id": 82,
    "logoFilename": "Visit-South-Walton.jpg"
  }, {
    "category": "Research Resources and Analytical Tools",
    "subcategory": "Free Business Research Databases",
    "organizationName": "Florida Small Business Development Center (SBDC)",
    "overview": "Florida SBDC provide access to data and information generally unaffordable or unavailable to existing and aspiring small and medium-sized businesses. Through its affiliations and partnerships with institutions of higher education, our certified professionals utilize high-cost databases, business research resources, and tools, including those listed below, to assist businesses that are poised for growth and ready for our services. Together with our team of support and professional consultants, we put that information to work to help grow businesses.",
    "site": "http://floridasbdc.org/services/research/",
    "contactLink": "http://uwf.edu/cob/community-outreach/florida-small-business-development-center-at-uwf/about-us/contact-us/",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 83,
    "logoFilename": "Florida-Small-Business-Development-Center.jpg"
  }, {
    "category": "Research Resources and Analytical Tools",
    "subcategory": "Free Business Research Databases",
    "organizationName": "SizeUp",
    "overview": "SizeUp shows businesses how to make more money, outperform their competition, and find the best places to advertise. We provide high-quality business intelligence so every company can grow by being smarter. Using SizeUp, businesses can benchmark their competitiveness and receive resources to improve.\n\nMake smarter decisions through data with SizeUp and learn the answers to the burning questions that keep every business owner and aspiring entrepreneur up at night.",
    "site": "https://www.sizeup.com/",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 84,
    "logoFilename": "SizeUp.jpg"
  }, {
    "category": "Research Resources and Analytical Tools",
    "subcategory": "Demographics & Education Data",
    "organizationName": "University of West Florida (UWF) Office of Economic Development and Engagement (OEDE)",
    "overview": "The Office of Economic Development and Engagement (OEDE) was created in January 2011 to enable UWF to play a more significant role in economic development and job growth in Northwest Florida.The OEDE serves as the interface between the community and the university on matters directed at improving regional planning,  partnerships, and research endeavors. \n\nOur site provides demographic, tourism, and industry cluster data as well as a links to dozens of links to local and national business resources.",
    "site": "http://uwf.edu/offices/oede/",
    "contactLink": "http://uwf.edu/offices/oede/data-requests/",
    "countiesServed": "Escambia,  f, Okaloosa, Walton, Bay ",
    "industry": "All",
    "id": 85,
    "logoFilename": "University-of-West-Florida-Office-of-Economic-Development-and-Engagement.jpg"
  }, {
    "category": "Research Resources and Analytical Tools",
    "subcategory": "Demographics & Education Data",
    "organizationName": "US Census - American Fact Finder",
    "overview": "The Census Bureau conducts nearly one hundred surveys and censuses every year. Data from the following surveys and censuses are available on the American FactFinder website. Information on this site includes population, income, race, and education statistics by state, county, city, town or zip code.",
    "site": "http://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 86,
    "logoFilename": "US-Census-American-Fact-Finder.jpg"
  }, {
    "category": "Research Resources and Analytical Tools",
    "subcategory": "Demographics & Education Data",
    "organizationName": "National Center for Educational Statistics",
    "overview": "The Institute of Education Sciences (IES) is the statistics, research, and evaluation arm of the U.S. Department of Education. Our College Navigator tool allows you to find information (enrollment, programs/majors offered, accreditation, etc.) on all of the higher education institutions in the US.",
    "site": "http://nces.ed.gov/collegenavigator/",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 87,
    "logoFilename": "National-Center-for-Educational-Statistics.jpg"
  }, {
    "category": "Research Resources and Analytical Tools",
    "subcategory": "Industry and Labor Market Data",
    "organizationName": "Bureau of Labor Statistics",
    "overview": "The Bureau of Labor Statistics of the U.S. Department of Labor is the principal Federal agency responsible for measuring labor market activity, working conditions, and price changes in the economy. Its mission is to collect, analyze, and disseminate essential economic information to support public and private decision-making. As an independent statistical agency, BLS serves its diverse user communities by providing products and services that are objective, timely, accurate, and relevant.",
    "site": "http://www.bls.gov/oes/current/oessrcma.htm",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 88,
    "logoFilename": "Bureau-of-Labor-Statistics.jpg"
  }, {
    "category": "Research Resources and Analytical Tools",
    "subcategory": "Industry and Labor Market Data",
    "organizationName": "Florida Research and Economic Information Database Application (FREIDA)",
    "overview": "Research key labor market areas, economic climate statistics by industry or region, and average salary and wage data for the state of Florida through FREIDA, Florida’s user-friendly labor market information system.",
    "site": "http://freida.labormarketinfo.com/",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 89,
    "logoFilename": "Florida-Research-and-Economic-Information-Database-Application.jpg"
  }, {
    "category": "Research Resources and Analytical Tools",
    "subcategory": "Traffic Count Data",
    "organizationName": "Florida Department of Transportation ",
    "overview": "Florida Traffic Online is a web-based mapping application that provides traffic count site locations and historical traffic count data. Traffic data is updated annually each April.",
    "site": "http://www2.dot.state.fl.us/floridatrafficonline/viewer.html",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 90,
    "logoFilename": "Florida-Department-of-Transportation.jpg"
  }, {
    "category": "Research Resources and Analytical Tools",
    "subcategory": "Cost of Living Calculator ",
    "organizationName": "Sperling's Best Places",
    "overview": "In three simple steps, Sperling's Best Places website will you with a cost of living comparison between two locations. The comparison includes food, housing, utilities, transportation and health cost of living numbers.",
    "site": "http://www.bestplaces.net/cost-of-living/",
    "contactLink": "None",
    "countiesServed": "All Counties",
    "industry": "All",
    "id": 91,
    "logoFilename": "Sperling-Best-Places.jpg"
  }];

  // Allow the user to submit the search
  $('#continueButton').click(function () {
    // Make sure the search results are closed
    $('.search-results').css('max-height', '');
    $('.search-results').removeClass('opened')

    // Open the '.search-query' section
    $('.search-query').addClass('opened');

    // Scroll to the top of the next section
    $('html, body').animate({
      scrollTop: $(".search-query h4").offset().top - 10
    }, '250ms');

    // Figure out the appropriate checkboxes and
    // sections for the chosen industry and county
    var searchData = {
      "industry": $('[name="industry"]').val(),
      "county": $('[name="business_county"]').val()
    };

    // If user has selected both an industry and a county
    // Replace all of the checkboxes hidden from last time
    $('.search-query ul').show();
    $('.search-query li').show();

    if (searchData.industry != "All Industries" || searchData.county != "All Counties") {
      // Patterns
      var industryPattern = new RegExp(searchData.industry, "ig");
      var countyPattern = new RegExp(searchData.county, "ig");

      // Remember all the checkboxes that should be hidden
      $.each($('.search-query input[type="checkbox"]'), function (i, checkbox) {
        checkbox.isNeeded = false;

        $.each(businesses, function (_, business) {
          // Patterns
          var subcategoryPattern = new RegExp(checkbox.value, "ig");

          // Search for matches to all the form selections
          var matchingIndustry = (business.industry.search(industryPattern) != -1 || business.industry == "All" || searchData.industry == "All Industries");
          var matchingCounties = (business.countiesServed.search(countyPattern) != -1 || business.countiesServed == "All Counties" || searchData.county == "All Counties");
          var belongsToSubcategory = (business.subcategory.search(subcategoryPattern) != -1);

          // Keep the checkbox if the business
          // subcategory matches the checkbox
          if (matchingIndustry && matchingCounties && belongsToSubcategory) {
            checkbox.isNeeded = true;
          }
        });
      });

      // Hide the subcategory checkboxes that don't have results
      $.each($('.search-query input[type="checkbox"]'), function (i, checkbox) {
        if (checkbox.isNeeded != true) {
          $(checkbox).parents('li').hide();
        }
      });

      // Remove section titles for empty lists
      $.each($('.search-query ul'), function (_, list) {
        if ($(list).children('li:visible').length == 0) {
          $(list).hide();
        }
      });
    }

    // Figure out and apply an appropriate 'max-height' for '.search-query'
    var appropriateSearchQueryMaxHeight = 0;
    $.each($('.search-query').children(), function (_, child) {
      appropriateSearchQueryMaxHeight += $(child).outerHeight(true);
    });
    $('.search-query').css('max-height', appropriateSearchQueryMaxHeight + 250);
  });

  // Search selection tags
  $('.change-link').click(function (e) {
    clearResults();
  });

  // Clear search results
  function clearResults() {
    $('.search-section-title').show();
    $('.search-results-section-title').hide();

    // Show the search module
    $('.search-module').addClass('opened');

    // Hide the search query drawer
    $('.search-query').css('max-height', '');
    $('.search-query').removeClass('opened');

    // Hide the search results drawer
    $('.search-results').removeClass('opened');

    // Forget the subcategory section titles
    setTimeout(function () {
      $('.subcategory-section-title').remove();
    }, 2750);

    // Forget the results for the previous query
    $('.search-results').css('max-height', '');
    setTimeout(function () {
      $('.search-result').remove();
    }, 500);

    $('html, body').animate({
      scrollTop: $(".search-title").offset().top - 10
    }, '250ms');
  }

  function updateSearchResultsMaxHeight() {
    var searchResultsHeight = 0;
    $.each($('.search-results').children(), function (_, searchResult) {
      searchResultsHeight += $(searchResult).outerHeight(true);
    });
    $('.search-results').css('max-height', searchResultsHeight + 500);
  }

  // Folding search result details
  function attachLearnMoreTogglers() {
    $('.learn-more-link').unbind('click');
    $('.learn-more-link').click(function (e) {
      // Expand details of the business
      $(e.currentTarget).parents('.search-result').toggleClass('expanded');

      // Figure out the new 'max-height' needed for the container
      updateSearchResultsMaxHeight();
    });

    $('.close-button').unbind('click');

    $('.close-button').click(function (e) {
      $(e.currentTarget).parents('.search-result').toggleClass('expanded');
    });
  }
  attachLearnMoreTogglers();

  // Search for the right data
  $('#submitButton').click(function () {
    // Forget the subcategory section titles
    $('.subcategory-section-title').remove();

    // Remove any lingering search results from last time
    $('.search-result').remove();

    // Create 'My Selection' tags
    var selectionTags = '';

    if ($('[name="starting_or_existing"]').val() == "starting") {
      selectionTags += '<li data-name="starting_or_existing" data-value="starting">Starting <a>×</a></li>';
    } else if ($('[name="starting_or_existing"]').val() == "existing") {
      selectionTags += '<li data-name="starting_or_existing" data-value="existing">Existing <a>×</a></li>';
    }

    var industryName = $('[name="industry"]').val();
    if (industryName) {
      selectionTags += '<li data-name="industry">' + industryName + ' <a>×</a></li>';
    }

    var countyName = $('[name="business_county"]').val();
    if (countyName) {
      selectionTags += '<li data-name="business_county">' + countyName + ' <a>×</a></li>';
    }

    // Hide the search query drawer
    $('.search-query').css('max-height', '');
    $('.search-module, .search-query').removeClass('opened');
    $('.search-module, .search-query').animate({opacity: 0}, 600);
    setTimeout(function () {
      $('.search-module, .search-query').css('opacity', 1);
    }, 1250);

    // Expand everything
    $('.search-results').addClass('opened');
    $('.search-section-title').hide();
    $('.search-results-section-title').show();

    // Get rid of the 'no results' message if
    // there's one there from a previous search
    $('.search-results').removeClass('no-results');

    // Just a place to remember all the matches
    var matches = [];

    // Make something useful out of the form data
    var searchData = {
      "industry": $('[name="industry"]').val(),
      "county": $('[name="business_county"]').val()
    };

    $.each(businesses, function (i, business) {
      // Patterns
      var industryPattern = new RegExp(searchData.industry, "ig");
      var countyPattern = new RegExp(searchData.county, "ig");

      // Search for matches to all the form selections
      var matchingIndustry = (business.industry.search(industryPattern) != -1 || business.industry == "All" || searchData.industry == "All Industries");
      var matchingCounties = (business.countiesServed.search(countyPattern) != -1 || business.countiesServed == "All Counties" || searchData.county == "All Counties");

      if (matchingIndustry && matchingCounties) {
        matches.push(business);
      }
    });

    // Now that we have the matching businesses by
    // industry and county we'll further reduce
    // them by the subcategories (the checkboxes)
    var irrelevantMatches = [];

    // Grab all of the checked checkboxes
    var subcategoryCheckboxes = document.getElementsByName('subcategory');
    var checkedCheckboxes = [];
    for (var i=0; i < subcategoryCheckboxes.length; i++) {
     if (subcategoryCheckboxes[i].checked) {
      checkedCheckboxes.push(subcategoryCheckboxes[i]);
     }
    }

    // Sort through subcategory selections
    $.each(matches, function (_, match) {
      // Remove lingering 'isNeeded' from previous searches
      match.isNeeded = false;

      // Individually compare each checkbox
      // against the matches 'subcategory' value
      $.each(checkedCheckboxes, function (_, checkbox) {
        // Figure out whether the checkbox is for the current business match
        var subcategoryPattern = new RegExp(checkbox.value, "ig");

        // Search for a match to the 'value' attribute
        var checkboxDoesNotMatchSelection = (match.subcategory.search(subcategoryPattern) == -1);
        var checkboxMatchesSelection = (match.subcategory.search(subcategoryPattern) >= 0);

        // The checkbox doesn't match what the user wants to see
        if (checkboxDoesNotMatchSelection && match.isNeeded != true) {
          // Can't remove the mismatch here; Remove it after this loop
          if (irrelevantMatches.indexOf(match.id) == -1) {
            irrelevantMatches.push(match.id);
          }
        } else if (checkboxMatchesSelection) {
          // Remember that this checkbox has
          // already been compared and added
          match.isNeeded = true;

          // Remember the subcategory section title for
          // the match unless we already know it
          if (!match.subcategorySectionTitle) {
            match.subcategorySectionTitle = $(checkbox).parents('ul').find('h5').text();
          }

          // Remove it from the 'irrelevantMatches' if it's in there
          if (irrelevantMatches.indexOf(match.id) != -1) {
            irrelevantMatches.splice(irrelevantMatches.indexOf(match.id), 1);
          }
        }
      });
    });

    // Remove duplicates from 'irrelevantMatches'
    irrelevantMatches = irrelevantMatches.filter(function (value, index, array) {
      return array.indexOf(value) == index;
    });

    // Remove all the irrelevant matches
    $.each(irrelevantMatches, function (_, irrelevantMatchID) {
      $.each(matches, function (matchIndex, match) {
        if (match && match.id == irrelevantMatchID) {
          matches.splice(matchIndex, 1);
        }
      });
    });

    // Figure out the appropriate subcategory titles
    var subcategoryTitles = [];
    $.each($('.search-query ul'), function (listIndex, list) {
      $.each($(list).find('input[type="checkbox"]'), function (_, checkbox) {
        if (checkbox.checked) {
          subcategoryTitles.push($($('.search-query ul')[listIndex]).find('h5').text());
        }
      })
    });

    // Filter the duplicates
    subcategoryTitles = $.unique(subcategoryTitles);

    // Update the view now that we have results
    $.each(matches, function (matchIteration, match) {
      // Find the last match
      var lastMatch = matches[matchIteration - 1];

      // Prepare some data for the new node
      var contactLink = match.contactLink == "None" ? null : match.contactLink;

      // Build the search result node
      var matchResultNode = '';

      // Add the appropriate header for the subcategory if there is one
      if (match.subcategorySectionTitle) {
        // Show the subcategory section title if there's a previous
        // match and its' subcategory section title is different or
        // if there's no previous match (meaning this is the first)
        if (lastMatch == undefined || lastMatch.subcategorySectionTitle != match.subcategorySectionTitle) {
          matchResultNode += '<h5 class="subcategory-section-title">' + match.subcategorySectionTitle + '</h5>';
        }
      }

      matchResultNode += '<section class="search-result"> \
        <a class="business-logo" style="background-image: url(\'/images/business-logos/' + match.logoFilename + '\')"></a> \
        <div class="brief">';

      matchResultNode += '<h3><a href="' + match.site + '" target="_blank">' + match.organizationName + '</a></h3> \
        <hr> \
        <h4>' + match.subcategory + '</h4> \
        <p>';

      if (contactLink) {
        matchResultNode += '<a href="' + contactLink + '" target="_blank">Contact</a> | ';
      }

      matchResultNode += '<a href="' + match.site + '" target="_blank">Website</a></p> \
          <a class="learn-more-link">Learn More</a> \
        </div> <!-- .brief -->';

        if (match.servicesOffered) {
          matchResultNode += '<div class="details">';
        } else {
          matchResultNode += '<div class="details sans-business-services">';
        }

        matchResultNode += '<div class="left"> \
            <p>' + match.overview + '</p> \
          </div> <!-- .left -->';

      matchResultNode += '<div class="right"> \
        <a class="close-button">×</a>';

      if (match.servicesOffered) {
        matchResultNode += '<h5>Business Services Offered</h5> \
        <ul>';
        matchResultNode += match.servicesOffered;
        matchResultNode +=  '</ul>';
      }

      matchResultNode += '</div> <!-- .right --> \
        </div> <!-- .details --> \
      </section> <!-- .search-result -->';

      // Interpolate the 20 questions banner between search results
      $('.search-results').append(matchResultNode);
      attachLearnMoreTogglers();
    });

    // If there are no matches tell the user there are no matches
    if (matches == 0) {
      $('.search-results').addClass('no-results');

      // Append the 'Nothing Found' message if it's not already there
      if ($('.nothing-found').length == 0) {
        $('.search-results').append('<section class="nothing-found"> \
          <div class="left"> \
            <h4 class="no-results-message">Nothing found.</h4> \
            <p>Sorry, but nothing matched your search criteria for your particular industry. Please try again using “All Counties” as your location to expand results.</p> \
          </div> <!-- .left --> \
          <div class="right"> \
            <h6>Top category searches:</h6> \
            <ul> \
              <li>Training Programs / Workshops</li> \
              <li>Business Consulting Services</li> \
              <li>Incentives for Adding New Jobs</li> \
              <li>Energy Efficiency Incentives / Tips</li> \
            </ul> \
          </div> <!-- .right --> \
        </section> <!-- .nothing-found -->');
      }
    }

    // Update the 'max-height' so search results
    // aren't clipped to the 'max-height' set in CSS
    updateSearchResultsMaxHeight()

    // Scroll to the top of the 'search-results' section
    $('html, body').animate({
      scrollTop: $(".search-module-container").offset().top
    }, 750);
  });
});

$(window).on('beforeunload', function () {
  // Hide the pancake menu if it's already showing
  $('.mobile-menu').removeClass('opened');

  // Scroll
  $('body').removeClass('still');
});
