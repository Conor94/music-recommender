import React, { useEffect, useState } from "react";
import { Box, Container, Flex, Spinner, Text, Link as CLink } from "@chakra-ui/react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { getRecommendationCount } from "../api/recommendations";
import { Link } from "gatsby";
import "../Style/styles.css"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [count, setCount] = useState<number>(0); //0 placeholder

    useEffect(() => {
        getRecommendationCount().then((countData) => {
            setCount(countData);
            console.log(countData);
        });
    }, []);

    return (
        <>
            <Box w="100%" h="6rem" backgroundColor="#444444">
                <Container maxW="container.lg" w="100%" h="100%">
                    <Flex justify="space-between" align="center" w="100%" h="100%">
                        <Flex>
                            <Text className="title-text" mr={4}>
                                Rhythmood
                            </Text>
                            <BsMusicNoteBeamed className="music-Note"/>
                        </Flex>
                        <Flex columnGap={8} className="hot-Bar-Link">
                            <Link to="/">
                                <CLink>
                                    <Text>Home</Text>
                                </CLink>
                            </Link>
                            <Link to="/recommend">
                                <CLink>
                                    <Text>Find Music</Text>
                                </CLink>
                            </Link>
                            <Link to="/random">
                                <CLink>
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
                        <Text className="recommendations-made" mr={2}>
                            Total Recommendations made:
                        </Text>
                        {count != undefined ? (
                            <Text className="recommendations-made">
                                {count}
                            </Text>
                        ) : (
                            <Spinner color="white" />
                        )}
                    </Flex>
                </Container>
            </Box>
            <Container maxW="container.lg" pb={8} background = "#eff0f4">
                {children}
            </Container>
        </>

    );
};
export default Layout;
