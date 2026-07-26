import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Pipeline Docs",
};

export default function PipelineDocsPage() {
  return <ComingSoon title="Pipeline Docs" />;
}
