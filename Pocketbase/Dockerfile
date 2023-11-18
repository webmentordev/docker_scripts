FROM alpine:latest

# Update this to a new Pocketbase Version if there is any available
ARG PB_VERSION=0.19.2

RUN apk add --no-cache \
    unzip \
    ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# ==============================================================================
# If you already have data for pocketbase, you can uncomment 3 commands below
# Bring those folders in the same directory as Dockerfile, or the other way
# then build this Dockerfile to create the pocketbase image
# ==============================================================================
# COPY ./pb_migrations /pb/pb_migrations
# COPY ./pb_hooks /pb/pb_hooks
# COPY ./pb_hooks /pb/pb_data

# This folder will be exposed for the docker-compose file if you plan to use that
WORKDIR /pb/

# This is the PORT which will make the Pocketbase accessiable. Keep port same in EXPOSE
# and in CMD at the end
EXPOSE 8090

# start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]

# How to build it? it's easy run the command below, pocketbase is the image name.
# docker build -t pocketbase .