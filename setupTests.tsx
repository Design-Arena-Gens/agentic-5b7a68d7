import type { AnchorHTMLAttributes, ComponentProps } from "react";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

type MockImageProps = ComponentProps<"img"> & { priority?: boolean };

vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, priority: _priority, ...props }: MockImageProps) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} {...props} />;
  }
}));

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={typeof href === "string" ? href : "#"} {...rest}>
      {children}
    </a>
  )
}));
