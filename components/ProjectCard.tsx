import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import Image, { StaticImageData } from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  category: string
  image: StaticImageData
  liveUrl: string
  codeUrl: string
}

export function ProjectCard({
  title,
  description,
  tags,
  category,
  image,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <Card className='overflow-hidden flex flex-col h-full'>
      <Image
        src={image}
        width={200}
        height={200}
        className='w-full h-50 object-cover rounded-t-md'
        alt='project image'
      />

      <CardContent className=' flex flex-col gap-2.5 flex-1'>
        <h3 className='font-medium text-sm'>{title}</h3>
        <p className='text-xs text-muted-foreground leading-relaxed flex-1'>
          {description}
        </p>

        <div className='flex flex-wrap gap-1.5'>
          {tags.map((t) => (
            <Badge key={t} variant='outline' className='text-[10px]'>
              {t}
            </Badge>
          ))}
        </div>

        <div className='flex gap-2 mt-1'>
          <Button size='sm' className='flex-1 h-8 text-xs' asChild>
            <Link href={liveUrl} target='_blank'>
              <ExternalLink className='w-3.5 h-3.5 mr-1.5' /> Live demo
            </Link>
          </Button>
          <Button
            size='sm'
            variant='outline'
            className='flex-1 h-8 text-xs'
            asChild
          >
            <Link href={codeUrl} target='_blank'>
              <FaGithub className='w-3.5 h-3.5 mr-1.5' /> Code
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
