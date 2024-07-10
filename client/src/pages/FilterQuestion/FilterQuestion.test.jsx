import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FilterQuestion from "./FilterQuestion";

const mockFn = () => {};
it("should render a button"),
  () => {
    render(
      <FilterQuestion question={[]} extraButton={true} loadData={mockFn} />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  };
