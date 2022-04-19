import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Recommendation from "../interfaces/recommendation";

interface RecommendationCardProps {
    recommendation: Recommendation;
}

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
    return (
        <Box
            w={["100%", "100%", "48%"]}
            p={4}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        >
            <Flex w="100%" h="100%" columnGap={8}>
                <Link href={recommendation.album.url} target="_blank">
                    <Image height="10rem" width="10rem" src={recommendation.album.imageUrl} />
                </Link>
                <Flex direction="column" width="50%">
                    <Link href={recommendation.song.url} target="_blank">
                        <Text fontSize="2xl" fontWeight="bold" color="gray.700">
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
