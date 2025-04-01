import { BsFillFlagFill } from "react-icons/bs";
import * as React from "react";
import {
    AudioWaveform,
    Award,
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

import { NavMain } from "@/components/nav-main-admin";

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
import { NavFinal } from "./nav-final-admin";
import { NavCategory } from "./nav-category-admin";

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
                url: route("admin.dashboard"),
                icon: House,
                isActive: url === route("admin.dashboard", {}, false),
            },
            {
                title: "Candidates",
                url: route("admin.candidate.index"),
                icon: House,
                isActive: url === route("admin.candidate.index", {}, false),
            },
        ],

        navCategory: [
            {
                title: "Prodcution Number",
                url: route("admin.productionnumber"),
                icon: LayoutDashboard,
                isActive: url === route("admin.productionnumber", {}, false),
            },
            {
                title: "Jeans Wear",
                url: route("admin.jean"),
                icon: LayoutDashboard,
                isActive: url === route("admin.jean", {}, false),
            },
            {
                title: "Festival Attire",
                url: route("admin.festival"),
                icon: LayoutDashboard,
                isActive: url === route("admin.festival", {}, false),
            },
            {
                title: "Casual Wear",
                url: route("admin.casual"),
                icon: LayoutDashboard,
                isActive: url === route("admin.casual", {}, false),
            },
            {
                title: "Swimsuit",
                url: route("admin.swimsuit"),
                icon: LayoutDashboard,
                isActive: url === route("admin.swimsuit", {}, false),
            },
            {
                title: "Talent",
                url: route("admin.talent"),
                icon: LayoutDashboard,
                isActive: url === route("admin.talent", {}, false),
            },
            {
                title: "Gown",
                url: route("admin.gown"),
                icon: LayoutDashboard,
                isActive: url === route("admin.gown", {}, false),
            },
            {
                title: "Question And Answer",
                url: route("admin.qa"),
                icon: LayoutDashboard,
                isActive: url === route("admin.qa", {}, false),
            },
            {
                title: "Beauty",
                url: route("admin.beauty"),
                icon: LayoutDashboard,
                isActive: url === route("admin.beauty", {}, false),
            },
            {
                title: "Tally Preliminary",
                url: route("admin.tallyprelim"),
                icon: BsFillFlagFill,
                isActive: url === route("admin.tallyprelim", {}, false),
            },
        ],

        navFinal: [
            {
                title: "Top 5 Beauty",
                url: route("admin.beautyfinal"),
                icon: Award,
                isActive: url === route("admin.beautyfinal", {}, false),
            },
            {
                title: "Top 5 Q&A",
                url: route("admin.qafinal"),
                icon: Award,
                isActive: url === route("admin.qafinal", {}, false),
            },
            {
                title: "Tally Final",
                url: route("admin.tallyfinal"),
                icon: BsFillFlagFill,
                isActive: url === route("admin.tallyfinal", {}, false),
            },
        ],
    };

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavCategory categories={data.navCategory} />
                <NavFinal finals={data.navFinal} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
