import {
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  HeartHandshake,
  Mic2,
  Radio,
  Sprout,
  UsersRound
} from "lucide-react";

export const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Sermons" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/connect", label: "Connect" },
  { href: "/store", label: "Store" },
  { href: "/bible-institute", label: "WFBI" }
] as const;

export const identity = {
  fullName: "Christ Foundation Ministries International",
  publicName: "Royal Assembly Church",
  abbreviation: "CFMI / RAC",
  vision: "Building lives by the creative word of God.",
  location: "Nairobi, Kenya",
  domain: "royalassemblychurch.org",
  shop: "https://shop.royalassembly.church",
  youtubeChannelId: "UCqMDxNIQnzbsUp7OTYCU0HQ",
  phone: "(+254)721 844739",
  pastorFavourEmail: "info@pastorfavouradeola.com"
};

export const serviceSchedule = [
  { name: "Sunday Service", time: "9:00 AM EAT", mode: "In-person + YouTube LIVE" },
  { name: "Thursday Service", time: "6:00 PM EAT", mode: "In-person + YouTube LIVE" },
  { name: "Building Lives Radio Show", time: "Tuesday 5-6 PM EAT", mode: "90.7 Truth FM" },
  { name: "Authentic Relationships IG Live", time: "First Wednesday monthly", mode: "@pst_fav" }
];

export const socials = [
  { platform: "Facebook", handle: "royalassemblycfmi", url: "https://www.facebook.com/royalassemblycfmi/", followers: "3,017 likes", color: "#1877F2" },
  { platform: "YouTube", handle: "@RoyalAssemblyChurch", url: "https://www.youtube.com/@RoyalAssemblyChurch", followers: "Channel ID UCqMDxNIQnzbsUp7OTYCU0HQ", color: "#FF0000" },
  { platform: "Instagram", handle: "@royal_assembly_church", url: "https://www.instagram.com/royal_assembly_church/", followers: "1,543 followers", color: "#E1306C" },
  { platform: "X", handle: "@Royal_Assembly_", url: "https://twitter.com/Royal_Assembly_", followers: "Official X profile", color: "#1DA1F2" },
  { platform: "Pastor Favour Instagram", handle: "@pst_fav", url: "https://www.instagram.com/pst_fav/", followers: "39K+", color: "#E1306C" },
  { platform: "Pastor Favour Facebook", handle: "PastorFavourAdeola", url: "https://www.facebook.com/PastorFavourAdeola/", followers: "97,066 likes", color: "#1877F2" }
] as const;

export type SermonCategory =
  | "ALL"
  | "PASTOR_ADESINA"
  | "PASTOR_FAVOUR"
  | "CONFERENCE"
  | "PRAYER_FASTING"
  | "SERVICES";

export const sermonFilters: { label: string; value: SermonCategory }[] = [
  { label: "All", value: "ALL" },
  { label: "Pastor Adesina", value: "PASTOR_ADESINA" },
  { label: "Pastor Favour", value: "PASTOR_FAVOUR" },
  { label: "Conferences", value: "CONFERENCE" },
  { label: "Prayer & Fasting", value: "PRAYER_FASTING" },
  { label: "Services", value: "SERVICES" }
];

export const sermons = [
  { title: "Cultured by the Word", speaker: "Pastor Adesina Adeola", date: "Sep 2025", videoId: "p4Zib6fFWps", category: "PASTOR_ADESINA", featured: true },
  { title: "Waiting on God with Joy", speaker: "Minister Light", date: "Jun 2025", videoId: "dKpZBFNz0VU", category: "SERVICES", featured: false },
  { title: "Youth Alive - Driven by Purpose", speaker: "Pastor Favour Adeola", date: "Apr 2025", videoId: "U1Apy1qp-x8", category: "CONFERENCE", featured: true },
  { title: "Winning the Conflict Within", speaker: "Pastor Adesina Adeola", date: "Mar 2025", videoId: "1Q931ytlJZ4", category: "PASTOR_ADESINA", featured: true },
  { title: "Our Rules of Engagement in Christ", speaker: "Pastor Adesina Adeola", date: "Feb 2025", videoId: "BinZ0mj-smU", category: "PASTOR_ADESINA", featured: false },
  { title: "7 Day Prayer & Fasting 2025 - Day 1", speaker: "Both Pastors", date: "Jan 2025", videoId: "LkH1k0tAyOs", category: "PRAYER_FASTING", featured: false },
  { title: "The Workings of Grace in a Believer", speaker: "Pastor Adesina Adeola", date: "Oct 2024", videoId: "nGkatUY4YTg", category: "PASTOR_ADESINA", featured: false },
  { title: "The Praise that Pleases God", speaker: "Pastor Adesina Adeola", date: "Sep 2024", videoId: "GXBxjvtVpl4", category: "PASTOR_ADESINA", featured: false },
  { title: "How Normal is Your Normal?", speaker: "Pastor Favour Adeola", date: "Oct 2023", videoId: "R4B1xGHHCWE", category: "PASTOR_FAVOUR", featured: false },
  { title: "You Are Not Alone in Life", speaker: "Pastor Adesina Adeola", date: "Feb 2023", videoId: "b2UpBF3ua3k", category: "PASTOR_ADESINA", featured: false },
  { title: "Sunday Service Online LIVE", speaker: "Both Pastors", date: "Jun 2025", videoId: "gqB2xZ_NkEE", category: "SERVICES", featured: false },
  { title: "Midweek Service LIVE", speaker: "Both Pastors", date: "Jun 2025", videoId: "U9f_xuhov80", category: "SERVICES", featured: false },
  { title: "Thursday Service LIVE", speaker: "Both Pastors", date: "Feb 2023", videoId: "6v6Mw5eacLs", category: "SERVICES", featured: false }
] as const;

