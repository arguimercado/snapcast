import { PageLoader } from "@/components/shared"
import { Suspense } from "react"
import VideoDetailComponent from "./video-detail-component"

interface VideoPageProps {
  params: Promise<{ videoId: string }>
}

const VideoPage = ({ params }: VideoPageProps) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <VideoDetailComponent params={params} />
   </Suspense>
  )
}

export default VideoPage   