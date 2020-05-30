# Customizing package.json file
This folder contains information about the `package.json` file that will be used when generating TF code.
The sub-folders are organized as follows:
- `runtime` folder contains information for runtime dependencies (the `dependencies` section of `package.json` file). Each file will be interpreted as the name of the dependency, and file content will server as version string for that dependency.
- `dev` folder contains information for development time dependencies (the `devDependencies` section of `package.json` file). Each file will be interpreted as the name of the dependency, and file content will server as version string for that dependency.