import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { BsMusicNoteBeamed } from "react-icons/bs";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Box w="100%" h="6rem" backgroundColor="#1db954">
                <Container maxW="container.lg" h="100%">
                    <Flex justify="center" align="center" h="100%">
                        <Text fontSize="5xl" fontFamily="Lato" fontWeight={700} color="white" mr={1}>
                            Music Recommender
                        </Text>
                        <BsMusicNoteBeamed color="white" fontSize="4rem" />
                    </Flex>
                </Container>
            </Box>
            <Container maxW="container.lg">{children}</Container>
        </>
    );
};

export default Layout;
