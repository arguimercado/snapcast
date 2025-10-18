import { Header } from '@/components/layouts'
import React from 'react'
import { RecordVideoAction, SearchInput, UploadVideoAction } from '@/components/shared'
import { Input } from '@/components/ui/input'


const Page = () => {
  return (
    <main className='wrapper page'>
      <Header.Wrapper>
        <section className="header-container">
          <Header.Content>
            <article>
              <Header.SubHeader>
                Your go-to platform for seamless video communication.
              </Header.SubHeader>
              <Header.Title>Welcome to Loom Clone</Header.Title>
            </article>
          </Header.Content>
          <aside>
            <UploadVideoAction />
            <RecordVideoAction />
          </aside>
        </section>
        <section className='search-filter mt-4'>
          <SearchInput />
        </section>
      </Header.Wrapper>
    </main>
  )
}

export default Page