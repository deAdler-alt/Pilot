import { TraineeShell } from "@/components/shell/trainee-shell";
import { appMeta } from "@/config/navigation";

export default function TraineeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TraineeShell title={appMeta.trainee.title}>
      {children}
    </TraineeShell>
  );
}
