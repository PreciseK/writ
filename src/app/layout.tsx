import React, { ReactNode } from 'react';

// Root layout — the actual layout lives in src/app/[locale]/layout.tsx
// This file is required by Next.js but delegates to the locale-aware layout.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
