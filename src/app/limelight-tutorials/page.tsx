import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Additional Limelight Tutorials",
};

export default function LimelightTutorialsPage() {
  return <ComingSoon title="Additional Limelight Tutorials" />;
}
