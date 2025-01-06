import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";

type Group = {
  href: string;
  name: string;
  pages: Page[];
};

type Page = {
  href: string;
  name: string;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <AppSidebarHeader />
      <AppSidebarContent />
      <SidebarRail />
    </Sidebar>
  );
}

function AppSidebarHeader() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild size="lg">
            <Link href="/">
              <span className="font-semibold">BYMR Wiki</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}

function AppSidebarContent() {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu></SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AppSidebarGroup({ group }: { group: Group }) {
  return (
    <Collapsible
      key={group.name}
      defaultOpen={true}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            {group.name}{" "}
            <ChevronRight className="ml-auto group-data-[state=open]/collapsible:hidden" />
            <ChevronDown className="ml-auto group-data-[state=closed]/collapsible:hidden" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        {group.pages?.length ? (
          <CollapsibleContent>
            <SidebarMenuSub>
              {group.pages.map((page) => (
                <AppSidebarPage key={page.name} page={page} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        ) : null}
      </SidebarMenuItem>
    </Collapsible>
  );
}

function AppSidebarPage({ page }: { page: Page }) {
  return (
    <SidebarMenuSubItem key={page.name}>
      <SidebarMenuSubButton asChild isActive={false}>
        <Link href={page.href}>{page.name}</Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
}
