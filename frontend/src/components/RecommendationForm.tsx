import React, { useEffect, useState } from "react";
import { MultiValue, Select } from "chakra-react-select";

import { getAllGenres } from "../api/genres";
import {
    Box,
    Flex,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Button,
    useToast,
} from "@chakra-ui/react";
import { createRecommendation } from "../api/recommendations";
import { isError } from "util";
import { WarningIcon } from "@chakra-ui/icons";
import { count } from "console";

const RecommendationForm = () => {
    // state for form values
    const [genres, setGenres] = useState<String[]>([]);

    // form data state
    const [selectedGenres, setSelectedGenres] = useState<MultiValue<any>>([]);
    const [amount, setAmount] = useState<number>(1);

    // state for slider bar parameters
    const [happiness, setHappiness] = useState<number>(0.5);
    const [grooviness, setGrooviness] = useState<number>(0.5);
    const [energy, setEnergy] = useState<number>(0.5);
    const [acousticness, setAcousticness] = useState<number>(0.5);
    const [speechiness, setSpeechiness] = useState<number>(0.5);
    const [popularity, setPopularity] = useState<number>(50);
    const [tempo, setTempo] = useState<number>(120);
    const [duration, setDuration] = useState<number>(180000);

    // error state
    const [error, setError] = useState("");

    const toast = useToast();

    useEffect(() => {
        getAllGenres().then((genresData) => {
            setGenres(genresData);
        });
    }, []);

    const handleSubmit = async () => {
        // check for form errors
        if (selectedGenres.length <= 0) {
            return setError("Please specify at least 1 genre");
        } else if (selectedGenres.length > 5) {
            return setError("Please specify no more than 5 genres");
        }

        try {
            setError("");
            const recommendation = await createRecommendation({
                genres: selectedGenres.map((genre: any) => genre.value),
                amount,
                happiness,
                grooviness,
                energy,
                acousticness,
                speechiness,
                popularity,
                tempo,
                duration,
            });
            console.log(recommendation);
        } catch (e) {
            toast({
                description: "Please try again later.",
                title: "Something went wrong",
                status: "error",
            });
        }
    };

    return (
        <Flex direction="column" align="center" rowGap={8}>
            {/* Choose Genres */}
            <Flex direction="column" align="center">
                <Text className="prefrence-Label" mb={4}>
                    Choose your preferred genres (1-5):
                </Text>
                <Box w="30rem">
                    <Select
                        value={selectedGenres}
                        onChange={(e) => {
                            setSelectedGenres(e);
                        }}
                        placeholder="Search genre name (ex. Rock)"
                        options={genres?.map((genre) => {
                            return {
                                label: genre,
                                value: genre,
                            };
                        })}
                        isMulti
                    />
                    <Flex justify="center" align="center" w="100%" mt={2}>
                        <Text hidden={error.length <= 0} color="red.300" fontWeight={600} fontSize="lg">
                            <WarningIcon mr={2} />
                            {error}
                        </Text>
                    </Flex>
                </Box>
            </Flex>

            {/* Choose number of recommendations */}
            <Flex direction="column" align="center">
                <Text className="prefrence-Label" mb={4}>
                    Number of recommendations (1-100):
                </Text>
                <NumberInput
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e))}
                    w="6rem"
                    defaultValue={1}
                    min={1}
                    max={100}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Flex>

            <Flex>
                {/* Happiness */}
                <Flex direction="column" align="center">
                    <Text className="prefrence-Label" mb={4}>
                        Happiness:
                    </Text>
                    <Slider
                        colorScheme="green"
                        value={happiness}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={(e) => setHappiness(e)}
                        w="25rem"
                    >
                        <SliderTrack bg="#b0adab">
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>

                <Box w={8} />

                {/* Grooviness */}
                <Flex direction="column" align="center">
                    <Text className="prefrence-Label" mb={4}>
                        Grooviness:
                    </Text>
                    <Slider
                        colorScheme="green"
                        value={grooviness}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={(e) => setGrooviness(e)}
                        w="25rem"
                    >
                        <SliderTrack bg="#b0adab">
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>
            </Flex>

            <Flex>
                {/* Energy */}
                <Flex direction="column" align="center">
                    <Text className="prefrence-Label" mb={4}>
                        Energy:
                    </Text>
                    <Slider
                        colorScheme="green"
                        value={energy}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={(e) => setEnergy(e)}
                        w="25rem"
                    >
                        <SliderTrack bg="#b0adab">
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>

                <Box w={8} />

                {/* Acousticness */}
                <Flex direction="column" align="center">
                    <Text className="prefrence-Label" mb={4}>
                        Acousticness:
                    </Text>
                    <Slider
                        colorScheme="green"
                        value={acousticness}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={(e) => setAcousticness(e)}
                        w="25rem"
                    >
                        <SliderTrack bg="#b0adab">
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>
            </Flex>

            <Flex>
                {/* Speechiness */}
                <Flex direction="column" align="center">
                    <Text className="prefrence-Label" mb={4}>
                        Speechiness:
                    </Text>
                    <Slider
                        colorScheme="green"
                        value={speechiness}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={(e) => setSpeechiness(e)}
                        w="25rem"
                    >
                        <SliderTrack bg="#b0adab">
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>

                <Box w={8} />

                {/* Popularity */}
                <Flex direction="column" align="center">
                    <Text className="prefrence-Label" mb={4}>
                        Popularity:
                    </Text>
                    <Slider colorScheme="green" value={popularity} onChange={(e) => setPopularity(e)} w="25rem">
                        <SliderTrack bg="#b0adab">
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>
            </Flex>

            <Flex>
                {/* Tempo */}
                <Flex direction="column" align="center">
                    <Text className="prefrence-Label" mb={4}>
                        Tempo:
                    </Text>
                    <Slider
                        colorScheme="green"
                        value={tempo}
                        min={40}
                        max={200}
                        step={1}
                        onChange={(e) => setTempo(e)}
                        w="25rem"
                    >
                        <SliderTrack bg="#b0adab">
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>

                <Box w={8} />

                {/* Duration */}
                <Flex direction="column" align="center">
                    <Text className="prefrence-Label" mb={4}>
                        Duration:
                    </Text>
                    <Slider className="sliders"
                        colorScheme="green"
                        value={duration}
                        min={60000}
                        max={480000}
                        step={5000}
                        onChange={(e) => setDuration(e)}
                        w="25rem"
                    >
                        <SliderTrack bg="#b0adab">
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>
            </Flex>

            {/* Submission */}
            <Button colorScheme="green" w="12rem" h="4rem" fontSize="2xl" mt={8} onClick={handleSubmit}>
                Continue
            </Button>
        </Flex>
    );
};

export default RecommendationForm;
