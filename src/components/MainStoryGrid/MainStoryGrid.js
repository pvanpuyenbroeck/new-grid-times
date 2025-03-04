import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES, COLORS } from "../../constants";

const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryList>
                    {SECONDARY_STORIES.map((story, index) => (
                        <>
                            <SecondaryStory key={story.id} {...story} />
                            <Devider />
                        </>
                    ))}
                </StoryList>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <StoryList>
                    {OPINION_STORIES.map((story, index) => (
                        <OpinionStory key={story.id} {...story} />
                    ))}
                </StoryList>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement />
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        "main-story"
        "secondary-stories"
        "opinion-stories"
        "advertisement";
    gap: 48px;
    margin-bottom: 48px;

    @media ${QUERIES.tabletAndUp} {
        /* width: 100%;
        grid-template-columns: 70% 1fr; */
        grid-template-areas:
            "main-story secondary-stories"
            "advertisement advertisement"
            "opinion-stories opinion-stories";
    }
`;
const Devider = styled.hr`
    width: 95%;
    border: 1px solid ${COLORS.gray["300"]};
`;

const MainStorySection = styled.section`
    grid-area: main-story;
`;

const StoryList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const SecondaryStorySection = styled.section`
    grid-area: secondary-stories;
`;

const OpinionSection = styled.section`
    grid-area: opinion-stories;

    @media ${QUERIES.tabletOnly} {
        & > ${StoryList} {
            display: flex;
            flex-direction: row;
        }
    }
`;

const AdvertisementSection = styled.section`
    grid-area: advertisement;
`;

export default MainStoryGrid;
