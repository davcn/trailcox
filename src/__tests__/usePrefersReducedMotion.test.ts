import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

function mockMatchMedia(matches: boolean) {
  const listeners: ((e: MediaQueryListEvent) => void)[] = [];
  const mq = {
    matches,
    addEventListener: vi.fn((_: string, handler: (e: MediaQueryListEvent) => void) => {
      listeners.push(handler);
    }),
    removeEventListener: vi.fn((_: string, handler: (e: MediaQueryListEvent) => void) => {
      const idx = listeners.indexOf(handler);
      if (idx !== -1) listeners.splice(idx, 1);
    }),
    dispatchChange: (newMatches: boolean) => {
      listeners.forEach((h) => h({ matches: newMatches } as MediaQueryListEvent));
    },
  };
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn(() => mq),
  });
  return mq;
}

describe("usePrefersReducedMotion", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns false when reduced motion is not preferred", () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
  });

  it("returns true when reduced motion is preferred", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(true);
  });

  it("updates when the media query changes to true", () => {
    const mq = mockMatchMedia(false);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
    act(() => {
      mq.dispatchChange(true);
    });
    expect(result.current).toBe(true);
  });

  it("updates when the media query changes back to false", () => {
    const mq = mockMatchMedia(true);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(true);
    act(() => {
      mq.dispatchChange(false);
    });
    expect(result.current).toBe(false);
  });

  it("removes the event listener on unmount", () => {
    const mq = mockMatchMedia(false);
    const { unmount } = renderHook(() => usePrefersReducedMotion());
    unmount();
    expect(mq.removeEventListener).toHaveBeenCalledWith("change", expect.any(Function));
  });
});
