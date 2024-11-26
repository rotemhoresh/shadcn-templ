import ESM_COMPAT_Module from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
export * from '@storybook/addon-docs/dist/shims/mdx-react-shim';

const __filename = fileURLToPath(import.meta.url);
dirname(__filename);
ESM_COMPAT_Module.createRequire(import.meta.url);
