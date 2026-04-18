import { DashboardShell } from "@/components/shell/dashboard-shell";
import { appMeta, trainerNav } from "@/config/navigation";

export default function TrainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell
      navItems={trainerNav}
      productLabel={appMeta.name}
      sectionLabel={appMeta.trainer.title}
    >
      {children}
    </DashboardShell>
  );
}
