const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","Ingwon Chae Resume 2022.03.pdf","about.txt","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","drive.jpg","favicon-16x16.png","favicon-32x32.png","favicon.ico","fudturism.jpg","it me.jpg","nazareth.jpg","robots.txt","site.webmanifest","standing.jpg","svelte-welcome.webp"]),
	mimeTypes: {".pdf":"application/pdf",".txt":"text/plain",".png":"image/png",".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json",".webp":"image/webp"},
	_: {
		entry: {"file":"start-da4d11a0.js","js":["start-da4d11a0.js","chunks/index-513e564b.js","chunks/index-bf4de514.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
		],
		routes: [
			{
				type: 'page',
				id: "resume",
				pattern: /^\/resume\/?$/,
				names: [],
				types: [],
				path: "/resume",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "todos",
				pattern: /^\/todos\/?$/,
				names: [],
				types: [],
				path: "/todos",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/todos/index.ts.js')),
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
