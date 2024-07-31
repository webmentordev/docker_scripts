# About the Pocketbase

Pocketbase is a database (SQLite) with build in DashboardUI amd REST (like) APIs. Great for small scale / personal projects. It is simple and easy to manage.

# How to use it?

1. Build Dockerfile (it will create an image of pocketbase)
2. Run Docker-compose file and use the pocketbase image you create. simple

# Build the image

$ docker build -t ahmertahir/pocketbase:tag_goes_here .
$ docker push ahmertahir/pocketbase:tag_goes_here
