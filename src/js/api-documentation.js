var api = {
  "basePath": "https://api.usersignals.io/1.0",
  "endpoints": [
    {
      "endpoint": "/tracking/pageviews",
      "protocol": "POST",
      "description": "Send a pageview to the tracking API.",
      "payload": {
        "key": "{apiKey}",
        "userid": "{userId}",
        "url": "{currentURL}",
        "device": "{device}",
        "browser": "{browser}",
        "platform": "{operatingSystem}",
        "pagespeed": "{loadSpeed}",
        "tags": "{tagsArray}",
        "campaign": "{utmCampaign}",
        "source": "{utmSource}",
        "medium": "{utmMedium}",
        "referrer": "{referrer}",
        "sessionid": "{sessionId}"
      },
      "inputFormat": "application/json",
      "outputFormat": "application/json"
    },
    {
      "endpoint": "/tracking/clicks",
      "protocol": "POST",
      "description": "Send a click to the tracking API.",
      "payload": {
        "key": "{apiKey}",
        "userid": "{userId}",
        "url": "{currentURL}",
        "device": "{device}",
        "browser": "{browser}",
        "platform": "{operatingSystem}",
        "id": "{targetId}",
        "name": "{targetName}",
        "class": "{targetClass}",
        "tag": "{targetTag}",
        "sessionid": "{sessionId}"
      },
      "inputFormat": "application/json",
      "outputFormat": "application/json"
    },
    {
      "endpoint": "/tracking/events",
      "protocol": "POST",
      "description": "Send an event to the tracking API.",
      "payload": {
        "key": "{apiKey}",
        "userid": "{userId}",
        "event": "{eventName}",
        "url": "{currentURL}",
        "device": "{device}",
        "browser": "{browser}",
        "platform": "{operatingSystem}",
        "tags": "{tagsArray}",
        "sessionid": "{sessionId}"
      },
      "inputFormat": "application/json",
      "outputFormat": "application/json"
    },
    {
      "endpoint": "/tracking/errors",
      "protocol": "POST",
      "description": "Send an error to the tracking API.",
      "payload": {
        "key": "{apiKey}",
        "userid": "{userId}",
        "message": "{errorMessage}",
        "url": "{currentURL}",
        "device": "{device}",
        "browser": "{browser}",
        "platform": "{operatingSystem}",
        "sessionid": "{sessionId}"
      },
      "inputFormat": "application/json",
      "outputFormat": "application/json"
    },
    {
      "endpoint": "/users",
      "protocol": "POST",
      "description": "Get data from a user profile by user ID.",
      "payload": {
        "key": "{apiKey}",
        "userid": "{userId}"
      },
      "inputFormat": "application/json",
      "outputFormat": "application/json"
    },
    {
      "endpoint": "/users/update",
      "protocol": "POST",
      "description": "Update a user profile by user ID.",
      "payload": {
        "key": "{apiKey}",
        "userid": "{userId}",
        "name": "{userName}",
        "email": "{userEmail}",
        "status": "{userStatus}",
        "sessionId": "{sessionId}"
      },
      "inputFormat": "application/json",
      "outputFormat": "application/json"
    },
    {
      "endpoint": "/users/delete",
      "protocol": "POST",
      "description": "Delete a user profile by user ID.",
      "payload": {
        "key": "{apiKey}",
        "userid": "{userId}"
      },
      "inputFormat": "application/json",
      "outputFormat": "application/json"
    },
    {
      "endpoint": "/status",
      "protocol": "GET",
      "description": "Returns application health metrics.",
      "payload": {
        "status": "{status}",
        "averageResponseTime": "{averageResponseTime}"
      },
      "inputFormat": "application/json",
      "outputFormat": "application/json"
    }
  ]
}
