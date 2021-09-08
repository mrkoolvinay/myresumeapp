import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }
  header: string = 'BEESETTI VINAY KUMAR - Full Stack Developer';
  headerText: string = '9 years and 3 months of experience in developing software applications with substantial experience in leading all stages of technological projects. Consistent track record of understanding the customer needs and delivering the MVP within the agreed timelines. Thinks strategically which helps to plan and implement the project efficiently.';
  mySkills: any;
  myExp: any;

  ngOnInit(): void {
    this.loadSkills();
    this.loadExperience();
  }

  loadSkills() {
    this.mySkills = [
      {
        skillType: 'Hard Skills',
        skills: ['Full Stack Development', 'Agile', 'Test Driven Development', 'Pair Programming']
      },
      {
        skillType: 'Technical Skills',
        skills: ['Angular & Typescript', 'Spring Boot', 'PCF', 'GIT', 'Jenkins', 'Java/JEE', 'JPA', 'Javascript', 'HTML/CSS']
      },
      {
        skillType: 'Soft skills',
        skills: ['Critical Thinking', 'Collaboration', 'Problem Solving', 'Leadership']
      }
    ]
  }

  loadExperience() {
    this.myExp = [
      {
        tenure: '2020 - Till Date',
        designation: 'Full Stack Developer',
        company: 'Ford Motor Company',
        resp: [
          'Collaborate with business owners on a daily basis to understand the business needs and gather requirements',
          'Help team to understand requirements and fill the technical gaps required',
          'Maintain rally on daily basis on the status of all the work iteams',
          'Review and discuss the SDPI metrics to understand the improvement points during retro meetings',
          'Design, develop, test and maintain the application working in an Agile environment',
          'Good exposure to Software craftsmanship practices like TDD and pair programming',
          'Involved in Agile ceremonies',
        ],
        projs: [
          {
            projName: 'HD Verify (US Regulatory)',
            projDesc: 'Heavy Duty Verification (HD Verify) helps ford business to certify Heavy duty vehicles by submitting the Forcast and Actual Volumes reports to Govt. agencies (EPA and CARB). Helps and external system VDLS to print VECI and IEI labels for vehicles by providing appropriate data from HDVerify.'
          },
          {
            projName: 'HnC Base Services',
            projDesc: 'Homologate and Certify Base services is product level which helps to identify and create common solutions for all the product teams. For example, a common functionality in all the projects is created as an api as part of HnC Base services which helps in code reusability'
          }
        ]
      },
      {
        tenure: '2016 - 2020',
        designation: 'Full Stack Developer',
        company: 'Cognizant Technology Solutions',
        resp: [
          'Working in client location (Ford Motor Company)',
          'Design, develop, test and maintain the application working in an Agile environment',
          'Good exposure to Software craftsmanship practices like TDD and pair programming',
          'Involved in Agile ceremonies',
          'Setup Jenkins server for Continuous Integration',
          'Built Chrome plug-ins for automated health check of applications for Application Management Team',
          'Supported Production Implementations'
        ],
        projs: [
          {
            projName: 'CO2FEC(WLTP Program)',
            projDesc: 'CO2 and FE calculator for is a regulatory project which helps the business to calculate and emission values of the vehicle which are between lowest and highest configuration. This project is part of WLTP (World harmonized Light-duty vehicles Test Procedure) is a global harmonized standard for determining the levels of pollutants, CO2 emissions and fuel consumption of vehicles'
          },
          {
            projName: 'GERF',
            projDesc: 'Global Emission Reporting and Forecasting is for the EU region where the forect and actual vehicles of EU region are reported to the govt. agency for certification.'
          },
          {
            projName: 'HD Verify (US Regulatory)',
            projDesc: 'Heavy Duty Verification (HD Verify) helps ford business to certify Heavy duty vehicles by submitting the Forcast and Actual Volumes reports to Govt. agencies (EPA and CARB).'
          },
        ]
      },
      {
        tenure: '2015 - 2016',
        designation: 'Senior Software Developer',
        company: 'Standard Chartered Bank',
        resp: [
          'Responsible to gather requirements, Analysis, Coding, Unit Testing, Test Support and Production Implementation support',
          'Software Design, Coding and Unit Testing are the primary responsibility',
          'Maintenance and Enhancement of Core Banking Modules'
        ],
        projs: [
          {
            projName: 'Core Banking Application',
            projDesc: 'This application helps Standard Chartered to edit, process and create customer details from the core banking systems'
          }
        ]
      },
      {
        tenure: '2012 - 2015',
        designation: 'Software Developer',
        company: 'Syntel International PVT Limited',
        resp: [
          'Responsible to gather requirements, Analysis, Coding, Unit Testing, Test Support and Production Implementation support',
          'Created a batch module using Spring framework',
          'Implemented Presentation Layer Components'
        ],
        projs: [
          {
            projName: 'SPA',
            projDesc: 'Sales Processing Application helps John Hancock retirement plan services to create proposal forms and sent to the employers for confirmation.'
          }
        ]
      }
    ]
  }

}
