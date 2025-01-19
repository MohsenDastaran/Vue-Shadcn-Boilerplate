#!/bin/sh 

git switch dev
# delete all branches except dev, master & main
git pull
git branch | grep -v "dev" | grep -v "master" | grep -v "main" | xargs git branch -D && git status

echo "ready to develop in dev"

