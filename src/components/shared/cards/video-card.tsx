"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ROUTE from "@/constants/routes"

const VideoCard = ({ id, title, thumbnail, createdAt, userImg, username, views, visibility, duration } : VideoCardProps) => {
  return (
    <Link href={ROUTE.VIDEO(id)} className="video-card">
      <Image src={thumbnail} alt={title} width={290} height={160} className="thumbnail" />
      <article>
         <div>
            <figure>
               <Image src={userImg} alt="avatar" width={34} height={34} className="rounded-full aspect-square" />
               <figcaption>
                  <h3>{username}</h3>
                  <p>{visibility}</p>
               </figcaption>
            </figure>
            <aside>
               <Image src="/assets/icons/eye.svg" alt="views icon" width={16} height={16} />
               <span>{views} views</span>
            </aside>
         </div>
         <h2>{title} - {" "} {createdAt.toLocaleDateString('en-US', 
            {year:'numeric', month: 'short',day: 'numeric'})}</h2>
         
      </article>
      <Button size={"icon"} className="copy-btn">
         <Image src="/assets/icons/link.svg" alt="copy" width={18} height={18}  />
      </Button>
      {duration && (
         <div className="duration">
            <span>{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</span>
         </div>
      )}
   </Link>
  )
}
export default VideoCard