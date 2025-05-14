import { Service, Testimonial, FaqItem } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: "Individual Therapy",
    description: "Personalized one-on-one sessions focused on your unique needs and goals, helping you navigate life's challenges with greater ease and clarity.",
    icon: "User",
  },
  {
    id: 2,
    title: "Couples Therapy",
    description: "Rebuild connection, improve communication, and restore harmony in your relationship through guided sessions designed to strengthen your bond.",
    icon: "Heart",
  },
  {
    id: 3,
    title: "Child & Adolescent Therapy",
    description: "Specialized support for young people facing emotional, behavioral, or developmental challenges, delivered with compassion and understanding.",
    icon: "Baby",
  },
  {
    id: 4,
    title: "Group Sessions",
    description: "Experience the power of shared healing in a safe community environment, facilitated by professional guidance and peer support.",
    icon: "Users",
  },
  {
    id: 5,
    title: "Addiction Support",
    description: "Compassionate, non-judgmental assistance for those struggling with addictive behaviors, focusing on recovery and sustainable change.",
    icon: "HelpingHand",
  },
  {
    id: 6,
    title: "Trauma Recovery",
    description: "Evidence-based approaches to help you process and heal from past trauma, regaining a sense of safety and control in your life.",
    icon: "TreePine",
  },
  {
    id: 7,
    title: "Women & Girls Support",
    description: "Tailored therapeutic services addressing the unique challenges faced by women and girls in today's society.",
    icon: "FlowerVase",
  },
  {
    id: 8,
    title: "Grief Counseling",
    description: "Gentle guidance through the journey of loss and grief, helping you honor your experience while finding a path forward.",
    icon: "Feather",
  },
  {
    id: 9,
    title: "Employee Assistance",
    description: "Workplace-focused psychological support designed to enhance wellbeing, resilience, and productivity in professional environments.",
    icon: "Briefcase",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with Diana has been transformative. Her compassionate approach and insightful guidance helped me navigate through a difficult period in my life. I'm forever grateful for her support.",
    author: "Sarah M.",
    relationship: "Individual Therapy Client"
  },
  {
    id: 2,
    quote: "After struggling with our relationship for years, my partner and I decided to seek Diana's help. Her balanced perspective and practical tools have completely changed how we communicate. We're in a much healthier place now.",
    author: "Thomas and Jane",
    relationship: "Couples Therapy Clients"
  },
  {
    id: 3,
    quote: "As a mother, watching my teenager struggle with anxiety was heartbreaking. Diana connected with my daughter in a way no other professional had managed before. She's made incredible progress under Diana's care.",
    author: "Miriam K.",
    relationship: "Parent of Adolescent Client"
  },
  {
    id: 4,
    quote: "Diana created such a safe space for our grief support group. Her guidance helped us all process our losses while supporting one another. I don't think I could have gotten through without this group.",
    author: "James L.",
    relationship: "Group Therapy Participant"
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "What should I expect in our first session?",
    answer: "The first session is primarily about getting to know each other and establishing comfort. We'll discuss what brings you to therapy, explore your background and concerns, set goals for our work together, and address any questions you might have. It's also an opportunity for you to determine if my approach feels like a good fit for your needs."
  },
  {
    id: 2,
    question: "How long do therapy sessions typically last?",
    answer: "Individual therapy sessions are 50 minutes, while couples therapy sessions are 75 minutes. This duration allows us adequate time to explore your concerns while maintaining focus and productivity."
  },
  {
    id: 3,
    question: "How often will we meet?",
    answer: "Most clients begin with weekly sessions to build momentum and establish a strong therapeutic foundation. As progress is made, we may adjust to biweekly or monthly sessions. The frequency is flexible and can be adapted based on your needs and circumstances."
  },
  {
    id: 4,
    question: "Is what I share confidential?",
    answer: "Confidentiality is a cornerstone of the therapeutic relationship. What you share remains private with a few specific exceptions: if there is risk of harm to yourself or others, suspected abuse of a child or vulnerable adult, or if records are subpoenaed by court order. I will always explain these limitations in detail during our first session."
  },
  {
    id: 5,
    question: "Do you offer virtual sessions?",
    answer: "Yes, I provide secure, confidential virtual therapy sessions that offer the same quality of care as in-person appointments. Virtual therapy provides flexibility and accessibility, especially for clients with busy schedules, transportation challenges, or those who simply prefer connecting from their own space."
  },
  {
    id: 6,
    question: "How do I know if therapy is working?",
    answer: "Progress in therapy often includes: feeling more equipped to handle challenges, improved relationships, reduced symptom severity, greater self-awareness, and improved ability to manage emotions. We'll regularly review your goals and progress to ensure therapy is meeting your needs."
  },
];

export const emergencyContacts = [
  {
    name: "Kenya National Mental Health Helpline",
    phone: "1199",
    description: "24/7 toll-free national emergency line"
  },
  {
    name: "Befrienders Kenya",
    phone: "+254 722 178 177",
    description: "Suicide prevention helpline"
  },
  {
    name: "Gender Violence Recovery Centre",
    phone: "+254 719 638 006",
    description: "Support for gender-based violence"
  },
  {
    name: "Oasis Africa Counselling Centre",
    phone: "+254 725 366 363",
    description: "Professional counseling services"
  },
];