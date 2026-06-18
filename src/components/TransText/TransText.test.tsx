import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";

// Initialize i18n synchronously so <Trans> can resolve keys in tests.
import "../../i18n";
import TransText from "./index";

afterEach(() => {
  cleanup();
});

describe("TransText", () => {
  it("should render <b> markup from a translation as a real bold element", () => {
    const { container } = render(<TransText i18nKey="home.intro" />);

    const boldEl = container.querySelector("b");
    expect(boldEl).not.toBeNull();
    expect(boldEl?.textContent).toBe("known");
    
    expect(container.textContent).not.toContain("<b>");
  });
});
