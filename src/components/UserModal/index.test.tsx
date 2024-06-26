import { render, screen, fireEvent } from "@testing-library/react";
import UserModal from "./index";
import { User } from "../../schemas/user";

describe("UserModal", () => {
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

  const onClose = jest.fn();
  test("renders user details", () => {
    render(<UserModal user={mockUser} open={true} onClose={onClose} />);

    expect(screen.getByText(mockUser.description)).toBeInTheDocument();
  });

  test("calls onClose when close button is clicked", () => {
    render(<UserModal user={mockUser} open={true} onClose={onClose} />);

    fireEvent.click(screen.getByRole("button", { name: /close/i }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
