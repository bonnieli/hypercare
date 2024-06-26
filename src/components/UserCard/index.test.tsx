import { render, screen } from "@testing-library/react";
import UserCard from "./index";
import { User } from "../../schemas/user";

describe("UserCard", () => {
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

  it("should render the 'View More' button", () => {
    render(<UserCard user={mockUser} />);
    const viewMoreButton = screen.getByRole("button", { name: /view more/i });
    expect(viewMoreButton).toBeInTheDocument();
  });
});
