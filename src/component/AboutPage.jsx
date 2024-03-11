import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import blob from "../assets/blobanimation.svg";

const AboutPage = () => {
  return (
    <Box width={"full"} height={"fit-content"} pY={4}>
      <Flex width={"full"} alignItems={"center"}>
        <Text
          color={"#ebecf3"}
          fontWeight={"700"}
          fontSize={["25px", "25px", "30px", "33px", "35px"]}
          paddingBottom={10}>
          My-Bio<span className='dot'>.</span>
        </Text>
        <Divider width={["65%", "65%", "80%", "80%", "85%"]} />
      </Flex>
      <Flex
        width={"full"}
        height={"fit-content"}
        direction={["column", "column", "column", "row", "row"]}>
        <Flex width={"full"} direction={"column"} alignItems={"flex-start"}>
          <Image width={"full"} height={"75%"} src={blob} />
        </Flex>
        <Flex
          width={"full"}
          height={"80%"}
          justifyContent={"left"}
          alignItems={"center"}>
          <Text
            fontSize={19}
            fontWeight={300}
            color={"#F3FAFF"}
            lineHeight={"27px"}>
            I&apos;m an experienced Full-Stack Developer with 4 years of
            experience creating innovative web and mobile applications.
            <br /> I&apos;ve worked on diverse projects, including e-commerce
            platforms, social media apps, and data-driven dashboards.
            <br /> A strong problem-solving approach, collaborative team player,
            and a passion for learning drive my success. I aim to contribute to
            the tech community and look forward to new challenges and
            opportunities in web development.
            <br /> Let&apos;s build something amazing together!
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AboutPage;
