import { MainWrapper } from "@/components/layouts"
import { Banner, GridLayout, VideoCard } from "@/components/shared";
import { dummyCards } from "@/constants";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";

const ProfilePage = async ({params} : ParamsWithSearch) => {
  const {id} = await params;
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <MainWrapper>
        <Banner 
        title={user?.name || "Unknown User"}
        subtitle={user?.email || "Unknown Email"}
        imageSrc={user?.image || "/assets/images/dummy.jpg"}
      />
      <GridLayout  gap="lg"  columns={{sm: 1, md: 2, lg:3, xl: 3,'2xl': 3}}  >
        {dummyCards.map((card) => (
            <VideoCard
              key={card.id} 
            {...card}
            />

        ))}
      </GridLayout>
    </MainWrapper>
  )
}
export default ProfilePage