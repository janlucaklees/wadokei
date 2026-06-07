export UID := $(shell id -u)
export GID := $(shell id -g)

.PHONY=start
start:
	docker compose stop
	docker compose up -d
	docker compose logs -f frontend

.PHONY=stop
stop:
	docker compose stop

.PHONY=build
build:
	docker compose run --rm frontend bun run build

.PHONY=image-build
image-build:
	docker build -t ghcr.io/janlucaklees/wadokei:latest .

.PHONY=image-publish
image-publish:
	docker push ghcr.io/janlucaklees/wadokei:latest
