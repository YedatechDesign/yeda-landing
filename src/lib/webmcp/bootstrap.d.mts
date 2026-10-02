import type { SiteKey, NavigationTool } from './public-tools.mjs';
import type { NativeOptions, RegistrationLifetime } from './native.mjs';
export type MountOptions = Omit<NativeOptions, 'now'> & {
  loadRuntime?: () => Promise<{
    makeYedaPublicTools(siteKey: SiteKey): NavigationTool[];
    registerPublicTools(tools: NavigationTool[], options?: NativeOptions): RegistrationLifetime;
  }>;
};
export function mountYedaPublicTools(siteKey: SiteKey, options?: MountOptions): RegistrationLifetime;
export function mountYedaDocumentTools(siteKey: SiteKey, options?: MountOptions): RegistrationLifetime;
