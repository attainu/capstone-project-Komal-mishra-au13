import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
  
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../../components/Authentication/Login";
import Signup from "../../components/Authentication/Signup";

function Homepage({setUser}) {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box  m="40px 0 15px 0" bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels color='black'>
            <TabPanel>
              <Login setUser={setUser} />
            </TabPanel>
            <TabPanel>
              <Signup setUser={setUser}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
