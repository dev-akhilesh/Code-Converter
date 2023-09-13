import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    Select,
    Textarea,
    Button,
    ChakraProvider,
    extendTheme,
} from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        primary: {
            50: '#F0F5FF',
            100: '#C3DAFE',
            200: '#A3BFFA',
            300: '#7F9CF5',
            400: '#667EEA',
            500: '#5A67D8',
            600: '#4C51BF',
            700: '#434190',
            800: '#3C366B',
            900: '#2A244B',
        },
        secondary: {
            50: '#FDF2F8',
            100: '#FCE7F3',
            200: '#FBCFE8',
            300: '#F9A8D4',
            400: '#F472B6',
            500: '#EC4899',
            600: '#DB2777',
            700: '#BE185D',
            800: '#9D174D',
            900: '#831843',
        },
    },
});

const Converter = () => {
    const [inputCode, setInputCode] = useState('');
    const [language, setLanguage] = useState('Python');
    const [convertedCode, setConvertedCode] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCodeChange = (e) => {
        setInputCode(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleConvert = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://code-converter-backend-5q0m.onrender.com/convert?language=${language}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputcode: inputCode }),
            });

            if (!response.ok) {
                throw new Error('Code conversion failed');
            }

            const convertedCode = await response.json();
            setLoading(false)
            setConvertedCode(convertedCode);
        } catch (error) {
            console.error('Error during code conversion:', error);
        }
    };

    const handleDebug = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://code-converter-backend-5q0m.onrender.com/debug`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputcode: inputCode }),
            });

            if (!response.ok) {
                throw new Error('Code conversion failed');
            }

            const convertedCode = await response.json();
            setLoading(false)
            setConvertedCode(convertedCode);
        } catch (error) {
            console.error('Error during code conversion:', error);
        }
    }

    const handleQuality = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://code-converter-backend-5q0m.onrender.com/qualityCheck`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputcode: inputCode }),
            });

            if (!response.ok) {
                throw new Error('Code conversion failed');
            }

            const convertedCode = await response.json();
            setLoading(false)
            setConvertedCode(convertedCode);
        } catch (error) {
            console.error('Error during code conversion:', error);
        }
    }


    
    return (
        <ChakraProvider theme={theme}>
            <Text  fontSize={["4xl", "7xl"]} textAlign="center" lineHeight={1} fontWeight={900}>
                <span className="fancy">PolyglotCoder</span>
            </Text>
            <Flex
                height="100vh"
                alignItems="center"
                justifyContent="center"
                flexDirection={{ base: 'column', lg: 'row' }}
                borderColor="red"
                gap={{ base: '4', lg: '8' }}
                marginBottom={{ base: '30rem', lg: '0' }}
                marginTop={{ base: '2rem', lg: '0' }}
            >

                <Box
                    padding="4"
                    width={{ base: '100%', lg: '50%' }}
                    backgroundColor="primary.800"
                    color="white"
                    marginTop={{ base: '32rem', lg: '-5rem' }}
                    marginBottom={{ base: '10rem', lg: '0' }}
                >
                    <Text
                        fontSize="2xl"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        fontWeight="extrabold"
                        mb="2"
                    >
                        Code Syntax Converter
                    </Text>

                    <Text fontSize="lg" color="primary.100" mb="4">
                        Transform your code while debugging and ensuring its quality.....
                    </Text>
                    <Textarea
                        value={inputCode}
                        onChange={handleCodeChange}
                        placeholder="Enter code here....."
                        // height="60vh"
                        resize="none"
                        fontFamily="monospace"
                        fontSize="sm"
                        backgroundColor="primary.900"
                        color="white"
                        borderColor="primary.700"
                        _hover={{ borderColor: 'primary.600' }}
                        _focus={{ borderColor: 'primary.600' }}
                        height={{ base: '20rem', lg: '60vh' }}
                    />
                </Box>
                <Box
                    padding="4"
                    width={{ base: '100%', lg: '50%' }}
                    backgroundColor="primary.100"
                    marginTop={{ base: '-10rem', lg: '-5rem' }}

                >
                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Options
                    </Text>
                    <Select
                        value={language}
                        onChange={handleLanguageChange}
                        marginBottom="4"
                        borderColor="transparent"
                        _focus={{ borderColor: 'transparent' }}
                        _hover={{ borderColor: 'secondary.600' }}
                    >
                        <option value="">Select Language</option>
                        <option value="Python">Python</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="C++">C++</option>
                        <option value="C#">C#</option>
                        <option value="PHP">PHP</option>
                    </Select>
                    <Button
                        onClick={handleConvert}
                        marginBottom="2"
                        backgroundColor="secondary.600"
                        color="white"
                        _hover={{ backgroundColor: 'secondary.700' }}
                        _focus={{ backgroundColor: 'secondary.700' }}
                        marginRight="2"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        paddingX="6"
                        isDisabled={inputCode === ''}
                    >
                        Convert
                    </Button>
                    <Button
                        onClick={handleDebug}
                        marginBottom="2"
                        backgroundColor="secondary.600"
                        color="white"
                        _hover={{ backgroundColor: 'secondary.700' }}
                        _focus={{ backgroundColor: 'secondary.700' }}
                        marginRight="2"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        paddingX="6"
                        isDisabled={inputCode === ''}
                    >
                        Debug
                    </Button>
                    <Button
                        onClick={handleQuality}
                        marginBottom="2"
                        backgroundColor="secondary.600"
                        color="white"
                        _hover={{ backgroundColor: 'secondary.700' }}
                        _focus={{ backgroundColor: 'secondary.700' }}
                        marginRight="2"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        paddingX="6"
                        isDisabled={inputCode === ''}
                    >
                        Quality Check
                    </Button>
                    <Textarea
                        value={loading ? 'Please wait while response is loading....' : convertedCode}
                        readOnly
                        resize="none"
                        placeholder="Converted code will appear here..."
                        fontFamily="monospace"
                        fontSize="sm"
                        backgroundColor="primary.50"
                        borderColor="gray.300"
                        _hover={{ borderColor: 'gray.400' }}
                        _focus={{ borderColor: 'gray.400' }}
                        height={{ base: '20rem', lg: '51vh' }}
                    />
                </Box>
            </Flex>
        </ChakraProvider>
    );
};

export default Converter;