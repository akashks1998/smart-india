class A{
  constructor(sub,stat,infor){
    this.sub=sub;
    this.stat=stat;
    this.infor=infor;
  }
  show(){

  }
}
function maker(arr,ma){
  for(let i=0;i<arr.length-1;i+=2){
    let x=arr[i+1].indexOf('#');
    let tag=arr[1+i].substring(x);
    let sub=parseInt(arr[i+1].substring(arr[i+1].indexOf('Submissions')+14,x-1));
    let stat=arr[i];
    let a = new A(sub,stat,tag);
    ma.push(a);
  }
}
let ma=[];
var whol=`Retrofitting of existing vehicles for converting to Electric Vehicle (EV)
Ministry/State : Ministry of Electronics and Information Technology(MeitY)Sector : InfrastructureCategory : hardwarePriority : high Total Submissions : 88 #MTY23
Automatic Information Collection System (AICS)
Ministry/State : Ministry of Electronics and Information Technology(MeitY)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 27 #MTY22
Computerized Application for Paper-less Examination Screening (CAPES) system for recruitment
Ministry/State : Ministry of Electronics and Information Technology(MeitY)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 66 #MTY21
Development of a vulnerability scanner
Ministry/State : Ministry of Electronics and Information Technology(MeitY)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 14 #MTY20
For online Job Applications received by NIELIT, the credentials of Candidates (if available on Digital Locker or any other repository) should be verified instantly online.
Ministry/State : Ministry of Electronics and Information Technology(MeitY)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 23 #MTY19
Accounting and Payment release process of ESDM Scheme being manual and time consuming as steps involving multiple stakeholders and high number of touch points
Ministry/State : Ministry of Electronics and Information Technology(MeitY)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 10 #MTY18
Create an app that can run on a Windows/Linux based desktop to aid the disabled persons to perform day to day tasks
Ministry/State : Ministry of Electronics and Information Technology(MeitY)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 61 #MTY17
Development of Entrepreneurship Facilitation – Guidance Centre Platform
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 15 #MSD1
Proper linkage / mechanism to spot tribal youth talent in sports and nurture them
Ministry/State : Ministry of Tribal AffairsSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 39 #MTA10
App / portal / wiki-page required to document rich tribal heritage and culture
Ministry/State : Ministry of Tribal AffairsSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 47 #MTA9
Software
Ministry/State : Students’ InnovationsSector : TechnologyCategory : softwarePriority : high Total Submissions : 273 #SIC6
Hardware- Import Substitution (Reverse Import)
Ministry/State : Students’ InnovationsSector : InfrastructureCategory : hardwarePriority : high Total Submissions : 32 #SIC5
Hardware- Agriculture / Agro-Electronics
Ministry/State : Students’ InnovationsSector : Farmer WelfareCategory : hardwarePriority : high Total Submissions : 124 #SIC4
Hardware- Automobiles / Smart Vehicles
Ministry/State : Students’ InnovationsSector : InfrastructureCategory : hardwarePriority : high Total Submissions : 127 #SIC3
Hardware- Medical devices / Healthcare
Ministry/State : Students’ InnovationsSector : Health & Social WelfareCategory : hardwarePriority : high Total Submissions : 95 #SIC2
Hardware- Security & Surveillance / Defense & Security
Ministry/State : Students’ InnovationsSector : InfrastructureCategory : hardwarePriority : high Total Submissions : 141 #SIC1
Dashboard for all AICTE Initiatives & Schemes:
Ministry/State : AICTESector : Education & SkillsCategory : softwarePriority : high Total Submissions : 113 #AICTE6
Smart editor: A tool for fetching and editing information from scanned document mainly image type.
Ministry/State : AICTESector : Education & SkillsCategory : softwarePriority : high Total Submissions : 84 #AICTE5
Mobile App for Sansad Adarsh Gram Yojana (SAGY)
Ministry/State : AICTESector : Education & SkillsCategory : softwarePriority : high Total Submissions : 97 #AICTE4
Zila Vikas Manch (ZIVIMA) – District Development Portal
Ministry/State : AICTESector : Education & SkillsCategory : softwarePriority : high Total Submissions : 107 #AICTE3
Dashboard for all MHRD Initiatives & schemes
Ministry/State : AICTESector : Education & SkillsCategory : softwarePriority : high Total Submissions : 33 #AICTE2
Prediction of Admission & Jobs in Engineering & Technology with respect to demographic locations
Ministry/State : AICTESector : Education & SkillsCategory : softwarePriority : high Total Submissions : 43 #AICTE1
Development of digital solution to present opportunities for foreign students in high quality education
Ministry/State : Ministry of HRDSector : Education & SkillsCategory : softwarePriority : high Total Submissions : 21 #MHRD10
Matching the specialist knowledge with requirements
Ministry/State : Ministry of HRDSector : Education & SkillsCategory : softwarePriority : high Total Submissions : 34 #MHRD9
Development of Mind Education System
Ministry/State : Ministry of HRDSector : Education & SkillsCategory : softwarePriority : high Total Submissions : 33 #MHRD8
Development of mental health of the students for betterment
Ministry/State : Ministry of HRDSector : Education & SkillsCategory : softwarePriority : high Total Submissions : 29 #MHRD7
Crowd Sourcing model for preparing large question banks.
Ministry/State : Ministry of HRDSector : Education & SkillsCategory : softwarePriority : high Total Submissions : 71 #MHRD6
Artificial intelligence used system to identify the level of understanding and provide learning as per the requirements of the student
Ministry/State : Ministry of HRDSector : Education & SkillsCategory : softwarePriority : high Total Submissions : 53 #MHRD5
Academic scheduling in a college with multiple courses, multiple disciplines based on the staff’s availability
Ministry/State : Ministry of HRDSector : Education & SkillsCategory : softwarePriority : high Total Submissions : 45 #MHRD4
Women Welfare Schemes under one canopy
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 18 #GGJ11
Mapping of crime against women
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 28 #GGJ38
Geographic information about working women/ shelter home/ short stay home
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 5 #GGJ37
Random selection of samples of THR for laboratory testing and distribution
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 4 #GGJ36
Anganwadi Performance Management System
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 11 #GGJ35
Identify available parking spaces at Bus Depots and within the City
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 29 #GGJ34
Online verification of caste certificates
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 18 #GGJ33
Forecasting of Road Submergence (Web Application)
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 4 #GGJ32
Safe distance alarming system in vehicles
Ministry/State : Government of GujaratSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 70 #GGJ31
Portable weight measurement device
Ministry/State : Government of GujaratSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 18 #GGJ30
SOS System in Vehicle
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 29 #GGJ29
Road Symbol Detection Software in Vehicle
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 23 #GGJ28
Integration between RTO police and insurance company in case of fatal accident case.
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 15 #GGJ9
Data Mining based MoU monitoring portal for Progress review
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GGJ27
GPS tagged factory license and pollution certificates
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GGJ26
AI for bank statement verification
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GGJ25
Azimuth finder
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 4 #GGJ24
Reporting and counseling of cyber- bulling incidents
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 15 #GGJ23
Compare differ human voice samples and gives the percentage of matching for the given human voice samples
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 14 #GGJ22
Prediction of Anti Tuberculosis Drugs
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 7 #GGJ21
Accurate daily Load forecasting
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GGJ20
Mapping of all state and central government services to e-District portal
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 8 #GDL20
Tool for energy meter data analysis for improvement of power system
Ministry/State : Government of GujaratSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 6 #GGJ19
Develop a software where old age pension applications are queued up and pulled up
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 12 #GDL19
Tariff benefit to consumer at the time of excess power generation in system.
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 4 #GGJ18
GIS-GPS base new connection estimate generation by using their Mobile/web base application
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 1 #GGJ17
Identification of meritorious students in primary education
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 24 #GGJ16
Prediction of Admission & Jobs in Engineering & Technology /Management/Pharmacy with respect to demographic locations
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 8 #GGJ15
Mobile location based student attendance
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 51 #GGJ14
Traffic Management based on air pollution monitoring system
Ministry/State : Government of GujaratSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 21 #GGJ13
Centralized handheld Information Tool for Farmers
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 11 #GGJ12
Real time monitoring of physical and financial progress of schemes being implemented at District level under various schemes
Ministry/State : Government of Arunachal PradeshSector : India & the WorldCategory : softwarePriority : high Total Submissions : 4 #GAR2
GIS Based Mobile application for Emergency Response System for Disaster Situation
Ministry/State : Government of Arunachal PradeshSector : India & the WorldCategory : softwarePriority : high Total Submissions : 12 #GAR6
Request for online nomination
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 7 #GDL37
App for real time information on discharge data of rivers & streams
Ministry/State : Government of Arunachal PradeshSector : India & the WorldCategory : softwarePriority : high Total Submissions : 4 #GAR5
Smart set-top box 
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : hardwarePriority : high Total Submissions : 18 #MIB18
Comprehensive / Intelligent Video Analytics solution required for live-streaming as well as pre-recorded videos
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 11 #MIB17
Online access to classified archival storage using an App
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 14 #MIB16
An Android/iOS App is required to serve as a walkthrough guide for the National Museum of Indian Cinema
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : hardwarePriority : high Total Submissions : 52 #MIB15
Tool required to get real time logs of internet advertisements
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 4 #MIB14
Tool required to get real time logs of airwave broadcast of radio spots 
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 4 #MIB13
Tool required which can match photographs as per the specifications of DAVP
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 7 #MIB12
Make geo tagging of photos work in offline mode as well
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 16 #MIB11
Identify potential breaking news based on social media chatter (twitter, Facebook etc.) 
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 36 #MIB10
System to analyse a news video or news audio clipping 
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 15 #MIB9
Sentiments analysis using social media responses for a particular program
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 50 #MIB8
System to translate spoken words from a recording (Video/Audio) and generate a transcript in multiple Indian Languages
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 29 #MIB7
Disruption In Teacher Training & Capacity Building
Ministry/State : Government of MaharashtraSector : India & the WorldCategory : softwarePriority : high Total Submissions : 8 #GMH17
Mapping and Digitization of Road using Mobile Application for PWD Staff
Ministry/State : Government of MaharashtraSector : India & the WorldCategory : softwarePriority : high Total Submissions : 4 #GMH16
Generate closed captioning sub-titles of spoken words in various Indian Languages during a live broadcast 
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 12 #MIB6
Online DPR Management System
Ministry/State : Government of MaharashtraSector : India & the WorldCategory : softwarePriority : high Total Submissions : 1 #GMH15
Online PMAY Training modules for ULBs and Citizens
Ministry/State : Government of MaharashtraSector : India & the WorldCategory : softwarePriority : high Total Submissions : 10 #GMH14
Design an intelligent algorithm leveraging Big-Data/AI/Machine-Learning techniques that can learn from user viewing behaviour
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 34 #MIB5
Design a low-cost add-on module to DD Free Dish Set Top boxes that will enable interactivity between a Mobile App and the Set Top Box 
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 4 #MIB4
Online Dashboard for Real Time Monitoring of Projects Status of CSMC approved Projects
Ministry/State : Government of MaharashtraSector : India & the WorldCategory : softwarePriority : high Total Submissions : 11 #GMH13
Design an innovative Mobile App User Interface that can replace a TV remote 
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 26 #MIB3
Secure digital ticket passes
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 44 #GDL36
Design an innovative user interface for a Mobile App that would intuitively and seamlessly allow the App User to browse the entire catalogue of AIR streams
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 9 #MIB2
Count of boarding/de-boarding of bus passengers using a sensor
Ministry/State : Government of DelhiSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 62 #GDL35
Develop a tool or system that can listen to a radio broadcast tuned to a certain frequency on the air waves and live stream the same as an Internet stream
Ministry/State : Ministry of Information and BroadcastingSector : TechnologyCategory : softwarePriority : high Total Submissions : 9 #MIB1
Innovative add-on features for existing Poochh-O & Carpool app
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 5 #GDL34
Interlinking auto fare-meter with driver’s and passengers’ mobile app
Ministry/State : Government of DelhiSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 19 #GDL33
Knowledge Bank
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 8 #GDL32
Centralized Attendance System
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 32 #GDL31
Baggage Tracing and Handling System using RFID and IoT for Airports
Ministry/State : Government of PondicherrySector : India & the WorldCategory : hardwarePriority : high Total Submissions : 41 #GPY7
Face recognition based attendance app
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 72 #GDL30
Empower women in technology and education
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 19 #GDL29
Mess food wastage saver
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 28 #GDL28
VIRTUALCAMPUSASSISTANT(CampusMitra)
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 13 #GDL27
Students Feedback System for Quality Enhancement in Universities
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 23 #GDL26
Profiling of all criminals at FSL
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 4 #GDL25
Mismatch between water connections with their respective survey numbers – Revenue department’s data is not in line with water resources department’s data.
Ministry/State : Government of Andhra PradeshSector : India & the WorldCategory : softwarePriority : high Total Submissions : 5 #GAP2
Linking Police verification portal of Delhi Police to PSARA licencing Portal of Home Department.
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 1 #GDL24
Tracking NHRC referred Cases.
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 1 #GDL23
Linkage of fired cartridge cases/bullets received from different police Stations in different FIRs at different times.
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 4 #GDL22
Technology to enable seamless marketing of agri commodities beyond the current geographic clusters
Ministry/State : Ministry of Agriculture & Farmers WelfareSector : Farmer WelfareCategory : softwarePriority : high Total Submissions : 24 #MAF7
Translate weather information to very actionable advisory to farmers
Ministry/State : Ministry of Agriculture & Farmers WelfareSector : Farmer WelfareCategory : softwarePriority : high Total Submissions : 54 #MAF6
Real time identification of crops, weeds, diseases and pest damage and nutrient deficiency symptoms
Ministry/State : Ministry of Agriculture & Farmers WelfareSector : Farmer WelfareCategory : softwarePriority : high Total Submissions : 108 #MAF5
Identify quality index of the fruit/vegetable by non-destructive or with minimal destructive methods
Ministry/State : Ministry of Agriculture & Farmers WelfareSector : Farmer WelfareCategory : hardwarePriority : high Total Submissions : 51 #MAF4
Development of a multilingual Mobile App for deep sea fishermen
Ministry/State : Ministry of Agriculture & Farmers WelfareSector : Farmer WelfareCategory : softwarePriority : high Total Submissions : 43 #MAF3
Need for GIS based integrated solution in Municipalities on Land Management (Town Planning), Property Tax Management
Ministry/State : Government of TelanganaSector : India & the WorldCategory : softwarePriority : high Total Submissions : 2 #GTS8
Social Media Sentiment Analysis
Ministry/State : Government of TelanganaSector : India & the WorldCategory : softwarePriority : high Total Submissions : 24 #GTS5
Need for GIS based integrated solution in Municipalities on Utility Management (Water Supply, Sewage, Drainage, Road & Transportation, Storm Water).
Ministry/State : Government of TelanganaSector : India & the WorldCategory : softwarePriority : high Total Submissions : 1 #GTS7
Monitoring of Micro Irrigation Project, Horticulture Department
Ministry/State : Government of TelanganaSector : India & the WorldCategory : softwarePriority : high Total Submissions : 7 #GTS6
Smart FFRO system in Telangana state
Ministry/State : Government of TelanganaSector : India & the WorldCategory : softwarePriority : high Total Submissions : 1 #GTS4
Intelligent Traffic Management System
Ministry/State : Government of TelanganaSector : India & the WorldCategory : softwarePriority : high Total Submissions : 25 #GTS2
Marketing network for agricultural commodities for the benefit of producer and consumer
Ministry/State : Ministry of Agriculture & Farmers WelfareSector : Farmer WelfareCategory : softwarePriority : high Total Submissions : 181 #MAF2
Forewarning system for disease/pest attack for different commodities in different agro-climatic zones
Ministry/State : Ministry of Agriculture & Farmers WelfareSector : Farmer WelfareCategory : softwarePriority : high Total Submissions : 33 #MAF1
Issue of registration certificate to NGOs/organization working for persons with disabilities under new Rights of Persons with Disabilities Act, 2016
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 2 #GDL21
Centralised Wireless Home Appliance Control
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 22 #GDL18
Identification of Power outage and tracking of Improvement of infrastructure.
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 2 #GDL17
Real Estate Regulation ACT, RERA ACT 2016
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 7 #GDL16
Digitization of the properties of Evacuee Property Cell
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 1 #GDL15
Unified annual returns for employers under various Acts – web enabled applications of the employers to be synchronized with web site of Labour Department by giving unique identification number to each
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GDL14
Webportal for Single Window Clearance System for providing online approvals for Film Shooting permissions in Delhi
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 5 #GDL13
National Creche Portal/App
Ministry/State : Ministry of Women and Child DevelopmentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 43 #MWC3
Parking Space Availability Check, Guidance and Speed limit check
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 25 #GDL12
Portal for Child Care Institutions
Ministry/State : Ministry of Women and Child DevelopmentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 50 #MWC8
Grievance Redressal through App and IVR in ICDS
Ministry/State : Ministry of Women and Child DevelopmentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 13 #MWC7
C2C crowd-sourcing platform for projects on women’s empowerment
Ministry/State : Ministry of Women and Child DevelopmentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 22 #MWC1
App for training of Elected Women Representatives in Panchayat Raj Institutions
Ministry/State : Ministry of Women and Child DevelopmentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 25 #MWC2
App with Government Services for women
Ministry/State : Ministry of Women and Child DevelopmentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 61 #MWC6
Collection of data related to water bodies
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 21 #MWR23
Identifying and reporting of sand mining activities
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 18 #MWR22
Rooftop Rain Water Harvesting in Cities
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 19 #MWR21
All time availability of Popular Brands at Liquor Vends.
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 2 #GDL11
Presence tracking of Staff posted at Liquor Vends.
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 5 #GDL10
Case Management Software for Women Helpline
Ministry/State : Ministry of Women and Child DevelopmentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 44 #MWC5
Case Management Software for one stop center (OSC)
Ministry/State : Ministry of Women and Child DevelopmentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 23 #MWC4
Nationwide integration of all pharmaceutical groups (Education, Industries and all stake holders) to share policies, updates, summits, seminars/expo
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GDL9
Smart Drip Irrigation System
Ministry/State : Ministry of HRDSector : Education & SkillsCategory : hardwarePriority : high Total Submissions : 117 #MHRD3
To propose a non-invasive & non-destructive technological solution to alert the District administrators & villagers about the location of wild life. To reduce human animal conflict.
Ministry/State : Government of ChhattisgarhSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 10 #GCG10
Intelligent low cost Insulin Pump
Ministry/State : Ministry of HRDSector : Education & SkillsCategory : hardwarePriority : high Total Submissions : 17 #MHRD2
MGNREGA and PMGSY are important flagship programmes of the country. The activities under these programme include creation assets.
Ministry/State : Government of ChhattisgarhSector : India & the WorldCategory : softwarePriority : high Total Submissions : 2 #GCG9
Designing a voice based surveillance system for detecting Phishing attacks that fraudulently obtains the bank account details of unsuspecting customers through phone calls
Ministry/State : Ministry of HRDSector : Education & SkillsCategory : hardwarePriority : high Total Submissions : 21 #MHRD1
Development of rule engine for fire safety guidelines as per UBBL and NBC
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 0 #GDL8
Web based software for inspection of various buildings from Life and Fire Safety Point of view.
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 6 #GDL7
Estimation of Unit draft of ground water abstraction structures
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 3 #MWR20
Ambulance tracking system for 108 services.
Ministry/State : Government of ChhattisgarhSector : India & the WorldCategory : softwarePriority : high Total Submissions : 60 #GCG8
Collection of water quality data observed by private organizations
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 7 #MWR6
Mobile App for alcohol addiction management.
Ministry/State : Government of ChhattisgarhSector : India & the WorldCategory : softwarePriority : high Total Submissions : 14 #GCG7
Dissemination of information related to release of water from dams
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 21 #MWR19
Census of groundwater structures
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 11 #MWR12
Digital Monitoring of the city bus for proper stoppage at the bus stand only to avoid the traffic congestion.
Ministry/State : Government of ChhattisgarhSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 9 #GCG6
A platform for collection of Water Level, Water Quality and any specific problems associated with ground water.
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 6 #MWR18
Identification of accident black spots on expressway
Ministry/State : Government of ChhattisgarhSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 10 #GCG5
Smart e-challan system to control traffic violations
Ministry/State : Government of ChhattisgarhSector : India & the WorldCategory : softwarePriority : high Total Submissions : 17 #GCG4
Smart automatic washroom cleaning system for trains.
Ministry/State : Government of ChhattisgarhSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 17 #GCG3
Information on river bank erosion /health of embankments
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 4 #MWR14
Collection of information on More Crop Per Drop
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 10 #MWR13
Monitoring of street lights at market places
Ministry/State : Government of ChhattisgarhSector : India & the WorldCategory : softwarePriority : high Total Submissions : 18 #GCG2
Managing 24×7 water supply
Ministry/State : Government of ChhattisgarhSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 9 #GCG1
Collection of data in respect of dams in distress conditions
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 7 #MWR9
Dissemination of best practice in water sector
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 8 #MWR8
Census of springs.
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 4 #MWR7
Preparation of Aquifer Vulnerability Maps for Upcoming cluster/township
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 5 #MWR4
Census of artificial recharge structures
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 8 #MWR2
Awareness on Aarsenic contamination in ground water
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 3 #MWR5
Know your Back Yard and Farm Yard
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 7 #MWR3
Risks of overuse and contamination of Ground water
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 8 #MWR1
Management of Resources and shelters during Natural Disaster (Earthquake/Floods/Tsunami/ Cyclone etc)
Ministry/State : Union Territory of Andaman and Nicobar IslandsSector : India & the WorldCategory : softwarePriority : high Total Submissions : 23 #GAN1
DFC-State Transport Authority Vehicle Hypothecation Channel
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GDL6
National Registry of Financing Oragnisations
Ministry/State : Government of DelhiSector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GDL5
Intelligent distribution of water (system that autocorrects leakage, misuse, overuse etc).
Ministry/State : Government of PunjabSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 9 #GPB14
Compact soil tester that can spontaneously advice farmer about fertilizer and irrigation
Ministry/State : Government of PunjabSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 16 #GPB13
Storage of wheat that retains nutritional value
Ministry/State : Government of PunjabSector : India & the WorldCategory : softwarePriority : high Total Submissions : 2 #GPB12
Intelligent irrigation
Ministry/State : Government of PunjabSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 43 #GPB11
Handling of wheat stubble so that farmers do not burn stubble
Ministry/State : Government of PunjabSector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GPB10
City Air Pollution tracker
Ministry/State : Government of PunjabSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 25 #GPB9
Finding the Bus Occupancy
Ministry/State : Government of PunjabSector : India & the WorldCategory : softwarePriority : high Total Submissions : 29 #GPB8
Determining the average speed of vehicle on the road
Ministry/State : Government of PunjabSector : India & the WorldCategory : softwarePriority : high Total Submissions : 6 #GPB7
Theft Detector in the Bank ATM using Acoustics
Ministry/State : Government of PunjabSector : India & the WorldCategory : softwarePriority : high Total Submissions : 11 #GPB6
Video preview generator for saving the Internet Bandwidth
Ministry/State : Government of PunjabSector : India & the WorldCategory : softwarePriority : high Total Submissions : 10 #GPB5
Automatic Attendance Log Generator using CCTV camera in Office
Ministry/State : Government of PunjabSector : India & the WorldCategory : softwarePriority : high Total Submissions : 13 #GPB4
e-HealthCare
Ministry/State : Government of PunjabSector : India & the WorldCategory : softwarePriority : high Total Submissions : 4 #GPB3
Smart Parking System
Ministry/State : Government of PunjabSector : India & the WorldCategory : softwarePriority : high Total Submissions : 50 #GPB2
e-Rozgaar
Ministry/State : Government of PunjabSector : India & the WorldCategory : softwarePriority : high Total Submissions : 9 #GPB1
ICT as a new technology in disaster management &Information Technology in Emergency Preparedness and Response
Ministry/State : Government of AssamSector : India & the WorldCategory : softwarePriority : high Total Submissions : 10 #GAS3
Encroachment information system through use of smart technology
Ministry/State : Government of AssamSector : India & the WorldCategory : softwarePriority : high Total Submissions : 2 #GAS14
Lack of Centrally Fund Tracking System
Ministry/State : Government of AssamSector : India & the WorldCategory : softwarePriority : high Total Submissions : 2 #GAS13
Lack of Central Data base on pass out and dropout students of Higher Education Institutions
Ministry/State : Government of AssamSector : India & the WorldCategory : softwarePriority : high Total Submissions : 11 #GAS5
To bring all advertisements of vacancies for Govt jobs under one umbrella in Personnel Department’s website
Ministry/State : Government of AssamSector : India & the WorldCategory : softwarePriority : high Total Submissions : 23 #GAS12
Real time monitoring of Mid-Day-Meal Scheme
Ministry/State : Government of AssamSector : India & the WorldCategory : softwarePriority : high Total Submissions : 9 #GAS4
Crime Mapping
Ministry/State : Government of AssamSector : India & the WorldCategory : softwarePriority : high Total Submissions : 27 #GAS11
Fruit picking , Cardamom and maize piller device for farmers
Ministry/State : Government of SikkimSector : Farmer WelfareCategory : hardwarePriority : high Total Submissions : 15 #GSK14
Reducing burden of head load for villagers
Ministry/State : Government of SikkimSector : Rural DevelopmentCategory : hardwarePriority : high Total Submissions : 18 #GSK13
Unmanned aerial monitoring for Pre Survey purpose
Ministry/State : Government of SikkimSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 12 #GSK12
Internet Connectivity in Rural Hilly Terrain
Ministry/State : Government of SikkimSector : Rural DevelopmentCategory : hardwarePriority : high Total Submissions : 6 #GSK11
Appllication developemnt for waste management
Ministry/State : Government of SikkimSector : India & the WorldCategory : softwarePriority : high Total Submissions : 17 #GSK10
Connecting Student Volunteers to various schemes and programmes of the Government.
Ministry/State : Government of SikkimSector : India & the WorldCategory : softwarePriority : high Total Submissions : 13 #GSK9
Mapping of area of Open Dumping using GIS
Ministry/State : Government of SikkimSector : India & the WorldCategory : softwarePriority : high Total Submissions : 11 #GSK8
Automatic Electronic Shutdown of an electronic devices
Ministry/State : Government of SikkimSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 47 #GSK7
Build up an Information System
Ministry/State : Government of SikkimSector : TechnologyCategory : softwarePriority : high Total Submissions : 6 #GSK6
Sikkim Police Universal Communication Gateway
Ministry/State : Government of SikkimSector : TechnologyCategory : hardwarePriority : high Total Submissions : 1 #GSK5
Small videos by highly qualified doctors, prepared or dubbed in local tribal languages, could be part of an App with proper animations required for trials for the awareness of common diseases to life
Ministry/State : Ministry of Tribal AffairsSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 19 #MTA8
FILE TRACKING SYSTEM & MANAGEMENT SYSTEM
Ministry/State : Government of SikkimSector : TechnologyCategory : softwarePriority : high Total Submissions : 39 #GSK4
GoSPED, Application development for Government of Sikkim Pensioners
Ministry/State : Government of SikkimSector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GSK3
Power department Services app
Ministry/State : Government of SikkimSector : India & the WorldCategory : softwarePriority : high Total Submissions : 18 #GSK1
Intra-department messaging app
Ministry/State : Government of SikkimSector : TechnologyCategory : softwarePriority : high Total Submissions : 25 #GSK2
Solution to combine data related to STs from multiple sources and present it in an easy-to-use format
Ministry/State : Ministry of Tribal AffairsSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 12 #MTA7
Masking user details on the mobile while transacting And Establishing if a cardholder is shopping from a recognised payment device
Ministry/State : Ministry of Electronics and Information Technology(MeitY)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 8 #MTY6
An App required to provide relevant information to STs about available laws protecting them from atrocities and subjugation
Ministry/State : Ministry of Tribal AffairsSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 12 #MTA6
Solution required to help especially ST parents locate the tribal schools, hostels (availability, vacant seats), information about the admission procedure, eligibility etc. based on their choice of lo
Ministry/State : Ministry of Tribal AffairsSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 20 #MTA5
Helping youth make informed decisions on career choices in the vocational sector
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 33 #MSD19
Migration Trends:
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 8 #MSD18
BIOG DATA Problem Statement
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 9 #MSD17
Solution required to promote tourism in Tribal areas by tribal people
Ministry/State : Ministry of Tribal AffairsSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 22 #MTA4
Solution required to increase awareness about other schemes among FRA (Forest Rights Act) title holders
Ministry/State : Ministry of Tribal AffairsSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 13 #MTA3
From a potential employer’s view:
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 7 #MSD16
Solution required to link the local artisans with the agencies of MoTA
Ministry/State : Ministry of Tribal AffairsSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 9 #MTA2
An App required to identify the benefits from the schemes of the MoTA
Ministry/State : Ministry of Tribal AffairsSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 12 #MTA1
Propose a path breaking technological solution that would foster the coast guard officials to effectively monitor the Tamil Nadu fishermen and alert them if they sail inside the other country’s border
Ministry/State : Government of Tamil NaduSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 98 #GTN5
To develop a software platform (dashboard) to track the medical records (case history) of patients in government hospital
Ministry/State : Government of Tamil NaduSector : India & the WorldCategory : softwarePriority : high Total Submissions : 80 #GTN4
To develop a cost effective biometric authentication device (hardware)
Ministry/State : Government of Tamil NaduSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 27 #GTN3
A surveillance system for air pollution monitoring – warning and management
Ministry/State : Government of Tamil NaduSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 38 #GTN2
Software – Image to Word .Doc Converter – Governance
Ministry/State : Government of Tamil NaduSector : India & the WorldCategory : softwarePriority : high Total Submissions : 32 #GTN1
Developing an automatic instrument to record call of specific bird and weather parameters in a location
Ministry/State : Ministry of Environment, Forest and Climate ChangeSector : TechnologyCategory : softwarePriority : high Total Submissions : 14 #MEF9
A real time recording and monitoring of human activities and animal movements in Protected Areas
Ministry/State : Ministry of Environment, Forest and Climate ChangeSector : TechnologyCategory : softwarePriority : high Total Submissions : 33 #MEF8
System to track Labor market trends
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 5 #MSD15
Development of Compliance Platform
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 1 #MSD14
Development of Convergence of International – Central – State Start Up Platform
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 7 #MSD13
Warning and emergency response system to prevent human elephant conflict through acoustic monitoring of movement of Elephants
Ministry/State : Ministry of Environment, Forest and Climate ChangeSector : TechnologyCategory : hardwarePriority : high Total Submissions : 49 #MEF7
Development of Business Accelerator Platform
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 6 #MSD12
Development of Business Incubator Platform
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 9 #MSD11
Digital solution to predict drought in a protected area/locality
Ministry/State : Ministry of Environment, Forest and Climate ChangeSector : TechnologyCategory : softwarePriority : high Total Submissions : 24 #MEF6
Development of Logistics Platform
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 3 #MSD10
Development of E-Marketing – Procurement Platform
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 5 #MSD9
Development of Social Entrepreneurship Platform
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 13 #MSD8
Digital solution to document, analyse and manage biodiversity and environmental problems of the wetlands
Ministry/State : Ministry of Environment, Forest and Climate ChangeSector : TechnologyCategory : hardwarePriority : high Total Submissions : 7 #MEF5
Development of Online Mentor Platform
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 11 #MSD7
Developing vehicle speed warning system and wildlife detection systems to avoid wildlife-vehicle collisions
Ministry/State : Ministry of Environment, Forest and Climate ChangeSector : TechnologyCategory : hardwarePriority : high Total Submissions : 76 #MEF4
Developing video based sensor technological network to address human–wildlife conflict and poaching in and around Protected Areas
Ministry/State : Ministry of Environment, Forest and Climate ChangeSector : TechnologyCategory : softwarePriority : high Total Submissions : 15 #MEF3
Digital solution to document, analyse and manage the effect of Tourism on local Biodiversity and Wildlife in Protected Areas and tourist spots.
Ministry/State : Ministry of Environment, Forest and Climate ChangeSector : TechnologyCategory : softwarePriority : high Total Submissions : 12 #MEF2
Developing a real-time and automatic early warning system for forest fire
Ministry/State : Ministry of Environment, Forest and Climate ChangeSector : TechnologyCategory : hardwarePriority : high Total Submissions : 82 #MEF1
Skill India App
Ministry/State : Ministry of Skill Development & EntrepreneurshipSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 33 #MSD4
Creating an Automatic Pitch Deck Creator
Ministry/State : DIPP, Ministry of Commerce & IndustrySector : India & the WorldCategory : softwarePriority : high Total Submissions : 12 #DIP3
Tracking parking designated for PwDs in external environment
Ministry/State : Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & EmpowermentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 13 #DEPD8
Creating a platform for aggregation (information and application) of loans to Start-ups
Ministry/State : DIPP, Ministry of Commerce & IndustrySector : India & the WorldCategory : softwarePriority : high Total Submissions : 17 #DIP2
Mobile appp/database on employment opportunities for PwDs in the country.
Ministry/State : Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & EmpowermentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 39 #DEPD7
Digital solution for effective learning of persons with specific learning disabilities
Ministry/State : Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & EmpowermentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 39 #DEPD6
Creating a platform that tracks and measures the impact created from all the start-ups recognized by DIPP and others as well
Ministry/State : DIPP, Ministry of Commerce & IndustrySector : India & the WorldCategory : softwarePriority : high Total Submissions : 11 #DIP1
Separate banking software for persons with intellectual disabilities including better access to avail ATM services.
Ministry/State : Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & EmpowermentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 24 #DEPD5
Picture exchange communication software for better understating of persons with intellectual disabilities.
Ministry/State : Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & EmpowermentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 19 #DEPD4
Chronicle – stories of India’s international trade
Ministry/State : Department of Commerce, Ministry of Commerce & IndustrySector : India & the WorldCategory : softwarePriority : high Total Submissions : 18 #DOC5
Exim traffic map- Live Logistic congestion indicator & logistic planning tool
Ministry/State : Department of Commerce, Ministry of Commerce & IndustrySector : India & the WorldCategory : softwarePriority : high Total Submissions : 13 #DOC4
GPS based technique for improving Land Use Survey in ICS Scheme (LAKSHYA)
Ministry/State : Ministry of Statistics and Programme ImplementationSector : TechnologyCategory : softwarePriority : high Total Submissions : 5 #MSP3
Devise a model to capture the components of cost for export – “Cost to export” index
Ministry/State : Department of Commerce, Ministry of Commerce & IndustrySector : India & the WorldCategory : softwarePriority : high Total Submissions : 8 #DOC3
Digitization of Aerial frame using mobile application (DIGIFRAME)
Ministry/State : Ministry of Statistics and Programme ImplementationSector : TechnologyCategory : softwarePriority : high Total Submissions : 1 #MSP13
Rural Price Collection through APP ( RUPICOM)
Ministry/State : Ministry of Statistics and Programme ImplementationSector : TechnologyCategory : softwarePriority : high Total Submissions : 4 #MSP12
Automated Compilation of ASI Schedules (AUDYOGIC)
Ministry/State : Ministry of Statistics and Programme ImplementationSector : TechnologyCategory : softwarePriority : high Total Submissions : 3 #MSP11
Estimation of trade Margins
Ministry/State : Ministry of Statistics and Programme ImplementationSector : TechnologyCategory : softwarePriority : high Total Submissions : 2 #MSP10
Online data dissemination and dynamic costing through web portal
Ministry/State : Ministry of Statistics and Programme ImplementationSector : TechnologyCategory : softwarePriority : high Total Submissions : 3 #MSP9
Development of customized keyboard for use of persons with intellectual disabilities
Ministry/State : Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & EmpowermentSector : Health & Social WelfareCategory : hardwarePriority : high Total Submissions : 27 #DEPD3
Mobile app for assessment of reading skill, arithmetic skills etc.
Ministry/State : Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & EmpowermentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 26 #DEPD2
Online system for skill training and employment including management of database of skilled PwDs
Ministry/State : Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & EmpowermentSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 17 #DEPD1
Engagement Management System (EMS) through an Application for Desktop as well as Mobile-phones.
Ministry/State : Ministry of Statistics and Programme ImplementationSector : TechnologyCategory : softwarePriority : high Total Submissions : 10 #MSP8
Sub-national PPP data collection through mobile based application software
Ministry/State : Ministry of Statistics and Programme ImplementationSector : TechnologyCategory : softwarePriority : high Total Submissions : 5 #MSP7
International Comparison Program (ICP) data collection through mobile based application software (ICPAPP).
Ministry/State : Ministry of Statistics and Programme ImplementationSector : TechnologyCategory : softwarePriority : high Total Submissions : 6 #MSP6
A Smart project management system using mobile and video grab technology.
Ministry/State : Ministry of CoalSector : India & the WorldCategory : softwarePriority : high Total Submissions : 6 #MOC2
A suitable IT solution may be developed to measure water quality and motor temperature in borewells using some sensors. A centralized alerting system may also be developed.
Ministry/State : Ministry of CoalSector : India & the WorldCategory : softwarePriority : high Total Submissions : 31 #MOC1
Price and quality data aggregation of Private Hospital Data
Ministry/State : Government of KeralaSector : India & the WorldCategory : softwarePriority : high Total Submissions : 16 #GKL1
Identification of Accident Prone Spots by the Road Users and their reporting to the concerned Highway Authority
Ministry/State : Ministry of Road Transport and HighwaysSector : TechnologyCategory : softwarePriority : high Total Submissions : 143 #MRT6
Meal on Wheels
Ministry/State : Ministry of Road Transport and HighwaysSector : TechnologyCategory : softwarePriority : high Total Submissions : 69 #MRT5
Enablement of Drive-Mode application for Road Safety
Ministry/State : Ministry of Road Transport and HighwaysSector : TechnologyCategory : softwarePriority : high Total Submissions : 75 #MRT4
Games on Road Safety
Ministry/State : Ministry of Road Transport and HighwaysSector : Education & SkillsCategory : softwarePriority : high Total Submissions : 69 #MRT3
E-Toll System
Ministry/State : Ministry of Road Transport and HighwaysSector : InfrastructureCategory : hardwarePriority : high Total Submissions : 190 #MRT2
Applications to locate Skilled Labourer for Highway Construction works.
Ministry/State : Ministry of Road Transport and HighwaysSector : InfrastructureCategory : softwarePriority : high Total Submissions : 32 #MRT1
Visual Inspection of concrete structures by application of Image processing tools
Ministry/State : Council of Scientific and Industrial Research (CSIR)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 44 #CSIR11
An app that will give GPS-based Dengue Risk Index.A GPS-enabled smartphone owner can find the susceptibility to dengue infection at the location where he is. This will be of great use to all sections
Ministry/State : Council of Scientific and Industrial Research (CSIR)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 88 #CSIR10
Anti pilferage and anti adulteration system for fuel road tankers
Ministry/State : Council of Scientific and Industrial Research (CSIR)Sector : TechnologyCategory : hardwarePriority : high Total Submissions : 43 #CSIR6
Air and Water Quality Care System
Ministry/State : Council of Scientific and Industrial Research (CSIR)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 24 #CSIR9
Risk assessment of fire hazard in coal mines using data analysis
Ministry/State : Council of Scientific and Industrial Research (CSIR)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 17 #CSIR8
Smart domestic electric energy management system
Ministry/State : Council of Scientific and Industrial Research (CSIR)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 78 #CSIR7
Cost effective On-Cloud (Privately owned by government) solution for Zero-Day Attack Protection for advanced Persistent Threat/ Advance threat prevention for Government sectors
Ministry/State : Council of Scientific and Industrial Research (CSIR)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 7 #CSIR5
Web based Data Analytics software/framework for performing technology impact assessment of any CSIR technologies
Ministry/State : Council of Scientific and Industrial Research (CSIR)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 8 #CSIR4
Smartphone App (Android) for providing agro advisories for medicinal and aromatic growers, enterprenuers and industries on plant disease/nutrient management, buyer/seller corner and market intelligenc
Ministry/State : Council of Scientific and Industrial Research (CSIR)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 32 #CSIR3
Computational approaches to understand corrosion mechanism under extreme conditions
Ministry/State : Council of Scientific and Industrial Research (CSIR)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 10 #CSIR2
Mechanism for prescribing drug in hospitals and its or its substitute availability in the medical shops of the area/ city
Ministry/State : Council of Scientific and Industrial Research (CSIR)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 132 #CSIR1
IP based multimedia & data communication
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 6 #ISR18
IP Data Analysis and priority queuing
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 6 #ISR17
Formation Flying Simulation for UAV Image Acquisition with Real Time Control
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 12 #ISR16
Development of Software/ App to give monthly data on solar radiation based on coordinates
Ministry/State : Government of Arunachal PradeshSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 7 #GAR4
Distributed Panorama Construction of High Resolution UAV Imagery Using Public Compute Nodes
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 7 #ISR15
Estimating path profile of rain rate from point rainfall and total path attenuation data
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 4 #ISR14
Geographic information System (GIS) mapping and tracking of beneficiary of the department
Ministry/State : Government of Arunachal PradeshSector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GAR3
New Position Estimation Algorithm using range differences from satellites
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 8 #ISR13
Geofencing of data on NavIC/IRNSS signals
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 6 #ISR12
Content based Image Retrieval based on two themes i.e. burnt area assessment and water body in the order of similarity ranking (based on reference image) from large satellite imagery repository
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 13 #ISR11
Integrated Call Numbers and Prediction of Wild Fires & Earthquakes
Ministry/State : Government of Arunachal PradeshSector : India & the WorldCategory : softwarePriority : high Total Submissions : 10 #GAR1
Garbage volume estimation using multi-view garbage photographs.
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 27 #ISR10
Location Based Services Offline Routing Mobile App
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 23 #ISR9
Telemedicine system to work on Low Bandwidth
Ministry/State : Ministry of Health & Family WelfareSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 17 #MHF4
To develop a program for medicine dispensing machine which can use barcode/QR Code technology to dispense the medicines
Ministry/State : Ministry of AYUSHSector : Health & Social WelfareCategory : hardwarePriority : high Total Submissions : 43 #AYUSH6
To build a program to report any adverse events
Ministry/State : Ministry of AYUSHSector : Health & Social WelfareCategory : hardwarePriority : high Total Submissions : 16 #AYUSH5
Optimal Connectivity of Unconnected Villages through Roads in Rural Area (Uttarakhand)
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 14 #ISR8
Prediction of rain and local weather based on the available 100 years of rainfall data and modeling a farmer support system.
Ministry/State : Government of PondicherrySector : InfrastructureCategory : softwarePriority : high Total Submissions : 16 #GPY6
Efficient Indexing for Spatial-temporal Data in GIS Environment
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 3 #ISR7
To build a Program where visitor can navigate through the various facilities available in hospital
Ministry/State : Ministry of AYUSHSector : Health & Social WelfareCategory : hardwarePriority : high Total Submissions : 38 #AYUSH4
To develop a mathematical tool for station-keeping of halo orbits with minimum fuel consumption.
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 8 #ISR6
Public address system
Ministry/State : Ministry of RailwaysSector : TechnologyCategory : softwarePriority : high Total Submissions : 121 #MOR11
To develop an instrument which could identify the taste
Ministry/State : Ministry of AYUSHSector : Health & Social WelfareCategory : hardwarePriority : high Total Submissions : 24 #AYUSH3
Development of an app for dissemination of satellite imagery data in jpeg format of INSAT-3D and INSAT-3DR from central server placed in Satellite Meteorology Division on real time basis
Ministry/State : Government of PondicherrySector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GPY5
Machine reading of content of customer feed back
Ministry/State : Ministry of RailwaysSector : TechnologyCategory : softwarePriority : high Total Submissions : 51 #MOR10
Optimized energy utilization at Railway departments to reduce energy wastage
Ministry/State : Government of PondicherrySector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GPY4
To develop an conversion scale which would convert the scaled mentioned in Ayurveda into modern day measures
Ministry/State : Ministry of AYUSHSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 29 #AYUSH2
Involving Passengers in Upkeep of Railway Stations
Ministry/State : Ministry of RailwaysSector : India & the WorldCategory : softwarePriority : high Total Submissions : 21 #MOR9
Condition of Railway Tracks
Ministry/State : Government of PondicherrySector : India & the WorldCategory : hardwarePriority : high Total Submissions : 20 #GPY3
To design the transfer trajectory from earth parking orbit to halo orbit in the Sun-Earth circular restricted three body problem (CRTBP) using differential corrector.
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 5 #ISR5
Management of Railway Rest Houses & Holiday Homes
Ministry/State : Ministry of RailwaysSector : India & the WorldCategory : softwarePriority : high Total Submissions : 46 #MOR4
To develop Acute Coronary Syndrome Risk Predicting Model
Ministry/State : Government of PondicherrySector : India & the WorldCategory : softwarePriority : high Total Submissions : 3 #GPY2
To develop a non-invasive method for measuring blood glucose and Hb levels
Ministry/State : Ministry of AYUSHSector : Health & Social WelfareCategory : hardwarePriority : high Total Submissions : 40 #AYUSH1
Passenger Security
Ministry/State : Ministry of RailwaysSector : India & the WorldCategory : softwarePriority : high Total Submissions : 90 #MOR2
Enable customized animation over the internet
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 6 #ISR4
Telecom Connectivity
Ministry/State : Ministry of RailwaysSector : TechnologyCategory : softwarePriority : high Total Submissions : 5 #MOR8
Text Extractor
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 39 #ISR3
Maintenance of Coaches & Wagons
Ministry/State : Ministry of RailwaysSector : InfrastructureCategory : softwarePriority : high Total Submissions : 21 #MOR7
RADIONOMICS: EPITOME EXTRACTION FROM MEDICAL IMAGES
Ministry/State : Government of PondicherrySector : India & the WorldCategory : softwarePriority : high Total Submissions : 18 #GPY1
Drone/Robot based system for cleaning between tracks
Ministry/State : Ministry of RailwaysSector : InfrastructureCategory : hardwarePriority : high Total Submissions : 113 #MOR6
Gram Panchayat Adoption Advisor
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 4 #ISR2
Development of onboard digital fuel gauge for power cars for fuel monitoring
Ministry/State : Ministry of RailwaysSector : TechnologyCategory : hardwarePriority : high Total Submissions : 44 #MOR5
Automatic Issue of Notices
Ministry/State : Government of GoaSector : India & the WorldCategory : softwarePriority : high Total Submissions : 47 #GGA2
Speaking Geo GP Assistant
Ministry/State : Department of Space (ISRO)Sector : TechnologyCategory : softwarePriority : high Total Submissions : 10 #ISR1
Full Immunization Coverage
Ministry/State : Government of GoaSector : India & the WorldCategory : softwarePriority : high Total Submissions : 31 #GGA1
Platform for Learning from Disasters
Ministry/State : Ministry of Health & Family WelfareSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 15 #MHF3
E-Governance via online & offline server
Ministry/State : Department of Food and Public Distribution, Ministry of Consumer affairs, food and public distributionSector : GovernanceCategory : softwarePriority : high Total Submissions : 24 #DFP5
Knowledge Enhancement Platform
Ministry/State : Ministry of Health & Family WelfareSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 24 #MHF11
Power / Water consumption in the offices, schools, hostels and facilities
Ministry/State : Government of MaharashtraSector : India & the WorldCategory : softwarePriority : high Total Submissions : 12 #GMH10
Develop device to aggregate internet bandwidth of 2/3/4 G connectivity, alternate use of SIM’s from different service providers
Ministry/State : Department of Food and Public Distribution, Ministry of Consumer affairs, food and public distributionSector : InfrastructureCategory : hardwarePriority : high Total Submissions : 3 #DFP4
SMART System to Guide Patients
Ministry/State : Ministry of Health & Family WelfareSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 98 #MHF10
Posting/ transfers at the level of JE/AE/EE in CPWD 
Ministry/State : Ministry of Urban developmentSector : InfrastructureCategory : softwarePriority : high Total Submissions : 5 #MUD9
Capture moister, temperature, fire and earth quake related information using sensors and send alerts using IoT technology 
Ministry/State : Department of Food and Public Distribution, Ministry of Consumer affairs, food and public distributionSector : Health & Social WelfareCategory : hardwarePriority : high Total Submissions : 183 #DFP3
Caste Validity Certification System
Ministry/State : Government of MaharashtraSector : India & the WorldCategory : softwarePriority : high Total Submissions : 7 #GMH8
Rationalising Monitoring Visits in the States
Ministry/State : Ministry of Health & Family WelfareSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 16 #MHF1
The impact of GST can vary from sector to sector and depends on whether the project is under execution
Ministry/State : Ministry of Urban developmentSector : InfrastructureCategory : softwarePriority : high Total Submissions : 10 #MUD8
After Death Care
Ministry/State : Ministry of Health & Family WelfareSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 41 #MHF9
Inclusive governance and service delivery
Ministry/State : Ministry of Urban developmentSector : InfrastructureCategory : hardwarePriority : high Total Submissions : 5 #MUD7
Stakeholder Engagement for Urban Planning and Management
Ministry/State : Ministry of Urban developmentSector : InfrastructureCategory : softwarePriority : high Total Submissions : 7 #MUD6
Mental Health Services for the Community
Ministry/State : Ministry of Health & Family WelfareSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 23 #MHF8
Improving appointment scheduling in the Hospitals
Ministry/State : Ministry of Health & Family WelfareSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 131 #MHF7
Waste Management
Ministry/State : Ministry of Urban developmentSector : InfrastructureCategory : hardwarePriority : high Total Submissions : 121 #MUD5
Digital Signature Verification in Local Area Network using ASP.Net & C#
Ministry/State : Department of Defence Production, Ministry of DefenceSector : TechnologyCategory : softwarePriority : high Total Submissions : 31 #MOD13
Urban Mobility
Ministry/State : Ministry of Urban developmentSector : InfrastructureCategory : softwarePriority : high Total Submissions : 31 #MUD4
Paper-Less Office
Ministry/State : Department of Defence Production, Ministry of DefenceSector : GovernanceCategory : softwarePriority : high Total Submissions : 39 #MOD12
Atrocity Case Management
Ministry/State : Government of MaharashtraSector : GovernanceCategory : softwarePriority : high Total Submissions : 5 #GMH9
Creation of Mail Dashboard
Ministry/State : Department of Defence Production, Ministry of DefenceSector : TechnologyCategory : softwarePriority : high Total Submissions : 27 #MOD11
Common Mobility App
Ministry/State : Ministry of Urban developmentSector : InfrastructureCategory : softwarePriority : high Total Submissions : 31 #MUD3
Common Portal for information sharing among Defence Shipyard PSUs
Ministry/State : Department of Defence Production, Ministry of DefenceSector : GovernanceCategory : softwarePriority : high Total Submissions : 19 #MOD10
Finding similar brand drugs in other parts of the country
Ministry/State : Ministry of Health & Family WelfareSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 60 #MHF6
Common Platform for Vehicle Registration
Ministry/State : Ministry of Urban developmentSector : InfrastructureCategory : softwarePriority : high Total Submissions : 36 #MUD2
Integration with Moisture meter
Ministry/State : Department of Food and Public Distribution, Ministry of Consumer affairs, food and public distributionSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 19 #DFP2
Group Messaging Solution
Ministry/State : Department of Defence Production, Ministry of DefenceSector : TechnologyCategory : softwarePriority : high Total Submissions : 52 #MOD9
e-Measurement Book (eMB)
Ministry/State : Ministry of Urban developmentSector : InfrastructureCategory : softwarePriority : high Total Submissions : 5 #MUD1
Prototype/application for controlling wireless connectivity inside the premises
Ministry/State : Department of Defence Production, Ministry of DefenceSector : TechnologyCategory : hardwarePriority : high Total Submissions : 20 #MOD8
Prototype/application for whitelisting of USB devices in OFB which can be subsequently used on internet as well as on intranet
Ministry/State : Department of Defence Production, Ministry of DefenceSector : TechnologyCategory : softwarePriority : high Total Submissions : 13 #MOD7
Design of cyber physical surveillance system for smart cars
Ministry/State : Department of Defence Production, Ministry of DefenceSector : TechnologyCategory : softwarePriority : high Total Submissions : 13 #MOD6
Working on offline-online application and sync the data
Ministry/State : Department of Food and Public Distribution, Ministry of Consumer affairs, food and public distributionSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 12 #DFP1
Vision based algorithm for sensing of railway tracks.
Ministry/State : Department of Defence Production, Ministry of DefenceSector : TechnologyCategory : softwarePriority : high Total Submissions : 44 #MOD2
Real-Time image processing and forensic verification of documents
Ministry/State : Department of Defence Production, Ministry of DefenceSector : GovernanceCategory : softwarePriority : high Total Submissions : 37 #MOD5
Student mobile app
Ministry/State : Government of ChandigarhSector : Education & SkillsCategory : softwarePriority : high Total Submissions : 53 #GCH2
Monitoring of electricity at household level
Ministry/State : Ministry of PowerSector : InfrastructureCategory : softwarePriority : high Total Submissions : 59 #MOP12
Atmospheric Turbulence Mitigation In CCD/TI Videos
Ministry/State : Department of Defence Production, Ministry of DefenceSector : GovernanceCategory : softwarePriority : high Total Submissions : 9 #MOD4
Efficient, Easy and Integrated Billing System
Ministry/State : Ministry of PowerSector : InfrastructureCategory : softwarePriority : high Total Submissions : 49 #MOP11
Tool for Transformation of Geodetic Datum’s (Coordinate Systems).
Ministry/State : Department of Defence Production, Ministry of DefenceSector : GovernanceCategory : softwarePriority : high Total Submissions : 7 #MOD3
Non-availability of the literature related to Geological surprises encountered in completed hydropower projects
Ministry/State : Ministry of PowerSector : InfrastructureCategory : softwarePriority : high Total Submissions : 7 #MOP10
Predictive Student Analysis
Ministry/State : Government of ChandigarhSector : Education & SkillsCategory : softwarePriority : high Total Submissions : 19 #GCH1
Integrated Automatic Floor Warning and Alert System using IoT
Ministry/State : Ministry of PowerSector : InfrastructureCategory : hardwarePriority : high Total Submissions : 47 #MOP9
Power Customer Interaction
Ministry/State : Ministry of PowerSector : InfrastructureCategory : softwarePriority : high Total Submissions : 50 #MOP8
To detect anomaly in current ship trajectory based on historical data.
Ministry/State : Department of Defence Production, Ministry of DefenceSector : GovernanceCategory : softwarePriority : high Total Submissions : 46 #MOD1
Prediction of Load demand and Power Availability
Ministry/State : Ministry of PowerSector : InfrastructureCategory : softwarePriority : high Total Submissions : 24 #MOP7
Drinking water transportation by tankers are SOS arrangements. Their real time, GIS based tracking right from filling to decanting would prevent the misuse
Ministry/State : Government of RajasthanSector : Health & Social WelfareCategory : hardwarePriority : high Total Submissions : 11 #GRJ2
DOP network has approximately 30,000 locations across India and divided into Circle. The problem is SLA reporting, SLA calculations, payment processing and payment projection for future.
Ministry/State : Department of Post, Ministry of State(IC) of CommunicationsSector : India & the WorldCategory : softwarePriority : high Total Submissions : 5 #DOP10
Hand Pumps located in the remotest arears, are on the reliable source of potable water.
Ministry/State : Government of RajasthanSector : Health & Social WelfareCategory : hardwarePriority : high Total Submissions : 8 #GRJ1
Devising methodology and a system for tackling the flow of data related to mail operations under low bandwidth/failure of network.
Ministry/State : Department of Post, Ministry of State(IC) of CommunicationsSector : India & the WorldCategory : softwarePriority : high Total Submissions : 5 #DOP9
Mechanisation of parcel sorting at parcel processing centres (parcel hubs)
Ministry/State : Department of Post, Ministry of State(IC) of CommunicationsSector : India & the WorldCategory : softwarePriority : high Total Submissions : 12 #DOP7
Design and demonstrate a digital addressing system as an extension of the existing PIN code
Ministry/State : Department of Post, Ministry of State(IC) of CommunicationsSector : India & the WorldCategory : softwarePriority : high Total Submissions : 36 #DOP6
Design of parcel drop off kiosk and integration with the present Departmental software ecosystem which is offline as well as the proposed online ecosystem
Ministry/State : Department of Post, Ministry of State(IC) of CommunicationsSector : India & the WorldCategory : softwarePriority : high Total Submissions : 11 #DOP5
Cost calculation system for products which have to travel across multiple offices
Ministry/State : Department of Post, Ministry of State(IC) of CommunicationsSector : India & the WorldCategory : softwarePriority : high Total Submissions : 10 #DOP4
End to End mapping of Network to arrive at the expected time of delivery
Ministry/State : Department of Post, Ministry of State(IC) of CommunicationsSector : India & the WorldCategory : softwarePriority : high Total Submissions : 16 #DOP3
To develop App and SMS based application which can measure the received mobile signal level at any location.
Ministry/State : Department of Telecommunications. Ministry of CommunicationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 37 #DOT3
Connected Officers Directory & Calendar
Ministry/State : Government of MaharashtraSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 8 #GMH12
Digital Addressee System with Unique address for each addressee location
Ministry/State : Department of Post, Ministry of State(IC) of CommunicationsSector : India & the WorldCategory : softwarePriority : high Total Submissions : 14 #DOP2
Load management for transport planning
Ministry/State : Department of Post, Ministry of State(IC) of CommunicationsSector : India & the WorldCategory : softwarePriority : high Total Submissions : 13 #DOP1
The present guidelines of DoT HQ do not allow more than nine mobile connections to an individual.
Ministry/State : Department of Telecommunications. Ministry of CommunicationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 30 #DOT1
Consumer Price (CPI) data collection for Rural & Urban Sectors through mobile based application software CPIAPP(R) & CPIAPP(U).
Ministry/State : Ministry of Statistics and Programme ImplementationSector : TechnologyCategory : softwarePriority : high Total Submissions : 7 #MSP1
Quality of service and Security of kids in the hostel
Ministry/State : Government of MaharashtraSector : Health & Social WelfareCategory : softwarePriority : high Total Submissions : 8 #GMH7
Dissemination Information about scheme approved
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 9 #MWR17
Application for reporting encroachment, pollution or requirement of RRR for water bodies
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 12 #MWR16
Dissemination of information related to availability of water in reservoir
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 6 #MWR15
Mechanism to avoid duplication of beneficiaries of various welfare schemes
Ministry/State : Government of GujaratSector : India & the WorldCategory : softwarePriority : high Total Submissions : 7 #GGJ1
Automatic Ticket Checking System in Jetties and Wharfs for Interisland shipping services
Ministry/State : Union Territory of Andaman and Nicobar IslandsSector : India & the WorldCategory : hardwarePriority : high Total Submissions : 28 #GAN2
Collection on information on harkhetkopani
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 11 #MWR11
Collection of information regarding discharge of untreated affluent in river
Ministry/State : Ministry of Water Resources, River Development and Ganga RejuvenationSector : InfrastructureCategory : softwarePriority : high Total Submissions : 11 #MWR10
Application to map disabled-friendly Locations across Maharashtra
Ministry/State : Government of MaharashtraSector : India & the WorldCategory : softwarePriority : high Total Submissions : 9 #GMH2
`;
let arr=whol.split('\n');
maker(arr,ma);
ma.sort(function(a,b){
  return a.sub-b.sub;
});
console.log(ma);
document.getElementById('a').innerHTML='';
for(let i=0;i<ma.length;i++){
  document.getElementById('demo').innerHTML+="<h2>"+ma[i].stat+"</h2><br>"+ma[i].infor+'</br>'+ma[i].sub+'<br>';
}
