import HomePage from "./pages/Home";
import { UsersProvider } from "./contexts/users";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UsersProvider>
        <HomePage />
      </UsersProvider>
    </ThemeProvider>
  );
}
