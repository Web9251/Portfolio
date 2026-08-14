import { TextAlignJustify } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { navigationData } from "@/constants"
import { Dispatch, SetStateAction } from "react"

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function NavDropdownMenu({ isOpen, setIsOpen }: Props) {
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className='rounded-full bg-background border border-border p-2 outline-none flex items-center justify-center cursor-pointer transition-colors'>
        <TextAlignJustify size={20} />
        <span className='sr-only'>Menu</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-56 mt-2'>
        {navigationData.map((item) => (
          <DropdownMenuItem key={item.title}>
            <a
              href={item.href}
              className='w-full cursor-pointer text-sm font-medium'
            >
              {item.title}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default NavDropdownMenu
