In order to set environment variables set ATLAS_URI to your MONGODB ATLAS cluster database connection string.
Set SESSION_SECRET to a unique value.
If running this app on local machine, use a .env file to store these variables.
If using docker-compose to deploy this app, the configuration is set, as long as a .env file is used.
If using kubernetes to deploy this app, make kubernetes secrets for both values with the following commands:
kubectl create secret generic mongodb-atlas-uri --from-literal=atlas-uri=$env:ATLAS_URI
kubectl create secret generic session-secret --from-literal=SESSION_SECRET='<your-session-secret>'

It is optional to set $env.ATLAS_URI to the value or outright use the value by replacing $env.ATLAS_URI when running the command in the command line.

Use the following docker commands to build, tag, and push the images to DockerHub.
docker build -t node-server ./server
docker build -t react-client ./client

docker tag node-server your-dockerhub-username/node-server
docker tag react-client your-dockerhub-username/react-client

docker push your-dockerhub-username/node-server
docker push your-dockerhub-username/react-client

Use the following command to start the images for react and node together with docker-compose:
docker-compose up

After verifying that the images have been pushed to DockerHub, you can now use Kubernetes to deploy the application.

Replace the value for image under containers in both node-deployment.yaml and react-deployment.yaml with the names of your images.

Use the following commands to deploy the containers for each yaml file:
kubectl apply -f <filename.yaml>

You can view if the pods are running with the command:
kubectl get pods

To view the logs of a pod use the following command:
kubectl logs <your-pod-name>

Use the following command to view the kubernetes deployments on local machine:
kubectl port-forward <react-pod-name> 3000:3000
kubectl port-forward <node-pod-name> 5000:5000

Can also use the following commands by using the service files to view the kubernetes deployments:
kubectl port-forward service/react-service 3000:3000
kubectl port-forward service/node-service 5000:5000

If using NodePort to view deployments:
Edit service type in service files to NodePort and apply changes using: 
kubectl apply -f <servicefile.yaml>
Use:
kubectl get services 
to view IP address and port of services.

If running cluster in a cloud environment, can use LoadBalancer as service type.
Run the kubectl apply command, kubectl get services command, and access the services using the given address.

Port forwarding preferred for local development, NodePort and LoadBalancer preferred for production deployments.

