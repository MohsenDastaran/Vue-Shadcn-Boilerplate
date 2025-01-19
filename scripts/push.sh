# #!/bin/sh 


# # go to common repo
cd ./common
if [[ -z $(git status -s) ]]
then
  cd ../
else
# prompt user for branch name for common repo

read -p "Enter branch name for common repo: " commonBranchName
git switch -c "$commonBranchName"

# prompt user for commit message for common repo
read -p "Enter commit message for common repo: " commonCommitMessage

# add all files to staging area
git add .

# commit staged changes with the user-provided commit message
git commit -m "$commonCommitMessage"

# push changes to remote repository
git push --set-upstream origin "$commonBranchName"


# back to main repo:
cd ../
fi

# prompt user for branch name for main repo
read -p "Enter branch name for main repo: " mainBranchName
git switch -c "$mainBranchName"

# prompt user for commit message for main repo
read -p "Enter commit message for main repo: " mainCommitMessage

# add all files to staging area
git add .
git reset common

# commit staged changes with the user-provided commit message
git commit -m "$mainCommitMessage"

# push changes to remote repository
git push --set-upstream origin "$mainBranchName"

echo "ready to merge in origin"


# end