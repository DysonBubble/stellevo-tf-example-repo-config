# Customizing versions when generating TF code
This folder contains information for customizing versions of things when running TF code generation.

The folder `run` can currently contain only one file, `node.txt`, contents of which will be used as tag for [Node Docker image](https://hub.docker.com/_/node/).
The folder `providers` can be used to override the versions of Terraform providers TS libraries when generating file.