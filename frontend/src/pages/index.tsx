import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import * as React from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";

// markup
const IndexPage = () => {
    return (
        <Flex direction="column" align="center">
            <Text fontSize="8rem" mt={4} mb={8}>
                <BsMusicNoteBeamed />
            </Text>
            <Text fontSize="6xl" color="gray.700" fontWeight="bold">
                Welcome to Rhythmood.
            </Text>
            <Text fontSize="2xl" color="gray.600" mb={16}>
                Choose an option to get started:
            </Text>
            <Box mb={4}>
                <Link to="/recommend">
                    <Button colorScheme="green" h="4rem" fontSize="2xl">
                        Get song recommendations
                    </Button>
                </Link>
            </Box>
            <Box>
                <Link to="/random">
                    <Button colorScheme="green" h="4rem" fontSize="2xl">
                        Find random music
                    </Button>
                </Link>
            </Box>
        </Flex>
    );
};

export default IndexPage;
