# #!/bin/sh 


# prompt user for branch name for main repo
read -p "Enter branch name for main repo (Press Enter if you want to push on current branch ): " mainBranchName
if [ ${#mainBranchName} -eq 0 ]; then
  echo "push will be on current branch"
  else
git switch -c "$mainBranchName"

fi

# prompt user for commit message for main repo
read -p "Enter commit message for main repo: " mainCommitMessage

# add all files to staging area
git add .
git reset common

# commit staged changes with the user-provided commit message
git commit -m "$mainCommitMessage"

# push changes to remote repository
if [ ${#mainBranchName} -eq 0 ]; then
  echo "push current commit to remote repository"
git push 

  else
git push --set-upstream origin "$mainBranchName"

fi


echo "ready to merge in origin"