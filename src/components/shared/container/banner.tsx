import { Header } from "@/components/layouts";
import React from "react";
import {
  RecordVideoAction,
  SearchInput,
  UploadVideoAction,
} from "@/components/shared";
import DropdownList from "@/components/shared/inputs/dropdown-list";
import Image from "next/image";

interface BannerProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
}

const Banner = ({ title, subtitle, imageSrc }: BannerProps) => {
  return (
    <Header.Wrapper>
      <section className="header-container">
        <Header.Content>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={"User Image"}
              width={66}
              height={66}
              className="rounded-full"
            />
          )}
          <article>
            <Header.SubHeader>{subtitle}</Header.SubHeader>
            <Header.Title>{title}</Header.Title>
          </article>
        </Header.Content>
        <aside>
          <UploadVideoAction />
          <RecordVideoAction />
        </aside>
      </section>
      <section className="search-filter mt-4">
        <SearchInput />
        <DropdownList />
      </section>
    </Header.Wrapper>
  );
};
export default Banner;
