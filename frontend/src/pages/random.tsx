import { Box, Button, Flex, Spinner, Text, useToast } from "@chakra-ui/react";
import { Link } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";
import { getRandomRecommendation, getRecommendationCount } from "../api/recommendations";
import RecommendationCard from "../components/RecommendationCard";
import Recommendation, { SavedRecommendations } from "../interfaces/recommendation";

// markup
const RandomPage = () => {
    const [count, setCount] = useState<number>();
    const [isLoading, setIsLoading] = useState(true);
    const [recommendations, setRecommendations] = useState<Recommendation[]>();

    const toast = useToast();

    useEffect(() => {
        try {
            getRecommendationCount().then((countData) => {
                setCount(countData);
                getRandomRecommendation().then((savedRecommendations: SavedRecommendations[]) => {
                    if (savedRecommendations.length > 0) {
                        setRecommendations(savedRecommendations[0].tracks);
                    } else {
                        toast({
                            description: "Could not get recommendation",
                            title: "Something went wrong",
                            status: "error",
                        });
                    }
                    setIsLoading(false);
                });
            });
        } catch (e) {
            setIsLoading(false);
            toast({
                description: "Please try again later.",
                title: "Something went wrong",
                status: "error",
            });
        }
    }, []);

    const getNewRecommendation = async () => {
        const savedRecommendations: SavedRecommendations[] = await getRandomRecommendation();
        if (savedRecommendations.length > 0) {
            setRecommendations(savedRecommendations[0].tracks);
        } else {
            toast({
                description: "Could not get recommendation",
                title: "Something went wrong",
                status: "error",
            });
        }
    };

    return (
        <>
            {isLoading ? (
                <Flex py={16} justify="center">
                    <Spinner size="xl" />
                </Flex>
            ) : (
                <Flex direction="column" align="center">
                    <Text color="gray.700" fontSize="4xl" fontWeight={500}>
                        Rhythmood has made <strong>{count}</strong> recommendations.
                    </Text>
                    <Text color="gray.700" fontSize="xl" mb={12}>
                        Here's one of them:
                    </Text>
                    {recommendations && (
                        <Flex w="100%" flexWrap="wrap" rowGap={4} columnGap={4} mb={12}>
                            {recommendations.map((recommendation) => {
                                return <RecommendationCard recommendation={recommendation} />;
                            })}
                        </Flex>
                    )}
                    <Button colorScheme="green" w="16rem" h="4rem" fontSize="2xl" onClick={getNewRecommendation}>
                        Get another one
                    </Button>
                </Flex>
            )}
        </>
    );
};

export default RandomPage;
