#!/usr/bin/env bash

# Begin Standard 'imports'
set -e
set -o pipefail

gray="\e[37m"
blue="\e[36m"
red="\e[31m"
yellow="\e[33m"
green="\e[32m"
reset="\e[0m"

info() { echo -e "${blue}INFO: $*${reset}"; }
error() { echo -e "${red}ERROR: $*${reset}"; }
debug() {
    if [[ "${DEBUG}" == "true" ]]; then
        echo -e "${gray}DEBUG: $*${reset}";
    fi
}

success() { echo -e "${green}✔ $*${reset}"; }
warn() { echo -e "${yellow}✖ $*${reset}"; exit 1; }
fail() { echo -e "${red}✖ $*${reset}"; exit 1; }

# End standard 'imports'

