import ROUTE from "@/constants/routes"
import Image from "next/image"
import Link from "next/link"

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
         <Link href={ROUTE.HOME} >
            <Image src="/assets/icons/logo.svg" alt="Logo" width={32} height={32} />
            <h1>SnapCast</h1>
         </Link>
         <div className="description">
            <section>
               <figure>
                  {Array.from({length: 5}).map((_, idx) => (
                     <Image src="/assets/icons/star.svg" alt="Star" width={20} height={20} key={idx} />
                  )  )}
               </figure>
               <p>SnapCast makes it easy to create and share video messages.</p>
               <article>
                  <Image src="/assets/images/jason.png" alt="User" width={64} height={64} className="rounded-full" />
                  <div>
                     <h2>Vener Amistad</h2>
                     <p>Product Designer, Crossworld Marine Service</p>
                  </div>
               </article>
            </section>
         </div>
         <p> &copy; 2025 SnapCast. All rights reserved.</p>
      </aside>
      <aside className="google-sign-in">
         {children}
      </aside>
    </main>
  )
}
export default AuthLayout