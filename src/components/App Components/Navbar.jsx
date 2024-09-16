import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ModeToggle } from './ModeToggle';
import { Button } from '../ui/button';
import Calender from './Calendar';
import Formss from './Formss';

export default function Navbar() {
    return (
        <nav className="bg-background/50 sticky top-0 backdrop-blur border-b z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to={'/'}>
                                <img src="/logowbg.png" className='h-[44px]' alt="Logo" />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium transition duration-200 hover:scale-105 hover:text-primary">
                                    Home
                                </Link>
                                <Link to="/formss" className="px-3 py-2 rounded-md text-sm font-medium transition duration-200 hover:scale-105 hover:text-primary">
                                    Appointments
                                </Link>
                                <Link to="/notifications" className="px-3 py-2 rounded-md text-sm font-medium transition duration-200 hover:scale-105 hover:text-primary">
                                    Notifications
                                </Link>
                                <Button size="sm">Logout</Button>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="sm">Date</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {/* Render the ProfileForm component here */}
                                {/* <FormComponent /> */}
                                {/* <Cards/> */}
                                <Calender/>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <ModeToggle />

                        <div className="flex md:hidden">
                            <Sheet>
                                <SheetTrigger>
                                    <Menu />
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle className="flex items-center justify-center">
                                            <img src="/logowbg.png" className='h-[44px]' alt="Logo" />
                                        </SheetTitle>
                                        <SheetDescription>
                                            <div className="flex flex-col items-center justify-center">
                                                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium transition duration-200 hover:scale-105 hover:text-primary">
                                                    Home
                                                </Link>
                                                <Link to="/appointments" className="px-3 py-2 rounded-md text-sm font-medium transition duration-200 hover:scale-105 hover:text-primary">
                                                    Appointments
                                                </Link>
                                                <Link to="/notifications" className="px-3 py-2 rounded-md text-sm font-medium transition duration-200 hover:scale-105 hover:text-primary">
                                                    Notifications
                                                </Link>
                                            </div>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}











