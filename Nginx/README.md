# About this file  
This docker compose file will start the nginx with custom Volumes, ports and serve simple html webpage. This script will also log erros and access (my purpose was to track who will access the server). If you want to serve the nginx over port 80 and 443 (443 is not required if you are using cloudflare's SSL), simply change the ports in docker-compose.yml file.  
  
## How to Run the script ?  
Just run these commands
### To Start the file  
docker-compose up -d  
### To Stop the server  
docker-compose stop