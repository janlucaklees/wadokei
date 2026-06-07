FROM oven/bun:1-alpine AS builder

WORKDIR /usr/src/app

# Install dependencies first, to leverage docker build cache.
COPY ./bun.lock ./package.json ./
RUN bun install

# Build the frontend
COPY ./index.html ./svelte.config.js ./tsconfig.json ./tsconfig.node.json ./vite.config.ts ./
COPY ./src ./src
COPY ./public ./public
RUN bun run build


FROM oven/bun:1-alpine

WORKDIR /usr/src/app

# Create a non-root user
RUN addgroup -S wadokei && adduser -S wadokei -G wadokei

# Copy files and set ownership
COPY --from=builder /usr/src/app/docs/. /usr/src/app/docs/.
RUN chown -R wadokei:wadokei /usr/src/app

USER wadokei
EXPOSE 3000

CMD ["./docs/index.html"]
