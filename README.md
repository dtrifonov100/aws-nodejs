# Building and Deploying a Node.js Project to Amazon EC2 with GitHub Actions CI/CD

https://www.youtube.com/watch?v=bLh79eCbnCs

### --- Algoritm ---

1. Write BE app. Push it in your GitHub repo

2. Create EC2 instance

3. Write .github/workflows/prod.yml

4. Create runner on GitHub. Follow its manual on aws server

5. Start runner. sudo ./svc.sh install && sudo ./svc.sh start

6. Install nodejs, npm, pm2

7. Edit nginx /etc/nginx/sites-available/default

location /api {
rewrite ^\/api\/(.\*)$ /api/$1 break;
proxy_pass http://localhost:8000;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}

8. pm2 start index.js --name="Backend"
9. Add .env content to GitHub SECRETS
10. Check results http://54.225.58.206/api/todos

### --- --- --- --- ---
