import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";

export function TeamSwitcher({ teams }) {
    const { isMobile } = useSidebar();
    const [activeTeam, setActiveTeam] = React.useState(teams[0]);

    if (!activeTeam) {
        return null;
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <div className="flex gap-2 items-center bg-yellow-500 py-1 px-2">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <img src="/img/piton-logo.png" alt="piton-logo" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold text-gray-900">
                            Piton Tabulation
                        </span>
                    </div>
                </div>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
