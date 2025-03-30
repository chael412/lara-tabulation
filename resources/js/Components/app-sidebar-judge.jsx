import * as React from "react";
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    House,
    LayoutDashboard,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavCategory } from "@/components/nav-category";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";
import { usePage } from "@inertiajs/react";

export function AppSidebar({ ...props }) {
    const user = usePage().props.auth.user;
    const { url } = usePage();

    const data = {
        teams: [
            {
                name: "Yui",
                logo: GalleryVerticalEnd,
                plan: "Enterprise",
            },
        ],
        navMain: [
            {
                title: "Dashboard",
                url: route("dashboard"),
                icon: House,
                isActive: url === route("dashboard", {}, false),
            },
        ],

        navCategory: [
            {
                title: "Prodcution Number",
                url: route("productionnumber"),
                icon: LayoutDashboard,
                isActive: url === route("productionnumber", {}, false),
            },
            {
                title: "Jeans Wear",
                url: route("jeanswear"),
                icon: LayoutDashboard,
                isActive: url === route("jeanswear", {}, false),
            },
            {
                title: "Festival Attire",
                url: route("festivalattire"),
                icon: LayoutDashboard,
                isActive: url === route("festivalattire", {}, false),
            },
            {
                title: "Casual Wear",
                url: route("casualwear"),
                icon: LayoutDashboard,
                isActive: url === route("casualwear", {}, false),
            },
            {
                title: "Swimsuit",
                url: route("swimsuit"),
                icon: LayoutDashboard,
                isActive: url === route("swimsuit", {}, false),
            },
            {
                title: "Talent",
                url: route("talent"),
                icon: LayoutDashboard,
                isActive: url === route("talent", {}, false),
            },
            {
                title: "Gown",
                url: route("gown"),
                icon: LayoutDashboard,
                isActive: url === route("gown", {}, false),
            },
            {
                title: "Question And Answer",
                url: route("qanda"),
                icon: LayoutDashboard,
                isActive: url === route("qanda", {}, false),
            },
            {
                title: "Beauty",
                url: route("beauty"),
                icon: LayoutDashboard,
                isActive: url === route("beauty", {}, false),
            },
        ],
    };

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavCategory categories={data.navCategory} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
