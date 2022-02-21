build:
	cd Backend && $(MAKE) build
	cd front-end && $(MAKE) build

run:
	docker compose up

stop:
	docker compose down