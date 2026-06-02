"use client";
import { cn } from "@/lib/utils";
import {
  Bell,
  Calendar,
  LayoutDashboard,
  LogOut,
  Settings,
  Stethoscope,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface HeaderProps {
  showDashboardNav?: boolean;
}

interface NavigationItem {
  label: string;
  icon: React.ComponentType<any>;
  href: string;
  active: boolean;
}

const Header: React.FC<HeaderProps> = ({ showDashboardNav = false }) => {
  const user = {
    name: "abc",
    type: "patient",
  };
  const isAuthenticated = true;

  const pathName = usePathname();

  const navigationItems = useMemo<NavigationItem[]>(() => {
    if (!user || !showDashboardNav) return [];

    if (user?.type === "patient") {
      return [
        {
          label: "Appointments",
          icon: Calendar,
          href: "/patient/dashboard",
          active: pathName?.includes("/patient/dashboard") || false,
        },
      ];
    }
    if (user?.type === "doctor") {
      return [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          href: "/doctor/dashboard",
          active: pathName?.includes("/doctor/dashboard") || false,
        },
        {
          label: "Appointments",
          icon: Calendar,
          href: "/doctor/appointments",
          active: pathName?.includes("/doctor/appointments") || false,
        },
      ];
    }
    return [];
  }, [user, showDashboardNav, pathName]);

  return (
    <header className="fixed top-0 w-full border-b bg-cloud-white/80 z-50 backdrop-blur-md">
      <div className="container mx-auto h-16 flex items-center justify-between px-4">
        {/* Left Section */}
        <div className="shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-vital-mint/10 rounded-xl group-hover:vital-mint/20 transition-colors">
              <Stethoscope className="size-8 text-vital-mint" />
            </div>
            <span className="text-3xl font-extrabold font-heading tracking-tight text-trust-indigo">
              MediSure<span className="text-vital-mint">.</span>
            </span>
          </Link>
        </div>

        {/* Center: Role BAsed Navihgtaion */}
        {isAuthenticated && showDashboardNav && (
          <nav className="hidden md:flex items-center justify-center flex-1 gap-2 mx-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    item.active
                      ? "bg-azure-calm text-trust-indigo shadow-sm"
                      : "text-slate-depth hover:bg-slate-100 hover:text-trust-indigo",
                  )}
                >
                  <item.icon
                    size={18}
                    className={cn(
                      item.active ? "text-trust-indigo" : "text-slate-400",
                    )}
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        )}

        {/* Right Section  */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Book consultation */}
          {(!isAuthenticated || user?.type === "patient") && (
            <Button
              className="hidden sm:flex bg-vital-mint text-slate-depth hover:bg-vital-mint/90 font-bold shadow-sm transition-all"
              asChild
            >
              <Link href={"/doctors"}>Book Consultaion</Link>
            </Button>
          )}

          <div className="hidden sm:block h-6 w-px bg-border mx-1"></div>

          {!isAuthenticated ? (
            <div className="hidden md:flex gap-2">
              <Button
                variant="ghost"
                className="text-slate-depth hover:text-trust-indigo hover:bg-azure-calm/50"
                asChild
              >
                <Link href="/login">Log in</Link>
              </Button>

              <Button
                className="bg-trust-indigo text-cloud-white hover:bg-trust-indigo/90"
                asChild
              >
                <Link href="/signup/patient">Sign Up</Link>
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Notification */}
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full text-slate-depth hover:text-trust-indigo hover:bg-azure-calm"
              >
                <Bell className="size-6" />
                <Badge className="absolute -top-1 -right-1 flex w-4 h-4 items-center justify-center rounded-full border-none bg-digital-peach p-0 text-[10px] text-white">
                  5
                </Badge>
              </Button>

              {/* Temporary User Display - Replace with Shadcn DropdownMenu later */}
              <div className="hidden sm:block h-6 w-px bg-border"></div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-3 cursor-pointer group outline-none">
                    <div className="hidden sm:flex flex-col items-end">
                      <span className="text-sm font-bold leading-none text-trust-indigo group-hover:text-trust-indigo/80 transition-colors">
                        {user.name}
                      </span>
                      <span className="text-xs text-slate-500 capitalize mt-1">
                        {user.type}
                      </span>
                    </div>

                    <Avatar className="h-9 w-9 rounded-full bg-azure-calm border border-trust-indigo/20 flex items-center justify-center text-trust-indigo group-hover:ring-2 group-hover:ring-vital-mint/50 transition-all">
                      {/* <AvatarImage src={user.profilePictureUrl} alt={user.name} /> */}
                      <AvatarFallback className="bg-azure-calm text-trust-indigo font-bold text-sm">
                        {user.name ? user.name.charAt(0).toUpperCase() : <User size={18} />}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-56 mt-2">
                  <DropdownMenuLabel className="font-heading text-trust-indigo">
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link
                      href={`/${user.type}/profile`}
                      className="flex w-full items-center"
                    >
                      <User className="mr-2 size-4 text-slate-500" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link
                      href={`/${user.type}/dashboard`}
                      className="flex w-full items-center"
                    >
                      <LayoutDashboard className="mr-2 size-4 text-slate-500" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/settings" className="flex w-full items-center">
                      <Settings className="mr-2 size-4 text-slate-500" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive">
                    <LogOut className="mr-2 size-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
