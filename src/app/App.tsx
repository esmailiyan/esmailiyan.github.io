const ACCENT = "#1a56db";

const printStyles = `
@media print {
  body { background: white !important; }
  .no-print { display: none !important; }
  .print-card { box-shadow: none !important; margin: 0 !important; max-width: 100% !important; }
  @page { margin: 20mm 8mm 8mm 8mm; size: A4; }
  @page :first { margin-top: 2mm; }
}
`;

function DownloadButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-semibold shadow-lg transition-opacity hover:opacity-90"
      style={{ background: ACCENT, zIndex: 50 }}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download PDF
    </button>
  );
}

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3 mt-5">
      <h2
        className="text-sm font-bold uppercase tracking-widest pb-1 border-b-2"
        style={{
          color: ACCENT,
          borderColor: ACCENT,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {children}
      </h2>
    </div>
  );
}

export default function App() {
  return (
    <>
      <style>{printStyles}</style>
      <DownloadButton />
      <div
        className="no-print-bg min-h-screen bg-gray-100 flex items-start justify-center py-10 px-4"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="print-card bg-white w-full max-w-3xl shadow-sm px-12 py-10 text-gray-800">
          {/* HEADER */}
          <div className="text-center mb-1">
            <h1 className="text-2xl font-black tracking-tight text-gray-900">
              MohamadMahdi Esmailiyan
            </h1>
            <p
              className="text-sm font-semibold mt-0.5"
              style={{ color: ACCENT }}
            >
              Junior Data Scientist | ML Engineer
            </p>
            <p className="text-xs text-gray-600 mt-1">
              +98 996 266 6168 &nbsp;|&nbsp;
              <a
                href="mailto:esmailiyan.mahdi@gmail.com"
                style={{ color: ACCENT }}
              >
                esmailiyan.mahdi@gmail.com
              </a>
              &nbsp;|&nbsp; Tehran, Iran
            </p>
            <p className="text-xs text-gray-600 mt-0.5">
              <a
                href="https://www.linkedin.com/in/mohamadmahdi-esmailiyan"
                style={{ color: ACCENT }}
              >
                linkedin.com/in/mohamadmahdi-esmailiyan
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://github.com/esmailiyan"
                style={{ color: ACCENT }}
              >
                github.com/esmailiyan
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://kaggle.com/esmailiyan"
                style={{ color: ACCENT }}
              >
                kaggle.com/esmailiyan
              </a>
            </p>
          </div>
          {/* SUMMARY */}
          <SectionTitle>Summary</SectionTitle>
          <p className="text-xs leading-relaxed text-gray-700">
            Computer Science undergraduate at the University of
            Tehran specializing in machine learning, data
            analysis, and predictive modeling. Experienced in
            developing ML solutions using Python and
            Scikit-learn through academic projects, Kaggle
            competitions, and real-world software engineering
            experience. Silver medalist in an international
            Kaggle AI competition with a strong foundation in
            mathematics, statistics, and computer science.
          </p>
          {/* V1: <p className="text-xs leading-relaxed text-gray-700">
            Computer Science undergraduate at the University of
            Tehran with a strong foundation in mathematics,
            statistics and machine learning. Experienced in
            Python programming, data analysis, predictive
            modeling through academic, personal, and competitive
            projects. Recognized in national AI and programming
            competitions. Passionate about leveraging data to
            solve complex problems and eager to contribute as a
            Junior Data Scientist while continuously learning
            and growing in the field.
          </p> */}

          {/* SKILLS */}
          <SectionTitle>Skills</SectionTitle>
          <div className="space-y-1 text-xs text-gray-700">
            <p>
              <span
                className="font-bold"
                style={{ color: ACCENT }}
              >
                Programming:{" "}
              </span>
              Python, C++
            </p>
            <p>
              <span
                className="font-bold"
                style={{ color: ACCENT }}
              >
                Data Analysis:{" "}
              </span>
              NumPy, Pandas, Exploratory Data Analysis, Data
              Cleaning and Preprocessing, Feature Selection,
              Missing-Value Handling, Outlier Detection and
              Treatment
            </p>
            <p>
              <span
                className="font-bold"
                style={{ color: ACCENT }}
              >
                Machine Learning:{" "}
              </span>
              Scikit-learn, Regression, Classification, Feature
              Engineering, Cross-Validation, Regularization,
              Hyperparameter Tuning, Model Evaluation
            </p>
            <p>
              <span
                className="font-bold"
                style={{ color: ACCENT }}
              >
                Data Visualization:{" "}
              </span>
              Matplotlib, Seaborn
            </p>
            <p>
              <span
                className="font-bold"
                style={{ color: ACCENT }}
              >
                Mathematics &amp; Statistics:{" "}
              </span>
              Statistical Analysis, Probability, Linear Algebra,
              Optimization, Regression Analysis
            </p>
            <p>
              <span
                className="font-bold"
                style={{ color: ACCENT }}
              >
                Development Tools:{" "}
              </span>
              Git, GitHub, Jupyter Notebook, Linux, Docker
            </p>
            <p>
              <span
                className="font-bold"
                style={{ color: ACCENT }}
              >
                Additional Technologies:{" "}
              </span>
              Large Language Models (LLM), LangChain, DevOps
            </p>
            <p>
              <span
                className="font-bold"
                style={{ color: ACCENT }}
              >
                Soft Skills:{" "}
              </span>
              Problem Solving, Critical Thinking, Fast Learning,
              Attention to Detail, Creativity, Innovation
            </p>
          </div>
          {/* EDUCATION */}
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-3">
            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-gray-800">
                  Bachelor of Science, Computer Science
                </span>
                <span className="text-xs text-gray-500 shrink-0 ml-2">
                  Oct 2023 – Present
                </span>
              </div>
              <p
                className="text-xs font-semibold"
                style={{ color: ACCENT }}
              >
                University of Tehran — Faculty of Mathematics,
                Statistics and Computer Science
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Relevant coursework: Probability &amp;
                Statistics, Statistical Methods, Data
                Structures, Algorithm Design, Machine Learning,
                Linear Algebra, Calculus, Combinatorics,
                Networks, Computation Theory
              </p>
              <span className="text-xs text-gray-500 mt-0.5">
                Grade: 19.2 / 20
              </span>
            </div>
          </div>
          {/* PROJECTS */}
          <SectionTitle>Projects</SectionTitle>
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-gray-800">
                  Breast Cancer Detection — AI Competition
                </span>
                <span className="text-xs text-gray-500 ml-2 italic shrink-0">
                  Private Repository
                </span>
              </div>
              <ul className="space-y-0.5 mt-1">
                {[
                  "Developed ML models for cancer diagnosis using clinical data.",
                  // "Applied preprocessing, feature engineering, and model evaluation.",
                  "Achieved a Silver Medal in an international Kaggle competition.",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 items-start text-xs text-gray-600"
                  >
                    <span className="shrink-0 mt-0.5">•</span>{" "}
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-0.5">
                <span className="font-semibold">Tech:</span>{" "}
                Python, NumPy, Pandas, Matplotlib, Scikit-learn,
                Data Mining
              </p>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-gray-800">
                  Balang — IELTS Learning Platform
                </span>
                <a
                  href="https://www.balangapp.com/"
                  className="text-xs ml-2 shrink-0"
                  style={{ color: ACCENT }}
                >
                  Website
                </a>
              </div>
              <ul className="space-y-0.5 mt-1">
                {[
                  "Co-developed an AI-powered IELTS learning platform.",
                  "Built intelligent features for personalized learning.",
                  "Developed and deployed a real-world product.",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 items-start text-xs text-gray-600"
                  >
                    <span className="shrink-0 mt-0.5">•</span>{" "}
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-0.5">
                <span className="font-semibold">Tech:</span>{" "}
                Python, AI, LLM, DevOps
              </p>
            </div>
            <div>
              <span className="text-xs font-bold text-gray-800">
                ‌‌‌‌‌
              </span>
              <span className="text-xs font-bold text-gray-800">
                ‌‌‌‌‌
              </span>
              <span className="text-xs font-bold text-gray-800">
                ‌‌‌‌‌
              </span>
              <span className="text-xs font-bold text-gray-800">
                ‌‌‌‌‌
              </span>
              <span className="text-xs font-bold text-gray-800">
                ‌‌‌‌‌
              </span>
              <span className="text-xs font-bold text-gray-800">
                ‌‌‌‌‌
              </span>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-gray-800">
                  Boston Housing Price Prediction
                </span>
                <a
                  href="https://github.com/esmailiyan/Housing-prices"
                  className="text-xs ml-2 shrink-0"
                  style={{ color: ACCENT }}
                >
                  GitHub
                </a>
              </div>
              <ul className="space-y-0.5 mt-1">
                {[
                  "Built regression models for housing price prediction.",
                  //"Applied EDA, preprocessing, and feature engineering.",
                  "Compared models using regression metrics.",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 items-start text-xs text-gray-600"
                  >
                    <span className="shrink-0 mt-0.5">•</span>{" "}
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-0.5">
                <span className="font-semibold">Tech:</span>{" "}
                Python, NumPy, Pandas, Matplotlib, Scikit-learn,
                Jupyter Notebook
              </p>
            </div>

            {/* <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-gray-800">
                  Accident Severity Prediction — Data Mining
                  Project
                </span>
                <span className="text-xs text-gray-500 ml-2 italic shrink-0">
                  Ongoing
                </span>
              </div>
              <ul className="space-y-0.5 mt-1">
                {[
                  "Developing ML models for accident severity prediction.",
                  "Performing data analysis and feature engineering.",
                  "Identifying factors affecting accident outcomes.",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 items-start text-xs text-gray-600"
                  >
                    <span className="shrink-0 mt-0.5">•</span>{" "}
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-0.5">
                <span className="font-semibold">Tech:</span>{" "}
                Python, NumPy, Pandas, Matplotlib, Scikit-learn,
                Data Mining
              </p>
            </div> */}

            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-gray-800">
                  Diabetes Prediction — Biology Course Project
                </span>
                <a
                  href="https://github.com/esmailiyan/Diabetes-Prediction"
                  className="text-xs ml-2 shrink-0"
                  style={{ color: ACCENT }}
                >
                  GitHub
                </a>
              </div>
              <ul className="space-y-0.5 mt-1">
                {[
                  "Built a classification model for diabetes prediction.",
                  "Analyzed health-related features and trained ML models.",
                  // "Evaluated model performance using classification metrics.",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 items-start text-xs text-gray-600"
                  >
                    <span className="shrink-0 mt-0.5">•</span>{" "}
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-0.5">
                <span className="font-semibold">Tech:</span>{" "}
                Python, NumPy, Pandas, Matplotlib, Scikit-learn,
                Jupyter Notebook
              </p>
            </div>
          </div>
          {/* EXPERIENCE */}
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-gray-800">
                  Software Engineer
                </span>
                <span className="text-xs text-gray-500 shrink-0 ml-2">
                  May 2025 – Jan 2026
                </span>
              </div>
              <p
                className="text-xs font-semibold"
                style={{ color: ACCENT }}
              >
                Tejarat Hooshmand Sharif (THS) — Tehran, Iran
              </p>
              <ul className="mt-1 space-y-0.5">
                {[
                  "Developed Python-based software components and AI-driven solutions in a professional engineering environment.",
                  "Designed and deployed self-hosted infrastructure solutions (private Docker registry and internal collaboration tools) to improve operational resilience and reduce external dependencies.",
                  // "Worked with Linux systems, debugging, optimization, and DevOps workflows.",
                  "Gained experience with LLM applications and DevOps workflows.",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 items-start text-xs text-gray-600"
                  >
                    <span className="shrink-0 mt-0.5">•</span>{" "}
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-gray-800">
                  Teaching Assistant
                </span>
                <span className="text-xs text-gray-500 shrink-0 ml-2">
                  Sep 2024 – Jul 2026 
                </span>
              </div>
              <p
                className="text-xs font-semibold"
                style={{ color: ACCENT }}
              >
                University of Tehran — Tehran, Iran
              </p>
              <p className="text-xs text-gray-500 mt-0.5 italic">
                Courses: Probability &amp; Distribution Theory,
                Data Structures, Basic Programming, Calculus I,
                Fundamentals of Combinatorics
              </p>
              <ul className="mt-1 space-y-0.5">
                {[
                  "Assisted undergraduate courses in mathematics and computer science.",
                  "Led problem-solving sessions and provided technical feedback.",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 items-start text-xs text-gray-600"
                  >
                    <span className="shrink-0 mt-0.5">•</span>{" "}
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-gray-800">
                  Educational Content Designer
                </span>
                <span className="text-xs text-gray-500 shrink-0 ml-2">
                  Apr 2024 – Sep 2024
                </span>
              </div>
              <p
                className="text-xs font-semibold"
                style={{ color: ACCENT }}
              >
                Juniora — Tehran, Iran
              </p>
              <ul className="mt-1 space-y-0.5">
                {[
                  "Researched and improved educational management systems for programming courses.",
                  "Designed specialized judging systems for automated programming assessment.",
                  // "Developed structured technical content and learning workflows",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 items-start text-xs text-gray-600"
                  >
                    <span className="shrink-0 mt-0.5">•</span>{" "}
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-gray-800">
                  Robotics Programmer
                </span>
                <span className="text-xs text-gray-500 shrink-0 ml-2">
                  Aug 2019 – Feb 2021
                </span>
              </div>
              <p
                className="text-xs font-semibold"
                style={{ color: ACCENT }}
              >
                Nesfe-Jahan Robotics Team (NJRT)
              </p>
              <ul className="mt-1 space-y-0.5">
                {[
                  "Developed control and decision-making logic for autonomous soccer robots using C/C++.",
                  "Collaborated with mechanical and electronics team members during competition preparation.",
                  "Debugged robotic behavior and contributed to national and international competition results.",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 items-start text-xs text-gray-600"
                  >
                    <span className="shrink-0 mt-0.5">•</span>{" "}
                    {b}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          {/* Achievements */}
          <SectionTitle>Achievements</SectionTitle>
          <ul className="space-y-1.5">
            {[
              "Silver Medal — Kaggle, Breast Cancer Detection AI Competition (ISIC), 2024",
              "2nd Place — Isfahan University of Technology, AICup National AI Competition, 2022",
              "7th Place — Sharif University of Technology, AIChallenge National AI Competition, 2022",
              "1st Place — Isfahan University of Technology, RoboIUT National Robotics Competition, 2022",
              "2nd Place — RoboCup Asia-Pacific, Junior Soccer League, 2021",
            ].map((award) => (
              <li
                key={award}
                className="flex gap-2 items-start text-xs text-gray-700"
              >
                <span className="shrink-0 mt-0.5">•</span>{" "}
                {award}
              </li>
            ))}
          </ul>
          {/* CERTIFICATIONS */}
          <SectionTitle>Certifications</SectionTitle>
          <ul className="space-y-1 text-xs text-gray-700">
            {[
              "Data Analysis with Python — Quera College, 2024",
              "LLM Application Development — Quera College, 2025",
              "Advanced Algorithmic Thinking and Data Structures — Quera College, 2021",
              "Design Thinking — Samsung Solve for Tomorrow Iran, 2025",
              "Scrum Foundations Course — Ultima Training Tech Co., 2024",
            ].map((cert) => (
              <li key={cert} className="flex gap-2 items-start">
                <span className="shrink-0 mt-0.5">•</span>{" "}
                {cert}
              </li>
            ))}
          </ul>
          {/* LANGUAGES */}
          <SectionTitle>Languages</SectionTitle>
          <p className="text-xs text-gray-700">
            <span
              className="font-bold"
              style={{ color: ACCENT }}
            >
              Persian
            </span>{" "}
            (Native) &nbsp;|&nbsp;
            <span
              className="font-bold"
              style={{ color: ACCENT }}
            >
              {" "}
              English
            </span>{" "}
            (Professional Working Proficiency) &nbsp;|&nbsp;
            <span
              className="font-bold"
              style={{ color: ACCENT }}
            >
              {" "}
              German
            </span>{" "}
            (Basic)
          </p>
        </div>
      </div>
    </>
  );
}