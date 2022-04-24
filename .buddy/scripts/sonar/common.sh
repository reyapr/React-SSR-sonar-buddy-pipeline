#!/usr/bin/env bash

# Begin Standard 'imports'
set -e
set -o pipefail

gray=`tput setaf 7`
blue=`tput setaf 4`
red=`tput setaf 1`
yellow=`tput setaf 3`
green=`tput setaf 2`
reset=`tput sgr0`

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

