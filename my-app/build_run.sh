#!/bin/bash
echo # Updating local code from GitHub repo
git pull

echo "> deleting old version."
_ctr=$(docker ps -q)
docker container stop $_ctr
docker container rm $_ctr

echo ## Bulding image...
docker build -t my-app:v1 .

echo ### Run app on docker!
docker run -d -p 8080:3000 my-app:v1
