import React, { useEffect, useState } from "react";
import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { getRecommendationCount } from "../api/recommendations";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [count, setCount] = useState<number>();

    useEffect(() => {
        getRecommendationCount().then((countData) => {
            setCount(countData);
            console.log(countData);
        });
    }, []);

    return (
        <>
            <Box w="100%" h="6rem" backgroundColor="#1db954">
                <Container maxW="container.lg" h="100%">
                    <Flex justify="space-between" align="center" h="100%">
                        <Flex>
                            <Text fontSize="5xl" fontWeight="900" color="white" mr={1} letterSpacing={1}>
                                Music Recommender
                            </Text>
                            <BsMusicNoteBeamed color="white" fontSize="3rem" />
                        </Flex>
                        <Flex align="center">
                            {count != undefined ? (
                                <Text fontSize="5xl" fontWeight="900" color="white">
                                    {`Total: ${count}`}
                                </Text>
                            ) : (
                                <>
                                    <Text fontSize="5xl" fontWeight="900" color="white" mr={2}>
                                        Total:
                                    </Text>
                                    <Spinner color="white" />
                                </>
                            )}
                        </Flex>
                    </Flex>
                </Container>
            </Box>
            <Container maxW="container.lg">{children}</Container>
        </>
    );
};

export default Layout;
