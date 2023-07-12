# Rest API Back End 

- Dibuat dengan Nodejs, Express, dan MongoDB sebagai database.
- Studi kasus kali ini nama database yang digunakan adalah `express-api` dan `users` sebagai collection-nya.


File konfigurasi `vercel.json`
```json
{
	"version": 2,
	"builds": [
		{
			"src": "server.js",
			"use": "@vercel/node"
		}
	],
	"routes": [
		{ 
			"src": "/(.*)", 
			"dest": "server.js" 
		}
	]
}
```
