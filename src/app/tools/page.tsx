import { SiteLayout } from "@/components/layout/SiteLayout";
import { ToolsWorkspace } from "@/components/tools/ToolsWorkspace";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Toolbox",
  description: `${SITE.creator}'s browser-based developer utilities — local-first, private.`,
};

export default function ToolsPage() {
  return (
    <SiteLayout>
      <ToolsWorkspace />
    </SiteLayout>
  );
}
