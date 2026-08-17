import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface Props {
  name: string
  imageSrc?: string
  available?: boolean
}
export function AvatarContainer({ name, imageSrc, available = true }: Props) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='relative'>
        <Avatar className='w-56 h-56 border-2 border-border'>
          <AvatarImage src={imageSrc} alt={name} />
          <AvatarFallback className='text-2xl font-medium bg-purple-50 text-purple-800'>
            {initials}
          </AvatarFallback>
        </Avatar>

        {available && (
          <Badge
            variant='outline'
            className='absolute -bottom-1 left-1/2 -translate-x-1/2
                       text-emerald-700 border-border bg-background
                       text-[10px] px-2 py-0.5 whitespace-nowrap'
          >
            <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5' />
            Available
          </Badge>
        )}
      </div>

      <Separator className='w-8' />
    </div>
  )
}
