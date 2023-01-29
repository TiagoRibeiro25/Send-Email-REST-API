# Send Email REST API

A REST API for sending emails built with Express in Node.js.

## Features

- Send emails using a simple API
- Easy integration into your application

## Prerequisites

- Node.js and npm installed
- A MAILJET account with access to the API (free tier available)
- A MongoDB account (free tier available)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/TiagoRibeiro25/Send-Email-REST-API
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables in a `.env` file:

```bash
MAILJET_URL="https://api.mailjet.com/v3.1/send"

MAILJET_PUBLIC_KEY="YOUR MAILJET PUBLIC KEY"
MAILJET_SECRET_KEY="YOUR MAILJET SECRET KEY"

API_ACCESS_TOKEN="A RANDOM STRING"

EMAIL_DB_URI="YOUR MONGODB URI"

PORT=3000
```

4. Start the server in development mode (nodemon):

```bash
npm run dev
```

## Usage

### Get API Current Version

Make a GET request to the `/api/v1/version` endpoint:

```bash
curl -X GET http://localhost:3000/api/v1/version
```

### Get API Status

Make a GET request to the `/api/v1/status` endpoint:

```bash
curl -X GET http://localhost:3000/api/v1/status
```

### Send an Email

Make a POST request to the `/api/v1/send` endpoint with the following:

- Headers:

```javascript
authorization: YOUR API_ACCESS_TOKEN
```

- Body:

```JSON
{
   "From": { 
      "Name": "Source Name",
      "Email": "Source Email"
   },
   "To": [
      {
         "Name": "Destination Name",
         "Email":"Destination Email"
      }
   ],
   "Subject": "Subject of the email",
   "Text": "Text of the email",
}
```

(the `To` field supports multiple objects in the array)

## Deployment

This application can be easily deployed to a hosting platform.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
