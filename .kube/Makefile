REPOSITORY_NAME=floytyz

APP_IMAGE_NAME=pdf-frontend-app

NODE_IMAGE=node:20-alpine

default: build

build: build_app

build_app:
	# build new image
	cd ../ && docker build --build-arg PHP=$(NODE_IMAGE) -f .kube/app/Dockerfile -t $(REPOSITORY_NAME)/$(APP_IMAGE_NAME):latest .
	# push image to dockerhub
	docker push $(REPOSITORY_NAME)/$(APP_IMAGE_NAME):latest
	# rollout deployment to update images
	kubectl rollout restart deployment $(APP_IMAGE_NAME)