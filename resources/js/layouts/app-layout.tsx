import { AppHeader } from "@/components/app-header";
import AppSidebar from "@/components/app-sidebar";
import { SectionCards } from "@/components/section-cards";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function AppLayout ({children } : PropsWithChildren) {
    return (
      
  <SidebarProvider>
  {/* Sidebar */}
    <AppSidebar/>

  {/* Konten utama */}
  <SidebarInset>
    <AppHeader />
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          {/* <SectionCards /> */}
          {children}
        </div>
      </div>
    </div>
  </SidebarInset>
</SidebarProvider>

    )
}