---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->


# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/docs/collection.json)
<!-- END_INFO -->

#general
<!-- START_bb885e4c65c417f48d5ae8160c12e64a -->
## api/v1/users/auth

> Example request:

```bash
curl -X POST "http://localhost/api/v1/users/auth" \
-H "Accept: application/json" \
    -d "password"="porro" \
    -d "email"="eusebio80@example.org" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/users/auth",
    "method": "POST",
    "data": {
        "password": "porro",
        "email": "eusebio80@example.org"
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v1/users/auth`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    password | string |  required  | Maximum: `124`
    email | email |  required  | Maximum: `124`

<!-- END_bb885e4c65c417f48d5ae8160c12e64a -->

<!-- START_df09e95bb5944c9c4d213d56259af1ad -->
## api/v1/profiles

> Example request:

```bash
curl -X GET "http://localhost/api/v1/profiles" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/profiles",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
[
    {
        "idProfile": 4,
        "nameProfile": "adminCompany1",
        "idCompanyKf": 1,
        "idStatusKf": 1,
        "idUserAddKf": 1,
        "idUserDeleteKf": 0,
        "idStatus": 1,
        "nameStatus": "Activo",
        "idCompany": 1,
        "businessName": "Cardemo",
        "CUIT": "12345",
        "idTypeCompanyKf": 1,
        "publicApiKey": "sdfsdfsdfsdf",
        "publicApiKeyLab": "tertyrry",
        "terms": 0
    },
    {
        "idProfile": 5,
        "nameProfile": "soporteCompany1",
        "idCompanyKf": 1,
        "idStatusKf": 1,
        "idUserAddKf": 1,
        "idUserDeleteKf": 0,
        "idStatus": 1,
        "nameStatus": "Activo",
        "idCompany": 1,
        "businessName": "Cardemo",
        "CUIT": "12345",
        "idTypeCompanyKf": 1,
        "publicApiKey": "sdfsdfsdfsdf",
        "publicApiKeyLab": "tertyrry",
        "terms": 0
    },
    {
        "idProfile": 6,
        "nameProfile": "visualCompany1",
        "idCompanyKf": 1,
        "idStatusKf": 1,
        "idUserAddKf": 1,
        "idUserDeleteKf": 0,
        "idStatus": 1,
        "nameStatus": "Activo",
        "idCompany": 1,
        "businessName": "Cardemo",
        "CUIT": "12345",
        "idTypeCompanyKf": 1,
        "publicApiKey": "sdfsdfsdfsdf",
        "publicApiKeyLab": "tertyrry",
        "terms": 0
    },
    {
        "idProfile": 7,
        "nameProfile": "adminCompany2",
        "idCompanyKf": 2,
        "idStatusKf": 1,
        "idUserAddKf": 1,
        "idUserDeleteKf": 0,
        "idStatus": 1,
        "nameStatus": "Activo",
        "idCompany": 2,
        "businessName": "Cellphone ca",
        "CUIT": "4567",
        "idTypeCompanyKf": 1,
        "publicApiKey": "tttttt",
        "publicApiKeyLab": "eeeeee",
        "terms": 0
    },
    {
        "idProfile": 8,
        "nameProfile": "soporteCompany2",
        "idCompanyKf": 2,
        "idStatusKf": 1,
        "idUserAddKf": 1,
        "idUserDeleteKf": 0,
        "idStatus": 1,
        "nameStatus": "Activo",
        "idCompany": 2,
        "businessName": "Cellphone ca",
        "CUIT": "4567",
        "idTypeCompanyKf": 1,
        "publicApiKey": "tttttt",
        "publicApiKeyLab": "eeeeee",
        "terms": 0
    },
    {
        "idProfile": 9,
        "nameProfile": "visualCompany2",
        "idCompanyKf": 2,
        "idStatusKf": 1,
        "idUserAddKf": 1,
        "idUserDeleteKf": 0,
        "idStatus": 1,
        "nameStatus": "Activo",
        "idCompany": 2,
        "businessName": "Cellphone ca",
        "CUIT": "4567",
        "idTypeCompanyKf": 1,
        "publicApiKey": "tttttt",
        "publicApiKeyLab": "eeeeee",
        "terms": 0
    }
]
```

### HTTP Request
`GET api/v1/profiles`

`HEAD api/v1/profiles`


<!-- END_df09e95bb5944c9c4d213d56259af1ad -->

<!-- START_fbf25b10d67aba0c300c3d04f79ef7ce -->
## api/v1/users/password

> Example request:

```bash
curl -X POST "http://localhost/api/v1/users/password" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v1/users/password",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v1/users/password`


<!-- END_fbf25b10d67aba0c300c3d04f79ef7ce -->

<!-- START_46f94b112db28e6225e463b71f56b732 -->
## api/auth/users/AFIP

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/AFIP" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/AFIP",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/AFIP`


<!-- END_46f94b112db28e6225e463b71f56b732 -->

<!-- START_efe881819c7cf9863d1a48100e04da72 -->
## api/auth/users/consult

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/consult" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/consult",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/consult`


<!-- END_efe881819c7cf9863d1a48100e04da72 -->

<!-- START_260e2787d89a8ff1119ed6c2867d7352 -->
## api/auth/users/vuce

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/vuce" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/vuce",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/vuce`


<!-- END_260e2787d89a8ff1119ed6c2867d7352 -->

<!-- START_50606be83785ed4e410f460562f576f2 -->
## api/download-pdf

> Example request:

```bash
curl -X GET "http://localhost/api/download-pdf" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/download-pdf",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
null
```

### HTTP Request
`GET api/download-pdf`

`HEAD api/download-pdf`


<!-- END_50606be83785ed4e410f460562f576f2 -->

<!-- START_7f6ef96b7d909bec6133391c5659aaa8 -->
## api/auth/users

> Example request:

```bash
curl -X GET "http://localhost/api/auth/users" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "error": "Not authorized."
}
```

### HTTP Request
`GET api/auth/users`

`HEAD api/auth/users`


<!-- END_7f6ef96b7d909bec6133391c5659aaa8 -->

<!-- START_d958f94ae3e1779caaad821997f9fdbc -->
## api/auth/users/create

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/create" \
-H "Accept: application/json" \
    -d "name"="dolorem" \
    -d "email"="djacobi@example.org" \
    -d "password"="dolorem" \
    -d "idProfileKf"="dolorem" \
    -d "idCompanyKf"="dolorem" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/create",
    "method": "POST",
    "data": {
        "name": "dolorem",
        "email": "djacobi@example.org",
        "password": "dolorem",
        "idProfileKf": "dolorem",
        "idCompanyKf": "dolorem"
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/create`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    name | string |  required  | Maximum: `124`
    email | email |  required  | Maximum: `124`
    password | string |  required  | Maximum: `124`
    idProfileKf | string |  required  | 
    idCompanyKf | string |  required  | Maximum: `124`

