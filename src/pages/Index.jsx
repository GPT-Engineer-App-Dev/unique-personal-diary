import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg">Sharing my thoughts and experiences on web development, technology, and life.</Text>
        <Box boxSize="sm">
          <Image src="/path/to/your/profile-picture.jpg" alt="Profile Picture" borderRadius="full" />
        </Box>
        <VStack spacing={2}>
          <Link href="https://twitter.com/yourprofile" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://github.com/yourprofile" isExternal>
            <FaGithub size="24px" />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" isExternal>
            <FaLinkedin size="24px" />
          </Link>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;