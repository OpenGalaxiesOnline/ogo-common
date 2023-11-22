#!/usr/bin/env bash
set -e

# This will initialize and setup all the things our Github account will need that is using this process.
setup_git() {
  # Set the user name and email to match the API token holder
  # This will make sure the git commits will have the correct photo
  # and the user gets the credit for a checkin
  git config --global user.email "${USER_EMAIL}"
  git config --global user.name "${USER_NAME}"
  git config --global push.default matching

  # Get the credentials from a file
  git config credential.helper "store --file=.git/credentials"

  # This associates the API Key with the account
  echo "https://${GITHUB_TOKEN}:@github.com" > .git/credentials
}

increment_version() {

  git clean -ndx

  # Increment the package versions
  # %s is the placeholder for the created version
  npm version patch -m "COMMON Patch Version Updated: %s"
  git push
}

publish() {
  # Publish the new package version
  npm ci
  npm run build
  npm publish
}

setup_git && increment_version && publish

unset -f setup_get
unset -f increment_version
unset -f publish