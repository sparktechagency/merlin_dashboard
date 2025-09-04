

import { DashboardOverviewIcon } from "@/components/custom-icons";
import { LucideIcon } from "lucide-react";

type PageTitleConfig = {
  title: string;
  subtitle?: string;
  icon?: LucideIcon | React.ComponentType;
  backIcon?: LucideIcon | React.ComponentType;
};




// Type-safe pageTitles using LucideIcon type
export const pageTitles: Record<string, PageTitleConfig> = {
  "/dashboard": {
    title: "Dashboard Overview",
    icon: DashboardOverviewIcon,
  },
  "/users": {
    title: "Users",

  },
  "/regional": {
    title: "Regional Administrators",
  },
  "/requestedPhoto": {
    title: "Requested photos",
  },

  "/donations": {
    title: "Donations",
  },
 
  // "/subscription": {
  //   title: "Subscription Plan",
  //   subtitle: "Manage your subscription play which was created for  service providers.",
  //   backIcon:BackIcon,
  // },
  "/changePassword": {
    title: "My account",
    subtitle: "You can update your personal information.",
  },
};
