import React, { useEffect, useState } from "react";
import { Box, Container, Flex, Spinner, Text, Link as CLink } from "@chakra-ui/react";
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
            <Box w="100%" h="6rem" backgroundColor="green.500">
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
                                <CLink color="white">
                                    <Text>Home</Text>
                                </CLink>
                            </Link>
                            <Link to="/recommend">
                                <CLink color="white">
                                    <Text>Find Music</Text>
                                </CLink>
                            </Link>
                            <Link to="/random">
                                <CLink color="white">
                                    <Text>Random Music</Text>
                                </CLink>
                            </Link>
                        </Flex>
                    </Flex>
                </Container>
            </Box>
            <Box w="100%" h="3rem" backgroundColor="#E6DDD5" mb={8}>
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
            <Container maxW="container.lg" pb={8}>
                {children}
            </Container>
        </>
    );
};

export default Layout;
