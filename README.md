
CCC CLI
CCC generator

## Add private registry
```
npm config set registry https://npm.xxx.com
yarn config set registry https://npm.xxx.com
```
## Install
npm install ccc-cli -g 
yarn global add ccc-cli

## Upgrade
yarn global upgrade ccc-cli@latest

## Usage
### Init service
mkdir service-a && cd service-a && ccc init service-a

## K8s
add env: GCP_PROJECT before running k8s generator

### Add config
ccc config kafka
### Add k8s
ccc k8s service-a


