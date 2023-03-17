/// <reference types="vite/client" />
interface ImportMetaEnv {
  apiKey: string;
}
export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
