import { navigationData } from "@/constants"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu"

function NavMenu({ hash }: { hash: string }) {
  return (
    <NavigationMenu className='max-lg:hidden bg-muted p-0.5 rounded-full'>
      <NavigationMenuList className='flex gap-0'>
        {navigationData.map((navItem) => (
          <NavigationMenuItem key={navItem.title}>
            <NavigationMenuLink
              href={navItem.href}
              className={`${hash === navItem.href && "bg-background text-foreground"} px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal`}
            >
              {navItem.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default NavMenu
