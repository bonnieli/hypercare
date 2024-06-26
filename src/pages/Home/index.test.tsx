import { render, screen } from "@testing-library/react";
import { UsersContext } from "../../contexts/users";
import { act } from "react";
import HomePage from "./index";
import { User } from "../../schemas/user";

describe("HomePage", () => {
  const mockUser: User = {
    id: "1",
    firstname: "John",
    lastname: "Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    avatar: "https://example.com/avatar.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    join_date: "2021-01-01",
  };

  const listOfMockUsers = [mockUser];

  test("fetches users and updates the context", async () => {
    const setUsers = jest.fn();
    const fetchMock = jest.spyOn(global, "fetch").mockResolvedValueOnce(
      Promise.resolve(
        new Response(JSON.stringify({ data: { users: [mockUser] } }), {
          headers: new Headers(),
          status: 200,
          statusText: "OK",
        })
      )
    );

    await act(async () => {
      render(
        <UsersContext.Provider value={{ users: [], setUsers }}>
          <HomePage />
        </UsersContext.Provider>
      );
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users"
    );
    expect(setUsers).toHaveBeenCalledWith(listOfMockUsers);
    expect(screen.queryByText("Loading...")).toBeNull();
    expect(screen.getByText("Home")).toBeInTheDocument();

    fetchMock.mockRestore();
  });
});
