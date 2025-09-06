
"use client"

import * as React from "react"
import { LogOut, Settings2 } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,

} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import {
  ChangePasswordIcon,
  DashboardIcon,
  DonationsIcon,
  RegionalIcon,
  UsersIcon,
} from "./custom-icons"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { NavProjects } from "./nav-projects"
import { NavMain } from "./nav-main"



export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  projects: [
    {
      name: "Dashboard",
      url: "dashboard",
      icon: DashboardIcon,
    },
    {
      name: "Users",
      url: "users",
      icon: UsersIcon,
    },
    {
      name: "Regional Admins",
      url: "regional",
      icon: RegionalIcon,
    },
    {
      name: "Donations",
      url: "donations",
      icon: DonationsIcon,
    },

  ],
  navMain: [
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Change Password",
          description: "Update Account Security Credentials",
          url: "changePassword",
          icon: ChangePasswordIcon,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter()

  const handleNavigate = () => {
    router.push('/')
  }

  return (
    <Sidebar collapsible="icon" {...props} className="h-full border-2 border-[#706a7d6e] hover:border-[#706a7d6e]">
      <SidebarHeader className="bg-[#004E8F]" >
        <div
          className="flex justify-center items-center space-x-2">
          <Image
            src="/logo1.png"
            alt="Nexus Logo"
            width={200}
            height={200}
            className="w-[100px] h-[90px] object-cover rounded"
          />
        </div>
      </SidebarHeader>


      <SidebarContent className="bg-[#004E8F] ">
        <div className="">
          <NavProjects projects={data.projects} />
        </div>
        <NavMain items={data.navMain} />
      </SidebarContent>



      <SidebarFooter className="bg-[#004E8F]">
        <Button
          onClick={handleNavigate}
          className="w-full py-6 rounded-lg cursor-pointer bg-[#2f6794] hover:bg-[#438ecc] text-white font-semibold transition-all duration-200"
          
        >
          <div className="">
            <Image src="https://randomuser.me/api/portraits/men/1.jpg" alt="photo" width={20} height={20} className="object-cover w-[30px] h-[30px] rounded-full" />
          </div>

          <span className="text-white font-medium text-lg flex-1 text-left">Log Out</span>

          <LogOut className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" />
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

