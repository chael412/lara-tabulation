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

export function NavCategory({ categories }) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-yellow-400">
                Preliminary
            </SidebarGroupLabel>
            <SidebarMenu>
                {categories.map((category) => (
                    <SidebarMenuItem key={category.title}>
                        <SidebarMenuButton
                            asChild
                            className={`w-full text-left px-4 py-2 rounded-md transition hover:bg-blue-300
                        ${
                            category.isActive
                                ? "bg-blue-400 text-black"
                                : "text-blue-50"
                        }
                    `}
                        >
                            <Link href={category.url}>
                                <category.icon />
                                <span>{category.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
