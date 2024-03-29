import {
  Box,
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
} from "@chakra-ui/react";

import animeworld from "../assets/animeworld.png";
import findMe from "../assets/findMe.png";
import hubNano from "../assets/hubNano.png";
import EventO from "../assets/EventO.png";
import greyAfri from "../assets/greyAfri.png";
import aura from "../assets/aura.png";

const Portfolio = () => {
  const webData = [
    {
      image: animeworld,
      title: "AnimeWorld",
      URL: "https://animeworlld.netlify.app/",
    },
    {
      image: greyAfri,
      title: "GreyAfrique",
      URL: "https://greyafrique.com/",
    },
    {
      image: hubNano,
      title: "NanoHostNG",
      URL: "http://hub.nanohostng.com/Login",
    },
    {
      image: aura,
      title: "Aura",
      URL: "https://aura.ng/",
    },
    {
      image: findMe,
      title: "FindMe",
      URL: "https://findme-truffle-966812.netlify.app/",
    },
    {
      image: EventO,
      title: "EventO",
      URL: "https://eventoinfo.netlify.app",
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
      <Flex width={"full"}>
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
                    transition='transform 0.2s'
                    _hover={{ transform: "scale(1.05)" }}>
                    <Link href={web.URL}>
                      <Image src={web.image} borderRadius='lg' />
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
