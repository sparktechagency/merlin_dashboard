

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
            <div className="w-full rounded mx-4 ">
                <SidebarTrigger />
                <SiteHeader />
                {children}
            </div>
        </SidebarProvider>
    );
}