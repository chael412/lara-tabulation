import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import TablePagination from "@/Components/table-pagination";
import usePaginatedQuery from "@/hooks/usePaginatedQuery";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutAdmin";
import { Head } from "@inertiajs/react";
import { ClipLoader, FadeLoader } from "react-spinners";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ChevronsUpDown } from "lucide-react";
import { compareAsc, format } from "date-fns";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
    const {
        data: user_paginate,
        isLoading,
        error,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        sortConfig,
        setSortConfig,
        totalPages,
        totalEntries,
    } = usePaginatedQuery({
        queryKey: "user_paginate",
        endpoint: "users",
    });

    if (error) return <p>Error loading customers</p>;

    const columns = [
        { key: "name", label: "UserName" },
        { key: "email", label: "Email" },

        { key: "", label: "Action" },
    ];

    console.log(user_paginate);

    return (
        <AuthenticatedLayout
            header={
                <h6 className="text-md font-semibold leading-tight text-gray-800">
                    Employees
                </h6>
            }
        >
            <Head title="Employees" />
            <div className="mx-auto max-w-7xl px-4 mt-10">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex w-full max-w-md">
                        <Input
                            type="text"
                            placeholder="Search by lastname or employee no..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <Button className="ml-4 ">
                        <AiOutlinePlus />
                        Add Employee
                    </Button>{" "}
                </div>

                <Table>
                    <TableHeader>
                        <TableRow className="border-2 ">
                            {columns.map(({ key, label }) => (
                                <TableHead
                                    key={key}
                                    className="cursor-pointer border-2"
                                    onClick={() =>
                                        setSortConfig({
                                            column: key,
                                            direction:
                                                sortConfig.column === key &&
                                                sortConfig.direction === "asc"
                                                    ? "desc"
                                                    : "asc",
                                        })
                                    }
                                >
                                    <span
                                        className={`flex items-center gap-2 ${
                                            sortConfig.column === key
                                                ? "text-blue-600 font-semibold"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        <span className="text-md font-bold">
                                            {label}
                                        </span>
                                        <ChevronsUpDown
                                            className="size-4"
                                            color={
                                                sortConfig.column === key
                                                    ? "#2563eb"
                                                    : "currentColor"
                                            }
                                        />
                                    </span>
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {isLoading && (
                            <TableRow>
                                <TableCell colSpan="5">
                                    <span className="flex flex-col justify-center items-center py-4 text-green-800">
                                        fetching data...
                                        <ClipLoader color="#16a34a" size={42} />
                                    </span>
                                </TableCell>
                            </TableRow>
                        )}
                        {user_paginate?.data?.map((user, index) => (
                            <TableRow key={index} className="border-2">
                                <TableCell className="border-2">
                                    {user.name}
                                </TableCell>
                                <TableCell className="border-2">
                                    {user.email}
                                </TableCell>

                                <TableCell className="border-2 ">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                            >
                                                <BiDotsHorizontalRounded className="size-5" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>
                                                Action
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                                onClick={() =>
                                                    alert(`ID: ${employee.id}`)
                                                }
                                                className="hover:bg-gray-200 cursor-pointer"
                                            >
                                                View
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="hover:bg-gray-200 cursor-pointer">
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="hover:bg-gray-200 cursor-pointer">
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="mt-4">
                    <span className="text-sm font-medium">
                        {" "}
                        {`${totalEntries} total entries`}
                    </span>

                    <TablePagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
