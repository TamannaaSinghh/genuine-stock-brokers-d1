// Centralized site content & configuration for Genuine Stock Brokers.
// Content sourced from genuinestockbrokers.com — preserved as-is.

export const company = {
  name: "Genuine Stock Brokers",
  legalName: "Genuine Stock Brokers Pvt. Ltd.",
  tagline: "Exceptional trading expertise and support",
  cin: "U67120GJ1996PTC119507",
  sebi: "INZ000243831",
  phone: "+91-79-40308992",
  fax: "+91-79-40308992",
  email: "genuine1996@gmail.com",
  hours: "9:00 AM – 5:00 PM",
  address: {
    line1: "B-601, Gopal Palace, Near Shiromani Tower",
    line2: "Nehru Nagar, Ambawadi, Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    pin: "380015",
    full: "B-601, Gopal Palace, Near Shiromani Tower, Nehru Nagar, Ahmedabad - 380015, Gujarat",
  },
  social: {
    twitter: "https://x.com/",
    linkedin:
      "https://www.linkedin.com/company/genuine-stock-brokers-pvt-ltd/about/",
  },
  loginUrl: "/login1",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Professional Trading", href: "/professional-trading" },
  { label: "Downloads", href: "/downloads" },
  { label: "Careers", href: "/careers" },
  { label: "Useful Links", href: "/useful-links" },
  { label: "Account Opening", href: "/account-opening-procedure" },
  { label: "Contact Us", href: "/contact-us" },
];

export const stats = [
  { value: "200+", label: "Professionals" },
  { value: "5", label: "Offices across India" },
  { value: "30+", label: "Years of trust" },
  { value: "3", label: "Exchange memberships" },
];

export const exchanges = [
  "National Stock Exchange of India (NSE)",
  "Bombay Stock Exchange (BSE)",
  "Ahmedabad Stock Exchange (ASE)",
];

// KYC documents from /downloads
export const kycDocuments = [
  {
    title: "Client Registration Form",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/kyc-genuine-account-opening-form-m5KLPGgejqfyKvyj.pdf",
  },
  {
    title: "Prudent Risk & Internal Control Policy",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/internal-control-review-of-business-compliance-dJo5l2ZRr5FWl1Bx.pdf",
  },
  {
    title: "Anti Money Laundering Policy",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/anti-money-laundering-policy-mxBMzNOB17t01gGP.pdf",
  },
  {
    title: "Saral Account Opening Form",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/saral-account-opening-form-YNqPDe7269SRn2nB.pdf",
  },
  {
    title: "Policy for Inactive Client",
    href: "https://assets.zyrosite.com/mxBME7QjQ6So46Po/policy-for-inactive-account-dJo5lDLXPbsRbBwJ.pdf",
  },
];

// Policies from /downloads
export const policyDocuments = [
  "Cyber Security and Resilience Policy 2023",
  "SOP for Handling Cyber Incidents",
  "Password Policy",
  "User Management & Access Control Policy",
  "Backup & Restoration Policy",
  "Information Security & Network Security Policy",
  "Application Software Policy",
  "Change Management & Patch Management Policy",
  "Business Continuity & Disaster Recovery Plan",
  "Audit Trail Policy",
  "Policy to Handle Technical Glitch",
  "Procedures for Reporting Unusual Activities",
  "Denial of Service DOS-DDOS Attack Policy",
  "Remote Access Policy",
  "Capacity Management Plan",
  "Internet Access and Usage of Social Media Policy",
  "Storage Media Disposal Policy",
  "Incident Response Plan",
  "Day Begin & Day End Process",
  "BYOD Policy",
  "Data Protection, Retention & Disposal Policy",
  "Policy on Data Breach",
];

export const vernacularLinks = [
  {
    title: "BSE Registration Documents (Vernacular)",
    href: "https://www.bseindia.com/static/investors/client_regislanguages.aspx?expandable=3",
  },
  {
    title: "NSE Registration Documents (Vernacular)",
    href: "https://www.nseindia.com/trade/members-client-registration-documents",
  },
];

// Useful links (regulatory / investor resources) from /useful-links and homepage
export const usefulLinks = [
  {
    title: "Report Unsolicited Messages",
    desc: "NSE portal to report unsolicited investment messages.",
    href: "https://www.nseindia.com/regulations/unsolicited-messages-report",
  },
  {
    title: "Link Aadhaar with PAN",
    desc: "Income Tax e-filing portal for PAN–Aadhaar linkage.",
    href: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar",
  },
  {
    title: "Investor Education (BSE IPF)",
    desc: "BSE Investor Protection Fund education resources.",
    href: "https://www.bseipf.com/investors_education.html",
  },
  {
    title: "SmartODR",
    desc: "Online Dispute Resolution portal for the securities market.",
    href: "https://smartodr.in/",
  },
  {
    title: "Client Collateral (NSE Clearing)",
    desc: "View client collateral details at NSE Clearing.",
    href: "https://investorhelpline.nseclearing.in/ClientCollateral/welcomeCLUser",
  },
  {
    title: "SolvoSky Technology",
    desc: "Our technology and development partner.",
    href: "https://www.solvosky.com/",
  },
];

// Regulatory / investor PDFs referenced on the homepage
export const investorDocs = [
  { title: "Investor Charter — Stock Broker", href: "#" },
  { title: "Genuine Bank Account Details", href: "#" },
  { title: "Segregation and Monitoring of Collateral", href: "#" },
  { title: "Advisory to Investors", href: "#" },
];
