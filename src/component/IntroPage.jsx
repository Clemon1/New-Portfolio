import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import reactLogo from "../assets/react.svg";
import jsLogo from "../assets/icons8-javascript.svg";
import tsLogo from "../assets/icons8-typescript.svg";
import nodeLogo from "../assets/icons8-nodejs.svg";
import mongoLogo from "../assets/icons8-mongodb.svg";
import expressLogo from "../assets/icons8-express-js.svg";
import goLogo from "../assets/icons8-golang.svg";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

const IntroPage = () => {
  return (
    <Flex
      width={"100%"}
      height={["50vh", "50vh", "50vh", "100vh", "85vh"]}
      direction={["column", "column", "column", "row", "row"]}
      gap={4}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}>
      <Flex
        direction={"column"}
        alignItems={"right"}
        justifyContent={"center"}
        width={"full"}
        height={"100%"}>
        <Text
          color={"#00c6b9"}
          fontWeight={"600"}
          fontSize={["25px", "25px", "30px", "40px", "40px"]}
          lineHeight={"30px"}>
          Hey! I am
        </Text>
        <Text
          color={"#ebecf3"}
          fontWeight={"800"}
          textAlign={"left"}
          fontSize={["45px", "45px", "45px", "50px", "55px"]}
          lineHeight={["30px", "30px", "50px", "60px", "60px"]}>
          Clemon Ezeh<span className='dot'>.</span>
        </Text>
        <Text
          color={"#ebecf3"}
          fontWeight={600}
          display={"flex"}
          gap={"10px"}
          fontSize={["26px", "26px", "35px", "40px", "40px"]}
          lineHeight={"50px"}>
          I&apos;m a
          <Text color={"#00c6b9"} fontWeight={800}>
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Mobile Developer",
                  "Full-Stack Engineer",
                  "JavaScript Expert",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
        </Text>
        <Button
          width={["35%", "35%", "35%", "27%", "25%"]}
          bg={"transparent"}
          rounded={18}
          border={"2px #30f8eb solid"}
          marginTop={4}
          color={"#30f8eb"}
          fontWeight={700}
          _hover={{}}>
          Contact me
        </Button>

        <>
          <VStack
            display={["none", "none", "none", "none", "flex"]}
            position={"absolute"}
            left={"-150px"}
            top={"150px"}
            justifyContent={"center"}
            spacing={3}
            padding={4}>
            <Link href='https://github.com/Clemon1'>
              <Icon as={BsGithub} color={"#ffffff"} fontSize={28} />
            </Link>
            <Link href='https://www.linkedin.com/in/clemon-ezeh-50b4b3173'>
              <Icon as={BsLinkedin} color={"#ffffff"} fontSize={28} />
            </Link>
            <Link href='https://www.instagram.com/__clemon/?next=%2F&hl=en'>
              <Icon as={BsInstagram} color={"#ffffff"} fontSize={28} />
            </Link>
            <Link href='https://twitter.com/Clemon_Ezeh'>
              <Icon as={BsTwitter} color={"#ffffff"} fontSize={28} />
            </Link>
          </VStack>
        </>
      </Flex>
      <Flex
        display={["none", "none", "none", "flex", "flex"]}
        width={"full"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}>
        <Box
          className='logo2'
          width={["40%", "40%", "40%", "42%", "48%"]}
          position={"relative"}
          height={"40vh"}
          border={"1px #ffffff solid"}
          bg={"transparent"}
          borderRadius={"full"}>
          <Image
            src={goLogo}
            className='logo1'
            alt='React logo'
            position={"relative"}
            top={"-62px"}
            left={"95px"}
          />
          <Image
            src={reactLogo}
            className='logo1'
            alt='React logo'
            position={"relative"}
            top={"-51px"}
            left={"-15px"}
          />
          <Image
            src={mongoLogo}
            className='logo1'
            alt='React logo'
            position={"relative"}
            top={"8px"}
            left={"-61px"}
          />
          <Image
            src={nodeLogo}
            className='logo1'
            alt='React logo'
            position={"relative"}
            top={"60px"}
            left={"-40px"}
          />

          <Image
            src={jsLogo}
            sizes='sm'
            className='logo1'
            alt='React logo'
            position={"relative"}
            bottom={"-83px"}
            right={"-109px"}
          />
          <Image
            src={expressLogo}
            sizes='sm'
            className='logo1'
            alt='React logo'
            position={"relative"}
            top={"-180px"}
            left={"247px"}
          />
          <Image
            src={tsLogo}
            sizes='sm'
            className='logo1'
            alt='React logo'
            position={"relative"}
            top={"-102px"}
            left={"240px"}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default IntroPage;