export const featuredSermons = sermons.filter((sermon) => sermon.featured);

export const ministries = [
  { id: "word-foundation-bible-institute", name: "Word Foundation Bible Institute", icon: BookOpen, label: "I", description: "The Bible School arm of Royal Assembly, equipping believers with Christian Bible courses for spiritual growth." },
  { id: "believers-executive-link", name: "Believers Executive Link", icon: BriefcaseBusiness, label: "II", description: "Teaching Christians in business and career how to prosper God's way." },
  { id: "faith-building-conference", name: "Faith Building Conference", icon: Sprout, label: "III", description: "Annual word-based conference drawing participants across Kenya and East Africa." },
  { id: "authentic-relationships-conference", name: "Authentic Relationships Conference", icon: HeartHandshake, label: "IV", description: "Hosted by Pastor Favour Adeola and tagged Shaping Relationships God's Way." },
  { id: "youth-alive-conference", name: "Youth Alive Conference", icon: UsersRound, label: "V", description: "Annual youth conference. 2025 theme: Driven by Purpose." },
  { id: "building-lives-radio-show", name: "Building Lives Radio Show", icon: Radio, label: "VI", description: "Weekly broadcast on 90.7 Truth FM every Tuesday from 5-6 PM EAT." }
] as const;

const pastorFavourUploads = "https://pastorfavouradeola.com/wp-content/uploads/2024/04";

export const books = [
  { title: "Dare To Be Different", summary: "On conformity versus transformation by God's word.", url: "https://shop.royalassembly.church/product/dare-to-be-different/", cover: `${pastorFavourUploads}/Dare-To-Be-Different.png`, coverSource: "Official Pastor Favour website" },
  { title: "Finding That Authentic Relationship Without Much Ado", summary: "A guide to building meaningful relationships without drama.", url: "https://shop.royalassembly.church/product/finding-that-authentic-relationship-without-much-ado/", cover: `${pastorFavourUploads}/Finding-That-Authentic-Realtionship-without-Ado.png`, coverSource: "Official Pastor Favour website" },
  { title: "The Sluggard, the Fool and the Wise", summary: "Life as a journey with accountability before God.", url: "https://shop.royalassembly.church/product/the-sluggard-the-fool-or-the-wise/", cover: `${pastorFavourUploads}/Finding-That-Authentic-Realtionship-without-Ado.png`, coverSource: "Official Pastor Favour website book grid" },
  { title: "Dreams Come True", summary: "On dominion and subduing the earth through God's word.", url: "https://shop.royalassembly.church/product/dreams-come-true/", cover: `${pastorFavourUploads}/Dreams-Come-True.png`, coverSource: "Official Pastor Favour website" },
  { title: "Proven Secrets for a Crisis Free Marriage", summary: "Marriage done God's way: practical and biblical.", url: "https://shop.royalassembly.church/product/proven-secrets-for-a-crisis-free-marriage/", cover: `${pastorFavourUploads}/Proven-Secrets.png`, coverSource: "Official Pastor Favour website" },
  { title: "6 Lessons from Christmas", summary: "Valuable lessons from the Christmas biblical narrative.", url: "https://shop.royalassembly.church/product/6-lessons-from-christmas/", cover: `${pastorFavourUploads}/6-lessons-of-Christmas-Final-cover-red-transparent-sm-2.png`, coverSource: "Official Pastor Favour website" }
] as const;

export const localImages = {
  logo: "/images/royal-logo.jpg",
  pastorFavour: "/images/pastor-favour-purple.jpg",
  pastorFavourLive: "/images/pastor-favour-ig-live.jpg"
} as const;

export const imageAssignments = {
  homeHero: "1494059102466-17f8c9016583",
  homeTestimonials: "1508672019048-c90a60f8d06b",
  aboutTimeline: "1519817914152-55f77a4c4bd0",
  aboutQuote: "1503376780353-7e6692767b70",
  sermonsHeader: "1516280440614-37939bbacd81",
  ministriesHeader: "1501281668745-a7d08e66d3ac",
  eventsHero: "1472214103451-9374f042f2a6",
  giveHeader: "1610878180933-fd6e0bc99d35",
  connectHeader: "1543269664-56d93c216e7a",
  connectNewsletter: "1580130379563-ce9547b4f7e9"
} as const;

export const unsplash = (id: string, width = 1920, quality = 85) =>
  `https://images.unsplash.com/photo-${id}?w=${width}&q=${quality}&auto=format&fit=crop`;

export const givingOptions = [
  { name: "Tithes", scripture: "Malachi 3:10", description: "A faithful covenant rhythm, presented with reverence rather than pressure." },
  { name: "Offerings", scripture: "2 Corinthians 9:7", description: "A cheerful response to the work God is building through His word." },
  { name: "Partnership", scripture: "Philippians 1:5", description: "Monthly support for ministry reach, teaching, radio, conferences, and discipleship." }
];

export const upcomingEvents = [
  { title: "Sunday Service", date: "Every Sunday", time: "9:00 AM EAT", action: "Join Live Service", icon: CalendarDays },
  { title: "Thursday Service", date: "Every Thursday", time: "6:00 PM EAT", action: "Watch Sermons", icon: Mic2 },
  { title: "Building Lives Radio Show", date: "Every Tuesday", time: "5-6 PM EAT on 90.7 Truth FM", action: "Set Reminder", icon: Radio },
  { title: "Authentic Relationships IG Live", date: "First Wednesday monthly", time: "@pst_fav", action: "Follow Pastor Favour", icon: HeartHandshake }
];
