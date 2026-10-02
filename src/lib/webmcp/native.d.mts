export type ExecutionContext = { signal?: AbortSignal };
export type PublicTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations: { readOnlyHint: boolean; consequentialHint: boolean; untrustedContentHint?: boolean };
  execute(input: unknown, execution?: ExecutionContext): Promise<unknown>;
};
export type NativeModelContext = {
  registerTool(tool: PublicTool, options?: { signal?: AbortSignal }): Promise<void>;
};
export type NativeDocument = Pick<Document, 'location' | 'defaultView'> & { modelContext?: NativeModelContext };
export type RegistrationSnapshot = { supported: boolean; status: string; registered: string[]; reason?: string };
export type RegistrationLifetime = {
  readonly supported: boolean;
  readonly status: string;
  readonly registered: string[];
  readonly ready: Promise<RegistrationSnapshot>;
  dispose(): void;
};
export type NativeOptions = {
  document?: NativeDocument;
  secureContext?: boolean;
  signal?: AbortSignal;
  now?: () => number;
};
export function nativeSupport(document: NativeDocument | undefined, secureContext: boolean | undefined): boolean;
export function registerPublicTools(tools: PublicTool[], options?: NativeOptions): RegistrationLifetime;
