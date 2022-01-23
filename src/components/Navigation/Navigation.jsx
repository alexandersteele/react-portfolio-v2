import { Box, NavLink, Flex  } from 'theme-ui';
import { useNavigate } from "react-router-dom";

const Navigation = () => {

    const navigate = useNavigate();

    return (
        <Box p={2}>
        <Flex as="nav">
          <NavLink p={2} sx={{cursor: 'pointer'}} onClick={() => navigate("/")}>
            Home
          </NavLink>
          <NavLink p={2} sx={{cursor: 'pointer'}} onClick={() => navigate("/creds")}>
            Credentials
          </NavLink>
          <NavLink p={2} sx={{cursor: 'pointer'}}>
            Projects
          </NavLink>
          <NavLink p={2} sx={{cursor: 'pointer'}}>
            Blog
          </NavLink>
        </Flex>
      </Box>
    );
}

export default Navigation;