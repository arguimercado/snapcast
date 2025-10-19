import { Suspense } from "react"
import UploadComponent from "./upload-component"
import { PageLoader } from "@/components/shared"

const UploadPage = () => {

  return (
    <Suspense fallback={<PageLoader />}>
      <UploadComponent />
    </Suspense>
  )
}
export default UploadPage