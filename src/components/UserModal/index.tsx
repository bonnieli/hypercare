import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { User } from "../../schemas/user";

interface UserModalProps {
  user: User;
  open: boolean;
  onClose: () => void;
}

const UserModal = ({ user, open, onClose }: UserModalProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Box>
          <img src={user.avatar} alt={user.username} />
        </Box>
        {user.firstname} {user.lastname}
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">Join Date</Typography>
        <Typography variant="body2">{user.join_date}</Typography>
        <Typography variant="h6">Description</Typography>
        <Typography variant="body2">{user.description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserModal;
