

import { AppSidebar } from "@/components/app-sidebar";
import SiteHeader from "@/components/ui/side-header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";





export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="bg-[#f6f6f6] w-full rounded  ">
                <div className="mx-4">
                    <SidebarTrigger />
                    <SiteHeader />
                    {children}
                </div>
            </div>
        </SidebarProvider>
    );
}

// sidebar menu icon here--->
// <SidebarTrigger /> ------ {/* <Menu /> */}