import { Box } from "@mui/material";
import { UsersContext } from "../../contexts/users";
import { useCallback, useContext, useEffect, useState } from "react";
import UserCard from "../../components/UserCard";

const USER_API_URL =
  "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users";

const HomePage = () => {
  const { users, setUsers } = useContext(UsersContext);

  const [usersLoading, setUsersLoading] = useState<boolean>(false);

  const fetchUsers = useCallback(async () => {
    setUsersLoading(true);
    try {
      const res = await fetch(USER_API_URL);
      const data = await res.json();
      setUsers(data.data.users);
    } catch (err) {
      console.log(err);
    } finally {
      setUsersLoading(false);
    }
  }, [setUsers]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Box>
      Home
      {usersLoading ? (
        <Box>Loading...</Box>
      ) : (
        <Box>
          {users &&
            users.map((user) => (
              <Box key={user.id}>
                <UserCard user={user} />
              </Box>
            ))}
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
