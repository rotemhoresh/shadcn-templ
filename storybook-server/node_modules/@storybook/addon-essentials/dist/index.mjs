import ESM_COMPAT_Module from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, isAbsolute, join } from 'node:path';
import './chunk-7RUYHJJB.mjs';
import { serverRequire } from 'storybook/internal/common';
import { logger } from 'storybook/internal/node-logger';

const __filename = fileURLToPath(import.meta.url);
dirname(__filename);
ESM_COMPAT_Module.createRequire(import.meta.url);
var requireMain=configDir=>{let absoluteConfigDir=isAbsolute(configDir)?configDir:join(process.cwd(),configDir),mainFile=join(absoluteConfigDir,"main");return serverRequire(mainFile)??{}};function addons(options){let checkInstalled=(addonName,main2)=>{let addon=`@storybook/addon-${addonName}`,existingAddon=main2.addons?.find(entry=>(typeof entry=="string"?entry:entry.name)?.startsWith(addon));return existingAddon&&logger.info(`Found existing addon ${JSON.stringify(existingAddon)}, skipping.`),!!existingAddon},main=requireMain(options.configDir);return ["docs","controls","actions","backgrounds","viewport","toolbars","measure","outline","highlight"].filter(key=>options[key]!==!1).filter(addon=>!checkInstalled(addon,main)).map(addon=>`@storybook/addon-essentials/${addon}`)}

export { addons };
