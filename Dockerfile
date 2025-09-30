# Build stage
FROM oven/bun:1.2.23 AS builder
WORKDIR /app

# Copy package manifests and install dependencies
COPY package.json bun.lock ./
COPY apps/web/package.json ./apps/web/
RUN bun install --frozen-lockfile

# Copy source
COPY apps/web ./apps/web


# Build the web app
WORKDIR /app/apps/web
RUN bun run build

# Production stage with nginx
FROM nginx:1.27-alpine AS production
WORKDIR /usr/share/nginx/html

# Copy built dist folder
COPY --from=builder /app/apps/web/dist ./

# Replace default nginx config with SPA config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
