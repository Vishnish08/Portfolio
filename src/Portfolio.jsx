import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  FileText,
  Sparkles,
  Award,
  BookOpen,
  Shield,
  Trophy,
  ExternalLink,
} from "lucide-react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";

// -----------------------------
// 3D SCENE
// -----------------------------
function TorusKnot() {
  const geomArgs = useMemo(() => [1, 0.35, 220, 35], []);
  return (
    <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1.6}>
      <mesh castShadow receiveShadow>
        {/* @ts-ignore */}
        <torusKnotGeometry args={geomArgs} />
        <meshStandardMaterial
          metalness={0.6}
          roughness={0.2}
          color={"#bd93f9"}
        />
      </mesh>
    </Float>
  );
}

function ThreeScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 2.5, 5], fov: 45 }}
      className="rounded-3xl"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
      <Suspense
        fallback={
          <Html>
            <div className="text-sm bg-white/80 px-3 py-1 rounded-full shadow">
              Loading 3D…
            </div>
          </Html>
        }
      >
        <TorusKnot />
        <Stars
          radius={80}
          depth={50}
          count={8000}
          factor={4}
          saturation={0}
          fade
          speed={0.8}
        />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
}

// -----------------------------
// DATA (from resume)
// -----------------------------
const PROFILE = {
  name: "Vishakha Bhavsar",
  title: "Machine Learning Engineer | Generative AI Enthusiast",
  tagline: "Turning data into intelligent decisions.",
  summary:
    "Passionate about building intelligent systems with hands-on experience across NLP, classical ML, and analytics. Strong at end-to-end pipelines data prep, modeling, evaluation, and clear communication. Skilled in deploying models to production, collaborating with cross-functional teams, and continuously learning new technologies. Adept at translating complex data problems into actionable business solutions. Highly interested in Generative AI and its applications for real-world impact.",
  avatar: "/portrait.jpg", // replace with your image path
  location: "Gujarat, IN",
  email: "vishakhamb6@gmail.com",
  socials: {
    github: "https://github.com/Vishnish08",
    linkedin: "https://www.linkedin.com/in/vishakha-bhavsar-/",
    resume: "https://drive.google.com/drive/u/3/home",
  },
  highlights: [
    "AI Model Trainer @ Outlier.AI (Oct 2024 – Jan 2025)",
    "Fraud Detection: 98% accuracy",
    "Sentiment Analysis: 90% accuracy",
  ],
};

// >>> NEW: Professional Summary (expanded & polished, ~2× length)
const PRO_SUMMARY = [
  `I am a Machine Learning Engineer with a strong foundation in classical ML, NLP, and analytics. Skilled in Python, SQL, and ML libraries such as scikit-learn, TensorFlow, and (basics) PyTorch, I’ve delivered end-to-end projects including fraud detection (98% accuracy), sentiment analysis (90% accuracy), and predictive modeling for tabular data. I’m comfortable taking a problem from raw data to measurable impact: data cleaning, feature engineering, model selection, experimentation, and clear result communication.`,

  `During my role at Outlier.AI, I trained and reviewed Large Language Models (LLMs) across diverse tasks, gaining hands-on exposure to prompt design, rubric-based evaluation, edge-case analysis, and quality review workflows. I’m deeply enthusiastic about Generative AI and actively exploring Agentic AI where autonomous agents reason, plan, and act with tools. I enjoy designing evaluations that balance automatic metrics with human feedback, and I care about responsible AI practices such as data quality, bias checks, and traceability.`,

  `Beyond modeling, I prioritize engineering discipline: reproducible experiments, versioned datasets, and structured documentation. I’ve worked with notebooks and lightweight pipelines; I’m comfortable using Git/GitHub, Colab/Jupyter, and experiment tracking (MLflow/W&B basics). I collaborate well with cross-functional partners, translate business goals into measurable ML objectives, and iterate quickly based on feedback. I’m a fast learner who is intentional about reading papers, building prototypes, and turning research into practical solutions.`,

  `I’m looking to contribute as an ML/AI Engineer on teams that value clarity, reliability, and impact. I’m particularly excited about opportunities that combine classical ML with modern LLMs retrieval-augmented systems, intelligent agents, high-leverage analytics, and production-ready evaluation frameworks.`,
];

