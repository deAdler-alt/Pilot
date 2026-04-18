import { DashboardShell } from "@/components/shell/dashboard-shell";
import { adminNav, appMeta } from "@/config/navigation";
import { Badge } from "@/components/ui/badge";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell
      navItems={adminNav}
      productLabel={appMeta.name}
      sectionLabel={appMeta.admin.title}
      headerBadge={<Badge tone="warning">Środowisko techniczne</Badge>}
    >
      {children}
    </DashboardShell>
  );
}
