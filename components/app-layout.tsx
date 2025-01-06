import { AppSidebar } from "@/components/app-sidebar";
import { AppHeaderTheme } from "@/components/theme";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className="h-[calc(100vh-64px)] overflow-y-scroll">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

function AppHeader() {
  return (
    <header className="flex justify-between h-16 shrink-0 items-center border-b px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1 h-9 w-9" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <AppHeaderBreadcrumb />
      </div>
      <AppHeaderTheme />
    </header>
  );
}

function AppHeaderBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
