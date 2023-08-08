import { Box, Button, Flex, HStack, Link, Text } from "@chakra-ui/react";
import cv from "../assets/cv.pdf";
const Navbar = () => {
  return (
    <HStack width={"full"} height={"12vh"} py={5}>
      <Box>
        <Text fontSize={"27px"} fontWeight={900} color={"#ebecf3"}>
          CLEMON<span className='dot'>.</span>
        </Text>
      </Box>

      <Flex width={"full"} justifyContent={"flex-end"} alignItems={"center"}>
        <Link href={cv} target={"_blank"}>
          <Button
            px={8}
            bg={"transparent"}
            rounded={18}
            border={"2px #008b82 solid"}
            marginTop={4}
            color={"#30f8eb"}
            fontWeight={700}
            _hover={{}}>
            My CV
          </Button>
        </Link>
      </Flex>
    </HStack>
  );
};

export default Navbar;
