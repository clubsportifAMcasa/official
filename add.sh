#! /bin/bash

if [ $# -eq 0 ]
then
echo "enter commit comment"
else
git add .
git commit -m"$1"
git push
fi