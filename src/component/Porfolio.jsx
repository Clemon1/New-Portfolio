import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Image,
  Link,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { TiInfoLarge } from "react-icons/ti";

import animeworld from "../assets/shadowInu.png";
import findMe from "../assets/findMe.png";
import hubNano from "../assets/hubNano.png";
import geekon from "../assets/geekon.png";
import greyAfri from "../assets/greyAfri.png";
import aura from "../assets/aura.png";
import apt from "../assets/aptresponse.png";

const Portfolio = () => {
  const webData = [
    {
      image: apt,
      title: "aptResponse",
      URL: "https://aptresponse.io/",
      info: "I contributed to the development of AptResponse, where I was responsible for implementing new features across both the frontend and backend of the admin dashboard and various other modules of the application. ",
    },
    {
      image: geekon,
      title: "GeekonTechnologies",
      URL: "https://geekontechnologies.netlify.app/",
      info: "As a co-founder and full-stack developer at Geekontech, I lead a team of experts in crafting next-generation, state-of-the-art software management systems that streamline operations and maximize productivity. I contribute to both frontend and backend development, ensuring high-quality and efficient solutions",
    },
    {
      image: animeworld,
      title: "Shadow Inu",
      URL: "https://shadowinu-490cc5.netlify.app/",
      info: "This is website I made for fun with my student for educational purposes to teach my student to become a better developer",
    },
    {
      image: greyAfri,
      title: "GreyAfrique",
      URL: "https://greyafrique.com/",
      info: "",
    },
    {
      image: hubNano,
      title: "NanoHostNG",
      URL: "http://hub.nanohostng.com/Login",
      info: "",
    },
    {
      image: aura,
      title: "Aura",
      URL: "https://aura.ng/",
      info: "",
    },
    {
      image: findMe,
      title: "FindMe",
      URL: "https://findme-truffle-966812.netlify.app/",
      info: "",
    },
  ];
  return (
    <Box width={"full"} height={"fit-content"} py={4}>
      <Flex width={"full"} alignItems={"center"}>
        <Text
          color={"#ebecf3"}
          fontWeight={"700"}
          fontSize={["25px", "25px", "30px", "33px", "35px"]}
          paddingBottom={10}>
          Porfolio<span className='dot'>.</span>
        </Text>
        <Divider />
      </Flex>
      <Flex width={"full"} flex={1}>
        <Tabs
          width={"full"}
          position='relative'
          variant='soft-rounded'
          colorScheme='blue'>
          <TabList>
            <Tab color={"#ffffff"}>Web</Tab>
            <Tab color={"#ffffff"}>Mobile</Tab>
          </TabList>
          <TabIndicator
            mt='-1.5px'
            height='2px'
            bg='#00c6b9'
            borderRadius='1px'
          />
          <TabPanels>
            <TabPanel>
              <Flex
                width={"full"}
                height={"100%"}
                justifyContent={"flex-start"}
                flexGrow={1}
                gap={8}
                flexBasis={1}
                flexWrap={"wrap"}>
                {webData.map((web, key) => (
                  <Card
                    key={key}
                    width={["43%", "43%", "40%", "30%", "31%"]}
                    bg={"transparent"}
                    position={"relative"}
                    transition='transform 0.2s'
                    _hover={{ transform: "scale(1.05)" }}>
                    <Tooltip
                      label={web.info}
                      rounded={8}
                      background={"#011627"}
                      fontSize={15}
                      color={"#ffffff"}
                      aria-label='A tooltip'
                      placement={"auto"}>
                      <Button
                        position={"absolute"}
                        top={1}
                        right={1}
                        color={"#ffffff"}
                        bg={"gray.800"}
                        _hover={{}}
                        border={"2px solid #ffffff"}
                        rounded={"full"}
                        padding={0}
                        zIndex={400}>
                        <TiInfoLarge size={17} />
                      </Button>
                    </Tooltip>
                    <Link href={web.URL}>
                      <Image src={web.image} borderRadius='lg' zIndex={50} />

                      <CardBody p={1}>
                        <Stack mt='6' spacing='3'>
                          <Text
                            fontWeight={600}
                            fontSize={[16, 16, 18, 18, 20]}
                            color={"#ffffff"}>
                            {web.title}
                          </Text>
                        </Stack>
                      </CardBody>
                    </Link>
                  </Card>
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex width={"full"} height={"100%"}>
                <Text fontSize={18} color={"#ffffff"}>
                  Coming soon!
                </Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default Portfolio;
