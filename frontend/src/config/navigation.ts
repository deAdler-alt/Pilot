import {
  BookOpen,
  FolderOpen,
  LayoutDashboard,
  KeyRound,
  Route,
  ScrollText,
  Shield,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type NavIconKey =
  | "layout"
  | "folder"
  | "book"
  | "route"
  | "key"
  | "scroll"
  | "wrench";

export const navIcons: Record<NavIconKey, LucideIcon> = {
  layout: LayoutDashboard,
  folder: FolderOpen,
  book: BookOpen,
  route: Route,
  key: KeyRound,
  scroll: ScrollText,
  wrench: Wrench,
};

export type NavItem = {
  label: string;
  href: string;
  icon: NavIconKey;
};

export const trainerNav: NavItem[] = [
  { label: "Pulpit", href: "/trainer/dashboard", icon: "layout" },
  { label: "Pokoje", href: "/trainer/rooms", icon: "folder" },
  { label: "Dokumenty", href: "/trainer/documents", icon: "book" },
  { label: "Ścieżki", href: "/trainer/paths", icon: "route" },
];

export const adminNav: NavItem[] = [
  { label: "Klucze API", href: "/admin/api-keys", icon: "key" },
  { label: "Logi RAG", href: "/admin/rag-logs", icon: "scroll" },
  { label: "Konserwacja", href: "/admin/maintenance", icon: "wrench" },
];

export const appMeta = {
  name: "BHPilot",
  subtitle: "Platforma szkoleń BHP",
  trainer: { title: "Panel trenera", icon: LayoutDashboard },
  admin: { title: "Administracja", icon: Shield },
  trainee: { title: "Stanowisko kursanta", icon: LayoutDashboard },
} as const;
