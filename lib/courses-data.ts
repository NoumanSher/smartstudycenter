export interface ProgramTab {
  id: string;
  label: string;
  badge?: string;
  aboutTitle?: string;
  aboutDescription: string;
  duration?: string;
  eligibility?: string;
  documentsRequired: string[];
  keySubjects?: string[];
  highlights?: string[];
}

export interface CourseDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  level: string;
  rating: number;
  students: string;
  duration: string;
  price: string;
  cardDescription: string;
  image: string;
  heroHeading: string;
  heroDescription: string;
  tabs: ProgramTab[];
}

export const coursesData: CourseDetail[] = [
  {
    slug: "juniors",
    title: "Junior Section (Classes 6th - 8th)",
    shortTitle: "Juniors",
    category: "Junior Level",
    level: "Beginner to Middle",
    rating: 4.9,
    students: "4200+",
    duration: "Academic Year",
    price: "$199",
    cardDescription:
      "Foundational courses for junior students building strong academic basics in English, Math, and Sciences.",
    image:
      "https://images.pexels.com/photos/5428010/pexels-photo-5428010.jpeg?auto=compress&cs=tinysrgb&w=400",
    heroHeading: "Junior Academic Excellence (Classes 6th to 8th)",
    heroDescription:
      "Inspire curiosity and strong study habits from an early age. Our junior programs nurture confident learners through interactive teaching, foundational mathematics, reading comprehension, and science experiments.",
    tabs: [
      {
        id: "class-8",
        label: "Class 8th",
        aboutTitle: "About Program",
        aboutDescription:
          "Class 8th is the decisive bridge year before high school and board exams. Our program solidifies concepts in algebra, geometry, scientific principles, and English communication.",
        duration: "Academic Session",
        eligibility: "Promoted from Class 7th.",
        keySubjects: [
          "Mathematics",
          "General Science",
          "English Grammar & Writing",
          "Urdu",
          "Computer Literacy",
        ],
        documentsRequired: [
          "Class 7th School Report Card",
          "Copy of Student B-Form",
          "Copy of Parent CNIC",
          "1 Passport Size Photographs",
        ],
        highlights: [
          "Bridge curriculum preparing directly for 9th Matric or O-Levels",
          "Daily homework assistance and weekly review quizzes",
          "Friendly, interactive mentor guidance",
        ],
      },
      {
        id: "class-7",
        label: "Class 7th",
        aboutTitle: "About Program",
        aboutDescription:
          "Focuses on developing logical reasoning, problem-solving in mathematics, and clear written English expression through engaging live lessons.",
        duration: "Academic Session",
        eligibility: "Promoted from Class 6th.",
        keySubjects: [
          "Mathematics",
          "Science",
          "English",
          "Urdu",
          "Social Studies",
        ],
        documentsRequired: [
          "Class 6th Report Card",
          "Copy of B-Form",
          "1 Passport Photos",
        ],
        highlights: [
          "Visual learning modules",
          "Continuous positive reinforcement and confidence building",
        ],
      },
      {
        id: "class-6",
        label: "Class 6th",
        aboutTitle: "About Program",
        aboutDescription:
          "Welcomes young learners into middle school with supportive tutoring that makes numbers and science concepts easy and enjoyable.",
        duration: "Academic Session",
        eligibility: "Completed primary school (Class 5th).",
        keySubjects: [
          "Mathematics",
          "General Science",
          "English",
          "Urdu",
          "Computer Basics",
        ],
        documentsRequired: [
          "Class 5th Report Card / Certificate",
          "Copy of B-Form",
          "1 Passport Photos",
        ],
        highlights: [
          "Gentle pace with high interactive participation",
          "Vocabulary and arithmetic drills",
        ],
      },
      {
        id: "foundation-skills",
        label: "Foundation English & Math",
        aboutTitle: "About Program",
        aboutDescription:
          "A specialized booster course designed for students who need extra support to catch up in English grammar, speaking, reading, and mental math.",
        duration: "2-3 Months",
        keySubjects: [
          "Spoken & Written English",
          "Basic Arithmetic & Fractions",
          "Reading Comprehension",
        ],
        documentsRequired: ["Copy of Student B-Form", "1 Passport Photos"],
        highlights: [
          "Zero-judgment, highly encouraging environment",
          "Rapid visible improvements",
        ],
      },
    ],
  },
  {
    slug: "matric",
    title: "Matriculation Programs (9th & 10th)",
    shortTitle: "Matric",
    category: "Matriculation",
    level: "Secondary",
    rating: 4.7,
    students: "3500+",
    duration: "6 Months",
    price: "$299",
    cardDescription:
      "Matriculation level courses covering Federal (FBISE) and Provincial Boards with comprehensive exam focus.",
    image:
      "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    heroHeading: "Matriculation (9th & 10th Class) Programs",
    heroDescription:
      "Our Matric sessions provide complete academic support for students preparing for board examinations. We cover every subject with clear concepts, structured notes, and regular practice. Experienced teachers focus on important topics, past papers, and effective exam techniques. Students can ask questions freely and receive guidance whenever they need it. Frequent tests and assessments help identify weak areas and improve performance. We help Matric students prepare confidently for excellent results and future studies.",
    tabs: [
      {
        id: "matric-computer-science",
        label: "Matric Computer Science",
        aboutTitle: "About Program",
        aboutDescription:
          "Matric Computer Science is for students who are interested in technology, programming, and digital learning. The group usually includes Computer Science, Mathematics, Physics, and Chemistry as major subjects. Our teachers build strong concepts through clear lessons, practical examples, and regular problem-solving practice. Students learn the basics of computer systems, programming logic, and important scientific concepts. We provide notes, tests, past-paper practice, and individual guidance for board examination preparation. This group creates a strong foundation for future studies in ICS, Software Engineering, IT, Artificial Intelligence, and Computing.",
        duration: "6 Months",
        eligibility: "Passed Class 8th examination.",
        keySubjects: [
          "Mathematics (SLO Based)",
          "Physics",
          "Chemistry",
          "Biology / Computer Science",
          "English, Urdu & Islamiyat",
        ],
        documentsRequired: [
          "Class 8th Pass Certificate / School Result Card",
          "Copy of Student B-Form",
          "Copy of Father / Guardian CNIC",
          "1 Passport Size Photographs",
        ],
        highlights: [
          "FBISE & Provincial board SLO conceptual methodology",
          "Complete solved exercises and conceptual question banks",
          "Monthly model paper test series",
        ],
      },
      {
        id: "matric-medical-science",
        label: "Matric Medical Science",
        aboutTitle: "About Program",
        aboutDescription:
          "Matric Medical Science is for students who are interested in Biology, health sciences, and medical-related careers. The group focuses on Biology, Physics, Chemistry, and Mathematics with strong conceptual understanding. Our subject-specialist teachers explain scientific topics clearly and help students learn difficult concepts with confidence. Regular tests, notes, revision sessions, and past-paper practice prepare students for board examinations. Individual attention helps students improve weak areas and develop effective study habits. This group provides a strong foundation for FSc Pre-Medical and future fields such as medicine, pharmacy, nursing, and health sciences.",
        duration: "6 Months",
        eligibility: "Appeared in / Passed 9th Class board exam.",
        keySubjects: [
          "Mathematics (Theory & Theorems)",
          "Physics (Theory & Practical Preparation)",
          "Chemistry (Chemical Equations & Numericals)",
          "Biology / Computer Science",
          "English, Urdu & Pakistan Studies",
        ],
        documentsRequired: [
          "9th Class Board Roll Number Slip / Result Card",
          "Copy of Student B-Form",
          "Copy of Parent CNIC",
          "1 Passport Size Photographs",
        ],
        highlights: [
          "Board paper presentation techniques and rubric guidance",
          "Special focus on theorems and numericals scoring",
          "Pre-board grand mock exams",
        ],
      },
      {
        id: "matric-arts",
        label: "Matric Arts",
        aboutTitle: "About Program",
        aboutDescription:
          "Matric Arts is suitable for students interested in humanities, social studies, languages, and creative subjects. It offers a balanced learning path that develops knowledge, communication, writing, and critical-thinking skills. Our teachers explain every subject clearly and provide individual guidance according to each student’s needs. Students receive organized notes, regular tests, revision sessions, and past-paper practice. We help them improve their writing style, understanding, and confidence for board examinations. Matric Arts provides a strong foundation for FA and future studies in education, media, law, business, and social sciences.",
        duration: "6 Months",
        eligibility: "Students currently in 8th Class.",
        keySubjects: [
          "General Mathematics",
          "General Science",
          "Civics / Education",
          "English & Urdu",
        ],
        documentsRequired: [
          "7th / 8th Grade School Report Card",
          "Copy of B-Form",
          "1 Passport Photos",
        ],
        highlights: [
          "Early syllabus start for relaxed study pace throughout the year",
          "Eliminates fear of board sciences",
        ],
      },
    ],
  },
  {
    slug: "intermediate",
    title: "Intermediate Programs",
    shortTitle: "Intermediate",
    category: "Intermediate Education",
    level: "Intermediate",
    rating: 4.8,
    students: "2800+",
    duration: "6 Months",
    price: "$449",
    cardDescription:
      "Intermediate level education covering pre-engineering, pre-medical, ICS, and commerce streams.",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    heroHeading: "Intermediate Programs",
    heroDescription:
      "Intermediate is a crucial stage where students need focused guidance to understand every subject properly. At Smart Study Center, each student receives individual attention according to their academic needs. Our subject-specialist teachers explain concepts clearly and help students overcome their weak areas. We provide complete support through regular classes, notes, practice sessions, and assessments. Students are guided to improve their study routine, confidence, and examination performance. Our goal is to help every Intermediate student achieve strong results and choose a successful future path.",
    tabs: [
      {
        id: "fsc-pre-medical",
        label: "FSc Pre-Medical",
        aboutTitle: "About Program",
        aboutDescription:
          "FSc Pre-Medical is for students who want to build a future in medicine, healthcare, and biological sciences. The programme focuses mainly on Biology, Chemistry, and Physics, with strong conceptual learning in every subject. Our subject-specialist teachers explain difficult topics in a simple and practical way. Students receive individual attention, regular tests, notes, and board-exam preparation. We help them strengthen their concepts, improve answer-writing, and perform confidently in examinations. This programme supports students preparing for fields such as MBBS, BDS, Pharm-D, Nursing, and other health sciences.",
        duration: "6 Months Accelerated",
        eligibility:
          "Students awaiting Matric / 10th Class results or transitioning to intermediate.",
        keySubjects: ["Biology", "Chemistry", "Physics"],
        documentsRequired: [
          "Result card / marks sheet 9th Class",
          "Copy of Parent / Guardian CNIC",
          "Copy of Student CNIC / B-Form",
          "1 Recent Passport Size Photographs",
        ],
        highlights: [
          "Early syllabus coverage before college sessions begin",
          "Intensive conceptual foundation building",
          "Weekly assessment tests and personalized feedback",
          "One-on-one doubt clearing sessions with senior professors",
        ],
      },
      {
        id: "fsc-pre-engineering",
        label: "FSc Pre-Engineering",
        aboutTitle: "About Program",
        aboutDescription:
          "FSc Pre-Engineering is designed for students interested in engineering, technology, and technical fields. It focuses on Mathematics, Physics, and Chemistry, which require deep understanding and regular practice. Our teachers guide students through complex formulas, numerical problems, and important concepts. We provide topic-wise practice, tests, notes, and board-exam preparation for every subject. Students learn smart methods to solve questions accurately and manage their time effectively. This programme prepares students for engineering universities and competitive entry tests.",
        duration: "6 Months (Part I & Part II)",
        eligibility: "Minimum 60% in Matriculation (Science with Biology).",
        keySubjects: ["Math", "Physics", "Chemistry (Organic & Inorganic)"],
        documentsRequired: [
          "Matriculation / 10th Class Result Card / Certificate",
          "Provisional Certificate / Character Certificate from school",
          "Copy of Student CNIC / B-Form",
          "Copy of Father / Guardian CNIC",
          "1 Passport Size Photographs (Blue Background)",
        ],
        highlights: [
          "MDCAT-aligned lecture methodology",
          "Interactive 3D visual diagrams and laboratory demonstrations",
          "Comprehensive past paper analysis (last 10 years)",
          "Regular monthly grand tests and parent progress tracking",
        ],
      },
      {
        id: "ics",
        label: "ICS",
        aboutTitle: "About Program",
        aboutDescription:
          "ICS is the right choice for students interested in computers, programming, mathematics, Artificial Intelligence, and technology. The programme develops logical thinking, problem-solving ability, and a strong base in computer science. Our teachers explain Computer Science, Mathematics, and related subjects with clear concepts and practical examples. Students receive regular practice to improve their understanding of programming, AI concepts, and technical topics. Individual guidance helps them overcome weak areas and gain confidence in every subject. ICS creates a strong pathway towards careers in Software Engineering, IT, Artificial Intelligence, Data Science, and Computing.",
        duration: "6 Months (Part I & Part II)",
        eligibility: "Minimum 60% in Matriculation (Science with Mathematics).",
        keySubjects: [
          "Advanced Mathematics (Calculus, Algebra, Geometry)",
          "Physics (Mechanics, Electromagnetism)",
          "Computer",
          "Stat",
        ],
        documentsRequired: [
          "Matriculation Result Card / Mark Sheet",
          "School Leaving / Character Certificate",
          "Copy of Student B-Form / CNIC",
          "Copy of Father / Guardian CNIC",
          "1 Passport Size Photographs",
        ],
        highlights: [
          "In-depth derivation and problem-solving practice",
          "ECAT / NET integrated question banks",
          "Special formula revision booklets and cheat sheets",
          "Recorded video lectures available 24/7 for revision",
        ],
      },
      {
        id: "general-science",
        label: "General Science",
        aboutTitle: "About Program",
        aboutDescription:
          "General Science is suitable for students who want a balanced combination of science-based subjects. It helps students develop analytical skills, numerical ability, and a broader understanding of modern fields. Subject combinations may include Mathematics, Statistics, Computer Science, Economics, or other board-approved options. Our teachers provide focused support according to each student’s selected subjects and learning needs. Regular practice, assessments, and clear explanations help students achieve better results. This programme can lead students towards further studies in science, technology, business, and related fields.",
        duration: "6 Months (Part I & Part II)",
        eligibility:
          "Minimum 50% in Matriculation (Science / Computer Science).",
        keySubjects: [
          "Computer Science (C / C++ Programming, Database Systems)",
          "Mathematics",
          "Physics / Statistics",
          "English & Urdu",
          "Islamic Studies & Pakistan Studies",
        ],
        documentsRequired: [
          "Matriculation Result Card",
          "Character Certificate",
          "Copy of Student B-Form / CNIC",
          "Copy of Parent CNIC",
          "1 Passport Size Photographs",
        ],
        highlights: [
          "Hands-on coding labs and compiler practice",
          "FAST, NUST, and ITU computer science entry test orientation",
          "Comprehensive theoretical and practical exam preparation",
        ],
      },
      {
        id: "fa",
        label: "FA",
        aboutTitle: "About Program",
        aboutDescription:
          "FA is designed for students interested in arts, humanities, social sciences, education, and business-related fields. It offers a flexible range of subjects that help students explore their interests and future goals. Our teachers make every subject easy to understand through clear explanations, notes, and regular practice. Students receive individual attention to improve writing skills, knowledge, and examination performance. We guide them in preparing effectively for board exams with proper planning and revision. FA provides a valuable foundation for higher education in fields such as education, psychology, media, law, and social sciences.",
        duration: "6 Months (Part I & Part II)",
        eligibility: "Matriculation (Science or Arts / General).",
        keySubjects: [
          "Principles of Accounting",
          "Principles of Economics",
          "Principles of Commerce & Banking",
          "Business Mathematics & Statistics",
          "Commercial Geography",
          "English & Urdu",
        ],
        documentsRequired: [
          "Matriculation Mark Sheet",
          "Copy of Student B-Form / CNIC",
          "Copy of Parent CNIC",
          "1 Passport Size Photographs",
        ],
        highlights: [
          "Real-world business case studies and ledger accounting",
          "CA / ACCA foundation preparation guidance",
          "Structured exam-oriented question papers",
        ],
      },
    ],
  },
  {
    slug: "a-level",
    title: "A Level Programs",
    shortTitle: "A Level",
    category: "Advanced Level",
    level: "Advanced",
    rating: 4.9,
    students: "1800+",
    duration: "6 Months",
    price: "$399",
    cardDescription:
      "Comprehensive preparation for Cambridge and Edexcel Advanced Level examinations with in-depth subject mastery.",
    image:
      "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=400",
    heroHeading: "Cambridge & Edexcel A-Level Programs",
    heroDescription:
      "Our A-Level academic tracks are structured to help students achieve straight A*s and secure admissions into prestigious universities worldwide. Experience top-tier mentorship, topical past-paper drills, and marking scheme mastery.",
    tabs: [
      {
        id: "a-level-medical",
        label: "A Level Medical",
        aboutTitle: "About Program",
        aboutDescription:
          "A Level Medical is for students aiming for medicine, dentistry, pharmacy, nursing, and health sciences. The usual combination includes Biology, Chemistry, and Physics or Mathematics. Our subject-specialist teachers explain advanced concepts with depth and individual attention. Students receive topic-wise practice, past-paper discussion, and guidance for structured answers. Regular assessments help them strengthen weak areas and prepare confidently for examinations. This pathway supports admission preparation for medical universities and health-science programmes.",
        duration: "6 Months",
        eligibility:
          "Minimum 5 O-Level / IGCSE subjects or high matriculation score.",
        keySubjects: [
          "Physics",
          "Chemistry",
          "Mathematics (Pure Math & Mechanics/Stats)",
          "Biology",
          "Economics",
          "Computer Science",
        ],
        documentsRequired: [
          "O-Level / IGCSE Statement of Results / Certificates",
          "Copy of Passport / National ID",
          "Previous School Reference Letter",
          "1 Recent Passport Size Photographs",
        ],
        highlights: [
          "Topic-by-topic Cambridge past paper questions",
          "Emphasis on examiner reports and marking scheme nuances",
          "Regular mock exams under timed conditions",
        ],
      },
      {
        id: "a-level-engineering",
        label: "A Level Engineering",
        aboutTitle: "About Program",
        aboutDescription:
          "A Level Engineering is designed for students interested in engineering, technology, and technical careers. It commonly includes Mathematics, Physics, and Chemistry or Computer Science. Our teachers make complex numerical problems and scientific concepts easier to understand. Students learn effective methods for solving questions accurately within the examination time. Past-paper practice and individual feedback help improve confidence and performance. This field prepares students for Engineering, Architecture, Technology, and related university programmes.",
        duration: "6 Months",
        eligibility:
          "Completion of A-Level-Engineering with satisfactory grades.",
        keySubjects: [
          "Advanced Pure Mathematics & Statistics",
          "A2 Physics & Practical Skills",
          "A2 Chemistry (Organic Synthesis & Energetics)",
          "A2 Biology & Genetics",
          "Business, Accounting & Economics",
        ],
        documentsRequired: [
          "AS Level Results / Transcript",
          "Copy of Passport / National ID",
          "1 Passport Size Photographs",
        ],
        highlights: [
          "Yearly past paper marathons (2015-2024)",
          "Structured revision bootcamps before May/June & Oct/Nov series",
          "University application & personal statement guidance",
        ],
      },
      {
        id: "a-level-computer-science-&-ai",
        label: "A Level Computer Science & AI",
        aboutTitle: "About Program",
        aboutDescription:
          "A Level Computer Science and AI is for students interested in programming, computing, data, and modern technology. It commonly combines Computer Science with Mathematics, Physics, or other relevant subjects. Students develop advanced logical thinking, programming skills, and problem-solving ability. Our teachers provide focused support for algorithms, coding, theory, and technical exam questions. Regular practice and past-paper sessions help students understand Cambridge examination requirements. This pathway leads towards Software Engineering, Artificial Intelligence, Data Science, Cybersecurity, and IT.",
        duration: "6 Months",
        keySubjects: ["Computer", "Physics or Mathematics", "Chemistry"],
        documentsRequired: [
          "O-Level / IGCSE Result Cards",
          "Copy of Student ID / Passport",
          "1 Passport Photos",
        ],
        highlights: [
          "Integrated MDCAT preparation alongside A-Level content",
          "Extensive diagrammatic and clinical application questions",
        ],
      },
      {
        id: "a-level-business",
        label: "A Level Business",
        aboutTitle: "About Program",
        aboutDescription:
          "A Level Business is for students who want to explore business, accounting, economics, finance, and entrepreneurship. Common subjects include Business, Accounting, Economics, and Mathematics. Our teachers connect academic concepts with real business examples to make learning meaningful. Students learn financial analysis, business decision-making, and effective exam-answering techniques. Individual guidance and regular practice help students improve in every selected subject. This field prepares students for university degrees in Business, Finance, Economics, Marketing, and Management.",
        duration: "6 Months",
        keySubjects: ["Economics", "Accounting", "Finance"],
        documentsRequired: [
          "O-Level / IGCSE Mark Sheets",
          "Copy of Student ID / Passport",
          "1 Passport Photos",
        ],
        highlights: [
          "Calculus and mechanics problem-solving masterclasses",
          "Algorithm and pseudocode debugging workshops",
        ],
      },
      {
        id: "a-level-humanities",
        label: "A Level Humanities",
        aboutTitle: "About Program",
        aboutDescription:
          "A Level Humanities is suitable for students interested in social sciences, law, media, psychology, and education.Students may select subjects such as Sociology, Psychology, History, Literature, or related options. Our teachers help students develop strong research, analysis, writing, and critical-thinking skills. Lessons focus on understanding ideas deeply and presenting answers in a clear, organized way. Regular feedback and past-paper practice prepare students for high-quality examination performance. This pathway supports future studies in Law, Media, Psychology, International Relations, and Social Sciences.",
        duration: "6 Months",
        keySubjects: ["Social sciences", "Law", "Media"],
        documentsRequired: [
          "O-Level / IGCSE Mark Sheets",
          "Copy of Student ID / Passport",
          "1 Passport Photos",
        ],
        highlights: [
          "Calculus and mechanics problem-solving masterclasses",
          "Algorithm and pseudocode debugging workshops",
        ],
      },
    ],
  },
  {
    slug: "o-level",
    title: "O Level / IGCSE Programs",
    shortTitle: "O Level",
    category: "Ordinary Level",
    level: "Intermediate",
    rating: 4.8,
    students: "2200+",
    duration: "6 Months",
    price: "$349",
    cardDescription:
      "Complete Ordinary Level course covering core subjects, Cambridge syllabus, and exam preparation strategies.",
    image:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=400",
    heroHeading: "Cambridge O-Level & IGCSE Programs",
    heroDescription:
      "Our O Level sessions provide focused support for students following the Cambridge curriculum. We make difficult concepts easier through clear teaching, practical examples, and guided practice. Students receive help with syllabus coverage, topical questions, and past-paper preparation. Our teachers emphasize critical thinking, time management, and effective answering techniques. Individual attention helps every student improve in the subjects they find challenging. We prepare O Level students to achieve their best possible grades with confidence.",
    tabs: [
      {
        id: "o-level-science-medical",
        label: "O Level Science - Medical",
        aboutTitle: "About Program",
        aboutDescription:
          "O Level Science–Medical is for students interested in Biology, medicine, and health-related fields. It commonly includes Biology, Chemistry, Physics, and Mathematics. Our teachers build strong concepts through clear explanations, practical examples, and regular practice. Students receive help with topical questions, structured papers, and past-paper techniques. Individual guidance helps them improve weak areas and gain confidence in each subject. This pathway prepares students for A Level Biology and future medical or health-science studies.",
        duration: "6 Months",
        eligibility: "Completion of 7th / 8th Grade or equivalent.",
        keySubjects: [
          "English",
          "Mathematics",
          "Islamiyat",
          "Pakistan Studies",
          "General Science Foundation",
        ],
        documentsRequired: [
          "Previous Grade 7/8 Report Card",
          "Copy of Student B-Form / Passport",
          "Copy of Parent CNIC / Passport",
          "1 Passport Size Photographs",
        ],
        highlights: [
          "Smooth transition from middle school to Cambridge system",
          "Early completion of compulsory subjects (Pak Studies & Islamiyat)",
          "Regular homework support and active mentor discussions",
        ],
      },
      {
        id: "o-level-science-computer",
        label: "O Level Science - Computer",
        aboutTitle: "About Program",
        aboutDescription:
          "O Level Science-Computer is ideal for students interested in technology, coding, and digital innovation. It combines Computer Science with important subjects such as Mathematics, Physics, and Chemistry. Students develop logical thinking, problem-solving skills, and a strong understanding of computer concepts. Our teachers provide clear guidance for programming, theory, and practical question-solving. Regular past-paper practice helps students learn how to answer Cambridge-style questions effectively. This field creates a strong base for A Level Computer Science, AI, IT, and Software Engineering.",
        duration: "6 Months",
        eligibility: "Satisfactory completion of O-1.",
        keySubjects: [
          "Islamiyat & Pakistan Studies (Exam Preparation)",
          "Physics",
          "Chemistry",
          "Biology  / Computer Science",
          "Principles of Accounts / Economics",
        ],
        documentsRequired: [
          "O-1 Academic Transcript",
          "Copy of Student B-Form / Passport",
          "1 Passport Size Photographs",
        ],
        highlights: [
          "Guaranteed syllabus completion 3 months prior to CAIE exams",
          "Targeted writing techniques for History & Geography papers",
          "Weekly topical test sessions",
        ],
      },
      {
        id: "o-level-business",
        label: "O Level Business",
        aboutTitle: "About Program",
        aboutDescription:
          "O Level Business is suitable for students interested in business, finance, entrepreneurship, and economics. It may include subjects such as Business Studies, Accounting, Economics, and Mathematics. Our teachers explain business concepts with practical examples from real life and modern markets. Students learn how to analyze questions, understand financial records, and write effective answers. We provide regular practice, feedback, and past-paper preparation for every subject. This pathway prepares students for A Level Business, Accounting, Economics, Finance, and Management.",
        duration: "6 Months",
        eligibility: "Completion of O-2.",
        keySubjects: [
          "English",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology / Computer Science",
        ],
        documentsRequired: [
          "O-2 Result Sheet / Mock Exam Report",
          "Copy of Student Passport / B-Form",
          "1 Passport Size Photographs",
        ],
        highlights: [
          "10+ years solved topical and yearly past papers",
          "ATP (Alternative to Practical) dedicated workshop sessions",
          "Detailed individual examiner style evaluation",
        ],
      },
      {
        id: "o-level-humanities",
        label: "O Level Humanities",
        aboutTitle: "About Program",
        aboutDescription:
          "O Level Humanities is for students interested in society, history, languages, media, and social sciences. Students may choose subjects such as History, Geography, Sociology, Literature, or related options. Our teachers help students improve their reading, writing, analysis, and answer-structuring skills. Lessons focus on clear understanding, critical thinking, and effective written expression. Regular revision and past-paper practice build confidence for Cambridge examinations. This field provides a strong foundation for A Level Humanities, Law, Media, Psychology, and Education.",
        duration: "6 Months",
        keySubjects: [
          "Physics",
          "Chemistry",
          "Biology",
          "Computer Science",
          "Mathematics",
        ],
        documentsRequired: [
          "School Report Card",
          "Copy of B-Form / Passport",
          "1 Passport Photos",
        ],
        highlights: [
          "Strong preparation for A-Levels & F.Sc Pre-Medical/Pre-Engineering",
          "Conceptual visualization of experimental science",
        ],
      },
    ],
  },
  {
    slug: "entry-test",
    title: "Entry Test Preparation",
    shortTitle: "Entry Test",
    category: "Test Preparation",
    level: "Advanced / Competitive",
    rating: 4.9,
    students: "5000+",
    duration: "8-12 Weeks",
    price: "$279",
    cardDescription:
      "Specialized preparation for medical (MDCAT), engineering (ECAT), NUST (NET), and university admission tests.",
    image:
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400",
    heroHeading: "University Entry Test Master Preparation",
    heroDescription:
      "Crack top university admissions with our intensive test prep programs. Master time management, shortcut techniques, high-yield MCQs, and full-length simulated tests for MDCAT, ECAT, NET, and more.",
    tabs: [
      {
        id: "mdcat",
        label: "MDCAT (Medical)",
        aboutTitle: "About Program",
        aboutDescription:
          "Comprehensive MDCAT preparation covering PMDC curriculum with 10,000+ high-yield MCQs, rapid revision lectures, and full-length FLPs (Full Length Papers) designed under exact exam conditions.",
        duration: "8-10 Weeks Intensive",
        eligibility: "F.Sc Pre-Medical or A-Level students appearing in MDCAT.",
        keySubjects: [
          "Biology (Highest Weightage)",
          "Chemistry (Conceptual & Numerical)",
          "Physics (Shortcuts & Formulas)",
          "English (Grammar & Vocabulary)",
          "Logical Reasoning",
        ],
        documentsRequired: [
          "F.Sc Part 1 / Part 2 Result Card or A-Level Certificate",
          "Copy of CNIC / B-Form",
          "1 Passport Size Photographs",
        ],
        highlights: [
          "15+ Full Length Simulation Papers with live discussions",
          "Smart time management strategies (sub-45 seconds per MCQ)",
          "Rank analytics against thousands of test takers",
        ],
      },
      {
        id: "ecat",
        label: "ECAT (UET / Engineering)",
        aboutTitle: "About Program",
        aboutDescription:
          "Targeted ECAT program for admission to UET and premier engineering institutions. Focuses on advanced problem solving in Math and Physics without calculator dependencies.",
        duration: "8 Weeks Intensive",
        eligibility: "F.Sc Pre-Engineering / ICS / A-Level students.",
        keySubjects: [
          "Mathematics",
          "Physics",
          "Chemistry / Computer Science",
          "English",
        ],
        documentsRequired: [
          "Intermediate / A-Level Result Card",
          "Copy of CNIC / B-Form",
          "1 Passport Photos",
        ],
        highlights: [
          "No-calculator mental math shortcut techniques",
          "Topic-wise and cumulative mock test papers",
        ],
      },
      {
        id: "net-nust",
        label: "NET (NUST Entry Test)",
        aboutTitle: "About Program",
        aboutDescription:
          "Complete preparation for NUST Entry Test series (NET-1, NET-2, NET-3, NET-4) for Engineering, Computing, Applied Sciences, and Business disciplines.",
        duration: "6-8 Weeks per Series",
        keySubjects: [
          "Advanced Mathematics / Biology",
          "Physics",
          "Chemistry / Computer",
          "Intelligence & English",
        ],
        documentsRequired: [
          "Intermediate / A-Level Mark Sheet",
          "Copy of CNIC / B-Form",
          "1 Passport Photos",
        ],
        highlights: [
          "Computer-based test (CBT) interface simulation",
          "Detailed analytical breakdown of past NUST questions",
        ],
      },
      {
        id: "fast-giki",
        label: "FAST & GIKI Prep",
        aboutTitle: "About Program",
        aboutDescription:
          "Specialized speed and accuracy drills for FAST-NUCES (Advanced Math & IQ) and GIKI engineering entry tests.",
        duration: "6 Weeks",
        keySubjects: [
          "Advanced Mathematics",
          "Analytical Reasoning & IQ",
          "Physics / CS",
        ],
        documentsRequired: [
          "Result Card",
          "Copy of B-Form / CNIC",
          "1 Passport Photos",
        ],
        highlights: [
          "Fast-paced analytical reasoning and negative marking management",
        ],
      },
    ],
  },
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return coursesData.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}
