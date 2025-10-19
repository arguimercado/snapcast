import { MainWrapper } from "@/components/layouts"
import { Banner, GridLayout, VideoCard } from "@/components/shared";
import { dummyCards } from "@/constants";

const ProfilePage = async ({params} : ParamsWithSearch) => {
  const {id} = await params;
  return (
    <MainWrapper>
        <Banner 
        title="Arnold Mercado"
        subtitle="arguimercado@gmail.com"
        imageSrc="/assets/images/dummy.jpg"
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