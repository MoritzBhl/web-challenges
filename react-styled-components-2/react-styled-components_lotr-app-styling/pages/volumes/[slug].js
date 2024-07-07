import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import ArrowLeft from "../../icons/arrow-left.svg";
import ArrowRight from "../../icons/arrow-right.svg";
import ChevronLeft from "../../icons/chevron-left.svg";
import styled, { css } from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <StyledLikAllVolumes href="/volumes">
        <ChevronLeft /> All Volumes
      </StyledLikAllVolumes>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Background $color={color}>
        <BookList>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <BookVolume>{ordinal}</BookVolume>
              <BookTitle>{title}</BookTitle>
            </li>
          ))}
        </BookList>
        <StyledImage
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </Background>
      <Navigation>
        {previousVolume ? (
          <NavLink href={`/volumes/${previousVolume.slug}`} $position="left">
            <ArrowLeft />
            <div>
              <CaptionHeading>Previous Volume</CaptionHeading>
              <PreviousTitle> {previousVolume.title}</PreviousTitle>
            </div>
          </NavLink>
        ) : null}
        {nextVolume ? (
          <NavLink href={`/volumes/${nextVolume.slug}`} $position="right">
            <div>
              <CaptionHeading>Next Volume</CaptionHeading>
              <PreviousTitle> {nextVolume.title}</PreviousTitle>
            </div>
            <ArrowRight />
          </NavLink>
        ) : null}
      </Navigation>
    </>
  );
}

const Main = styled.div`
  margin: 2rem;
`;

const StyledLikAllVolumes = styled(Link)`
  gap: 0.5rem;
  text-decoration: none;
  color: var(--color-earth);
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font: var(--font-headline-1);
`;

const Description = styled.p`
  font: var(--font-body);
  padding-block: 1rem;
`;

const StyledImage = styled(Image)`
  grid-area: book;
`;

const Background = styled.div`
  background: linear-gradient(
    90deg,
    ${({ $color }) => $color} 65%,
    var(--color-smoke) 200%
  );
  margin-inline: -1rem;
  padding: 1rem 2rem;
  display: flex;
`;

const BookList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 2rem;
`;

const BookVolume = styled.p`
  font: var(--font-caption--italic);
  color: white;
`;
const BookTitle = styled.strong`
  font: var(--font-title);
  color: white;
`;

const Navigation = styled.nav`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "prev next";
  gap: 8px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--color-earth);
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ $position }) =>
    $position === "left" &&
    css`
      grid-area: prev;
      justify-self: start;
      text-align: start;
    `}
  ${({ $position }) =>
    $position === "right" &&
    css`
      grid-area: next;
      justify-self: end;
      text-align: end;
    `}
`;

const CaptionHeading = styled.h3`
  font: var(--font-caption);
  margin: 0;
`;

const PreviousTitle = styled.p`
  font: var (--font-caption--italic);
  margin: 0;
  font-weight: bold;
`;
