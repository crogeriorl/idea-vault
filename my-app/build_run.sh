#!/bin/bash
echo # Updating local code from GitHub repo
# git pull

_ctr=$(docker ps -q)
docker container stop $_ctr
docker container rm $_ctr

docker login ghcr.io --username crogeriorl --password $1
echo ">> Pulling app image..."
docker pull $2

echo ## Run app on docker!
docker run -d -p 8080:3000 $2