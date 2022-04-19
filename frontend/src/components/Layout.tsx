import React, { useEffect, useState } from "react";
import { Box, Container, Flex, Spinner, Text, Link as CLink } from "@chakra-ui/react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { getRecommendationCount } from "../api/recommendations";
import { Link } from "gatsby";
import "../Style/styles.css";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Box w="100%" h="6rem" backgroundColor="#444444">
                <Container maxW="container.lg" w="100%" h="100%">
                    <Flex justify="space-between" align="center" w="100%" h="100%">
                        <Link to="/">
                            <Flex>
                                <Text className="title" mr={4}>
                                    Rhythmood
                                </Text>
                                <BsMusicNoteBeamed className="music-Note" />
                            </Flex>
                        </Link>
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
            <Container maxW="container.lg" py={12} background="white" borderRadius={8}>
                {children}
            </Container>
        </>
    );
};
export default Layout;