const SKILLS = [
  {
    group: "Programming & ML",
    items: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "PyTorch (basics)",
      "Keras",
    ],
  },
  {
    group: "Data & Visualization",
    items: [
      "SQL (basics)",
      "Matplotlib",
      "Seaborn",
      "Report Writing",
      "Power BI",
      "Excel",
    ],
  },
  {
    group: "ML Techniques",
    items: [
      "NLP",
      "Clustering (K-Means/DBSCAN)",
      "Regression",
      "Classification",
      "Time Series",
      "Dimensionality Reduction",
    ],
  },
  {
    group: "Tools",
    items: ["Jupyter", "GitHub", "SAP ML Advanced", "Google Colab", "VS Code"],
  },
  {
    group: "Core Strengths",
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Data-driven Planning",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "AI Model Trainer & Reviewer",
    company: "Outlier.AI (Remote)",
    period: "Oct 2024 – Jan 2025",
    bullets: [
      "Trained and reviewed Large Language Models across tasks.",
      "Created/assessed educational content for Mathematics & Data Analytics.",
      "Contributed to data model evaluation and content quality processes.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Customer Segmentation using K-Means",
    date: "Feb 2025",
    tagline: "Silhouette Score: 0.44",
    bullets: [
      "Preprocessed retail customer data and engineered features.",
      "Identified distinct purchasing-behavior segments for targeted marketing.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Vishnish08/Customer-Segmentation-KNN-/tree/main",
      },
    ],
  },
  {
    name: "Fraud Transaction Detection",
    date: "Aug 2024",
    tagline: "Accuracy: 98%",
    bullets: [
      "Handled class imbalance; engineered features for signal clarity.",
      "Optimized Logistic Regression, Random Forest, and XGBoost; evaluated with Precision/Recall/F1/ROC-AUC.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Vishnish08/Fraud-Transaction-Detection/tree/main",
      },
    ],
  },
  {
    name: "Movie Reviews Classification",
    date: "Jul 2024",
    tagline: "NLP Sentiment Analysis (Accuracy: 90%)",
    bullets: [
      "End-to-end preprocessing, BoW & TF-IDF feature extraction.",
      "Implemented Logistic Regression, SVM, and deep learning baselines; tracked accuracy/F1/ROC-AUC.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Vishnish08/Movie-Reviews-Classification",
      },
    ],
  },
  {
    name: "House Price Prediction",
    date: "Sep 2024",
    tagline: "R² ≈ 0.82 (Random Forest)",
    bullets: [
      "Exploratory analysis, preprocessing, and feature engineering on California housing data.",
      "Compared Linear Regression vs. Random Forest; identified key predictors (median income, location).",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Vishnish08/House-Price-Prediction",
      },
    ],
  },
  {
    name: "IPL Analysis using Python & Libraries",
    date: "Mar 2024",
    tagline: "EDA + Performance Insights",
    bullets: [
      "Analyzed player performance, match outcomes, and team strategies with Pandas/Matplotlib/Seaborn.",
      "Built simple ML baselines for performance prediction and insights.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Vishnish08/IPL-Analysis" }],
  },
  {
    name: "Customer Segmentation using DBSCAN",
    date: "Feb 2024",
    tagline: "Density-based clustering",
    bullets: [
      "Preprocessed data, tuned epsilon/minPts, and visualized clusters to surface buyer patterns.",
      "Identified high-value segments for targeted marketing strategies.",
    ],
    links: [
      {
        label: "GITHUB",
        href: "https://github.com/Vishnish08/Customer-Segmentation-DBSCAN-",
      },
    ],
  },
];

const EDUCATION = [
  {
    school: "Silver Oak University",
    program: "B.Tech in Computer Science Technology",
    meta: "7th Semester",
  },
  { school: "Adani Public School, Mundra", program: "HSC", meta: "2022" },
  { school: "Adani Public School, Mundra", program: "SSC", meta: "2020" },
];

