import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Recommendation from "../interfaces/recommendation";

interface RecommendationCardProps {
    recommendation: Recommendation;
}

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
    console.log(recommendation);
    return (
        <Box w="48%" p={4} boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px">
            <Flex w="100%" h="100%" columnGap={8}>
                <Link href={recommendation.album.url} target="_blank" maxWidth="288px">
                    <Image h="10rem" w="10rem" src={recommendation.album.imageUrl} />
                </Link>
                <Flex direction="column">
                    <Link href={recommendation.song.url} target="_blank">
                        <Text fontSize="3xl" fontWeight="bold" color="gray.700">
                            {recommendation.song.title}
                        </Text>
                    </Link>
                    <Link href={recommendation.artists[0].url} target="_blank">
                        <Text fontSize="lg">by {recommendation.artists[0].title}</Text>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default RecommendationCard;
