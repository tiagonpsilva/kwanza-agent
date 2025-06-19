import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FavoriteIcon, ChatIcon, EnergyIcon } from "@/components/atoms/Icon"
import { P, Small } from "@/components/atoms/Typography"
import { cn } from "@/lib/utils"
import { Clock, ExternalLink } from "lucide-react"

interface NewsCardProps {
  title: string
  description: string
  category: string
  timeAgo: string
  source: string
  imageUrl?: string
  isFavorited?: boolean
  readTime?: string
  onFavorite?: () => void
  onShare?: () => void
  onReadMore?: () => void
  className?: string
}

export function NewsCard({
  title,
  description,
  category,
  timeAgo,
  source,
  imageUrl,
  isFavorited = false,
  readTime,
  onFavorite,
  onShare,
  onReadMore,
  className
}: NewsCardProps) {
  return (
    <Card className={cn("group hover:shadow-md transition-shadow", className)}>
      {imageUrl && (
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <img 
            src={imageUrl} 
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <Badge 
            variant="secondary" 
            className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm"
          >
            {category}
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-3">
        {!imageUrl && (
          <Badge variant="secondary" className="w-fit mb-2">
            {category}
          </Badge>
        )}
        <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <span className="font-medium">{source}</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {timeAgo}
            </div>
            {readTime && (
              <div className="flex items-center gap-1">
                <EnergyIcon size="sm" />
                {readTime}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onFavorite}
              className={cn(
                "p-2 h-8 w-8",
                isFavorited && "text-destructive hover:text-destructive"
              )}
            >
              <FavoriteIcon size="sm" className={isFavorited ? "fill-current" : ""} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onShare}
              className="p-2 h-8 w-8"
            >
              <ChatIcon size="sm" />
            </Button>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onReadMore}
            className="gap-1"
          >
            Ler mais
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Versão compacta para listas
export function NewsCardCompact({
  title,
  description,
  category,
  timeAgo,
  source,
  isFavorited = false,
  onFavorite,
  onReadMore,
  className
}: Omit<NewsCardProps, "imageUrl" | "readTime" | "onShare">) {
  return (
    <Card className={cn("hover:shadow-sm transition-shadow", className)}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
              <Small className="text-xs">
                {source} • {timeAgo}
              </Small>
            </div>
            <h4 className="font-medium leading-tight line-clamp-2 mb-1 hover:text-primary transition-colors cursor-pointer">
              {title}
            </h4>
            <P className="text-sm text-muted-foreground line-clamp-1">
              {description}
            </P>
          </div>
          
          <div className="flex items-center gap-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={onFavorite}
              className={cn(
                "p-1 h-6 w-6",
                isFavorited && "text-destructive"
              )}
            >
              <FavoriteIcon size="sm" className={isFavorited ? "fill-current" : ""} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onReadMore}
              className="p-1 h-6 w-6"
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}