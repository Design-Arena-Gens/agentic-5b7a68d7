import { render, screen } from "@testing-library/react";

import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

describe("Homepage hero", () => {
  it("shows the main headline and call to action buttons", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /spa-level grooming tailored to your best friend's unique personality/i
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /book a spa day/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explore services/i })).toBeInTheDocument();
  });

  it("renders service highlights", () => {
    render(<Services />);

    const serviceCards = screen.getAllByRole("heading", { level: 3 });
    expect(serviceCards).toHaveLength(4);
    expect(screen.getByText(/signature spa groom/i)).toBeInTheDocument();
  });
});
