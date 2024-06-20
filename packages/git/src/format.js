import chalk from 'chalk';
export const process_diff_formatting_options = (options, { show_patch_by_default = true } = {}) => {
    result.display_diff = () => {
        return !result.no_patch && (result.raw || result.numstat || result.summary || result.patch);
    };

    if (show_patch_by_default && !result.raw && !result.numstat && !result.summary && !result.patch)
                s += chalk.blueBright(`@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@\n`);
                            s += chalk.greenBright(`${line}\n`);
                            s += chalk.redBright(`${line}\n`);