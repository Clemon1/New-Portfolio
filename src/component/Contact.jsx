import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Text,
  Link,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

const ContactPage = () => {
  return (
    <Box
      width={"full"}
      height={["fit-content", "fit-content", "100vh", "100vh", "100vh"]}
      py={4}>
      <Flex width={"full"} alignItems={"center"}>
        <Text
          color={"#ebecf3"}
          fontWeight={"700"}
          fontSize={["25px", "25px", "30px", "33px", "35px"]}
          paddingBottom={10}>
          Contact Me<span className='dot'>.</span>
        </Text>

        <Divider width={["50%", "50%", "70%", "80%", "80%"]} />
      </Flex>

      <Flex
        width={"full"}
        height={"fit-content"}
        gap={7}
        direction={["column", "column", "row", "row", "row"]}>
        <Flex
          width={["full", "full", "85%", "80%", "75%"]}
          flexDirection={"column"}
          alignItems={["flex-end"]}
          py={8}>
          <Text color={"#ffffff"} fontWeight={600} fontSize={26}>
            {" "}
            Let&apos;s talk about everything!
          </Text>
          <Text color={"#ffffff"} fontSize={18} fontWeight={300}>
            Feel free to get in touch with me. I am always open <br />
            to discussing new projects, creative ideas or <br /> opportunities
            to be part of your vision.
          </Text>
          <HStack
            width={"full"}
            justifyContent={"center"}
            spacing={3}
            padding={[4]}>
            <Link href='mailto:clemonezeh@gmail.com'>
              <Icon as={MdEmail} color={"#ffffff"} fontSize={28} />
            </Link>
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
          </HStack>
        </Flex>
        <Flex width={"full"}>
          <form>
            <VStack
              width={"100%"}
              spacing={4}
              align='stretch'
              bg={"transparent"}
              padding={[0, 0, 0, 0, 4]}
              rounded={18}
              color={"#ffffff"}>
              <HStack>
                <FormControl id='name' isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type='text'
                    bg={"#001d3d"}
                    rounded={18}
                    placeholder='Your full name'
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    bg={"#001d3d"}
                    type='email'
                    rounded={18}
                    placeholder='Your email address'
                  />
                </FormControl>
              </HStack>

              <FormControl id='subject' isRequired>
                <FormLabel>Subject</FormLabel>
                <Input
                  bg={"#001d3d"}
                  type='text'
                  rounded={18}
                  placeholder='Your Subject'
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  bg={"#001d3d"}
                  rounded={18}
                  placeholder='Your message'
                />
              </FormControl>

              <Button
                width={"fit-content"}
                rounded={18}
                float={"right"}
                type='submit'
                bg={"#000814"}
                border={"2px solid #00c6b9"}
                color={"#ffffff"}
                colorScheme='cyan'>
                Send Message
              </Button>
            </VStack>
          </form>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactPage;
