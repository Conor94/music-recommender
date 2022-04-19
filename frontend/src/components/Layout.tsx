import React from "react";
import { Box, Container, Flex, Text, Link as CLink } from "@chakra-ui/react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { Link } from "gatsby";
import "@fontsource/aclonica";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Box background="#444" h="6rem" w="100%">
                <Container maxW="container.lg" w="100%" h="100%">
                    <Flex justify="space-between" align="center" w="100%" h="100%">
                        <Link to="/">
                            <Flex>
                                <Text
                                    color="white"
                                    fontFamily="Aclonica"
                                    fontWeight="700"
                                    letterSpacing={1}
                                    fontSize="5xl"
                                    mr={4}
                                >
                                    Rhythmood
                                </Text>
                                <Text fontSize="7xl">
                                    <BsMusicNoteBeamed color="#1db954" />
                                </Text>
                            </Flex>
                        </Link>
                        <Flex columnGap={8} color="white">
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
            <Container maxW="container.lg" py={12} backgroundColor="white" borderRadius={8}>
                {children}
            </Container>
        </>
    );
};
export default Layout;
