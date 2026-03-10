"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { config } from "./config";
import {
  Users,
  Building2,
  Briefcase,
  Handshake,
  BarChart3,
  StickyNote,
  Bell,
  Shield,
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  HardDrive,
  BellRing,
  UsersRound,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Star,
  Zap,
  UserPlus,
  FileSearch,
  ClipboardList,
  Link2,
  Activity,
  Rocket,
} from "lucide-react";

/* ───────────────────────── Navbar ───────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, dashboardUrl, loginUrl, registerUrl } = useAuth();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
            M
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Modaash
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-muted hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted hover:text-primary transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm font-medium text-muted hover:text-primary transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-muted hover:text-primary transition-colors">FAQ</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {isLoggedIn ? (
            <Link
              href={dashboardUrl}
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
            >
              Go to Dashboard
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <>
              <Link
                href={loginUrl}
                className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-gray-50"
              >
                Sign In
              </Link>
              <Link
                href={registerUrl}
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
              >
                Start Free Trial
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#features" onClick={() => setOpen(false)} className="text-sm font-medium text-muted">Features</a>
            <a href="#how-it-works" onClick={() => setOpen(false)} className="text-sm font-medium text-muted">How It Works</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="text-sm font-medium text-muted">Pricing</a>
            <a href="#faq" onClick={() => setOpen(false)} className="text-sm font-medium text-muted">FAQ</a>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              {isLoggedIn ? (
                <Link
                  href={dashboardUrl}
                  onClick={() => setOpen(false)}
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white text-center shadow-lg shadow-primary/25"
                >
                  Go to Dashboard
                  <ArrowRight size={16} />
                </Link>
              ) : (
                <>
                  <Link href={loginUrl} onClick={() => setOpen(false)} className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-foreground text-center">Sign In</Link>
                  <Link href={registerUrl} onClick={() => setOpen(false)} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white text-center shadow-lg shadow-primary/25">Start Free Trial</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/mountain.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-8">
            <Zap size={14} className="text-yellow-400" />
            Built for Nepal&apos;s Recruitment Industry
          </span>
        </div>

        <h1 className="animate-fade-in-up animation-delay-200 mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Transform Your{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Workforce
          </span>{" "}
          Management
        </h1>

        <p className="animate-fade-in-up animation-delay-400 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
          Streamline candidate tracking, employer relationships, and job
          placements — all in one powerful platform built for manpower agencies.
        </p>

        <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={config.registerUrl}
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-primary/40 hover:scale-105"
          >
            Start Free Trial
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            Watch Demo
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up animation-delay-800 mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "50+", label: "Agencies" },
            { value: "10K+", label: "Workers Managed" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-4">
              <div className="text-2xl font-bold text-white sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

/* ───────────────────────── Problem Statement ───────────────────────── */
function ProblemSection() {
  const pains = [
    { icon: <ClipboardList size={24} />, text: "Drowning in paperwork and scattered Excel sheets?" },
    { icon: <FileSearch size={24} />, text: "Losing track of worker documents across multiple folders?" },
    { icon: <Clock size={24} />, text: "Missing important deadlines for visa applications?" },
    { icon: <Link2 size={24} />, text: "Struggling to match the right candidates with employer demands?" },
    { icon: <Smartphone size={24} />, text: "Unable to coordinate with sub-agents in real-time?" },
  ];

  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600 mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Managing Overseas Recruitment<br className="hidden sm:block" /> Shouldn&apos;t Be This Hard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-6 transition-all hover:border-red-200 hover:bg-red-50/50 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 transition-colors group-hover:bg-red-200">
                {p.icon}
              </div>
              <p className="text-base font-medium text-gray-700 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Solution Overview ───────────────────────── */
function SolutionSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-surface to-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-600 mb-4">
            The Solution
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            One Platform. Complete Control.<br className="hidden sm:block" /> Better Results.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Our cloud-based manpower management system digitizes your entire
            recruitment workflow — from candidate registration to final
            deployment. Manage workers, employers, job demands, and sub-agents
            with real-time tracking and automated notifications.
          </p>
          <div className="mt-10">
            <Link
              href={config.registerUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark hover:scale-105"
            >
              Get Started Free <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Features ───────────────────────── */
const features = [
  {
    icon: <Users size={28} />,
    title: "Smart Candidate Management",
    description: "Digital worker profiles with passport & document storage, real-time status tracking, and advanced search & filtering by skills, experience, and country preference.",
    color: "bg-blue-50 text-blue-600",
    borderColor: "hover:border-blue-200",
  },
  {
    icon: <Building2 size={28} />,
    title: "Employer Relationship Hub",
    description: "Complete employer directory with contact details, track all job demands per employer, country-wise organization, and direct demand creation.",
    color: "bg-purple-50 text-purple-600",
    borderColor: "hover:border-purple-200",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Job Demand Intelligence",
    description: "Create & manage job openings, match candidates smartly, track demand status, and manage salary, tenure & contract terms with ease.",
    color: "bg-amber-50 text-amber-600",
    borderColor: "hover:border-amber-200",
  },
  {
    icon: <Handshake size={28} />,
    title: "Sub-Agent Network",
    description: "Manage recruitment partners across regions, track performance, handle commission & payment records, and enable collaborative sourcing.",
    color: "bg-green-50 text-green-600",
    borderColor: "hover:border-green-200",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Real-Time Dashboard & Analytics",
    description: "Live statistics, visual charts for worker pipeline & status distribution, quick-access metrics, and custom date range filtering.",
    color: "bg-cyan-50 text-cyan-600",
    borderColor: "hover:border-cyan-200",
  },
  {
    icon: <StickyNote size={28} />,
    title: "Smart Notes & Reminders",
    description: "Task management with priority levels, BS/AD calendar support, document attachments, and link notes to workers, employers, or demands.",
    color: "bg-orange-50 text-orange-600",
    borderColor: "hover:border-orange-200",
  },
  {
    icon: <Bell size={28} />,
    title: "Real-Time Notifications",
    description: "Instant alerts for status changes, Kafka-powered reliability, Socket.io live updates without page refresh, and category-based filtering.",
    color: "bg-rose-50 text-rose-600",
    borderColor: "hover:border-rose-200",
  },
  {
    icon: <Shield size={28} />,
    title: "Role-Based Access Control",
    description: "Admin dashboard for full oversight, employee portal for daily operations, company-level data isolation, and secure JWT authentication.",
    color: "bg-indigo-50 text-indigo-600",
    borderColor: "hover:border-indigo-200",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile-Responsive Design",
    description: "Works seamlessly on desktop, tablet, and mobile. Modern UI with Tailwind CSS and fast loading with Next.js optimization.",
    color: "bg-teal-50 text-teal-600",
    borderColor: "hover:border-teal-200",
  },
  {
    icon: <Globe size={28} />,
    title: "Nepal-Specific Features",
    description: "Bikram Sambat calendar integration, local phone formats, SMS notifications via Twilio, and email alerts for important updates.",
    color: "bg-red-50 text-red-600",
    borderColor: "hover:border-red-200",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            Features
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Everything You Need to Succeed
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            A complete toolkit designed specifically for manpower agencies managing overseas recruitment.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1 ${f.borderColor}`}
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${f.color} mb-6`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-base leading-relaxed text-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── How It Works ───────────────────────── */
const steps = [
  {
    icon: <UserPlus size={28} />,
    title: "Register Workers",
    description: "Add candidates with complete profiles, upload documents (passport, certificates, photos) to secure cloud storage.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Manage Employers",
    description: "Build your employer database with company details, job history, and contact information.",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "Create Job Demands",
    description: "Post job requirements with salary, location, skills needed, and duration.",
  },
  {
    icon: <Link2 size={28} />,
    title: "Match & Assign",
    description: "Link qualified workers to job demands, track application status in real-time.",
  },
  {
    icon: <Activity size={28} />,
    title: "Monitor Progress",
    description: "Use visual dashboards to see where each candidate stands in the recruitment pipeline.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Deploy & Track",
    description: "Mark workers as deployed, maintain post-placement records, and manage ongoing relationships.",
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-surface-alt to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-purple-50 px-4 py-1.5 text-sm font-semibold text-purple-600 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Simple Steps to Get Started
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Our streamlined process gets you from signup to managing your entire workforce in minutes.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:shadow-xl hover:border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-primary/5 text-primary">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-base leading-relaxed text-muted">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Who It's For ───────────────────────── */
function WhoItsForSection() {
  const audiences = [
    { icon: <Globe size={24} />, title: "Manpower Agencies", description: "Recruiting for Gulf countries, Malaysia, Japan, Korea" },
    { icon: <Users size={24} />, title: "Overseas Employment Agencies", description: "Managing 100+ candidates simultaneously" },
    { icon: <Handshake size={24} />, title: "Recruitment Consultants", description: "Coordinating with multiple sub-agents" },
    { icon: <Briefcase size={24} />, title: "HR Managers", description: "At agencies handling diverse job demands" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-600 mb-4">
            Who It&apos;s For
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Built for Recruitment Professionals
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-surface p-8 text-center transition-all hover:shadow-xl hover:border-teal-200 hover:-translate-y-1">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 mb-6">
                {a.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Benefits ───────────────────────── */
const benefits = [
  { icon: <Clock size={28} />, title: "Save 15+ Hours Per Week", description: "Eliminate manual data entry and document searching with automated workflows.", color: "text-blue-600 bg-blue-50" },
  { icon: <Target size={28} />, title: "85% Faster Candidate Matching", description: "Instantly find the right candidates for any job demand with advanced filters.", color: "text-purple-600 bg-purple-50" },
  { icon: <HardDrive size={28} />, title: "Zero Document Loss", description: "Cloud storage ensures all documents are safely backed up and accessible 24/7.", color: "text-green-600 bg-green-50" },
  { icon: <BellRing size={28} />, title: "Never Miss a Deadline", description: "Smart reminders for visa renewals, medical tests, and document expirations.", color: "text-amber-600 bg-amber-50" },
  { icon: <UsersRound size={28} />, title: "Better Team Collaboration", description: "Real-time notifications keep everyone on the same page — from sub-agents to admin staff.", color: "text-cyan-600 bg-cyan-50" },
  { icon: <TrendingUp size={28} />, title: "Data-Driven Decisions", description: "Visual analytics help you identify bottlenecks and optimize your recruitment pipeline.", color: "text-rose-600 bg-rose-50" },
];

function BenefitsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with mountain image */}
      <div className="absolute inset-0">
        <Image
          src="/mountain.jpg"
          alt=""
          fill
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white mb-4 border border-white/20">
            Benefits
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Why Agencies Choose Modaash
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Real results from real agencies using our platform every day.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md p-8 transition-all hover:bg-white/15 hover:border-white/20">
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${b.color} mb-6`}>
                {b.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
              <p className="text-base leading-relaxed text-gray-300">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Testimonials ───────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We used to manage 300+ workers in Excel sheets. Now everything is automated and we can handle 3x more clients.",
      name: "Raj Kumar",
      role: "Director, Global Manpower Services",
    },
    {
      quote: "The real-time notifications are a game-changer. Our sub-agents can update worker status instantly.",
      name: "Sita Sharma",
      role: "HR Manager, Nepal Overseas Agency",
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-yellow-50 px-4 py-1.5 text-sm font-semibold text-yellow-600 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Trusted by Leading Agencies
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm transition-all hover:shadow-xl">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Pricing ───────────────────────── */
const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small agencies getting started",
    features: ["Up to 100 workers", "Basic analytics", "Email support", "Document storage", "BS calendar"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "For growing agencies with higher demands",
    features: ["Up to 500 workers", "Advanced analytics", "Priority support", "Unlimited documents", "BS calendar", "Sub-agent management", "Real-time notifications"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale operations",
    features: ["Unlimited workers", "Custom analytics", "Dedicated account manager", "API access", "Custom integrations", "On-premise option", "SLA guarantee"],
    popular: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-600 mb-4">
            Pricing
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border p-8 transition-all hover:shadow-xl ${
                p.popular
                  ? "border-primary bg-primary/5 shadow-lg scale-105 ring-2 ring-primary/20"
                  : "border-gray-200 bg-white hover:-translate-y-1"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white uppercase tracking-wide">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">{p.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">{p.price}</span>
                <span className="text-muted text-base">{p.period}</span>
              </div>
              <Link
                href={config.registerUrl}
                target="_blank"
                className={`mt-8 block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${
                  p.popular
                    ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-dark"
                    : "bg-gray-100 text-foreground hover:bg-gray-200"
                }`}
              >
                {p.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </Link>
              <ul className="mt-8 space-y-3">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="shrink-0 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
const faqs = [
  {
    q: "Is my data secure?",
    a: "Yes! We use industry-standard encryption, JWT authentication, and role-based access control. All documents are stored on Cloudinary's secure cloud infrastructure.",
  },
  {
    q: "Can I access it from my phone?",
    a: "Absolutely. The platform is fully responsive and works on any device — desktop, tablet, or mobile.",
  },
  {
    q: "Do you support Nepali dates?",
    a: "Yes! We have built-in Bikram Sambat (BS) calendar support for reminders and reports.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "You can export all your data anytime. We also provide a 30-day grace period before permanent deletion.",
  },
  {
    q: "Do you offer training?",
    a: "Yes! Free onboarding session for all new customers, plus video tutorials and documentation.",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-gray-100 bg-white transition-all hover:border-gray-200">
      <button
        className="flex w-full items-center justify-between px-8 py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-semibold text-foreground pr-4">{faq.q}</span>
        {isOpen ? (
          <ChevronUp size={20} className="shrink-0 text-muted" />
        ) : (
          <ChevronDown size={20} className="shrink-0 text-muted" />
        )}
      </button>
      {isOpen && (
        <div className="px-8 pb-6">
          <p className="text-base leading-relaxed text-muted">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */
function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-blue-900 p-12 sm:p-20 text-center">
          {/* Decorative */}
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to Modernize Your<br className="hidden sm:block" /> Recruitment Process?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Join 50+ manpower agencies already using our platform to
              streamline operations and grow their business.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={config.registerUrl}
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all hover:bg-gray-50 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={config.supportMailto}
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Schedule a Demo
              </a>
            </div>

            <p className="mt-6 text-sm text-blue-200">
              No credit card required · 14-day free trial · Cancel anytime
            </p>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-2">
                <Shield size={16} /> Bank-Level Security
              </span>
              <span className="flex items-center gap-2">
                <Activity size={16} /> 99.9% Uptime
              </span>
              <span className="flex items-center gap-2">
                <Globe size={16} /> Made for Nepal
              </span>
              <span className="flex items-center gap-2">
                <Phone size={16} /> 24/7 Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-slate-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
                M
              </div>
              <span className="text-xl font-bold text-white">Modaash</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              End-to-end recruitment platform for manpower agencies. Built for Nepal&apos;s recruitment industry.
            </p>
            <div className="flex items-center gap-4">
              <a href={config.supportMailto} className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail size={14} /> {config.supportEmail}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href={config.supportMailto} className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} Modaash. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={14} />
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── Main Page ───────────────────────── */
export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