<!-- END_d958f94ae3e1779caaad821997f9fdbc -->

<!-- START_f08afa8e516cf5186da7da08aa41ad07 -->
## api/auth/users/update

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/update" \
-H "Accept: application/json" \
    -d "idUser"="3" \
    -d "name"="alias" \
    -d "email"="hickle.vergie@example.com" \
    -d "changePassword"="alias" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/update",
    "method": "POST",
    "data": {
        "idUser": 3,
        "name": "alias",
        "email": "hickle.vergie@example.com",
        "changePassword": "alias"
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/update`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    idUser | numeric |  required  | 
    name | string |  required  | Maximum: `124`
    email | email |  required  | Maximum: `124`
    changePassword | string |  required  | 

<!-- END_f08afa8e516cf5186da7da08aa41ad07 -->

<!-- START_604409d28f360536a1b1f50b95040277 -->
## api/auth/users/delete/{idUser}

> Example request:

```bash
curl -X DELETE "http://localhost/api/auth/users/delete/{idUser}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/delete/{idUser}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/auth/users/delete/{idUser}`


<!-- END_604409d28f360536a1b1f50b95040277 -->

<!-- START_1c95c557cdc07631e1f52f10ed1307f6 -->
## api/auth/users/{idUser}

> Example request:

```bash
curl -X GET "http://localhost/api/auth/users/{idUser}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/{idUser}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "error": "Not authorized."
}
```

### HTTP Request
`GET api/auth/users/{idUser}`

`HEAD api/auth/users/{idUser}`


<!-- END_1c95c557cdc07631e1f52f10ed1307f6 -->

<!-- START_da937e8ea4fee603c62c7137bbf16ee5 -->
## api/auth/users/representative

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/representative" \
-H "Accept: application/json" \
    -d "nameRepresentative"="et" \
    -d "email"="samson11@example.net" \
    -d "password"="et" \
    -d "idCompanyKf"="et" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/representative",
    "method": "POST",
    "data": {
        "nameRepresentative": "et",
        "email": "samson11@example.net",
        "password": "et",
        "idCompanyKf": "et"
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/representative`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    nameRepresentative | string |  required  | Maximum: `124`
    email | email |  required  | Maximum: `124`
    password | string |  required  | Maximum: `124`
    idCompanyKf | string |  required  | Maximum: `124`

<!-- END_da937e8ea4fee603c62c7137bbf16ee5 -->

<!-- START_93a2da791861d9c29777a209b9e6b0d5 -->
## api/auth/users/checkPassword

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/checkPassword" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/checkPassword",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/checkPassword`


<!-- END_93a2da791861d9c29777a209b9e6b0d5 -->

<!-- START_9798673afd374f23c9805b48fd3bd701 -->
## api/auth/users/search

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/search" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/search",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/search`


<!-- END_9798673afd374f23c9805b48fd3bd701 -->

<!-- START_a562dbb4c7a664bef987488853bfd924 -->
## api/auth/users/UserProfileCompany

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/UserProfileCompany" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/UserProfileCompany",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/UserProfileCompany`


<!-- END_a562dbb4c7a664bef987488853bfd924 -->

<!-- START_dc5b44ecf8c01e2dee9c8ba57bbfb10f -->
## api/auth/users/exportCertificate

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/exportCertificate" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/exportCertificate",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/exportCertificate`


<!-- END_dc5b44ecf8c01e2dee9c8ba57bbfb10f -->

<!-- START_2ea6520785b0a02be3adcd0da3e7be7f -->
## api/auth/users/exportApiKey

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/exportApiKey" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/exportApiKey",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/exportApiKey`


<!-- END_2ea6520785b0a02be3adcd0da3e7be7f -->

<!-- START_a0b6500c1064c7ed278aecca924eb3b8 -->
## api/auth/users/exportAll

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/exportAll" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/exportAll",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/exportAll`


<!-- END_a0b6500c1064c7ed278aecca924eb3b8 -->

<!-- START_5376e0b1bea6c9d7c5fe053b4766aa26 -->
## api/auth/users/updateRepresentative

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/updateRepresentative" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/updateRepresentative",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/updateRepresentative`


<!-- END_5376e0b1bea6c9d7c5fe053b4766aa26 -->

<!-- START_57e16a92bfaf19871f40f9a6473de218 -->
## api/auth/users/consultCompany

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/consultCompany" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/consultCompany",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/consultCompany`


<!-- END_57e16a92bfaf19871f40f9a6473de218 -->

<!-- START_5ea4d2394c56fde3c5fd1bea7e22bbca -->
## api/auth/users/exportPDFintegration

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/exportPDFintegration" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/exportPDFintegration",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/exportPDFintegration`


<!-- END_5ea4d2394c56fde3c5fd1bea7e22bbca -->

<!-- START_5e63865db81e5ee4ea0aac5c0fd49420 -->
## api/auth/users/getUserById

> Example request:

```bash
curl -X POST "http://localhost/api/auth/users/getUserById" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/users/getUserById",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/users/getUserById`


<!-- END_5e63865db81e5ee4ea0aac5c0fd49420 -->

<!-- START_9ffc2451af124a0d8fc1003c99a5ab26 -->
## api/auth/cron

> Example request:

```bash
curl -X POST "http://localhost/api/auth/cron" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/cron",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/cron`


<!-- END_9ffc2451af124a0d8fc1003c99a5ab26 -->

<!-- START_2bbc851fd395948d86de46ba909cdcb1 -->
## api/auth/profiles/create

> Example request:

```bash
curl -X POST "http://localhost/api/auth/profiles/create" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/profiles/create",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/profiles/create`


<!-- END_2bbc851fd395948d86de46ba909cdcb1 -->

<!-- START_8a8562faeb67c75622f31a2113e05dea -->
## api/auth/profiles/update

> Example request:

```bash
curl -X POST "http://localhost/api/auth/profiles/update" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/profiles/update",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/profiles/update`


<!-- END_8a8562faeb67c75622f31a2113e05dea -->

<!-- START_23f23964e05f09e2ed8c18a8cb5d0a86 -->
## api/auth/profiles/delete

> Example request:

```bash
curl -X POST "http://localhost/api/auth/profiles/delete" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/profiles/delete",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/profiles/delete`


<!-- END_23f23964e05f09e2ed8c18a8cb5d0a86 -->

<!-- START_290d4b1c210b36b9e7d445313c8c3303 -->
## api/auth/profiles/{idProfile}

> Example request:

```bash
curl -X GET "http://localhost/api/auth/profiles/{idProfile}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/profiles/{idProfile}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "error": "Not authorized."
}
```

### HTTP Request
`GET api/auth/profiles/{idProfile}`

`HEAD api/auth/profiles/{idProfile}`


<!-- END_290d4b1c210b36b9e7d445313c8c3303 -->

<!-- START_dbab3fde1e5609de1290bacb2486bbef -->
## api/auth/profilesCompany

> Example request:

```bash
curl -X POST "http://localhost/api/auth/profilesCompany" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/profilesCompany",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/profilesCompany`


<!-- END_dbab3fde1e5609de1290bacb2486bbef -->

<!-- START_e73424a10eab6ce1402fb37468bf1e2f -->
## api/auth/profiles/search

> Example request:

```bash
curl -X POST "http://localhost/api/auth/profiles/search" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/profiles/search",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/profiles/search`


<!-- END_e73424a10eab6ce1402fb37468bf1e2f -->

<!-- START_4ef5e004eca4485d485cf577466c15a0 -->
## api/auth/company

> Example request:

```bash
curl -X POST "http://localhost/api/auth/company" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/company",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/company`


<!-- END_4ef5e004eca4485d485cf577466c15a0 -->

<!-- START_07a421d39fee43e76821cea2a004f9a6 -->
## api/auth/companyTerminal

> Example request:

```bash
curl -X POST "http://localhost/api/auth/companyTerminal" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/companyTerminal",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/companyTerminal`


<!-- END_07a421d39fee43e76821cea2a004f9a6 -->

<!-- START_11bd9d67e2520bd8e3b36987539d749d -->
## api/auth/companyAutopartista

> Example request:

```bash
curl -X POST "http://localhost/api/auth/companyAutopartista" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/companyAutopartista",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/companyAutopartista`


<!-- END_11bd9d67e2520bd8e3b36987539d749d -->

<!-- START_f6231b8aecb5cf12235e163c6c588e78 -->
## api/auth/companyId

> Example request:

```bash
curl -X POST "http://localhost/api/auth/companyId" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/companyId",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/companyId`


<!-- END_f6231b8aecb5cf12235e163c6c588e78 -->

<!-- START_dc3f13ac3816330dc5d3b62817e3b1d4 -->
## api/auth/company/create

> Example request:

```bash
curl -X POST "http://localhost/api/auth/company/create" \
-H "Accept: application/json" \
    -d "businessName"="fugit" \
    -d "CUIT"="fugit" \
    -d "idTypeCompanyKf"="fugit" \
    -d "idUserAddKf"="fugit" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/company/create",
    "method": "POST",
    "data": {
        "businessName": "fugit",
        "CUIT": "fugit",
        "idTypeCompanyKf": "fugit",
        "idUserAddKf": "fugit"
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/company/create`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    businessName | string |  required  | Maximum: `124`
    CUIT | string |  required  | Maximum: `124`
    idTypeCompanyKf | string |  required  | 
    idUserAddKf | string |  required  | 

<!-- END_dc3f13ac3816330dc5d3b62817e3b1d4 -->

<!-- START_d9dd6c7e90ea7b21380ae23620a5c8e5 -->
## api/auth/company/update

> Example request:

```bash
curl -X POST "http://localhost/api/auth/company/update" \
-H "Accept: application/json" \
    -d "idCompany"="79" \
    -d "businessName"="enim" \
    -d "CUIT"="enim" \
    -d "idTypeCompanyKf"="enim" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/company/update",
    "method": "POST",
    "data": {
        "idCompany": 79,
        "businessName": "enim",
        "CUIT": "enim",
        "idTypeCompanyKf": "enim"
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/company/update`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    idCompany | numeric |  required  | 
    businessName | string |  required  | 
    CUIT | string |  required  | 
    idTypeCompanyKf | string |  required  | 

<!-- END_d9dd6c7e90ea7b21380ae23620a5c8e5 -->

<!-- START_2e0ffcc27a898773631f8a7a020fe85d -->
## api/auth/company/delete/{idCompany}

> Example request:

```bash
curl -X DELETE "http://localhost/api/auth/company/delete/{idCompany}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/company/delete/{idCompany}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/auth/company/delete/{idCompany}`


<!-- END_2e0ffcc27a898773631f8a7a020fe85d -->

<!-- START_1b1884fdf6ce67b0078e7c860fcaf8f7 -->
## api/auth/company/{idCompany}

> Example request:

```bash
curl -X GET "http://localhost/api/auth/company/{idCompany}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/company/{idCompany}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "error": "Not authorized."
}
```

### HTTP Request
`GET api/auth/company/{idCompany}`

`HEAD api/auth/company/{idCompany}`


<!-- END_1b1884fdf6ce67b0078e7c860fcaf8f7 -->

<!-- START_7b59e92913d08b4d418d0c29bb450c58 -->
## api/auth/company/search

> Example request:

```bash
curl -X POST "http://localhost/api/auth/company/search" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/company/search",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/company/search`


<!-- END_7b59e92913d08b4d418d0c29bb450c58 -->

<!-- START_70872c77ac6e96ae53266b4ab2556163 -->
## api/auth/company/terms

> Example request:

```bash
curl -X POST "http://localhost/api/auth/company/terms" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/company/terms",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/company/terms`


<!-- END_70872c77ac6e96ae53266b4ab2556163 -->

<!-- START_7b531c38369ba64e1b34b89cb6443923 -->
## api/auth/company/consultTerms

> Example request:

```bash
curl -X POST "http://localhost/api/auth/company/consultTerms" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/company/consultTerms",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/company/consultTerms`


<!-- END_7b531c38369ba64e1b34b89cb6443923 -->

<!-- START_61b89cac0c29e452c1032c6d25e5f2a7 -->
## api/auth/type

> Example request:

```bash
curl -X GET "http://localhost/api/auth/type" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/type",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "error": "Not authorized."
}
```

### HTTP Request
`GET api/auth/type`

`HEAD api/auth/type`


<!-- END_61b89cac0c29e452c1032c6d25e5f2a7 -->

<!-- START_ee283144740723dc8a19ca25148243ea -->
## api/auth/supplies/create

> Example request:

```bash
curl -X POST "http://localhost/api/auth/supplies/create" \
-H "Accept: application/json" \
    -d "codeSupplies"="quibusdam" \
    -d "descriptionSupplies"="quibusdam" \
    -d "TariffPosition"="quibusdam" \
    -d "idCompanyKf"="30474179" \
    -d "idUserAddKf"="30474179" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/supplies/create",
    "method": "POST",
    "data": {
        "codeSupplies": "quibusdam",
        "descriptionSupplies": "quibusdam",
        "TariffPosition": "quibusdam",
        "idCompanyKf": 30474179,
        "idUserAddKf": 30474179
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/supplies/create`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    codeSupplies | string |  required  | Maximum: `124`
    descriptionSupplies | string |  required  | Maximum: `124`
    TariffPosition | string |  required  | Maximum: `124`
    idCompanyKf | numeric |  required  | 
    idUserAddKf | numeric |  required  | 

<!-- END_ee283144740723dc8a19ca25148243ea -->

<!-- START_4cb04ef84265883eb95f71fdcf984ca4 -->
## api/auth/supplies/update

> Example request:

```bash
curl -X POST "http://localhost/api/auth/supplies/update" \
-H "Accept: application/json" \
    -d "idSupplies"="47" \
    -d "codeSupplies"="eius" \
    -d "descriptionSupplies"="eius" \
    -d "TariffPosition"="eius" \
    -d "idCompanyKf"="47" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/supplies/update",
    "method": "POST",
    "data": {
        "idSupplies": 47,
        "codeSupplies": "eius",
        "descriptionSupplies": "eius",
        "TariffPosition": "eius",
        "idCompanyKf": 47
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/supplies/update`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    idSupplies | numeric |  required  | 
    codeSupplies | string |  required  | Maximum: `124`
    descriptionSupplies | string |  required  | Maximum: `124`
    TariffPosition | string |  required  | Maximum: `124`
    idCompanyKf | numeric |  required  | 

<!-- END_4cb04ef84265883eb95f71fdcf984ca4 -->

<!-- START_44055cb3abc7722fd93d4513e30e6c2f -->
## api/auth/supplies/delete/{idSupplies}

> Example request:

```bash
curl -X DELETE "http://localhost/api/auth/supplies/delete/{idSupplies}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/supplies/delete/{idSupplies}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/auth/supplies/delete/{idSupplies}`


<!-- END_44055cb3abc7722fd93d4513e30e6c2f -->

<!-- START_6632fb1bf61d4503eb666fbf1dae5520 -->
## api/auth/supplies/{idSupplies}

> Example request:

```bash
curl -X GET "http://localhost/api/auth/supplies/{idSupplies}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/supplies/{idSupplies}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "error": "Not authorized."
}
```

### HTTP Request
`GET api/auth/supplies/{idSupplies}`

`HEAD api/auth/supplies/{idSupplies}`


<!-- END_6632fb1bf61d4503eb666fbf1dae5520 -->

<!-- START_f291aa5af5a6cb1062b4693f3a2df20d -->
## api/auth/import

> Example request:

```bash
curl -X POST "http://localhost/api/auth/import" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/import",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/import`


<!-- END_f291aa5af5a6cb1062b4693f3a2df20d -->

<!-- START_e352a493162a3f2449c22dbddd14d3c1 -->
## api/auth/pdf

> Example request:

```bash
curl -X POST "http://localhost/api/auth/pdf" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/pdf",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/pdf`


<!-- END_e352a493162a3f2449c22dbddd14d3c1 -->

<!-- START_c7cd539bdeededafaac2184779457c47 -->
## api/auth/modules

> Example request:

```bash
curl -X POST "http://localhost/api/auth/modules" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/modules",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/modules`


<!-- END_c7cd539bdeededafaac2184779457c47 -->

<!-- START_5db3ec36cd9573af88c8a8aad34cbb23 -->
## api/auth/modules/create

> Example request:

```bash
curl -X POST "http://localhost/api/auth/modules/create" \
-H "Accept: application/json" \
    -d "urlModule"="ut" \
    -d "imageModule"="ut" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/modules/create",
    "method": "POST",
    "data": {
        "urlModule": "ut",
        "imageModule": "ut"
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/modules/create`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    urlModule | string |  required  | Maximum: `124`
    imageModule | string |  required  | 

<!-- END_5db3ec36cd9573af88c8a8aad34cbb23 -->

<!-- START_b064eb9db02040f264cce2311327ec0a -->
## api/auth/modules/update

> Example request:

```bash
curl -X POST "http://localhost/api/auth/modules/update" \
-H "Accept: application/json" \
    -d "urlModule"="quia" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/modules/update",
    "method": "POST",
    "data": {
        "urlModule": "quia"
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/modules/update`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    urlModule | string |  required  | Maximum: `124`

<!-- END_b064eb9db02040f264cce2311327ec0a -->

<!-- START_5fdef67d26901c026b2726e49628b464 -->
## api/auth/modules/delete/{idModule}

> Example request:

```bash
curl -X DELETE "http://localhost/api/auth/modules/delete/{idModule}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/modules/delete/{idModule}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/auth/modules/delete/{idModule}`


<!-- END_5fdef67d26901c026b2726e49628b464 -->

<!-- START_1a86d67dec3789f2c96bcfbf76d9cc6c -->
## api/auth/modules/{idModule}

> Example request:

```bash
curl -X GET "http://localhost/api/auth/modules/{idModule}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/modules/{idModule}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "error": "Not authorized."
}
```

### HTTP Request
`GET api/auth/modules/{idModule}`

`HEAD api/auth/modules/{idModule}`


<!-- END_1a86d67dec3789f2c96bcfbf76d9cc6c -->

<!-- START_382d1c9022693f51ca8915ae36307de6 -->
## api/auth/ProfileModules/create

> Example request:

```bash
curl -X POST "http://localhost/api/auth/ProfileModules/create" \
-H "Accept: application/json" \
    -d "idModuleKf"="197" \
    -d "idProfileKf"="197" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/ProfileModules/create",
    "method": "POST",
    "data": {
        "idModuleKf": 197,
        "idProfileKf": 197
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/ProfileModules/create`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    idModuleKf | numeric |  required  | 
    idProfileKf | numeric |  required  | 

<!-- END_382d1c9022693f51ca8915ae36307de6 -->

<!-- START_3270f93d6c00c708c301a32067754ec2 -->
## api/auth/ProfileModules/update

> Example request:

```bash
curl -X POST "http://localhost/api/auth/ProfileModules/update" \
-H "Accept: application/json" \
    -d "idModuleKf"="molestiae" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/ProfileModules/update",
    "method": "POST",
    "data": {
        "idModuleKf": "molestiae"
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/ProfileModules/update`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    idModuleKf | string |  required  | 

<!-- END_3270f93d6c00c708c301a32067754ec2 -->

<!-- START_b48d7db44995a751fab3e3cddf470d91 -->
## api/auth/ProfileModules/delete/{idModule}

> Example request:

```bash
curl -X DELETE "http://localhost/api/auth/ProfileModules/delete/{idModule}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/ProfileModules/delete/{idModule}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/auth/ProfileModules/delete/{idModule}`


<!-- END_b48d7db44995a751fab3e3cddf470d91 -->

<!-- START_b4ac9df0a8dcadf740a718328847fe28 -->
## api/auth/ProfileModules/{idProfileModule}

> Example request:

```bash
curl -X GET "http://localhost/api/auth/ProfileModules/{idProfileModule}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/ProfileModules/{idProfileModule}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "error": "Not authorized."
}
```

### HTTP Request
`GET api/auth/ProfileModules/{idProfileModule}`

`HEAD api/auth/ProfileModules/{idProfileModule}`


<!-- END_b4ac9df0a8dcadf740a718328847fe28 -->

<!-- START_69f95476893f6194310a2177572228aa -->
## api/auth/UnidadMedida

> Example request:

```bash
curl -X GET "http://localhost/api/auth/UnidadMedida" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/UnidadMedida",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "error": "Not authorized."
}
```

### HTTP Request
`GET api/auth/UnidadMedida`

`HEAD api/auth/UnidadMedida`


<!-- END_69f95476893f6194310a2177572228aa -->

<!-- START_b7481d05e533bece55bb3ff298b3969d -->
## api/auth/partlist

> Example request:

```bash
curl -X POST "http://localhost/api/auth/partlist" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/partlist",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/partlist`


<!-- END_b7481d05e533bece55bb3ff298b3969d -->

<!-- START_c815d1af70efc2c4af97e4ab80faadc9 -->
## api/auth/partlistNumber

> Example request:

```bash
curl -X POST "http://localhost/api/auth/partlistNumber" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/partlistNumber",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/partlistNumber`


<!-- END_c815d1af70efc2c4af97e4ab80faadc9 -->

<!-- START_4d360ebaa62943499445bc9119b3cba1 -->
## api/auth/partlist/create

> Example request:

```bash
curl -X POST "http://localhost/api/auth/partlist/create" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/partlist/create",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/partlist/create`


<!-- END_4d360ebaa62943499445bc9119b3cba1 -->

<!-- START_7fed4c42f24a457070bc599f92c648b6 -->
## api/auth/partlist/export

> Example request:

```bash
curl -X POST "http://localhost/api/auth/partlist/export" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/partlist/export",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/partlist/export`


<!-- END_7fed4c42f24a457070bc599f92c648b6 -->

<!-- START_21a8237ab6d6875c031e41f08280f6f1 -->
## api/auth/partlist/delete

> Example request:

```bash
curl -X POST "http://localhost/api/auth/partlist/delete" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/partlist/delete",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/partlist/delete`


<!-- END_21a8237ab6d6875c031e41f08280f6f1 -->

<!-- START_120979e7c4d5f99038ad0e049fc7f9e5 -->
## api/auth/partlist/{idPartListHeader}

> Example request:

```bash
curl -X GET "http://localhost/api/auth/partlist/{idPartListHeader}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/partlist/{idPartListHeader}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "message": "Too Many Attempts.",
    "exception": "Illuminate\\Http\\Exceptions\\ThrottleRequestsException",
    "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
    "line": 124,
    "trace": [
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 53,
            "function": "buildException",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 682,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 657,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 623,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 612,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 176,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 30,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\fideloper\\proxy\\src\\TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode.php",
            "line": 62,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\barryvdh\\laravel-cors\\src\\HandlePreflight.php",
            "line": 29,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Barryvdh\\Cors\\HandlePreflight",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 151,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 116,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Generators\\LaravelGenerator.php",
            "line": 140,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Generators\\AbstractGenerator.php",
            "line": 137,
            "function": "callRoute",
            "class": "Oxycoder\\ApiDoc\\Generators\\LaravelGenerator",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Generators\\LaravelGenerator.php",
            "line": 80,
            "function": "getRouteResponse",
            "class": "Oxycoder\\ApiDoc\\Generators\\AbstractGenerator",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation.php",
            "line": 272,
            "function": "processRoute",
            "class": "Oxycoder\\ApiDoc\\Generators\\LaravelGenerator",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation.php",
            "line": 86,
            "function": "processLaravelRoutes",
            "class": "Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 32,
            "function": "call_user_func_array"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 90,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 34,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php",
            "line": 576,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 183,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Command\\Command.php",
            "line": 255,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 170,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Application.php",
            "line": 921,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Application.php",
            "line": 273,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Application.php",
            "line": 149,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php",
            "line": 90,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php",
            "line": 133,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```

### HTTP Request
`GET api/auth/partlist/{idPartListHeader}`

`HEAD api/auth/partlist/{idPartListHeader}`


<!-- END_120979e7c4d5f99038ad0e049fc7f9e5 -->

<!-- START_d5df418b75addae56cf77a17dd52ba87 -->
## api/auth/partlist/search

> Example request:

```bash
curl -X POST "http://localhost/api/auth/partlist/search" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/partlist/search",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/partlist/search`


<!-- END_d5df418b75addae56cf77a17dd52ba87 -->

<!-- START_88de3ac86b3938bebf313c85bf452813 -->
## api/auth/partlist/ripes

> Example request:

```bash
curl -X POST "http://localhost/api/auth/partlist/ripes" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/partlist/ripes",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/partlist/ripes`


<!-- END_88de3ac86b3938bebf313c85bf452813 -->

<!-- START_98a805818ec6c9982e157647fa96da35 -->
## api/auth/partlist/ripes/search

> Example request:

```bash
curl -X POST "http://localhost/api/auth/partlist/ripes/search" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/partlist/ripes/search",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/partlist/ripes/search`


<!-- END_98a805818ec6c9982e157647fa96da35 -->

<!-- START_ac36acd4bda8b9f7920f5ee6d9407511 -->
## api/auth/partlist/ripes/export

> Example request:

```bash
curl -X POST "http://localhost/api/auth/partlist/ripes/export" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/partlist/ripes/export",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/partlist/ripes/export`


<!-- END_ac36acd4bda8b9f7920f5ee6d9407511 -->

<!-- START_922460ccc01b033ecd73989dc02add22 -->
## api/auth/partlist/ripes/exportById

> Example request:

```bash
curl -X POST "http://localhost/api/auth/partlist/ripes/exportById" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/partlist/ripes/exportById",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/partlist/ripes/exportById`


<!-- END_922460ccc01b033ecd73989dc02add22 -->

<!-- START_1825ee44b7a1f5b0911b99a78ec920f5 -->
## api/auth/remitos

> Example request:

```bash
curl -X POST "http://localhost/api/auth/remitos" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/remitos",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/remitos`


<!-- END_1825ee44b7a1f5b0911b99a78ec920f5 -->

<!-- START_20e7cb475bceb0392d0aeaaa56f8853b -->
## api/auth/remitosNumber

> Example request:

```bash
curl -X POST "http://localhost/api/auth/remitosNumber" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/remitosNumber",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/remitosNumber`


<!-- END_20e7cb475bceb0392d0aeaaa56f8853b -->

<!-- START_896a93ae343af49fa72be0da76329242 -->
## api/auth/remitos/create

> Example request:

```bash
curl -X POST "http://localhost/api/auth/remitos/create" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/remitos/create",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/remitos/create`


<!-- END_896a93ae343af49fa72be0da76329242 -->

<!-- START_a615eacd820f8422a5f99c4f94f28bc2 -->
## api/auth/remitos/export

> Example request:

```bash
curl -X POST "http://localhost/api/auth/remitos/export" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/remitos/export",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/remitos/export`


<!-- END_a615eacd820f8422a5f99c4f94f28bc2 -->

<!-- START_d04a4de5c3b5e47d6e2eff9e693c044f -->
## api/auth/remitos/delete/{idRemitosHeader}

> Example request:

```bash
curl -X DELETE "http://localhost/api/auth/remitos/delete/{idRemitosHeader}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/remitos/delete/{idRemitosHeader}",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/auth/remitos/delete/{idRemitosHeader}`


<!-- END_d04a4de5c3b5e47d6e2eff9e693c044f -->

<!-- START_f54464b5778c59619e1195c9ad9cbda3 -->
## api/auth/remitos/{idRemitosHeader}

> Example request:

```bash
curl -X GET "http://localhost/api/auth/remitos/{idRemitosHeader}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/remitos/{idRemitosHeader}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "message": "Too Many Attempts.",
    "exception": "Illuminate\\Http\\Exceptions\\ThrottleRequestsException",
    "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
    "line": 124,
    "trace": [
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 53,
            "function": "buildException",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 682,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 657,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 623,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 612,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 176,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 30,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\fideloper\\proxy\\src\\TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode.php",
            "line": 62,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\barryvdh\\laravel-cors\\src\\HandlePreflight.php",
            "line": 29,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Barryvdh\\Cors\\HandlePreflight",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 151,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 116,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Generators\\LaravelGenerator.php",
            "line": 140,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Generators\\AbstractGenerator.php",
            "line": 137,
            "function": "callRoute",
            "class": "Oxycoder\\ApiDoc\\Generators\\LaravelGenerator",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Generators\\LaravelGenerator.php",
            "line": 80,
            "function": "getRouteResponse",
            "class": "Oxycoder\\ApiDoc\\Generators\\AbstractGenerator",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation.php",
            "line": 272,
            "function": "processRoute",
            "class": "Oxycoder\\ApiDoc\\Generators\\LaravelGenerator",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation.php",
            "line": 86,
            "function": "processLaravelRoutes",
            "class": "Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 32,
            "function": "call_user_func_array"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 90,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 34,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php",
            "line": 576,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 183,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Command\\Command.php",
            "line": 255,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 170,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Application.php",
            "line": 921,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Application.php",
            "line": 273,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Application.php",
            "line": 149,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php",
            "line": 90,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php",
            "line": 133,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```

### HTTP Request
`GET api/auth/remitos/{idRemitosHeader}`

`HEAD api/auth/remitos/{idRemitosHeader}`


<!-- END_f54464b5778c59619e1195c9ad9cbda3 -->

<!-- START_1433573e786ffa4f70473c248170187d -->
## api/auth/remitos/update

> Example request:

```bash
curl -X POST "http://localhost/api/auth/remitos/update" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/remitos/update",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/remitos/update`


<!-- END_1433573e786ffa4f70473c248170187d -->

<!-- START_8badc58927f29cd3b067891a58691f99 -->
## api/auth/remitos/updateBody

> Example request:

```bash
curl -X POST "http://localhost/api/auth/remitos/updateBody" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/remitos/updateBody",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/remitos/updateBody`


<!-- END_8badc58927f29cd3b067891a58691f99 -->

<!-- START_eb41f676238dc3b70bacb749c2051f2b -->
## api/auth/remitos/updateStatus

> Example request:

```bash
curl -X POST "http://localhost/api/auth/remitos/updateStatus" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/remitos/updateStatus",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/remitos/updateStatus`


<!-- END_eb41f676238dc3b70bacb749c2051f2b -->

<!-- START_16dc16f145b11bff42bf6427413c31a0 -->
## api/auth/remitos/search

> Example request:

```bash
curl -X POST "http://localhost/api/auth/remitos/search" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/remitos/search",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/remitos/search`


<!-- END_16dc16f145b11bff42bf6427413c31a0 -->

<!-- START_e2976984a9b3fa05c167d16176ec892d -->
## api/auth/CTIT

> Example request:

```bash
curl -X POST "http://localhost/api/auth/CTIT" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/CTIT",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/CTIT`


<!-- END_e2976984a9b3fa05c167d16176ec892d -->

<!-- START_1433eef4d95d763b70aaae8285921ef8 -->
## api/auth/CTIT/CTIT

> Example request:

```bash
curl -X POST "http://localhost/api/auth/CTIT/CTIT" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/CTIT/CTIT",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/CTIT/CTIT`


<!-- END_1433eef4d95d763b70aaae8285921ef8 -->

<!-- START_049c9c8690d02507424dede7b81f453b -->
## api/auth/CTIT/idCompany

> Example request:

```bash
curl -X POST "http://localhost/api/auth/CTIT/idCompany" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/CTIT/idCompany",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/CTIT/idCompany`


<!-- END_049c9c8690d02507424dede7b81f453b -->

<!-- START_ebd5e6d5d7b5061af71a700df67e401a -->
## api/auth/CTIT/typeCompany

> Example request:

```bash
curl -X POST "http://localhost/api/auth/CTIT/typeCompany" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/CTIT/typeCompany",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/CTIT/typeCompany`


<!-- END_ebd5e6d5d7b5061af71a700df67e401a -->

<!-- START_78d90c39cf382d5f15456b8c5c886a3b -->
## api/auth/CTIT/create

> Example request:

```bash
curl -X POST "http://localhost/api/auth/CTIT/create" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/CTIT/create",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/CTIT/create`


<!-- END_78d90c39cf382d5f15456b8c5c886a3b -->

<!-- START_89355a616240b12e7b8134ce6fc06cac -->
## api/auth/CTIT/delete

> Example request:

```bash
curl -X POST "http://localhost/api/auth/CTIT/delete" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/CTIT/delete",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/CTIT/delete`


<!-- END_89355a616240b12e7b8134ce6fc06cac -->

<!-- START_88c2288f04e3718a3a47616e229d4ac7 -->
## api/auth/CTIT/search

> Example request:

```bash
curl -X POST "http://localhost/api/auth/CTIT/search" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/CTIT/search",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/CTIT/search`


<!-- END_88c2288f04e3718a3a47616e229d4ac7 -->

<!-- START_a89005328f5141817b1dcec46f0a462a -->
## api/auth/CTIT/xmlCTIT

> Example request:

```bash
curl -X POST "http://localhost/api/auth/CTIT/xmlCTIT" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/CTIT/xmlCTIT",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/CTIT/xmlCTIT`


<!-- END_a89005328f5141817b1dcec46f0a462a -->

<!-- START_bb930b4bebb3835527fd65b2fef0773e -->
## api/auth/logs

> Example request:

```bash
curl -X POST "http://localhost/api/auth/logs" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/logs",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/logs`


<!-- END_bb930b4bebb3835527fd65b2fef0773e -->

<!-- START_ce8e2492077c7460cb20db60b3839f48 -->
## api/auth/searchlog

> Example request:

```bash
curl -X POST "http://localhost/api/auth/searchlog" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/searchlog",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/searchlog`


<!-- END_ce8e2492077c7460cb20db60b3839f48 -->

<!-- START_bf13c170072ca4f50e8f07cf1802fea0 -->
## api/auth/ip

> Example request:

```bash
curl -X POST "http://localhost/api/auth/ip" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/ip",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/ip`


<!-- END_bf13c170072ca4f50e8f07cf1802fea0 -->

<!-- START_42312c9d9738325a5b936aee1a41a169 -->
## api/auth/ip/create

> Example request:

```bash
curl -X POST "http://localhost/api/auth/ip/create" \
-H "Accept: application/json" \
    -d "ip"="169.140.87.185" \
    -d "idCompanyKf"="et" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/ip/create",
    "method": "POST",
    "data": {
        "ip": "169.140.87.185",
        "idCompanyKf": "et"
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/ip/create`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    ip | ip |  required  | 
    idCompanyKf | string |  required  | 

<!-- END_42312c9d9738325a5b936aee1a41a169 -->

<!-- START_ff5fc472a27ddf9aea79d391f5d7346e -->
## api/auth/ip/certificate

> Example request:

```bash
curl -X POST "http://localhost/api/auth/ip/certificate" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/ip/certificate",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/ip/certificate`


<!-- END_ff5fc472a27ddf9aea79d391f5d7346e -->

<!-- START_b5ddf9219a41ca199256ff97c968b6ce -->
## api/auth/ip/certificatetwo

> Example request:

```bash
curl -X POST "http://localhost/api/auth/ip/certificatetwo" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/ip/certificatetwo",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/ip/certificatetwo`


<!-- END_b5ddf9219a41ca199256ff97c968b6ce -->

<!-- START_5d303822f8ad303ed0793497dfea7737 -->
## api/auth/alerts

> Example request:

```bash
curl -X POST "http://localhost/api/auth/alerts" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/alerts",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/alerts`


<!-- END_5d303822f8ad303ed0793497dfea7737 -->

<!-- START_6b1a8ba1e21be559366a6b07c7156f95 -->
## api/auth/alerts/create

> Example request:

```bash
curl -X POST "http://localhost/api/auth/alerts/create" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/alerts/create",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/alerts/create`


<!-- END_6b1a8ba1e21be559366a6b07c7156f95 -->

<!-- START_5b2a6f192a1def38931b7a0d09d4fd6d -->
## api/auth/alerts/update

> Example request:

```bash
curl -X POST "http://localhost/api/auth/alerts/update" \
-H "Accept: application/json" \
    -d "idAlert"="973" \

```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/alerts/update",
    "method": "POST",
    "data": {
        "idAlert": 973
},
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/alerts/update`

#### Parameters

Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    idAlert | numeric |  required  | 

<!-- END_5b2a6f192a1def38931b7a0d09d4fd6d -->

<!-- START_0acb8bdee43c557a7bb2becd2c8de97d -->
## api/auth/alerts/delete

> Example request:

```bash
curl -X POST "http://localhost/api/auth/alerts/delete" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/alerts/delete",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/alerts/delete`


<!-- END_0acb8bdee43c557a7bb2becd2c8de97d -->

<!-- START_8ed1546b7c3a60b7ec93c2ae5d2c752d -->
## api/auth/alerts/search

> Example request:

```bash
curl -X POST "http://localhost/api/auth/alerts/search" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/alerts/search",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/alerts/search`


<!-- END_8ed1546b7c3a60b7ec93c2ae5d2c752d -->

<!-- START_c85a288e5aee03720483b206f552882d -->
## api/auth/report

> Example request:

```bash
curl -X POST "http://localhost/api/auth/report" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/report",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/report`


<!-- END_c85a288e5aee03720483b206f552882d -->

<!-- START_5e5f086934b3b784664f3ec8939ab12d -->
## api/auth/options

> Example request:

```bash
curl -X POST "http://localhost/api/auth/options" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/options",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/options`


<!-- END_5e5f086934b3b784664f3ec8939ab12d -->

<!-- START_94b98a93a7ba7c09805abdc564ed9fe6 -->
## api/auth/report/saldo

> Example request:

```bash
curl -X POST "http://localhost/api/auth/report/saldo" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/report/saldo",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/report/saldo`


<!-- END_94b98a93a7ba7c09805abdc564ed9fe6 -->

<!-- START_bebddc881c6a24ba29b152bd880ecf45 -->
## api/auth/report/vencimiento

> Example request:

```bash
curl -X POST "http://localhost/api/auth/report/vencimiento" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/report/vencimiento",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/report/vencimiento`


<!-- END_bebddc881c6a24ba29b152bd880ecf45 -->

<!-- START_b7dfd84cd70a7cfe655f69c2a4300ec4 -->
## api/auth/report/remito

> Example request:

```bash
curl -X POST "http://localhost/api/auth/report/remito" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/report/remito",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/report/remito`


<!-- END_b7dfd84cd70a7cfe655f69c2a4300ec4 -->

<!-- START_5bc747ff9d180cd54fd9650c4f926f65 -->
## api/auth/report/cuenta

> Example request:

```bash
curl -X POST "http://localhost/api/auth/report/cuenta" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/report/cuenta",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/report/cuenta`


<!-- END_5bc747ff9d180cd54fd9650c4f926f65 -->

<!-- START_3be145f2a1c5e1755b77bb75cffa8fad -->
## api/auth/CurrentAccount/get

> Example request:

```bash
curl -X POST "http://localhost/api/auth/CurrentAccount/get" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/auth/CurrentAccount/get",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/auth/CurrentAccount/get`


<!-- END_3be145f2a1c5e1755b77bb75cffa8fad -->

<!-- START_f4a699913e0d22f200741709f86aae2f -->
## api/v2/conexion/test

> Example request:

```bash
curl -X POST "http://localhost/api/v2/conexion/test" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v2/conexion/test",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v2/conexion/test`


<!-- END_f4a699913e0d22f200741709f86aae2f -->

<!-- START_ba4786d23ca1603d620d1223ff936ace -->
## api/v2/remitos/create

> Example request:

```bash
curl -X POST "http://localhost/api/v2/remitos/create" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v2/remitos/create",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v2/remitos/create`


<!-- END_ba4786d23ca1603d620d1223ff936ace -->

<!-- START_995344eda8f4e37844ded1c75d741d7b -->
## api/v2/remitos/delete

> Example request:

```bash
curl -X POST "http://localhost/api/v2/remitos/delete" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v2/remitos/delete",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v2/remitos/delete`


<!-- END_995344eda8f4e37844ded1c75d741d7b -->

<!-- START_1b7184f055f50d6798280180d5efc7fc -->
## api/v2/remitos/remitosNumber

> Example request:

```bash
curl -X POST "http://localhost/api/v2/remitos/remitosNumber" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v2/remitos/remitosNumber",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v2/remitos/remitosNumber`


<!-- END_1b7184f055f50d6798280180d5efc7fc -->

<!-- START_d1914fb36bf4b25e69865823a34b70b4 -->
## api/v2/remitos

> Example request:

```bash
curl -X POST "http://localhost/api/v2/remitos" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v2/remitos",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v2/remitos`


<!-- END_d1914fb36bf4b25e69865823a34b70b4 -->

<!-- START_9c5d75b6d71f612d325f4d7a4a505e94 -->
## api/v2/ripe/create

> Example request:

```bash
curl -X POST "http://localhost/api/v2/ripe/create" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v2/ripe/create",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v2/ripe/create`


<!-- END_9c5d75b6d71f612d325f4d7a4a505e94 -->

<!-- START_2fbc65d01ed5192ddcea608e720a3964 -->
## api/v2/ripe/delete

> Example request:

```bash
curl -X POST "http://localhost/api/v2/ripe/delete" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v2/ripe/delete",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v2/ripe/delete`


<!-- END_2fbc65d01ed5192ddcea608e720a3964 -->

<!-- START_24577c6a523d0601000ccd960725d37d -->
## api/v2/ripe/ripeView

> Example request:

```bash
curl -X POST "http://localhost/api/v2/ripe/ripeView" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v2/ripe/ripeView",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v2/ripe/ripeView`


<!-- END_24577c6a523d0601000ccd960725d37d -->

<!-- START_4aa351b12494d8cabf563cddafc32f11 -->
## api/v2/ripe

> Example request:

```bash
curl -X POST "http://localhost/api/v2/ripe" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v2/ripe",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/v2/ripe`


<!-- END_4aa351b12494d8cabf563cddafc32f11 -->

<!-- START_6b0d21a7504b9c6c36a4d97c4d62e7bc -->
## api/v2/report

> Example request:

```bash
curl -X GET "http://localhost/api/v2/report" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api/v2/report",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "message": "Too Many Attempts.",
    "exception": "Illuminate\\Http\\Exceptions\\ThrottleRequestsException",
    "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
    "line": 124,
    "trace": [
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 53,
            "function": "buildException",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 682,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 657,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 623,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 612,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 176,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 30,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\fideloper\\proxy\\src\\TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode.php",
            "line": 62,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\barryvdh\\laravel-cors\\src\\HandlePreflight.php",
            "line": 29,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 163,
            "function": "handle",
            "class": "Barryvdh\\Cors\\HandlePreflight",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 151,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 116,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Generators\\LaravelGenerator.php",
            "line": 140,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Generators\\AbstractGenerator.php",
            "line": 137,
            "function": "callRoute",
            "class": "Oxycoder\\ApiDoc\\Generators\\LaravelGenerator",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Generators\\LaravelGenerator.php",
            "line": 80,
            "function": "getRouteResponse",
            "class": "Oxycoder\\ApiDoc\\Generators\\AbstractGenerator",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation.php",
            "line": 272,
            "function": "processRoute",
            "class": "Oxycoder\\ApiDoc\\Generators\\LaravelGenerator",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\oxycoder\\laravel-apidoc-generator\\src\\Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation.php",
            "line": 86,
            "function": "processLaravelRoutes",
            "class": "Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Oxycoder\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 32,
            "function": "call_user_func_array"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 90,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 34,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php",
            "line": 576,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 183,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Command\\Command.php",
            "line": 255,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 170,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Application.php",
            "line": 921,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Application.php",
            "line": 273,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\symfony\\console\\Application.php",
            "line": 149,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php",
            "line": 90,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php",
            "line": 133,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "C:\\xampp4\\htdocs\\RepoStock\\ApiLaravel\\artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```

### HTTP Request
`GET api/v2/report`

`HEAD api/v2/report`


<!-- END_6b0d21a7504b9c6c36a4d97c4d62e7bc -->

