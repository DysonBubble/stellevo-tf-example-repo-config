# Declaring platforms to be used
This folder enables to declare which platforms are used.
Each sub-folder declared a platform which will be visible as the name of the folder.
For example, if this folder contains sub-folder named `test-platform`, one can reference it in TS code within `src/config/exports` folder like this: `import * as test_platform from "../../platforms/test-platform";`.

Each of the platform folders must contain two files: `location.txt` and `version.txt`.
The `location.txt` can be an URL or path to local file system (currently, for URLs, it must be such URL that is workable with `git clone` command).
The `version.txt` file is only used when the string within `location.txt` file is URL, and is passed as argument of `--branch` switch of `git clone` command.