const CERTS = [
  {
    name: "Machine Learning – Fundamentals of Python (Udemy)",
    link: "https://www.linkedin.com/posts/vishakha-bhavsar-_im-happy-to-share-that-ive-obtained-a-new-activity-7237817987766857729-YjIS/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3qKv4BT9a5aEH0sJG4ylxkf8pCkO_ICTo",
  },
  {
    name: "Python Programming (Great Learning)",
    link: "https://www.linkedin.com/posts/vishakha-bhavsar-_1000-free-courses-with-free-certificates-activity-7224464945856282627-EZ_P",
  },
  {
    name: "Supervised ML: Regression & Classification (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/records/PSGH76UDQLCC",
  },
  {
    name: "Python for Data Science (Infosys Springboard)",
    link: "https://www.linkedin.com/posts/vishakha-bhavsar-_im-happy-to-share-that-ive-obtained-a-new-activity-7249328318334849024-NYWl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3qKv4BT9a5aEH0sJG4ylxkf8pCkO_ICTo",
  },
  {
    name: "SAP Machine Learning – Advanced (Edunet Foundation)",
    link: "https://www.linkedin.com/posts/vishakha-bhavsar-_sap-machine-learning-advance-course-certificate-activity-7317805006101921793-idIS",
  },
];

const EXTRAS = [
  {
    icon: "shield",
    title: "NCC Air Wing",
    desc: "CWO at 2 GUJ AIR SQN NCC; B Certificate holder (Grade A).",
  },
  { icon: "trophy", title: "National Throwball", desc: "Captain of Gujarat Team." },
];

// -----------------------------
// UI HELPERS
// -----------------------------
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

