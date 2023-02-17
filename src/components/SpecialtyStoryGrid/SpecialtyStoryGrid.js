import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: grid;
    gap: 48px;

    grid-template-columns: 50% 50%;
    grid-template-areas:
        "market market"
        "sport sport";

    @media ${QUERIES.desktopAndUp} {
      grid-template-areas:
      "market sport"
      "market sport";
    }
`;

const MarketsSection = styled.section`
grid-area:market ;
`;

const MarketCards = styled.div`
display:grid;
grid-template-columns:repeat(auto-fill,minmax(150px,1fr));
gap:10px;
`;

const SportsSection = styled.section`
overflow:hidden ;
grid-area:sport ;
`;

const SportsStories = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    @media ${QUERIES.tabletAndUp} {
        display: flex;
        max-width: 100%;
        overflow: auto;
        gap: 10px;
    }
`;

export default SpecialtyStoryGrid;
