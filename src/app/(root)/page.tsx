import { MainWrapper } from '@/components/layouts'
import React from 'react'
import { Banner, GridLayout, VideoCard } from '@/components/shared'
import { dummyCards } from '@/constants'


const MainPage = () => {
  return (
    <MainWrapper>
      <Banner 
        title="All Videos"
        subtitle="Public Videos" />

      <GridLayout  gap="lg"  columns={{sm: 1, md: 2, lg:3}}  >
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

export default MainPage