// -----------------------------
// PAGE
// -----------------------------
export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Animated gradient backdrop */}
      <div className="fixed inset-0 -z-10 overflow-hidden w-full h-full">
        <div className="absolute -inset-[10%] w-full h-full bg-[radial-gradient(60%_60%_at_50%_50%,rgba(189,147,249,0.18),transparent),conic-gradient(from_180deg_at_50%_50%,rgba(255,121,198,0.18),transparent)] animate-slowspin" />
        <div className="stars-overlay pointer-events-none w-full h-full" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10 w-full">
        <div className="w-full max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-fuchsia-300" />
            <span className="font-semibold tracking-wide">{PROFILE.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a href="#about" className="px-3 py-1 rounded-full hover:bg-white/10">
              About
            </a>
            {/* NEW: Summary link */}
            <a href="#summary" className="px-3 py-1 rounded-full hover:bg-white/10">
              Summary
            </a>
            <a href="#skills" className="px-3 py-1 rounded-full hover:bg-white/10">
              Skills
            </a>
            <a href="#experience" className="px-3 py-1 rounded-full hover:bg-white/10">
              Experience
            </a>
            <a href="#projects" className="px-3 py-1 rounded-full hover:bg-white/10">
              Projects
            </a>
            <a href="#education" className="px-3 py-1 rounded-full hover:bg-white/10">
              Education
            </a>
            <a href="#certs" className="px-3 py-1 rounded-full hover:bg-white/10">
              Certifications
            </a>
            <a href="#extras" className="px-3 py-1 rounded-full hover:bg-white/10">
              Extracurricular
            </a>
            <a href="#contact" className="px-3 py-1 rounded-full hover:bg-white/10">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="small"
              variant="contained"
              style={{
                borderRadius: "999px",
                background: "#bd93f9",
                color: "#fff",
              }}
            >
              <a
                href={PROFILE.socials.resume}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FileText className="h-4 w-4 mr-1" /> Resume
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative w-full max-w-screen-2xl mx-auto px-4 pt-12 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300/80">
              {PROFILE.location}
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2 w-full">
              {PROFILE.name}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-400">
                {PROFILE.title}
              </span>
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl text-left md:text-justify">
              {PROFILE.summary}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {PROFILE.highlights.map((h) => (
                <li
                  key={h}
                  className="text-xs bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/10"
                >
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                variant="contained"
                style={{
                  borderRadius: "999px",
                  background: "#bd93f9",
                  color: "#fff",
                }}
              >
                <a
                  href="#projects"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowRight className="h-4 w-4 mr-1" /> Explore Projects
                </a>
              </Button>
              <Button
                variant="outlined"
                style={{
                  borderRadius: "999px",
                  color: "#bd93f9",
                  borderColor: "#bd93f9",
                }}
              >
                <a
                  href={`mailto:${PROFILE.email}`}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Mail className="h-4 w-4 mr-1" /> Email
                </a>
              </Button>
              <Button
                variant="text"
                style={{ borderRadius: "999px", color: "#fff" }}
              >
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Github className="h-4 w-4 mr-1" /> GitHub
                </a>
              </Button>
              <Button
                variant="text"
                style={{ borderRadius: "999px", color: "#fff" }}
              >
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Linkedin className="h-4 w-4 mr-1" /> LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-[2rem] p-2 bg-white/5 border border-white/10 shadow-2xl">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <ThreeScene />
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          {...fadeUp}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">About</h2>
          <p className="space-y-4 text-slate-300 text-justify-lg">
            I’m Vishakha, a Machine Learning Engineer who enjoys translating
            raw data into clear, actionable intelligence. I’ve built projects
            across NLP, fraud detection, forecasting, and segmentation, and I
            love the craft of clean, explainable models with solid evaluation.
            Outside work, NCC discipline and team sports keep me focused and
            collaborative.
          </p>
        </motion.div>
      </section>

      {/* NEW: PROFESSIONAL SUMMARY */}
      <section id="summary" className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          {...fadeUp}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Professional Summary
          </h2>

          <div className="space-y-4 text-slate-300 text-justify">
            {PRO_SUMMARY.map((para, idx) => (
              <p key={idx} className="leading-relaxed md:text-lg">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "End-to-End ML Pipelines",
              "Prompting & LLM Evaluation",
              "Feature Engineering",
              "Model Explainability",
              "Experiment Tracking (basics)",
              "Responsible AI",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((s) => (
            <motion.div key={s.group} {...fadeUp}>
              <Card
                className="bg-white/5 border-white/10 rounded-xl shadow transition hover:bg-white/10 flex flex-col justify-between"
                style={{ minHeight: 220, height: "100%" }}
              >
                <CardHeader title={<span className="tracking-wide">{s.group}</span>} style={{ paddingBottom: 0 }} />
                <CardContent style={{ paddingTop: 8 }}>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <span
                        key={i}
                        className="text-sm md:text-base bg-white/10 px-3 py-1 rounded-full border border-white/10 hover:bg-fuchsia-500/20 transition"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-4">
          {EXPERIENCE.map((e) => (
            <motion.div key={e.company} {...fadeUp} className="relative">
              <Card className="bg-white/5 border-white/10">
                <CardHeader
                  title={
                    <div className="flex items-center justify-between">
                      <span>
                        {e.role} —{" "}
                        <span className="text-fuchsia-400 font-semibold">
                          {e.company}
                        </span>
                      </span>
                      <span className="text-xs text-slate-900">{e.period}</span>
                    </div>
                  }
                />
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-slate-900">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <motion.div key={p.name} {...fadeUp}>
              <Card className="group bg-white/5 border-white/10 hover:bg-white/10 transition h-70 flex flex-col justify-between">
                <CardHeader
                  title={
                    <div className="flex items-center justify-between">
                      <span>{p.name}</span>
                      <span className="text-xs font-normal text-slate-900">
                        {p.date} • {p.tagline}
                      </span>
                    </div>
                  }
                />
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-slate-900">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-3">
                    {p.links.map((l) => (
                      <Button
                        key={l.label}
                        variant="contained"
                        size="small"
                        style={{
                          borderRadius: "999px",
                          background: "#bd93f9",
                          color: "#fff",
                        }}
                      >
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: "inherit",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {l.label} <ExternalLink className="inline h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Education
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-4">
          {EDUCATION.map((ed) => (
            <motion.div key={ed.school + ed.program} {...fadeUp}>
              <Card className="bg-white/5 border-white/10">
                <CardHeader title={<span className="tracking-wide">{ed.school}</span>} />
                <CardContent>
                  <p className="text-slate-900 font-medium">{ed.program}</p>
                  <p className="text-slate-900 text-sm">{ed.meta}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2"
        >
          <Award className="h-6 w-6" /> Certifications
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {CERTS.map((c) => (
            <motion.div key={c.name} {...fadeUp}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition">
                <CardHeader
                  title={
                    <div className="text-base flex items-start justify-between">
                      <span>{c.name}</span>
                      <a
                        className="text-xs text-fuchsia-300 hover:underline flex items-center gap-1"
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  }
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXTRACURRICULAR */}
      <section id="extras" className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2"
        >
          <BookOpen className="h-6 w-6" /> Extracurricular
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {EXTRAS.map((x) => (
            <motion.div key={x.title} {...fadeUp}>
              <Card className="bg-white/5 border-white/10 h-full min-h-[100px] flex flex-col justify-between">
                <CardHeader
                  title={
                    <div className="flex items-center gap-2">
                      {x.icon === "shield" ? (
                        <Shield className="h-5 w-5" />
                      ) : (
                        <Trophy className="h-5 w-5" />
                      )}
                      {x.title}
                    </div>
                  }
                />
                <CardContent>
                  <p className="text-slate-900">{x.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          {...fadeUp}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Let’s build something intelligent
          </h3>
          <p className="mt-2 text-slate-300">
            Open to ML engineering roles, research collaborations, and
            consulting.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <TextField
  label="Your name"
  variant="outlined"
  fullWidth
  margin="normal"
  InputProps={{
    style: {
      color: "#fff",              // white text inside input
      backgroundColor: "rgba(255,255,255,0.1)", // subtle dark background
      borderRadius: "8px",
    },
  }}
  InputLabelProps={{
    style: { color: "#ccc" },     // label color
  }}
/>

<TextField
  label="Email"
  type="email"
  variant="outlined"
  fullWidth
  margin="normal"
  InputProps={{
    style: {
      color: "#fff",
      backgroundColor: "rgba(255,255,255,0.1)",
      borderRadius: "8px",
    },
  }}
  InputLabelProps={{
    style: { color: "#ccc" },
  }}
/>

<TextField
  label="Message"
  multiline
  rows={5}
  variant="outlined"
  fullWidth
  margin="normal"
  InputProps={{
    style: {
      color: "#fff",
      backgroundColor: "rgba(255,255,255,0.1)",
      borderRadius: "8px",
    },
  }}
  InputLabelProps={{
    style: { color: "#ccc" },
  }}
/>

            
            
            <div className="md:col-span-2 flex gap-3">
              <Button
                variant="contained"
                style={{
                  borderRadius: "999px",
                  background: "#bd93f9",
                  color: "#fff",
                }}
              >
                Send
              </Button>
              <Button
                variant="outlined"
                style={{
                  borderRadius: "999px",
                  color: "#bd93f9",
                  borderColor: "#bd93f9",
                }}
              >
                <a
                  href={`mailto:${PROFILE.email}`}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Mail className="h-4 w-4 mr-1" /> Email
                </a>
              </Button>
              <Button
                variant="contained"
                style={{ borderRadius: "999px", background: "#0077b5", color: "#fff" }}
              >
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Linkedin className="h-4 w-4 mr-1" /> LinkedIn
                </a>
              </Button>
              <Button variant="text" style={{ borderRadius: "999px", color: "#fff" }}>
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Github className="h-4 w-4 mr-1" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-8 text-xs text-slate-400">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind,
        Framer Motion & React-Three-Fiber.
      </footer>

      {/* styles */}
      <style>{`
        .animate-slowspin { animation: slowspin 30s linear infinite; }
        @keyframes slowspin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .stars-overlay { background-image: radial-gradient(#ffffff22 1px, transparent 1px); background-size: 3px 3px; position: absolute; inset: 0; mask-image: radial-gradient(circle at 50% 50%, black, transparent 70%); opacity: 0.35; animation: twinkle 6s ease-in-out infinite alternate; }
        @keyframes twinkle { from { opacity: 0.2 } to { opacity: 0.5 } }
      `}</style>
    </div>
  );
}
