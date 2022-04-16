import React, { useEffect, useState } from "react";
import { Select } from "chakra-react-select";

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
} from "@chakra-ui/react";

const RecommendationForm = () => {
    // state for form values
    const [genres, setGenres] = useState<String[]>();
    const [amount, setAmount] = useState<number>();

    // state for slider bar parameters
    const [happiness, setHappiness] = useState<number>(50);
    const [grooviness, setGrooviness] = useState<number>(50);
    const [energy, setEnergy] = useState<number>(50);
    const [acousticness, setAcousticness] = useState<number>(50);
    const [speechiness, setSpeechiness] = useState<number>(50);
    const [popularity, setPopularity] = useState<number>(50);
    const [tempo, setTempo] = useState<number>(50);
    const [duration, setDuration] = useState<number>(50);

    useEffect(() => {
        getAllGenres().then((genresData) => {
            setGenres(genresData);
        });
    }, []);
    return (
        <Flex direction="column" align="center" rowGap={12}>
            {/* Choose Genres */}
            <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="gray.600" mb={4}>
                    Choose your preferred genres:
                </Text>
                <Box w="30rem">
                    <Select
                        options={genres?.map((genre) => {
                            return {
                                label: genre,
                                value: genre,
                            };
                        })}
                        isMulti
                    />
                </Box>
            </Flex>

            {/* Choose number of recommendations */}
            <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="gray.600" mb={4}>
                    Max number of songs:
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

            {/* Happiness */}
            <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="gray.600" mb={4}>
                    Happiness:
                </Text>
                <Slider value={happiness} onChange={(e) => setHappiness(e)} w="30rem">
                    <SliderTrack bg="green.100">
                        <SliderFilledTrack bg="#1db954" />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Flex>

            {/* Grooviness */}
            <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="gray.600" mb={4}>
                    Grooviness:
                </Text>
                <Slider value={grooviness} onChange={(e) => setGrooviness(e)} w="30rem">
                    <SliderTrack bg="green.100">
                        <SliderFilledTrack bg="#1db954" />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Flex>

            {/* Energy */}
            <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="gray.600" mb={4}>
                    Energy:
                </Text>
                <Slider value={energy} onChange={(e) => setEnergy(e)} w="30rem">
                    <SliderTrack bg="green.100">
                        <SliderFilledTrack bg="#1db954" />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Flex>

            {/* Acousticness */}
            <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="gray.600" mb={4}>
                    Acousticness:
                </Text>
                <Slider value={acousticness} onChange={(e) => setAcousticness(e)} w="30rem">
                    <SliderTrack bg="green.100">
                        <SliderFilledTrack bg="#1db954" />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Flex>

            {/* Speechiness */}
            <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="gray.600" mb={4}>
                    Speechiness:
                </Text>
                <Slider value={speechiness} onChange={(e) => setSpeechiness(e)} w="30rem">
                    <SliderTrack bg="green.100">
                        <SliderFilledTrack bg="#1db954" />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Flex>

            {/* Popularity */}
            <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="gray.600" mb={4}>
                    Popularity:
                </Text>
                <Slider value={popularity} onChange={(e) => setPopularity(e)} w="30rem">
                    <SliderTrack bg="green.100">
                        <SliderFilledTrack bg="#1db954" />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Flex>

            {/* Tempo */}
            <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="gray.600" mb={4}>
                    Tempo:
                </Text>
                <Slider value={tempo} onChange={(e) => setTempo(e)} w="30rem">
                    <SliderTrack bg="green.100">
                        <SliderFilledTrack bg="#1db954" />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Flex>

            {/* Duration */}
            <Flex direction="column" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="gray.600" mb={4}>
                    Duration:
                </Text>
                <Slider value={duration} onChange={(e) => setDuration(e)} w="30rem">
                    <SliderTrack bg="green.100">
                        <SliderFilledTrack bg="#1db954" />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Flex>
        </Flex>
    );
};

export default RecommendationForm;
