export interface FAQItem {
  question: string;
  answer: string;
}

export interface LanguageOption {
  label: string;
  flag: string;
  buttonText: string;
  checkoutUrl?: string;
}

export interface Course {
  id: string;
  slug: string;
  productCode?: string;
  title: string;
  headline: string;
  heroTagline?: string;
  category: "Continuing Education" | "Licensing Education" | "Professional Development" | "Brokers";
  hours: string;
  price: string;
  originalPrice?: string;
  isLive: boolean;
  checkoutUrl?: string;
  badge?: string;
  dbprApproved?: boolean;
  accessPeriod: string;
  language: string;
  description: string;
  whoIsThisFor: string[];
  whatYouWillLearn: string[];
  features: string[];
  trustBar?: string[];
  languageCheckouts?: LanguageOption[];
  whichCourseTable?: {
    situation: string;
    requiredEducation: string;
  }[];
  renewalReview?: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    whyCreated: string[];
  };
  renewalJourney?: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  whyCEMatters?: string[];
  whyChooseUpgraded?: {
    title: string;
    description: string;
  }[];
  howItWorks?: {
    title: string;
    steps: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  brokerageNotice?: {
    title: string;
    paragraphs: string[];
  };
  licensingNotice?: {
    schoolName: string;
    licenseNo: string;
    paragraphs: string[];
  };
  faqs: FAQItem[];
}

