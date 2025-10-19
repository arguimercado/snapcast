import Image from "next/image"

const Title = ({ children }: { children: React.ReactNode }) => {
   return (
     <h1 className='text-2xl font-karla'>{children}</h1>
   )
}

const SubHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className='text-sm  text-gray-600'>{children}</h2>
  )
}

const HeaderUserImage = ({ userImage, alt }: { userImage?: string; alt?: string }) => {
   return (
      <>
         {userImage && (
            <Image src={userImage} alt={alt || "User Image"} width={66} height={66} className="rounded-full" />
         )}
      </>
   );
}


const Content = ({children} : {children: React.ReactNode}) => {
   return (
      <div className="details">
         {children}
      </div>
   )
}

const Wrapper = ({children} : {children: React.ReactNode}) => {
  return (
    <header className="header">
      <div >
         {children}
      </div>
   </header>
  )
}
const Header = {
   Wrapper : Wrapper,
   Title: Title,
   SubHeader: SubHeader,
   UserImage: HeaderUserImage,
   Content: Content
}

export default Header;