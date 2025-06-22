"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: React.ComponentProps<typeof NextThemesProvider>;
}

export function Providers({
  children,
  themeProps,
}: ProvidersProps) {
  return (
    <NextThemesProvider {...themeProps}>
      {children}
    </NextThemesProvider>
  );
}