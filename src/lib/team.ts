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
    slug: "omjee-r-giri",
    name: "Omjee R Giri",
    role: "Founder & CEO",
    category: "members",
    tag: "B.Tech AIML · 3rd Year · BIT Mesra",
    bio: "Conceived the Vehicle Health Score as the structural analogy to CIBIL — turning siloed OEM telematics into national infrastructure for Indian motor insurance.",
    photo: omjee,
    linkedin: "https://www.linkedin.com/in/omjee-r-giri-195a53302/",
    long: [
      "Omjee is the founder and chief architect of VEDYRA Labs. A third-year B.Tech student in Artificial Intelligence & Machine Learning at Birla Institute of Technology, Mesra, he authored the Vehicle Health Score (VHS) framework — a 300–850 composite that mirrors CIBIL's role in banking and applies it to India's ₹80,000 Cr motor-insurance market.",
      "His work spans the full stack of the bureau: the five-dimensional scoring model (DBS · MHS · MCS · EES · ESH), the OEM-neutral ingestion API across BlueLink, ZConnect, BlueSense and SmartPlay, and the IRDAI-aligned commercial design that lets insurers price premiums dynamically while OEMs earn data royalties.",
      "Omjee leads VEDYRA's submission to the Hyundai Innovation Challenge 2026 (ITS-VHS-2026-IN) and drives partnerships with OEMs, insurers and the IRDAI Regulatory Sandbox.",
    ],
    highlights: [
      { label: "Institution", value: "BIT Mesra" },
      { label: "Program", value: "B.Tech AIML" },
      { label: "Year", value: "3rd" },
      { label: "Role", value: "Founder · CEO · Chief Architect" },
    ],
  },
  {
    slug: "dr-gyanendra-tiwary",
    name: "Dr. Gyanendra Tiwary",
    role: "Mentor",
    category: "mentors",
    tag: "Project Mentor · Explainable AI",
    bio: "Mentors VEDYRA on the scoring engine, driver-behaviour modelling and explainable AI for high-stakes regulated decisions.",
    photo: gyanendra,
    linkedin: "https://www.linkedin.com/in/dr-gyanendra-tiwary-43921020/",
    long: [
      "Dr. Gyanendra Tiwary is the academic mentor for the VEDYRA project. His research focuses on Explainable AI (XAI), machine learning for behavioural signals and the responsible deployment of high-stakes models in regulated industries — exactly the territory in which a Vehicle Health Score Bureau must operate.",
      "He guides the team on model selection for the gradient-boosted ensemble, SHAP-based explainability for every score returned by the bureau, calibration against the IRDAI Motor Insurance Data Repository (MIDR), and the statistical rigour required to defend the score to insurers, regulators and end-owners.",
      "His mentorship anchors VEDYRA's commitment to transparency: every VHS query returns not just a number, but the top contributing factors a vehicle owner can actually act on.",
    ],
    highlights: [
      { label: "Role", value: "Project Mentor" },
      { label: "Focus", value: "Explainable AI · ML" },
      { label: "Contribution", value: "Scoring & XAI guidance" },
    ],
  },
  {
    slug: "dr-dheeresh-k-mallick",
    name: "Dr. D. K. Mallick",
    role: "Senior Advisor",
    category: "advisors",
    tag: "Strategic Advisor · Institutional Guidance",
    bio: "Senior advisor and the originator of the core proposal idea — provided the foundational direction and strongest intellectual input shaping the VHS Bureau pitch.",
    photo: mallick,
    linkedin: "https://www.linkedin.com/in/dheeresh-k-mallick-7811633a/",
    long: [
      "Dr. Dheeresh K. Mallick is the senior advisor to VEDYRA Labs and the originator of the project's foundational proposal idea. The central thesis — treating vehicle telematics as a credit-bureau-grade signal for the Indian motor-insurance market — emerged from his direction, and the strongest analytical inputs that shaped the Hyundai Innovation Challenge submission came from his desk.",
      "With decades of experience in academic leadership and applied research at Birla Institute of Technology, Mesra, he provides the institutional gravity required to position a student-founded bureau as a credible, neutral layer between OEMs, insurers and regulators. He has guided generations of researchers in AI, systems and applied computing — a track record that anchors VEDYRA's technical claims.",
      "He guides VEDYRA on governance design (the proposed VHS Governance Board with IRDAI, SIAM and consumer representation), institutional partnerships with research labs and government bodies, IRDAI sandbox positioning, and the long-horizon roadmap from a four-metro pilot to a 2-lakh-vehicle validation fleet and full bureau designation.",
      "His advisory role ensures that every architectural decision — from consent flows under DPDPA 2023 to royalty structures with OEMs — is made with India's regulatory and public-interest context at the centre. He remains the project's intellectual north star.",
    ],
    highlights: [
      { label: "Role", value: "Senior Advisor · Proposal Originator" },
      { label: "Institution", value: "BIT Mesra" },
      { label: "Focus", value: "Governance · Strategy · AI Systems" },
      { label: "Contribution", value: "Core idea & proposal direction" },
    ],
  },
];
