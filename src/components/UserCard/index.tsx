import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { User } from "../../schemas/user";
import styles from "./styles";
import UserModal from "../UserModal";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleViewMore = () => {
    setOpenModal(true);
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={styles.root}
      data-testid="user-card"
    >
      <Box sx={styles.header}>
        <Box sx={styles.headerContent}>
          <Box sx={styles.avatar}>
            <img src={user.avatar} alt={user.username} />
          </Box>
        </Box>
      </Box>

      <Box sx={styles.description}>
        <Box sx={styles.descriptionContent}>
          <Typography variant="h6">
            {user.firstname} {user.lastname}
          </Typography>
          <Button variant="contained" onClick={handleViewMore}>
            View More
          </Button>
        </Box>
      </Box>

      <UserModal
        user={user}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </Stack>
  );
};

export default UserCard;
