# Building and Deploying a Node.js Project to Amazon EC2 with GitHub Actions CI/CD

https://www.youtube.com/watch?v=bLh79eCbnCs

http://54.225.58.206/api/get

#### Paste this into /etc/nginx/sites-available/default

location /api {
rewrite ^\/api\/(.\*)$ /api/$1 break;
proxy_pass http://localhost:8000;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
