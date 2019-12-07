.PHONY: build
build:
	docker-compose -f docker-compose.yml up --build

.PHONY: build-demo
build-demo:
	docker-compose -f docker-compose.demo.yml up --build

.PHONY: down
down:
	-docker stop zoid-demo_checkout_1
	-docker rm zoid-demo_checkout_1 
	-docker network rm 6bd833ff300e
	docker-compose down

.PHONY: publish-local
publish-local:
	bash loginuser.dev.sh
	npm publish --registry http://localhost:4873
