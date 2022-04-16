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
                    <Flex justify="center" align="center" h="100%">
                        <Text fontSize="5xl" fontWeight="900" color="white" mr={4} letterSpacing={1}>
                            Music Recommender
                        </Text>
                        <BsMusicNoteBeamed color="white" fontSize="3rem" />
                    </Flex>
                </Container>
            </Box>
            <Box w="100%" h="3rem" backgroundColor="#E6DDD5" mb={12}>
                <Container maxW="container.lg" h="100%">
                    <Flex justify="center" align="center" h="100%">
                        <Text fontSize="xl" fontWeight="600" color="gray.600" mr={2}>
                            Total Recommendations made:
                        </Text>
                        {count != undefined ? (
                            <Text fontSize="xl" fontWeight="600" color="gray.600">
                                {count}
                            </Text>
                        ) : (
                            <Spinner color="white" />
                        )}
                    </Flex>
                </Container>
            </Box>
            <Container maxW="container.lg" pb={16}>
                {children}
            </Container>
        </>
    );
};

export default Layout;
