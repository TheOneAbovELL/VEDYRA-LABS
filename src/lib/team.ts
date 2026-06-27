import omjee from "@/assets/omjee.jpg";
import gyanendra from "@/assets/gyanendra.jpg";
import mallick from "@/assets/mallick.jpg";


export type TeamCategory = "members" | "mentors" | "advisors";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  tag: string;
  category: TeamCategory;
  bio: string;
  photo: string;
  linkedin: string;
  long: string[];
  highlights: { label: string; value: string }[];
};

export const categoryMeta: Record<TeamCategory, { label: string; blurb: string }> = {
  members: { label: "Project Members", blurb: "The builders shipping the bureau." },
  mentors: { label: "Mentors", blurb: "Academic guidance on AI, scoring & XAI." },
  advisors: { label: "Advisors", blurb: "Strategic & institutional direction." },
};

export const team: TeamMember[] = [
  {
    slug: "dr-dheeresh-k-mallick",
    name: "Dr. D. K. Mallick",
    role: "Senior Advisor",
    category: "advisors",
    tag: "Strategic Advisor · Institutional Guidance",
    bio: "Senior advisor and the originator of the core proposal idea — provided the foundational direction and strongest intellectual input shaping VEDYRA Labs.",
    photo: mallick,
    linkedin: "https://www.linkedin.com/in/dheeresh-k-mallick-7811633a/",
    long: [
      "Dr. Dheeresh K. Mallick is the senior advisor to VEDYRA Labs and the originator of the project's foundational proposal idea. The central thesis — leveraging distributed data networks to build explainable intelligence models — emerged from his direction, and the strongest analytical inputs that shaped the core research came from his desk.",
      "With decades of experience in academic leadership and applied research at Birla Institute of Technology, Mesra, he provides the institutional gravity required to position a student-founded lab as a credible, neutral player in the deep-tech space. He has guided generations of researchers in AI, systems and applied computing — a track record that anchors VEDYRA's technical claims.",
      "He guides VEDYRA on governance design, institutional partnerships with research labs and government bodies, regulatory positioning, and the long-horizon roadmap from a regional pilot to a large-scale validation network.",
      "His advisory role ensures that every architectural decision — from privacy-preserving consent flows to equitable data structures — is made with India's regulatory and public-interest context at the centre. He remains the project's intellectual north star.",
    ],
    highlights: [
      { label: "Role", value: "Senior Advisor · Proposal Originator" },
      { label: "Institution", value: "BIT Mesra" },
      { label: "Focus", value: "Governance · Strategy · AI Systems" },
      { label: "Contribution", value: "Core idea & proposal direction" },
    ],
  },
  {
    slug: "dr-gyanendra-tiwary",
    name: "Dr. Gyanendra Tiwary",
    role: "Mentor",
    category: "mentors",
    tag: "Project Mentor · Explainable AI",
    bio: "Mentors VEDYRA on the scoring engine, predictive modelling and explainable AI for high-stakes enterprise decisions.",
    photo: gyanendra,
    linkedin: "https://www.linkedin.com/in/dr-gyanendra-tiwary-43921020/",
    long: [
      "Dr. Gyanendra Tiwary is the academic mentor for the VEDYRA project. His research focuses on Explainable AI (XAI), machine learning for behavioural signals and the responsible deployment of high-stakes models in regulated industries — exactly the territory in which our deep-tech frameworks must operate.",
      "He guides the team on model selection for our gradient-boosted ensembles, SHAP-based explainability for every score returned by the platform, calibration against standard datasets, and the statistical rigour required to defend our models to partners and regulators.",
      "His mentorship anchors VEDYRA's commitment to transparency: every predictive query returns not just a number, but the top contributing factors that users can actually act on.",
    ],
    highlights: [
      { label: "Role", value: "Project Mentor" },
      { label: "Focus", value: "Explainable AI · ML" },
      { label: "Contribution", value: "Scoring & XAI guidance" },
    ],
  },
  {
    slug: "omjee-r-giri",
    name: "Omjee R Giri",
    role: "Founder & CEO",
    category: "members",
    tag: "B.Tech AIML · 3rd Year · BIT Mesra",
    bio: "Conceived the core intelligence framework — turning siloed data structures into a unified, privacy-first analytics layer.",
    photo: omjee,
    linkedin: "https://www.linkedin.com/in/omjee-r-giri-195a53302/",
    long: [
      "Omjee is the founder and chief architect of VEDYRA Labs. A third-year B.Tech student in Artificial Intelligence & Machine Learning at Birla Institute of Technology, Mesra, he authored the core evaluation framework — a scalable composite index that brings transparency to previously opaque data sectors.",
      "His work spans the full stack of the platform: the multi-dimensional scoring models, the unified ingestion APIs, and the privacy-aligned commercial architecture that allows dynamic data valuation while maintaining enterprise security.",
      "Omjee leads VEDYRA's initial research and core framework engineering and drives partnerships with enterprise clients and regulatory entities.",
    ],
    highlights: [
      { label: "Institution", value: "BIT Mesra" },
      { label: "Program", value: "B.Tech AIML" },
      { label: "Year", value: "3rd" },
      { label: "Role", value: "Founder · CEO · Chief Architect" },
    ],
  },
];
