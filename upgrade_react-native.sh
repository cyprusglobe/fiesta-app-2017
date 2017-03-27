#!/bin/bash

newVersion=$2


# Save package.json for later use (for not being taken into account when computing stats)
cp package.json ../package.json.temp

# Install dependencies
npm install

# Launch RN upgrade
react-native-git-upgrade $newVersion

# Strip version qualifier
sed -i "" "s/\"react\": \"[\~\^]/\"react\": \"/" ./package.json
sed -i "" "s/\"react-native\": \"[\~\^]/\"react-native\": \"/" ./package.json

cd ..

# Create the new branch
git branch rn-$newVersion

# Checkout it
git checkout rn-$newVersion

# Add modified files to commit
git add RnDiffApp

# Commit
git commit -m "Output version ${newVersion}"

# Compute diff stats pour README.md
## Restore the old package.json (we don't want to take it into account for stats)
cp package.json.temp RnDiffApp/package.json
## Save the stats
diffStat=`git --no-pager diff HEAD~1 --shortstat`
## Clean old package.json
rm package.json.temp
## Restore the new package.json
git checkout -- RnDiffApp/package.json

# Print diff
git --no-pager diff HEAD~1

# Print all branches (inspired from the oh-my-zsh shortcut: "glola")
git --no-pager log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --all
