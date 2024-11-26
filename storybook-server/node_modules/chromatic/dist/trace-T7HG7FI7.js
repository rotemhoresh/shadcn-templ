'use strict';

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="72110c1a-5444-5ca7-b1f7-c503b860e77d")}catch(e){}}();

var chunkPBUGL52E_js = require('./chunk-PBUGL52E.js');
var chunkX7RBQNLE_js = require('./chunk-X7RBQNLE.js');
var chunkLZXDNZPW_js = require('./chunk-LZXDNZPW.js');
var chunkTKGT252T_js = require('./chunk-TKGT252T.js');

var n=chunkTKGT252T_js.e(chunkX7RBQNLE_js.B());var{STORYBOOK_BASE_DIR:m,STORYBOOK_CONFIG_DIR:u,WEBPACK_STATS_FILE:g}=process.env;async function S(l){let{flags:t,input:c}=(0, n.default)(`
    Usage
      $ chromatic trace [-b|--base-dir] [-c|--config-dir] [-s|--stats-file] [-u|--untraced] [-m|--mode] [<changed files>...]

    Options
      <changed files>...                    List of changed files relative to repository root.
      --stats-file, -s <filepath>           Path to preview-stats.json. Alternatively, set WEBPACK_STATS_FILE. (default: 'storybook-static/preview-stats.json')
      --storybook-base-dir, -b <dirname>    Relative path from repository root to Storybook project root. Alternatively, set STORYBOOK_BASE_DIR. Use when your Storybook is located in a subdirectory of your repository.
      --storybook-config-dir, -c <dirname>  Directory where to load Storybook configurations from. Alternatively, set STORYBOOK_CONFIG_DIR. (default: '.storybook')
      --untraced, -u <filepath>             Disregard these files and their dependencies. Globs are supported via picomatch. This flag can be specified multiple times.
      --mode, -m <mode>                     Set to 'expanded' to reveal the underlying list of files for each bundle, or set to 'compact' to only show a flat list of affected story files.
    `,{argv:l,description:"Trace utility for TurboSnap",flags:{statsFile:{type:"string",alias:"s",default:g||"storybook-static/preview-stats.json"},storybookBaseDir:{type:"string",alias:"b",default:m||"."},storybookConfigDir:{type:"string",alias:"c",default:u||".storybook"},untraced:{type:"string",alias:"u",isMultiple:!0},mode:{type:"string",alias:"m"}}}),f={log:console,options:{storybookBaseDir:t.storybookBaseDir,storybookConfigDir:t.storybookConfigDir,untraced:t.untraced,traceChanged:t.mode||!0}},d=await chunkLZXDNZPW_js.a(t.statsFile),o=c.map(e=>e.replace(/^\.\//,"")),s=o.find(e=>chunkPBUGL52E_js.H(e));if(s)throw new Error(`Unable to trace package manifest file (${s}) as that would require diffing file contents.`);await chunkPBUGL52E_js.L(f,d,t.statsFile,o);}

exports.main = S;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=trace-T7HG7FI7.js.map
//# debugId=72110c1a-5444-5ca7-b1f7-c503b860e77d
