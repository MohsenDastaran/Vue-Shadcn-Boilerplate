# #!/bin/sh 


# # go to common repo
cd ./common
if [[ -z $(git status -s) ]]
then
  echo "there is no changes in common branch"

  cd ../
else
read -p "Enter branch name for common repo (Press Enter if you want to push on current branch ): " commonBranchName

if [ ${#commonBranchName} -eq 0 ]; then
  echo "push will be on current branch"
  else
# prompt user for branch name for common repo
git switch -c "$commonBranchName"
fi

# prompt user for commit message for common repo
read -p "Enter commit message for common repo: " commonCommitMessage

# add all files to staging area
git add .

# commit staged changes with the user-provided commit message
git commit -m "$commonCommitMessage"

# push changes to remote repository
if [ ${#commonBranchName} -eq 0 ]; then
  echo "push current commit to remote repository"
git push 

  else
git push --set-upstream origin "$commonBranchName"
fi

# back to main repo:
cd ../
fi
