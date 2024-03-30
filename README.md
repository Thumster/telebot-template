# Telebot Template

## Description

This is a template for creating Telegram bots using the Grammy framework. It can either be run locally with long polling (as a server) or be deployed to AWS Lambda with API Gateway webhook.

## Prerequisites

- Node.js
- Typescript
- Serverless Framework
- AWS CLI

## Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your environment variables in a `.env` file with your TELEGRAM_BOT_TOKEN


## Usage
### Local Long Polling
- Start the bot with `npm start`

### AWS Lambda with API Gateway
- Setup `aws configure` with authorised account
- Deploy the bot with `npm run deploy`, this sets the webhook by default. Any time there are changes, you will have to run this command again.
- Remove the service with `npm run remove-service`. Necessary when you change the name of the service.
- Set the webhook manually with `npm run set-webhook`. Necessary when you run locally, as that removes the webhook.

## Scripts

- `npm run lint` to lint the code
- `npm run format` to format the code