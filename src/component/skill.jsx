import {
  Box,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdVerified } from "react-icons/md";
const SkillPage = () => {
  return (
    <Box width={"full"} height={"fit-content"} py={4}>
      <Flex width={"full"} alignItems={"center"}>
        <Text
          color={"#ebecf3"}
          fontWeight={"700"}
          fontSize={["25px", "25px", "30px", "33px", "35px"]}
          paddingBottom={10}>
          Skills<span className='dot'>.</span>
        </Text>
        <Divider />
      </Flex>
      <Flex
        width={"100%"}
        direction={["column", "column", "row", "row", "row"]}
        gap={3}
        justifyContent={"center"}>
        <Flex
          bg={"#001d3d"}
          width={["full"]}
          height={"fit-content"}
          padding={4}
          direction={"column"}
          rounded={"3xl"}>
          <Text
            color={"#ebecf3"}
            fontSize={25}
            fontWeight={700}
            py={5}
            textAlign={"center"}>
            Frontend developer
          </Text>
          <Flex
            width={"full"}
            height={"100%"}
            gap={14}
            justifyContent={"center"}
            alignItems={"center"}>
            <List spacing={3} fontSize={18} color={"#F3FAFF"}>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                HTML
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                CSS
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                JavaScript
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Tailwind
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                GIT
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Zustand
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                React-Query
              </ListItem>
            </List>
            <List spacing={3} fontSize={18} color={"#ffffff"}>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                React
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Next JS
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                React Native
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                TypeScript
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Chakra-UI
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Redux-Toolkit
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                RTK-Query
              </ListItem>
            </List>
          </Flex>
        </Flex>

        <Flex
          bg={"#001d3d"}
          width={"full"}
          height={"50vh"}
          padding={4}
          direction={"column"}
          rounded={"3xl"}>
          <Text
            color={"#ebecf3"}
            fontSize={25}
            fontWeight={700}
            textAlign={"center"}>
            Backend developer
          </Text>
          <Flex
            width={"full"}
            height={"100%"}
            gap={14}
            justifyContent={"center"}
            alignItems={"center"}>
            <List spacing={3} fontSize={18} color={"#F3FAFF"}>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                NodeJs
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Express
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Nest JS
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Golang
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Fiber
              </ListItem>
            </List>
            <List spacing={3} fontSize={18} color={"#ffffff"}>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                MongoDB
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Redis
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                MySQL
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Prisma
              </ListItem>
              <ListItem>
                <ListIcon as={MdVerified} color='green.500' />
                Sequelize
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SkillPage;
