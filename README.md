## HelloWorld node.js app on port 3000 with HTTPS on webserver

## [How to create an https server?](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/) 

    1 - Install express in the project directory
    2 - Generate a selft-signed certificate (SSL Certificate)
        run in the project directory, works with wsl(windows user)
        ```
        openssl genrsa -out key.pem
        openssl req -new -key key.pem -out csr.pem
        openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
        rm csr.pem

        ```
    3 - Web service in index.js file. which use nodejs https on port 3000 pointing to the express app

    