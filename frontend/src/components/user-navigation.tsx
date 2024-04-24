"use client"

import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import React from "react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

type Component = {
  title: string
  href: string
  description: string
}

const components: Component[] = [
  {
    title: "Urządzenia",
    href: "/dashboard/devices",
    description: "Zarządzaj swoimi urządzeniami.",
  },
  {
    title: "Ustawienia",
    href: "/dashboard/settings",
    description: "Zarządzaj ustawieniami oświetlenia.",
  },
]

const accountComponents: Component[] = []

export default function UserNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Zarządzanie</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Konto</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {accountComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Button onClick={() => signOut()}>
            Wyloguj
            <LogOut size={18} className="ml-2" />
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

type ListItemProps = {
  title: string
  href: string
}
const ListItem = ({
  title,
  children,
  href,
}: React.PropsWithChildren<ListItemProps>) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href={href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
