// src/data/resultsData.js
import { RRBResults } from './RRBResults'; 
import { SscResults } from './SscResults'; 

export const resultsData = [

   // Merge ALL Results from Results.js
  ...SscResults,
  ...RRBResults,
 
  {
    id: 'upsc-cse-2025-result',
    examName: 'UPSC ESIC Nursing Officer Final Result 2025',
    department: 'Employees State Insurance Corporation (ESIC)',
    organization: 'Union Public Service Commission (UPSC)',
    resultDate: '16 July 2025',
    year: '2024',
    
    resultDetails: "The Union Public Service Commission has announced the final result of ESIC Nursing Officer Examination 2025. A total of 1,893 candidates have been recommended for appointment to various ESIC healthcare facilities. The result is based on the performance in Written Examination and Interview.",
    downloadLink: 'https://upsc.gov.in/sites/default/files/RT-WR-1930-NursingOfcr-ESIC-engl-120824.pdf',
    officialWebsite: 'https://upsc.gov.in',
    category: 'Government',
    status: 'Published',
    totalPosts: '1930',

    importantDates:{
      notificationDate: '07 March 2024',
      applicationStart: '07 March 2024',
      lastDateApply: '27 March 2024',
      examDate: ' 07 July 2024',
      resultDate: '16 July 2025'
    },
    Salary: [
      {
        postName: "UPSC UPSC ESIC Nursing Officer Salary 2025",
        level: "7",
        initialPay: "	₹44,900/ month"
      }
      
      
    ],
  },

  {
    id: 'ssc-HPR-2024-result',
    examName: 'UPSSSC Homoeopathic Pharmacist Result 2025',
    department: 'Various Central Government Departments',
    organization: 'Uttar Pradesh Subordinate Service Selection Commission (UPSSSC).',
    year: '2025',
    resultDate: '02 September 2025',
    resultDetails: 'UPSSSC has declared the Homoeopathic Pharmacist Result 2025 on 02 September 2025 for the exam held on 02 February 2025 for 397 posts. Candidates can download their scorecards using Roll/Application Number and Date of Birth from the official website.',

    downloadLink: 'https://upsssc.gov.in/Online_App/Results.aspx?ID=131&Result_Type=M&Exam_Code=5&Advt_Code=546&Dept_Code=514&Post_Code=1&OnlyIntview=No',
    officialWebsite: 'https://upsssc.gov.in/',
    category: 'Government',
    status: 'Published',
    totalPosts: '397',

    importantDates:{
      notificationDate: '  20 June 2024',
      applicationStart: '20 June 2024',
      lastDateApply: '19 July 2024',
      ExamCityDate : '23 January 2025',
      AdmitCardDate: '30 January 2025',
      ExamDate: '02 February 2025',
      ResultDate : '02 September 2025',

      
    },

    Salary: [
        {
          postName: "UPSSSC Homoeopathic Pharmacist ",
          level: "5",
          initialPay: "	₹29,200/- Per Month"
        }
        
      ],
      cutoff: [
           
        { category: "General (UR)", range: "09.25" },
        { category: "OBC", range: "09.25" },
        { category: "SC", range: "09.25" },
        { category: "ST", range: "09.25" },
        { category: "EWS", range: "09.25" }
      ]
  },
  {
    id: 'UPSSSC-PET-2024-result',
    examName: 'UPSSSC PET Result 2024',
    department: 'Various Central Government Departments',
    organization: 'Uttar Pradesh Subordinate Service Selection Commission (UPSSSC).',
    year: '2024',
    resultDate: '29 January 2024',
    resultDetails: 'UPSSSC conducted the PET Exam 2024 on 28 & 29 October 2024 for various posts, with applications accepted from 1–30 August 2024. The UPSSSC PET Result and Score Card 2024 was declared on 29 January 2024, available on the official website.',

    downloadLink: 'https://upsssc.gov.in/Online_App/Results.aspx?ID=131&Result_Type=M&Exam_Code=5&Advt_Code=546&Dept_Code=514&Post_Code=1&OnlyIntview=No',
    officialWebsite: 'https://upsssc.gov.in/',
    category: 'Government',
    status: 'Published',
    totalPosts: '397',

    importantDates:{
      notificationDate: '1 August 2024',
      applicationStart: '1 August 2024',
      lastDateApply: '30 August 2024',
    
      AdmitCardDateReleased: '19 October 2024',
      ExamDate: '	28 October and 29 October 2023',
      ResultDate : '29 January 2024',

      
    },

      cutoff: [
           
        { category: "General (UR)", range: "	60 – 65 Marks(Expected )" },
        { category: "OBC", range: "59 – 62 Marks(Expected )" },
        { category: "SC", range: "52 – 60 Marks(Expected )" },
        { category: "ST", range: "48– 53 Marks(Expected )" },
        { category: "EWS", range: "56 – 60 Marks(Expected )" }
      ]
  },
 
 




 
  
];

export default resultsData;
