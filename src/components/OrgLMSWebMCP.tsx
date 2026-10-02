'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { mountYedaDocumentTools } from '@/lib/webmcp/bootstrap.mjs';

// Additive, UI-free mount. Every route effect has immediate cleanup, including pending imports.
export default function OrgLMSWebMCP() {
  const pathname = usePathname();
  useEffect(() => {
    const lifetime = mountYedaDocumentTools('orglms');
    return () => lifetime.dispose();
  }, [pathname]);
  return null;
}
