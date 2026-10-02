import type { PublicTool, ExecutionContext } from './native.mjs';
export type SiteKey = 'yedalms' | 'orglms' | 'collegelms';
export type PublicPage = { title: string; url: string; sourceLanguage: 'he'; labelLanguage: 'en' };
export type PublicPageResult = { total: number; pages: PublicPage[]; nextOffset: number | null; sourceCheckedAt: string };
export type NavigationTool = Omit<PublicTool, 'execute'> & {
  execute(input: unknown, execution?: ExecutionContext): Promise<PublicPageResult>;
};
export function makeYedaPublicTools(siteKey: SiteKey): NavigationTool[];
