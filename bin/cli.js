#!/usr/bin/env node

import { execSync } from "child_process";

const runCommand = (command) => {
    try {
        execSync(command, { stdio: "inherit" });
    } catch (error) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
};

const repoName = process.argv[2];
const cloneCommand = `git clone --depth 1 https://github.com/ariesetiadi-sm/my-express-kit ${repoName}`;

// Cloning command
console.log(`Cloning the repository  with name ${repoName}`);
const cloned = runCommand(cloneCommand);
if (!cloned) process.exit(-1);

console.log("Congratulations! Your express kit is ready");
console.log("Have a nice day ⭐");
