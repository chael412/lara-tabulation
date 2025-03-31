"use client";

import { ChevronRight } from "lucide-react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link } from "@inertiajs/react";

export function NavFinal({ finals }) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-yellow-400">
                Final
            </SidebarGroupLabel>
            <SidebarMenu>
                {finals.map((final) => (
                    <SidebarMenuItem key={final.title}>
                        <SidebarMenuButton
                            asChild
                            className={`w-full text-left px-4 py-2 rounded-md transition hover:bg-blue-300
                        ${
                            final.isActive
                                ? "bg-blue-400 text-black"
                                : "text-blue-50"
                        }
                    `}
                        >
                            <Link href={final.url}>
                                <final.icon />
                                <span>{final.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
