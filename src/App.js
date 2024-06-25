import HomePage from "./pages/Home";
import { UsersProvider } from "./contexts/users";

export default function App() {
  return <NoMatch />;
}

function NoMatch() {
  return (
    <div>
      <UsersProvider>
        <HomePage />
      </UsersProvider>
    </div>
  );
}
