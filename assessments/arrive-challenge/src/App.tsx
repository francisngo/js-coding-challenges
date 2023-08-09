import React, { useEffect, useState } from "react";
import {
	Box,
	Center,
	Text,
	Flex,
	Input,
	Button,
	Alert,
	AlertIcon,
	CloseButton,
} from "@chakra-ui/react";
import { dictionary } from "./dictionary";

const emptyRow = new Array<string | null>(5).fill(null);
const defaultAnswers: (string | null)[][] = [
	emptyRow,
	emptyRow,
	emptyRow,
	emptyRow,
	emptyRow,
];

// pick one word from the dictionary randomly at build time
const getWordOfTheDay = (): string => {
	const randomIndex = Math.floor(Math.random() * dictionary.length);
	return dictionary[randomIndex];
};

// checks if guessed word exists in the dictionary
const isEnglishWord = (word: string): boolean => {
	return dictionary.includes(word);
};

// takes two parameters:
// 1. word - the user's guess word
// 2. selectedWord - the word of the day.
// it compares the letters in both words and returns
// an array indicating the color of each letter tile based
// on whether it is in the correct position or exists in
// the word but in the wrong position
const checkGuess = (word: string, selectedWord: string): string[] => {
	const guessedWord = word.split("");
	const wordOfTheDay = selectedWord.split("");

	// checks for correct position
	const correctLetters = guessedWord.map((letter, index) =>
		letter === wordOfTheDay[index] ? index : null
	);

	// checks for letters that exist in word of the day but is
	// in the wrong position
	const existingLetters = guessedWord.map((letter, index) =>
		wordOfTheDay.includes(letter) && letter !== wordOfTheDay[index]
			? index
			: null
	);

	// provides the colors for the letter using the index
	const tiles = emptyRow.map((_, index) => {
		if (correctLetters.includes(index)) {
			return "green.500";
		} else if (existingLetters.includes(index)) {
			return "yellow.500";
		} else {
			return "red.500";
		}
	});
	// returns the array of colors for the guess word
	return tiles;
};

export default function Example() {
	// user's input value
	const [value, setValue] = useState<string>("");
	// word of the day
	const [word, setWord] = useState<string>("");
	// user's answers
	const [answers, setAnswers] = useState<(string | null)[][]>(defaultAnswers);
	// the color tiles
	const [tiles, setTiles] = useState<(string | null)[][]>(defaultAnswers);
	// the current index of the row being filled in a game
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	// the game status
	const [gameStatus, setGameStatus] = useState<string>();
	// the word status
	const [wordStatus, setWordStatus] = useState<boolean>(false);

	// useEffect is only called once, on component mount.
	// It sets the word of the day by calling `getWordOfTheDay`
	useEffect(() => {
		setWord(getWordOfTheDay());
	}, []);

	// resets the game state to its initial values
	// or restarts the game
	const handleReset = () => {
		setWord(getWordOfTheDay());
		setAnswers(defaultAnswers);
		setTiles(defaultAnswers);
		setCurrentIndex(0);
		setGameStatus("");
	};

	const handleWordReset = () => {
		setValue("");
		setWordStatus(false);
	};

	const handleGuess = () => {
		const isLegitWord = isEnglishWord(value);
		if (!isLegitWord) {
			setWordStatus(true);
			return false;
		}

		const guessedColorTiles = checkGuess(value, word);
		const newAnswers = [...answers];
		newAnswers[currentIndex] = value.split("");
		const newTiles = [...tiles];
		newTiles[currentIndex] = guessedColorTiles;

		setAnswers(newAnswers);
		setTiles(newTiles);
		setValue("");
		setCurrentIndex(currentIndex + 1);

		if (guessedColorTiles.every((tile) => tile === "green.500")) {
			setGameStatus("won");
		} else if (currentIndex === 4) {
			setGameStatus("lost");
		}
	};

	console.log("word of the day: ", word);

	return (
		<Center w="100%" p={5} flexDir="column">
			<Flex w="100%" justifyContent="space-between" maxW="sm">
				<Text fontSize="xl" fontWeight="bold" color="green.800">
					Wordle
				</Text>
				<Button variant="ghost" onClick={handleReset}>
					Reset
				</Button>
			</Flex>
			<Box maxW="sm" bgColor="gray.500" borderRadius="md">
				<Flex p={6} flexDir="column">
					{answers.map((answer, rowIndex) => {
						return (
							<Flex p={2} key={rowIndex}>
								{answer.map((item, colIndex) => {
									return (
										<Flex
											key={colIndex}
											border="2px"
											borderColor="white"
											borderRadius="md"
											color="white"
											w={10}
											h={10}
											_notFirst={{
												ml: 4,
											}}
											justify="center"
											alignItems="center"
											fontWeight="bold"
											fontSize="lg"
											bg={tiles[rowIndex][colIndex] || ""}
										>
											{item}
										</Flex>
									);
								})}
							</Flex>
						);
					})}
				</Flex>
			</Box>
			{gameStatus && (
				<Box
					bg={gameStatus === "won" ? "green.300" : "red.300"}
					borderRadius="md"
					mt={4}
					p={4}
					color="white"
					textAlign="center"
				>
					You've {gameStatus === "won" ? "Won!" : "Lost!"}
					<span role="img" aria-label="img">
						{gameStatus === "won" ? "⭐" : "😭"}
					</span>
				</Box>
			)}
			{wordStatus && (
				<Alert
					status="warning"
					borderRadius="md"
					mt={4}
					p={4}
					maxW="md"
					textAlign="center"
					style={{ cursor: "pointer" }}
				>
					<AlertIcon />
					The word "{value}" does not exist. Please try another word.
					<CloseButton
						position="relative"
						right={-1}
						onClick={handleWordReset}
					/>
				</Alert>
			)}
			<Box mt={6}>
				<Box
					as="form"
					onSubmit={(e) => {
						e.preventDefault();
						handleGuess();
					}}
				>
					<Center mt={4}>
						<Input
							value={value}
							placeholder="Enter a 5 letter guess"
							maxLength={5}
							disabled={!!gameStatus}
							onChange={(e) => {
								setValue(e.target.value);
							}}
						/>
						<Button
							disabled={value.length !== 5}
							colorScheme="green"
							ml={4}
							onClick={handleGuess}
						>
							Word!
						</Button>
					</Center>
				</Box>
			</Box>
		</Center>
	);
}
