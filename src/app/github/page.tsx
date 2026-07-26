import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "GitHub",
};

export default function GitHubPage() {
  return <ComingSoon title="GitHub" />;
}
