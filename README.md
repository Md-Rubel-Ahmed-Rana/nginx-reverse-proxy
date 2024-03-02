# Nginx Reverse Proxy for Microservices

This project sets up an Nginx reverse proxy to manage and route requests to multiple microservices in a distributed system. The Nginx server acts as a gateway, providing a single entry point for clients to access various microservices.

## Features

- **Reverse Proxy Configuration**: Nginx is configured to act as a reverse proxy, forwarding requests to different microservices based on the URL path.
- **Upstream Servers**: Each microservice is defined as an upstream server in the Nginx configuration, allowing for easy scalability and load balancing.
- **URL Rewriting**: The Nginx server is configured to rewrite specific URL paths before forwarding requests to the corresponding microservices.
- **Customizable**: The configuration is designed to be easily customizable, allowing for the addition or modification of microservices without significant changes to the Nginx configuration.

## Usage

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Md-Rubel-Ahmed-Rana/nginx-reverse-proxy.git
   ```

2. Modify the Nginx configuration file (`default.conf`) to include your microservices' endpoints and any custom URL rewriting rules.

3. Start the Nginx server using Docker or your preferred method.

4. Access your microservices through the Nginx reverse proxy using the defined URL paths.

## Endpoints

- **[GET] /api/v1/cart-ms/item**: Retrieves all items from the cart microservice.
- **[GET] /api/v1/user-ms/user**: Retrieves all users from the user microservice.
- **[GET] /api/v1/product-ms/product**: Retrieves all products from the product microservice.
- **[GET] /api/v1/order-ms/order**: Retrieves all orders from the order microservice.
