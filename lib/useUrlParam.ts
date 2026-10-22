"use client";

import { useCallback, useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export function useUrlParam(name: string) {
  const value = useSyncExternalStore(
    subscribe,
    () => new URLSearchParams(window.location.search).get(name),
    () => null
  );

  const setValue = useCallback(
    (next: string | null) => {
      const url = new URL(window.location.href);
      if (next === null) url.searchParams.delete(name);
      else url.searchParams.set(name, next);
      window.history.replaceState(null, "", url);
      listeners.forEach((listener) => listener());
    },
    [name]
  );

  return [value, setValue] as const;
}