export const COURSES: Course[] = [
  {
    id: "fl-14hr-ce",
    slug: "14-hour-florida-continuing-education",
    productCode: "PRODUCT 01",
    title: "Florida 14-Hour Continuing Education",
    headline: "Complete your Florida Continuing Education requirements through an engaging online learning experience designed for licensed real estate professionals.",
    heroTagline: "Renew Your License With Confidence.",
    category: "Licensing Education",
    hours: "14 Hours",
    price: "$97 USD",
    isLive: true,
    checkoutUrl: "https://link.fastpaydirect.com/payment-link/6a5fde69a655fa0b802a5767",
    badge: "Florida State-Approved",
    dbprApproved: true,
    accessPeriod: "One Year Access",
    language: "Available in English & Spanish",
    description:
      "Required Continuing Education for Florida Sales Associates and Brokers after their first renewal.\n\nYour Florida real estate license is renewed every two years. Renewing it shouldn't feel confusing.\n\nAt Upgraded, we've redesigned Continuing Education into a modern online learning experience that helps you confidently meet Florida's renewal requirements while continuing to grow as a real estate professional.\n\nWhether you're renewing your license or refreshing your knowledge, our goal is simple: Help you stay informed, stay compliant, and stay ahead in a changing industry.",
    whoIsThisFor: [
      "Florida Real Estate Sales Associates after their first license renewal.",
      "Active Florida Real Estate Brokers renewing their 2-year license cycle.",
      "Licensed professionals seeking DBPR-approved continuing education.",
      "Real estate agents who prefer self-paced, flexible online learning."
    ],
    whatYouWillLearn: [
      "Florida Core Law Updates & Statutory Requirements",
      "Business Ethics and Professional Standards of Practice",
      "Specialty Real Estate Topics & Risk Management",
      "DBPR Compliance and License Maintenance Best Practices"
    ],
    features: [
      "100% Online & 24/7 Self-Paced Access",
      "Direct Electronic Completion Reporting to Florida DBPR",
      "Available in English & Spanish",
      "Includes 1 Full Year of Course Access"
    ],
    trustBar: [
      "Florida State-Approved Continuing Education",
      "Immediate Online Access",
      "Course Completion Reported to the DBPR",
      "Available in English & Spanish"
    ],
    languageCheckouts: [
      {
        label: "English",
        flag: "🇺🇸",
        buttonText: "Enroll in English",
        checkoutUrl: "https://link.fastpaydirect.com/payment-link/6a5fde69a655fa0b802a5767"
      },
      {
        label: "Español",
        flag: "🇪🇸",
        buttonText: "Inscribirse en Español",
        checkoutUrl: "https://link.fastpaydirect.com/payment-link/6a5fde69a655fa0b802a5767"
      }
    ],
    whichCourseTable: [
      {
        situation: "I'm working toward my Florida Sales Associate License",
        requiredEducation: "63-Hour Pre-License (Coming Soon)"
      },
      {
        situation: "I'm renewing my Sales Associate license for the first time",
        requiredEducation: "45-Hour Post-License"
      },
      {
        situation: "I've already completed my first renewal and need to keep my license active",
        requiredEducation: "14-Hour Continuing Education"
      },
      {
        situation: "I'm renewing my active Florida Broker license",
        requiredEducation: "14-Hour Continuing Education"
      }
    ],
    renewalReview: {
      title: "THE UPGRADED RENEWAL REVIEW™",
      subtitle: "Personalized Renewal Guidance",
      paragraphs: [
        "One of the biggest sources of confusion for Florida real estate professionals isn't completing the course. It's knowing which course they actually need. That's why we created The Upgraded Renewal Review™.",
        "Before you enroll, our Student Success Team will review the information you provide, help determine which education requirement most likely applies to your current licensing status, and guide you through your next steps.",
        "From selecting the appropriate course to understanding the renewal process with the Florida Department of Business and Professional Regulation (DBPR), we're here to make the process simple, clear, and stress-free.",
        "Because education should come with guidance—not guesswork."
      ],
      whyCreated: [
        "Florida license renewal can sometimes feel confusing, especially when you're unsure which education requirement applies to your current license.",
        "That's why we created The Upgraded Renewal Review™.",
        "Our goal is simple: Help you make informed decisions before you enroll, understand your renewal requirements, and move through the process with confidence.",
        "Because education should come with guidance—not guesswork."
      ]
    },
    renewalJourney: {
      title: "YOUR RENEWAL JOURNEY STARTS HERE",
      subtitle: "Completing your Continuing Education is only one step in the license renewal process. At Upgraded, we believe education should come with guidance.",
      items: [
        {
          title: "Immediate Course Access",
          description: "Begin learning immediately after completing your enrollment. Your course is available online 24/7, allowing you to learn whenever it fits your schedule."
        },
        {
          title: "One Year of Access",
          description: "Enjoy one year of access to your selected course from the date of enrollment. Review lessons and course materials anytime throughout your access period."
        },
        {
          title: "Learn in Your Preferred Language",
          description: "Choose the learning experience that best fits your needs (🇺🇸 English or 🇪🇸 Español). Both versions include the same Florida state-approved curriculum and satisfy the same Continuing Education requirement."
        },
        {
          title: "Learn Anywhere",
          description: "Access your course from your desktop, tablet, or smartphone and continue learning wherever life takes you. Your progress is automatically saved."
        },
        {
          title: "Course Completion Reporting",
          description: "Upon successfully completing all course requirements, Upgraded Real Estate School electronically reports your course completion to the Florida Department of Business and Professional Regulation (DBPR) in accordance with Florida requirements."
        },
        {
          title: "Guidance Through the Renewal Process",
          description: "Our commitment doesn't end when you complete your course. Our Student Success Team is available to guide you through the remainder of the renewal process required by the DBPR."
        },
        {
          title: "Student Success Team",
          description: "From helping you select the right course to answering questions after completion and guiding you through the renewal process, our Student Success Team is here to support you every step of the way."
        }
      ]
    },
    whyCEMatters: [
      "Continuing Education is more than a license renewal requirement. It's an opportunity to stay informed, strengthen your professional knowledge, and continue serving your customers with confidence.",
      "Real estate laws evolve. Technology changes. Consumer expectations continue to grow. Continuing your education helps you remain current, informed, and prepared for today's real estate industry.",
      "At Upgraded, we believe great professionals never stop learning."
    ],
    whyChooseUpgraded: [
      {
        title: "Modern Learning Experience",
        description: "Flexible online education designed for today's real estate professionals."
      },
      {
        title: "Guidance Beyond the Course",
        description: "Support that continues beyond course completion."
      },
      {
        title: "Student Success Team",
        description: "Real people available to help you when you need it."
      },
      {
        title: "Education That Evolves With You",
        description: "Learning designed for every stage of your career."
      }
    ],
    licensingNotice: {
      schoolName: "Upgraded Real Estate School",
      licenseNo: "ZH1002624",
      paragraphs: [
        "Upgraded Real Estate School is a Florida Licensed Real Estate School (License #ZH1002624). This course is approved to satisfy Florida's 14-Hour Continuing Education requirement for eligible Florida real estate licensees.",
        "Upon successful completion of all course requirements, Upgraded Real Estate School electronically reports course completion to the Florida Department of Business and Professional Regulation (DBPR) in accordance with Florida requirements for approved education providers.",
        "Completion of this course is one component of the Florida real estate license renewal process. Licensees remain responsible for satisfying all applicable renewal requirements established by the DBPR, including submitting their renewal application, paying any applicable renewal fees, and meeting all statutory renewal deadlines.",
        "The Upgraded Renewal Review™, Student Success Team, renewal reminders, and other educational support services are provided as complimentary resources to assist students throughout the renewal process. These services are intended for informational and educational purposes only and do not constitute legal advice or regulatory determinations.",
        "While Upgraded is committed to helping students navigate the renewal process with confidence, final determinations regarding license status, eligibility, renewal requirements, and renewal approval are made exclusively by the Florida Department of Business and Professional Regulation (DBPR)."
      ]
    },
    faqs: [
      {
        question: "How are my 14 hours reported to the Florida DBPR?",
        answer: "Upon completing all modules and requirements, Upgraded Real Estate School electronically reports your course completion directly to the Florida DBPR in accordance with state requirements for approved education providers."
      },
      {
        question: "Is there a timed proctored exam for 14-hour CE?",
        answer: "No! Florida 14-Hour Continuing Education does not require a proctored exam. You can progress through the reading modules and quizzes at your own pace."
      },
      {
        question: "How long do I have access to the course?",
        answer: "You receive 1 full year (365 days) of access from the date of purchase, giving you ample time to complete your coursework and review materials whenever needed."
      },
      {
        question: "What languages are available?",
        answer: "This course is available in both English and Español. Both options fulfill the same Florida state-approved 14-Hour Continuing Education requirements."
      }
    ]
  },
  {
    id: "fl-45hr-postlicensing",
    slug: "45-hour-florida-post-licensing",
    productCode: "PRODUCT 02",
    title: "Florida 45-Hour Post-License Course",
    headline: "State-required Post-License education designed for Florida Sales Associates completing their first license renewal.",
    heroTagline: "Your First Renewal Shapes Everything That Comes Next.",
    category: "Licensing Education",
    hours: "45 Hours",
    price: "$197 USD",
    isLive: true,
    checkoutUrl: "https://link.fastpaydirect.com/payment-link/6a5fde69a655fa0b802a5767",
    badge: "Florida State-Approved",
    dbprApproved: true,
    accessPeriod: "One Year Access",
    language: "Available in English & Spanish",
    description:
      "Your first license renewal is one of the most important milestones in your real estate career. Successfully completing your Post-License education is required to maintain your Florida Sales Associate license after your first renewal.\n\nMore importantly, it's an opportunity to strengthen your knowledge, build confidence, and develop the professional skills that support long-term success in your real estate career.\n\nAt Upgraded, we've transformed Post-License education into a modern learning experience designed to help you successfully complete this important milestone while preparing you for long-term success.\n\nBecause your first renewal should do more than protect your license—it should strengthen your future.",
    whoIsThisFor: [
      "Florida Sales Associates completing their first license renewal.",
      "Newly licensed agents needing 45 hours of state-required post-license education.",
      "Real estate professionals seeking DBPR-approved 45-Hour curriculum.",
      "Agents looking for a 100% self-paced, flexible online learning experience."
    ],
    whatYouWillLearn: [
      "Florida Real Estate Law: Deeper understanding of laws, rules, and statutory regulations governing real estate practice.",
      "Contracts & Transactions: Essential components of residential transactions from listing agreements through closing.",
      "Ethics & Professional Responsibility: Real-world scenarios reinforcing ethical decision-making and consumer trust.",
      "Finance & Investment Fundamentals: Mortgages, financing options, investment concepts, and market valuation principles.",
      "Working with Buyers & Sellers: Communication and transaction skills needed to represent clients effectively.",
      "Risk Management & Business Development: Practical strategies to reduce liability and build a long-term real estate career."
    ],
    features: [
      "Florida State-Approved 45-Hour Post-License Education",
      "100% Online & 24/7 Self-Paced Access with 1 Year Access",
      "Electronic Completion Reporting to the Florida DBPR",
      "Available in English & Spanish"
    ],
    trustBar: [
      "Florida State-Approved 45-Hour Post-License Course",
      "Immediate Online Access",
      "Course Completion Reported to the DBPR",
      "Available in English & Spanish"
    ],
    languageCheckouts: [
      {
        label: "English",
        flag: "🇺🇸",
        buttonText: "Enroll in English",
        checkoutUrl: "https://link.fastpaydirect.com/payment-link/6a5fde69a655fa0b802a5767"
      },
      {
        label: "Español",
        flag: "🇪🇸",
        buttonText: "Inscribirse en Español",
        checkoutUrl: "https://link.fastpaydirect.com/payment-link/6a5fde69a655fa0b802a5767"
      }
    ],
    whichCourseTable: [
      {
        situation: "I'm working toward my Florida Sales Associate License",
        requiredEducation: "63-Hour Pre-License (Coming Soon)"
      },
      {
        situation: "I'm renewing my Sales Associate license for the first time",
        requiredEducation: "45-Hour Post-License ✅"
      },
      {
        situation: "I've already completed my first renewal",
        requiredEducation: "14-Hour Continuing Education"
      },
      {
        situation: "I'm renewing my Florida Broker license",
        requiredEducation: "14-Hour Continuing Education"
      }
    ],
    renewalReview: {
      title: "THE UPGRADED RENEWAL REVIEW™",
      subtitle: "Complimentary Personalized Renewal Guidance",
      paragraphs: [
        "One of the most common questions we receive is: 'Am I taking the right course?' That's why we created The Upgraded Renewal Review™.",
        "Before you enroll, our Student Success Team will review the information you provide and help you understand which education requirement most likely applies to your current licensing status.",
        "We'll also answer your questions about the renewal process and help you move forward with confidence.",
        "Because choosing the right course shouldn't be confusing."
      ],
      whyCreated: [
        "Florida requires newly licensed Sales Associates to complete Post-License education before their first renewal. We believe this milestone deserves more than simply meeting a requirement.",
        "Your first renewal represents the transition from becoming licensed to becoming a successful real estate professional.",
        "It's an opportunity to strengthen your legal knowledge, improve your professional judgment, better understand client responsibilities, and build a stronger foundation for long-term success.",
        "That's why we designed this course to deliver more than information—a learning experience that prepares you to build your career with confidence."
      ]
    },
    renewalJourney: {
      title: "EVERYTHING YOU NEED FOR A SUCCESSFUL FIRST RENEWAL",
      subtitle: "Your first renewal is too important to leave to chance. When you enroll with Upgraded, you're choosing a learning experience designed to support you throughout your entire renewal journey.",
      items: [
        {
          title: "Florida State-Approved Post-License Education",
          description: "Complete your required education through a modern online learning experience designed specifically for Florida Sales Associates completing their first renewal."
        },
        {
          title: "The Upgraded Renewal Review™",
          description: "Receive personalized guidance before enrolling if you're unsure which education requirement applies to your current licensing status."
        },
        {
          title: "The Upgraded Renewal Reminder™",
          description: "Stay informed about important milestones, recommended timelines, and next steps in your license renewal process to avoid unnecessary stress."
        },
        {
          title: "Guidance Beyond the Course",
          description: "Our Student Success Team is available to help you understand the remaining steps required to complete your license renewal through the DBPR."
        },
        {
          title: "Self-Paced & Learn Anywhere",
          description: "Access your course 24/7 from desktop, tablet, or smartphone. Progress is automatically saved so you can learn whenever it fits your schedule."
        },
        {
          title: "Course Completion Reporting",
          description: "Upon successfully completing all course requirements, Upgraded Real Estate School electronically reports your course completion to the Florida DBPR."
        }
      ]
    },
    howItWorks: {
      title: "Five Simple Steps to Your First License Renewal",
      steps: [
        {
          step: "Step 1",
          title: "Enroll Online",
          description: "Choose your preferred language and complete your enrollment securely. You'll receive immediate access to your course after registration."
        },
        {
          step: "Step 2",
          title: "Complete Your Course",
          description: "Study at your own pace with 24/7 online access. Your progress is automatically saved."
        },
        {
          step: "Step 3",
          title: "Successfully Complete the Course",
          description: "Complete all required lessons and assessments according to the course requirements."
        },
        {
          step: "Step 4",
          title: "We Report Your Course Completion",
          description: "Upon successful completion, Upgraded Real Estate School electronically reports your course completion to the Florida DBPR."
        },
        {
          step: "Step 5",
          title: "Complete Your License Renewal",
          description: "Once your course completion has been reported, complete any remaining renewal requirements directly with the DBPR."
        }
      ]
    },
    whyChooseUpgraded: [
      {
        title: "Self-Paced Learning",
        description: "Complete the course on your own schedule with 24/7 online access."
      },
      {
        title: "Learn Anywhere",
        description: "Access from desktop, tablet, or smartphone with automatic progress saving."
      },
      {
        title: "One-Year Course Access",
        description: "Enjoy 1 full year of access to review lessons whenever needed."
      },
      {
        title: "Learn in Preferred Language",
        description: "Available in English and Spanish with Florida state-approved curriculum."
      }
    ],
    brokerageNotice: {
      title: "ALREADY HAVE ACCESS?",
      paragraphs: [
        "Certain brokerages may provide access to select Upgraded educational programs as part of their professional development benefits.",
        "If you're an active Avanti Way agent, please verify your course access before purchasing this course.",
        "If you have questions regarding your eligibility or course access, please contact your office or our Student Success Team."
      ]
    },
    licensingNotice: {
      schoolName: "Upgraded Real Estate School",
      licenseNo: "ZH1002624",
      paragraphs: [
        "Upgraded Real Estate School is a Florida Licensed Real Estate School (License #ZH1002624). This course is approved to satisfy Florida's 45-Hour Post-License education requirement for eligible Florida Sales Associates completing their first license renewal.",
        "Upon successful completion of all course requirements, Upgraded Real Estate School electronically reports course completion to the Florida Department of Business and Professional Regulation (DBPR) in accordance with Florida requirements for approved education providers.",
        "Successful completion of the 45-Hour Post-License Course is one component of the Florida first license renewal process. Students remain responsible for satisfying all applicable renewal requirements established by the DBPR, including submitting any required renewal application, paying applicable renewal fees, and meeting all statutory renewal deadlines.",
        "Under Florida law, failure to successfully complete the required Post-License education before the first renewal deadline may result in a Sales Associate's license becoming null and void, requiring the individual to satisfy Florida's applicable licensing requirements before becoming licensed again.",
        "The Upgraded Renewal Review™, Upgraded Renewal Reminder™, Student Success Team, and other educational support services are provided as complimentary resources to assist students throughout the renewal process. These services are intended for informational and educational purposes only and do not constitute legal advice or official regulatory determinations.",
        "While Upgraded is committed to helping students successfully navigate the renewal process, final determinations regarding license status, eligibility, renewal requirements, and license renewal approval are made exclusively by the Florida Department of Business and Professional Regulation (DBPR)."
      ]
    },
    faqs: [
      {
        question: "Who is required to take the 45-Hour Post-License course?",
        answer: "This course is required for Florida Sales Associates completing their first license renewal. If you've already completed your first renewal, you'll generally complete the 14-Hour Continuing Education course for future renewals."
      },
      {
        question: "What happens if I don't complete the course before my first renewal deadline?",
        answer: "Florida requires Sales Associates to successfully complete the 45-Hour Post-License course before their first renewal. Failure to meet this requirement may result in your license becoming null and void, requiring you to satisfy Florida's licensing requirements again before becoming licensed as a Sales Associate."
      },
      {
        question: "Is this course approved by the State of Florida?",
        answer: "Yes. This course is offered by Upgraded Real Estate School, a Florida Licensed Real Estate School (License #ZH1002624), and is approved to satisfy Florida's 45-Hour Post-License education requirement."
      },
      {
        question: "When will I receive access to my course?",
        answer: "Immediately after your enrollment is completed."
      },
      {
        question: "How long will I have access?",
        answer: "Your enrollment includes one year of access to your selected language version of the course."
      },
      {
        question: "Can I complete the course at my own pace?",
        answer: "Yes. The course is completely self-paced, allowing you to study whenever it fits your schedule."
      },
      {
        question: "Can I switch between English and Spanish?",
        answer: "Each enrollment includes access to one language version of the course based on the language selected during registration. If you need to change your language selection, please contact our Student Success Team."
      },
      {
        question: "Will Upgraded report my course completion?",
        answer: "Yes. Upon successfully completing all course requirements, Upgraded Real Estate School electronically reports your course completion to the DBPR as required for approved education providers."
      },
      {
        question: "Does completing this course automatically renew my license?",
        answer: "No. Completing your Post-License course is an important part of the renewal process, but you must also complete any remaining renewal requirements established by the DBPR, including submitting your renewal application and paying any applicable renewal fees."
      },
      {
        question: "What if I'm not sure this is the right course?",
        answer: "Request The Upgraded Renewal Review™ before enrolling. We'll help you determine which education requirement most likely applies to your current licensing status."
      }
    ]
  },
  {
    id: "fl-63hr-prelicensing",
    slug: "63-hour-florida-pre-licensing",
    productCode: "PRODUCT 03",
    title: "Florida 63-Hour Pre-License Course",
    headline: "State-required pre-license education designed for future Florida real estate professionals pursuing a Florida Sales Associate license.",
    heroTagline: "Your Next Chapter Starts Here.",
    category: "Licensing Education",
    hours: "63 Hours",
    price: "Coming Soon",
    isLive: false,
    badge: "Coming Soon",
    dbprApproved: true,
    accessPeriod: "Flexible Access",
    language: "Available in English & Spanish",
    description:
      "Whether you're beginning your real estate career for the first time or returning to the industry with a fresh start, this course is designed to help you build a strong foundation and move forward with confidence.\n\nFor some students, this is the beginning of a brand-new career. For others, it's the opportunity to return stronger, better prepared, and with a new perspective.\n\nNo matter where your journey begins, we're here to help you take the next step.\n\nBecause every successful real estate career deserves a strong beginning—even if it's a second beginning.",
    whoIsThisFor: [
      "Future Florida real estate professionals pursuing a Sales Associate license for the first time.",
      "Individuals whose previous Sales Associate license became null and void and need to complete pre-license education again.",
      "Career changers and ambitious professionals looking for a flexible, self-paced online pre-license course.",
      "Learners seeking state-required 63-hour curriculum in English or Spanish."
    ],
    whatYouWillLearn: [
      "Florida Real Estate License Law: Clear understanding of laws, FREC rules, DBPR regulations, and licensee responsibilities.",
      "Real Estate Principles & Practice: Property ownership, rights, estates, land use, valuation, agency relationships, and disclosures.",
      "Contracts & Transaction Fundamentals: Essential contract concepts, legal requirements, disclosures, and buyer/seller protections.",
      "Real Estate Finance: Mortgages, lending practices, settlement concepts, and financial principles influencing today's market.",
      "Property Ownership & Land Use: Legal descriptions, encumbrances, liens, zoning concepts, and ownership rights.",
      "Real Estate Mathematics: Solve math calculations commonly associated with real estate practice and licensing exam prep.",
      "Ethics & Professional Responsibility: Fair housing principles, consumer protection, ethical decision-making, and fiduciary duties."
    ],
    features: [
      "Florida State-Approved 63-Hour Pre-License Course",
      "Includes Exam Practice Simulator & AI Study Assistant",
      "Business Planning Workshop & Upgraded Resource Library™",
      "Available in English & Spanish with 24/7 Self-Paced Access"
    ],
    trustBar: [
      "Florida Licensed Real Estate School",
      "Florida 63-Hour Pre-License Course",
      "Available in English & Spanish",
      "Modern Online Learning Experience"
    ],
    languageCheckouts: [
      {
        label: "English",
        flag: "🇺🇸",
        buttonText: "Enroll in English"
      },
      {
        label: "Español",
        flag: "🇪🇸",
        buttonText: "Inscribirse en Español"
      }
    ],
    whichCourseTable: [
      {
        situation: "I'm working toward my Florida Sales Associate License",
        requiredEducation: "63-Hour Pre-License ✅"
      },
      {
        situation: "I'm renewing my Sales Associate license for the first time",
        requiredEducation: "45-Hour Post-License"
      },
      {
        situation: "I've already completed my first renewal",
        requiredEducation: "14-Hour Continuing Education"
      },
      {
        situation: "I'm renewing my Florida Broker license",
        requiredEducation: "14-Hour Continuing Education"
      }
    ],
    renewalReview: {
      title: "MORE THAN A PRE-LICENSE COURSE",
      subtitle: "Build More Than a License.",
      paragraphs: [
        "Florida requires 63 hours of pre-license education before you can pursue a Florida Sales Associate license. We believe your education should prepare you for much more than meeting a licensing requirement.",
        "A successful real estate career is built on knowledge, confidence, professionalism, and continuous learning.",
        "That's why we're creating a learning experience designed to help you understand the industry, prepare for the licensing process, and begin your career with a strong foundation.",
        "Because earning your license isn't the finish line. It's the beginning of everything that comes next."
      ],
      whyCreated: [
        "Less Memorization. More Understanding.",
        "Less Information. More Clarity.",
        "Less Obligation. More Opportunity.",
        "Because great education doesn't end with passing an exam. It begins with preparing students for everything that comes after it."
      ]
    },
    renewalJourney: {
      title: "EVERYTHING YOU NEED TO BEGIN WITH CONFIDENCE",
      subtitle: "Your enrollment includes much more than Florida's required pre-license education. We've designed a complete learning experience to help you prepare for the licensing process while building the foundation for a successful real estate career.",
      items: [
        {
          title: "Florida 63-Hour Pre-License Course",
          description: "Complete the state-required education necessary to pursue a Florida Sales Associate license with comprehensive coverage of law, contracts, finance, and ethics."
        },
        {
          title: "Florida Real Estate Exam Practice Simulator",
          description: "Prepare with realistic practice questions designed to reinforce key concepts and familiarize you with the style and structure of the Florida licensing exam."
        },
        {
          title: "AI Study Assistant & Q&A",
          description: "Receive additional educational support while studying. Our AI-powered assistant helps explain concepts, clarify terminology, and simplify complex topics."
        },
        {
          title: "Business Planning Workshop",
          description: "Introduces practical strategies to help you establish goals, build productive habits, and begin developing your real estate business with purpose and direction."
        },
        {
          title: "Upgraded Resource Library™",
          description: "Access a growing collection of business templates, planning worksheets, checklists, and downloadable reference materials."
        },
        {
          title: "Learn in Your Preferred Language",
          description: "Available in English 🇺🇸 and Spanish 🇪🇸. Both language versions are designed to satisfy the same Florida pre-license education requirement."
        }
      ]
    },
    howItWorks: {
      title: "A Simple Path to Getting Started",
      steps: [
        {
          step: "Step 1",
          title: "Stay Informed",
          description: "Our Florida 63-Hour Pre-License Course is currently in development. Complete the notification form and we'll let you know as soon as enrollment becomes available."
        },
        {
          step: "Step 2",
          title: "Enroll Online",
          description: "Once enrollment opens, choose your preferred language and complete your enrollment securely online with immediate access."
        },
        {
          step: "Step 3",
          title: "Complete Your Course",
          description: "Study at your own pace while building the knowledge required to pursue your Florida Sales Associate license."
        },
        {
          step: "Step 4",
          title: "Prepare for the Licensing Exam",
          description: "Reinforce your knowledge using the included Exam Practice Simulator, AI Study Assistant, and educational resources."
        },
        {
          step: "Step 5",
          title: "Continue Your Licensing Journey",
          description: "After completing your education, continue following the licensing process established by the DBPR, including examination and licensing requirements."
        }
      ]
    },
    whyChooseUpgraded: [
      {
        title: "Modern Learning Experience",
        description: "Flexible online education designed for today's real estate professionals."
      },
      {
        title: "Guidance Beyond the Course",
        description: "Support that continues beyond course completion."
      },
      {
        title: "Student Success Team",
        description: "Real people providing real guidance throughout your journey."
      },
      {
        title: "Education That Evolves With You",
        description: "Learning designed for every stage of your real estate career."
      }
    ],
    licensingNotice: {
      schoolName: "Upgraded Real Estate School",
      licenseNo: "ZH1002624",
      paragraphs: [
        "Upgraded Real Estate School is a Florida Licensed Real Estate School (License #ZH1002624). The Florida 63-Hour Pre-License Course is currently in development and is not yet available for enrollment.",
        "Course availability, approval status, and launch timing will be announced once all applicable requirements have been satisfied.",
        "Completion of a Florida pre-license course is only one step in the Florida Sales Associate licensing process. Prospective students must satisfy all licensing requirements established by the Florida Department of Business and Professional Regulation (DBPR), including any applicable application, examination, fingerprinting/background check, and statutory eligibility requirements before becoming licensed.",
        "Supplemental educational resources, including AI learning tools, practice simulators, workshops, templates, downloadable resources, and other educational materials, are designed to support learning and exam preparation. These resources are supplemental in nature and do not guarantee examination results, licensure, employment, income, or business success."
      ]
    },
    faqs: [
      {
        question: "Who is this course designed for?",
        answer: "This course is designed for individuals pursuing a Florida Sales Associate license. It also applies to individuals whose previous Florida Sales Associate license became null and void and who are required to complete Florida's pre-license education requirements again before becoming eligible for licensure."
      },
      {
        question: "Is this course currently available?",
        answer: "Not yet. Our Florida 63-Hour Pre-License Course is currently in development. Complete the notification form on this page and we'll notify you as soon as enrollment becomes available."
      },
      {
        question: "Will the course be available in English and Spanish?",
        answer: "Yes. The course is being developed in both English and Spanish. Students will select one language version during enrollment."
      },
      {
        question: "Does this course prepare me for the Florida licensing exam?",
        answer: "Yes. The course is designed to provide required pre-license education and includes supplemental learning resources, such as our Florida Real Estate Exam Practice Simulator, to help reinforce key concepts and support your preparation."
      },
      {
        question: "Does completing this course automatically qualify me for a Florida real estate license?",
        answer: "No. Successfully completing the 63-Hour Pre-License Course is one step in the Florida licensing process. Prospective licensees must also satisfy all applicable licensing requirements established by the DBPR, including application approval, fingerprinting/background check requirements, passing the state licensing examination, and any other applicable statutory requirements."
      },
      {
        question: "Can I complete the course at my own pace?",
        answer: "Yes. The course is designed to be fully online and self-paced, allowing you to study when it's most convenient for your schedule."
      },
      {
        question: "Will I receive business resources in addition to the course?",
        answer: "Yes. Our goal is to provide a complete learning experience by including practical educational resources designed to help you begin your career with greater confidence."
      },
      {
        question: "How long will I have access to the course?",
        answer: "Course access details will be announced before enrollment opens."
      },
      {
        question: "How will I know when enrollment becomes available?",
        answer: "Complete the notification form on this page. We'll notify you as soon as enrollment opens and keep you informed about important updates regarding the course launch."
      },
      {
        question: "Who can I contact if I have questions?",
        answer: "Our Student Success Team is available to answer your questions before, during, and after your educational journey."
      }
    ]
  },
  {
    id: "fl-60hr-broker-postlicensing",
    slug: "60-hour-florida-broker-post-licensing",
    productCode: "PRODUCT 04",
    title: "Florida 60-Hour Broker Post-License",
    headline: "State-required Post-License education for Florida Brokers completing their first license renewal.",
    heroTagline: "Lead With Confidence. Renew With Confidence.",
    category: "Licensing Education",
    hours: "60 Hours",
    price: "Coming Soon",
    isLive: false,
    badge: "Coming Soon",
    dbprApproved: true,
    accessPeriod: "Flexible Access",
    language: "Available in English & Spanish",
    description:
      "Successfully completing your Broker Post-License education is required to maintain your Florida Broker license after your first renewal.\n\nFlorida requires 60 hours of Broker Post-License education, consisting of two required 30-hour courses:\n✔ 30-Hour Broker Investment\n✔ 30-Hour Broker Management\n\nAt Upgraded, we're developing a modern learning experience designed to help Brokers complete both required courses while strengthening the knowledge and leadership skills that support long-term professional success.",
    whoIsThisFor: [
      "Florida Brokers completing their first license renewal.",
      "Newly licensed Brokers required to complete 60 hours of approved Post-License education.",
      "Brokers seeking state-required 30-Hour Broker Investment and 30-Hour Broker Management coursework.",
      "Real estate leaders looking to strengthen investment analysis, management, and risk mitigation skills."
    ],
    whatYouWillLearn: [
      "30-Hour Broker Investment: Explore investment principles, financial analysis, investment strategies, valuation concepts, and practical decision-making for today's market.",
      "30-Hour Broker Management: Develop a practical understanding of brokerage management, business operations, leadership responsibilities, legal compliance, risk management, and professional standards.",
      "Leadership & Brokerage Operations: Practical skills to lead, manage, and scale a compliant real estate practice.",
      "Legal Compliance & Risk Reduction: Prevent liabilities, handle escrow properly, and maintain DBPR regulatory standards."
    ],
    features: [
      "Complete 60-Hour Broker Post-License Program (Investment + Management)",
      "30-Hour Broker Investment & 30-Hour Broker Management Included",
      "Immediate Online Access & 24/7 Self-Paced Learning",
      "Downloadable Resources & Mobile/Desktop Access"
    ],
    trustBar: [
      "Florida Licensed Real Estate School",
      "60-Hour Broker Post-License Program",
      "Includes Broker Investment & Broker Management",
      "Modern Online Learning Experience"
    ],
    languageCheckouts: [
      {
        label: "English",
        flag: "🇺🇸",
        buttonText: "Enroll in English"
      },
      {
        label: "Español",
        flag: "🇪🇸",
        buttonText: "Inscribirse en Español"
      }
    ],
    whichCourseTable: [
      {
        situation: "I'm renewing my Sales Associate license for the first time",
        requiredEducation: "45-Hour Post-License"
      },
      {
        situation: "I'm renewing my Florida Broker license for the first time",
        requiredEducation: "60-Hour Broker Post-License ✅"
      },
      {
        situation: "I've already completed my first Broker renewal",
        requiredEducation: "14-Hour Continuing Education"
      }
    ],
    renewalReview: {
      title: "WHAT TO EXPECT",
      subtitle: "More Than a Licensing Requirement.",
      paragraphs: [
        "Our goal is to create a learning experience that prepares Brokers not only to complete their first renewal, but also to strengthen the skills required to lead successful real estate businesses.",
        "In addition to Florida's required curriculum, the course is being designed to help Brokers better understand investment decision-making, brokerage operations, leadership responsibilities, and professional risk management.",
        "Because becoming a Broker represents more than earning a new license. It represents taking on greater responsibility."
      ],
      whyCreated: [
        "30-Hour Broker Investment: Explore investment principles, financial analysis, investment strategies, valuation concepts, and practical decision-making for today's real estate market.",
        "30-Hour Broker Management: Develop a practical understanding of brokerage management, business operations, leadership responsibilities, legal compliance, risk management, and professional standards."
      ]
    },
    renewalJourney: {
      title: "EVERYTHING YOU NEED FOR YOUR FIRST BROKER RENEWAL",
      subtitle: "Your Broker license is an important milestone in your professional journey. Our mission is to create educational experiences that help Brokers build confidence, strengthen professional knowledge, and continue growing.",
      items: [
        {
          title: "30-Hour Broker Investment",
          description: "Master investment concepts, valuation, financial analysis, and market strategies."
        },
        {
          title: "30-Hour Broker Management",
          description: "Develop practical skills in brokerage operations, office management, risk mitigation, and leadership."
        },
        {
          title: "Self-Paced & Flexible Access",
          description: "Study on your schedule from desktop, tablet, or mobile devices with automatic progress saving."
        },
        {
          title: "Downloadable Learning Resources",
          description: "Access worksheets, legal compliance checklists, and business management guides."
        },
        {
          title: "Student Success Team",
          description: "Real people providing guidance and support throughout your educational journey."
        }
      ]
    },
    whyChooseUpgraded: [
      {
        title: "Modern Learning Experience",
        description: "Designed for today's busy real estate professionals."
      },
      {
        title: "Practical Education",
        description: "Learn concepts you can apply beyond the classroom."
      },
      {
        title: "Flexible Online Learning",
        description: "Study wherever and whenever it works best for you."
      },
      {
        title: "Student Success Team",
        description: "Support throughout your educational journey."
      }
    ],
    licensingNotice: {
      schoolName: "Upgraded Real Estate School",
      licenseNo: "ZH1002624",
      paragraphs: [
        "Upgraded Real Estate School is a Florida Licensed Real Estate School (License #ZH1002624). The Florida 60-Hour Broker Post-License Course is currently under development and is not yet available for enrollment.",
        "Upon approval, the course will be submitted to satisfy Florida's required 60-hour Broker Post-License education for eligible Florida Brokers completing their first license renewal.",
        "The information presented on this page is provided for informational purposes only and may be updated as course development and the Florida approval process progress. Course availability, curriculum, approval status, and enrollment dates are subject to change."
      ]
    },
    faqs: [
      {
        question: "Who is this course designed for?",
        answer: "This course is designed for Florida Brokers completing their first license renewal."
      },
      {
        question: "Is this the same as Continuing Education?",
        answer: "No. Florida Brokers completing their first renewal must complete the required 60-Hour Broker Post-License education before transitioning to Continuing Education requirements for future renewals."
      },
      {
        question: "Does this include both required courses?",
        answer: "Yes. Our program is being developed to include both required 30-hour courses: Broker Investment and Broker Management."
      },
      {
        question: "Will the course be available in English and Spanish?",
        answer: "Our goal is to offer the course in both English and Spanish. Language availability will be confirmed when enrollment opens."
      },
      {
        question: "When will enrollment open?",
        answer: "We're currently finalizing course development and the Florida approval process. Join our notification list to receive updates."
      }
    ]
  },
  {
    id: "ai-real-estate",
    slug: "ai-for-real-estate-professionals",
    productCode: "PRODUCT 05",
    title: "AI for Real Estate Professionals",
    headline: "Artificial Intelligence for Modern Real Estate Professionals",
    heroTagline: "Work Smarter. Serve Better. Grow Faster.",
    category: "Professional Development",
    hours: "Self-Paced",
    price: "$199 USD",
    isLive: true,
    checkoutUrl: "https://link.fastpaydirect.com/payment-link/6a5fde69a655fa0b802a5767",
    badge: "Professional Development",
    dbprApproved: false,
    accessPeriod: "Lifetime Access",
    language: "Available in English & Spanish",
    description:
      "Artificial intelligence is transforming the way real estate professionals communicate, market properties, generate leads, create content, and manage their businesses.\n\nThe question is no longer whether AI will change the industry. The question is whether you'll know how to use it to your advantage.\n\nAt Upgraded, we've created a practical learning experience designed specifically for real estate professionals who want to save time, improve productivity, and deliver exceptional client experiences—without needing a technical background.\n\nBecause AI doesn't replace great agents. It empowers them.",
    whoIsThisFor: [
      "Save hours every week on repetitive tasks.",
      "Improve your marketing and content creation.",
      "Strengthen client communication.",
      "Organize information more efficiently.",
      "Build better systems and workflows.",
      "Increase productivity without increasing workload.",
      "Stay competitive in an industry that continues to evolve."
    ],
    whatYouWillLearn: [
      "AI Fundamentals: Understand what artificial intelligence is, how it works, and why it is transforming the real estate profession.",
      "Prompt Engineering: Learn how to communicate effectively with AI tools to generate more accurate, useful, and professional results.",
      "Marketing & Content Creation: Create listing descriptions, emails, newsletters, blogs, social media content, video scripts, and marketing materials.",
      "Client Communication: Develop professional emails, follow-up messages, buyer consultations, seller presentations, and market updates.",
      "Productivity & Workflow Optimization: Reduce repetitive work, organize information, summarize documents, and improve daily workflow.",
      "Business Growth: Leverage AI to improve consistency, strengthen your brand, and support long-term business development.",
      "Responsible AI: Learn best practices for using artificial intelligence ethically, professionally, and responsibly."
    ],
    features: [
      "Complete Online Course with Lifetime Access",
      "Practical AI Prompts, Templates, and Worksheets",
      "Real-World Real Estate Examples & Prompts",
      "Certificate of Completion Included"
    ],
    trustBar: [
      "Practical AI Education for Real Estate",
      "No Technical Background Required",
      "Includes Lifetime Course Access",
      "Available in English & Spanish"
    ],
    languageCheckouts: [
      {
        label: "English",
        flag: "🇺🇸",
        buttonText: "Enroll in English",
        checkoutUrl: "https://link.fastpaydirect.com/payment-link/6a5fde69a655fa0b802a5767"
      },
      {
        label: "Español",
        flag: "🇪🇸",
        buttonText: "Inscribirse en Español",
        checkoutUrl: "https://link.fastpaydirect.com/payment-link/6a5fde69a655fa0b802a5767"
      }
    ],
    renewalReview: {
      title: "WHY THIS COURSE IS DIFFERENT",
      subtitle: "Most AI courses teach technology. This course teaches application.",
      paragraphs: [
        "Instead of focusing on complicated technical concepts, we focus on helping you become a more productive real estate professional.",
        "Every lesson is designed around real-world scenarios that agents encounter every day—from writing listing descriptions and responding to clients to creating marketing campaigns and organizing business operations.",
        "Our goal isn't simply to teach AI. Our goal is to help you build a smarter business."
      ],
      whyCreated: [
        "Practical Applications: Learn skills you can implement immediately.",
        "Real Estate Focused: Examples and strategies designed specifically for real estate professionals.",
        "Beginner Friendly: No technical background required.",
        "Learn at Your Own Pace: Access your course anytime, anywhere."
      ]
    },
    renewalJourney: {
      title: "WHAT'S INCLUDED",
      subtitle: "Your enrollment includes everything you need to start using artificial intelligence in your real estate business with confidence.",
      items: [
        {
          title: "Complete Online Course",
          description: "Step-by-step video training and tutorials designed specifically for real estate agents and brokers."
        },
        {
          title: "Lifetime Access",
          description: "Revisit lessons, reference guides, and materials whenever you need them."
        },
        {
          title: "Practical AI Prompts & Worksheets",
          description: "Copy-and-paste prompts for listing descriptions, email marketing, client follow-ups, and social media."
        },
        {
          title: "Templates & Resource Library",
          description: "Downloadable guides, workflows, and templates to streamline your daily operations."
        },
        {
          title: "Certificate of Completion",
          description: "Earn an official certificate demonstrating your proficiency in AI applications for real estate."
        }
      ]
    },
    whyChooseUpgraded: [
      {
        title: "Practical Applications",
        description: "Learn skills you can implement immediately in your daily workflow."
      },
      {
        title: "Real Estate Focused",
        description: "Examples and strategies designed specifically for real estate professionals."
      },
      {
        title: "Beginner Friendly",
        description: "No technical background or coding experience required."
      },
      {
        title: "Learn at Your Own Pace",
        description: "Access your course anytime, anywhere on desktop or mobile."
      },
      {
        title: "Education That Evolves With You",
        description: "As technology evolves, our educational resources continue to adapt."
      }
    ],
    licensingNotice: {
      schoolName: "Upgraded Real Estate School",
      licenseNo: "ZH1002624",
      paragraphs: [
        "This Professional Development course is offered for educational purposes only and is not intended to satisfy Florida real estate pre-license, post-license, or continuing education requirements. Unless otherwise specifically indicated, completion of this course does not provide state licensing credit or continuing education credit.",
        "Course content is designed to provide practical business education and professional development for real estate professionals.",
        "Artificial intelligence technologies evolve rapidly. While Upgraded strives to keep educational content current and relevant, examples, tools, features, and best practices may change over time. Future updates may be provided at Upgraded's discretion.",
        "The strategies and recommendations presented in this course are intended for educational purposes only and should not be considered legal, financial, tax, brokerage compliance, or professional advice. Students remain responsible for complying with all applicable laws, brokerage policies, MLS rules, licensing regulations, and ethical obligations when applying artificial intelligence in their business."
      ]
    },
    faqs: [
      {
        question: "Do I need previous AI experience?",
        answer: "No. This course is designed for beginners as well as experienced professionals."
      },
      {
        question: "Is this course only for Realtors®?",
        answer: "No. The course is designed for real estate professionals, including Sales Associates, Brokers, teams, assistants, and industry professionals interested in leveraging AI."
      },
      {
        question: "Is this a technical course?",
        answer: "Not at all. You'll learn practical applications without needing programming or technical knowledge."
      },
      {
        question: "Will this course continue to be updated?",
        answer: "Yes. Artificial intelligence evolves rapidly, and we are committed to reviewing and enhancing our educational content to reflect meaningful developments, new tools, and emerging best practices."
      },
      {
        question: "How long will I have access?",
        answer: "Your enrollment includes lifetime access to the course and its available resources."
      },
      {
        question: "Is the course available in English and Spanish?",
        answer: "Language availability may vary by course. Please refer to the enrollment page for current language options."
      }
    ]
  }
];

