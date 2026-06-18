import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render } from "@testing-library/react";

// Initialize i18n synchronously so useTranslation("app") resolves in tests.
import "../../i18n";
import Home from "./index";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Home", () => {
  it("should renders the issues list without React key warnings", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(<Home />);

    const keyWarnings = errorSpy.mock.calls.filter((args) =>
      args.some(
        (arg) => typeof arg === "string" && arg.includes('unique "key" prop')
      )
    );

    expect(keyWarnings).toHaveLength(0);
  });
});
