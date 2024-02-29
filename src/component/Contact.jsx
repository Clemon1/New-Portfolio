import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  useToast,
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
import axios from "axios";
const ContactPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const body = {
    fullname,
    email,
    subject,
    message,
  };
  const toast = useToast();
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://email-service-zrea.onrender.com/send",
        body,
      );
      await res.data;

      toast({
        title: "Message sent.",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Something went wrong",
        status: "error",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Box
      width={"full"}
      height={[
        "fit-content",
        "fit-content",
        "fit-content",
        "fit-content",
        "fit-content",
      ]}
      py={4}>
      <Flex width={"full"} alignItems={"center"}>
        <Text
          color={"#ebecf3"}
          fontWeight={"700"}
          fontSize={["25px", "25px", "30px", "30px", "30px"]}
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
          py={8}>
          <Text color={"#ffffff"} fontWeight={600} fontSize={26}>
            {" "}
            Let&apos;s talk about everything!
          </Text>
          <Text color={"#ffffff"} fontSize={18} fontWeight={300}>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            vision.
            <br /> I also take coding classes on Frontend (Html, Css, Javascript
            & React) and Backend (Node JS, Express & MongoDB). If you are
            interested please leave a message.
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
          <form onSubmit={sendEmail}>
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
                    onChange={(e) => setFullname(e.target.value)}
                    type='text'
                    bg={"#001d3d"}
                    rounded={18}
                    placeholder='Your full name'
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setSubject(e.target.value)}
                  bg={"#001d3d"}
                  type='text'
                  rounded={18}
                  placeholder='Your Subject'
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  onChange={(e) => setMessage(e.target.value)}
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
