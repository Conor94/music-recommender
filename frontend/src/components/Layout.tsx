import React, { useEffect, useState } from "react";
import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { getRecommendationCount } from "../api/recommendations";
import { Link } from "gatsby";

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
                <Container maxW="container.lg" w="100%" h="100%">
                    <Flex justify="space-between" align="center" w="100%" h="100%">
                        <Flex>
                            <Text
                                fontSize="5xl"
                                fontWeight="700"
                                color="white"
                                mr={4}
                                letterSpacing={1}
                                fontFamily="Aclonica"
                            >
                                Rhythmood
                            </Text>
                            <BsMusicNoteBeamed color="white" fontSize="4rem" />
                        </Flex>
                        <Flex columnGap={8}>
                            <Link to="/">
                                <Text color="white" fontFamily="Roboto" letterSpacing={1} fontWeight={600}>
                                    Home
                                </Text>
                            </Link>
                            <Link to="/recommend">
                                <Text color="white" fontFamily="Roboto" letterSpacing={1} fontWeight={600}>
                                    Find Music
                                </Text>
                            </Link>
                            <Link to="/random">
                                <Text color="white" fontFamily="Roboto" letterSpacing={1} fontWeight={600}>
                                    Random Music
                                </Text>
                            </Link>
                        </Flex>
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
