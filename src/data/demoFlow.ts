import {
  BarChart3,
  CalendarCheck,
  ExternalLink,
  FileText,
  Home,
  Newspaper,
  Search,
  ShieldCheck,
} from "lucide-react";

export const demoLinks = [
  {
    label: "Website BEM FILKOM UB",
    url: "https://bemfilkom.ub.ac.id",
    note: "Homepage, news, detail news, and public features.",
  },
  {
    label: "Admin Portal Event Request",
    url: "https://bemfilkom.ub.ac.id/adminevent",
    note: "Use only when safe dummy data is available.",
  },
];

export const demoFlow = [
  {
    title: "Homepage",
    description:
      "Start from the main information hub: identity, navigation, latest events, and latest news.",
    icon: Home,
  },
  {
    title: "News Page",
    description:
      "Show search, category filter, highlighted news, latest news, and pagination.",
    icon: Newspaper,
  },
  {
    title: "Detail News",
    description:
      "Open a news detail page and highlight metadata, article content, share button, and related news.",
    icon: FileText,
  },
  {
    title: "Event Preview",
    description:
      "Walk through the preview before submit: description, division needs, countdown, timeline, and flow.",
    icon: CalendarCheck,
  },
  {
    title: "Admin Dashboard",
    description:
      "Show summary cards, participant search, division filter, export Excel, and detail action.",
    icon: BarChart3,
  },
  {
    title: "Status Management",
    description:
      "Explain approval workflow, feedback, participant status, and transparent tracking.",
    icon: ShieldCheck,
  },
  {
    title: "Closing Impact",
    description:
      "Return to the value: centralization, transparent workflow, professional publication, and sustainability.",
    icon: Search,
  },
];

export const liveDemoCta = {
  label: "Launch Demo",
  url: "https://bemfilkom.ub.ac.id",
  icon: ExternalLink,
};
