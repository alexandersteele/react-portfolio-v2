/** @jsxImportSource theme-ui */
import { useColorMode, Button, Heading, Box, Flex  } from 'theme-ui';
import Typewriter from "typewriter-effect";

const Header =() => {

    const [colorMode, setColorMode] = useColorMode();

    return (
        <Flex>
            <Box p={3} sx={{ flex: '1 1 auto' }}>
                <Heading as='h1' sx={{fontFamily: 'heading', display: 'inline-block'}}>
                    <Typewriter wrapperClassName="typewrite" onInit={(typewriter)=> {
                        typewriter.typeString("alexsteele.dev").start();
                    }}/>
                </Heading>
            </Box>
            <Box p={3}>
                <Button 
                    mr={3}
                    sx={{bg: 'primary', color: 'inverseText', cursor: 'pointer'}}
                    onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
                    >
                    {colorMode === 'light' ? 'Dark 🌙' : 'Light ⛅'}
                </Button>
            </Box>
        </Flex>
        
    );
}

export default Header;