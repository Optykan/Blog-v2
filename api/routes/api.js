var express = require('express');
var router = express.Router();
const Response = require('./Response')
const admin = require("firebase-admin")
require('dotenv').config()

function escapeUnsafe(unsafe){
	if(!unsafe) return "";
	return unsafe
		.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/\\x/g, "\\\\x");
}

function makeId(title){
	title = title.trim();

	const maxlength = 50;
	let id = "";

	let timestamp = (Math.floor(Date.now()/(1000 * 60))).toString()
	let tokens = title.split(" ");
	for(let i = 0; i < tokens.length && id.length < maxlength; i++){
		id += tokens[i] + "-";
	}
	return id.toLowerCase() + timestamp;
}

/* GET API. */
router.get('/', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	let response = new Response(Response.STATUS_OK, 'Hello, world!', null);
	response.send(res);
	// res.send(JSON.stringify({ message: Response.STATUS_NOT_FOUND}));
});

router.get('/posts', function(req, res, next){
	var db = admin.database();
	var ref = db.ref("/posts");
	ref.on("value", snapshot => {
		let response = null;
		if(snapshot.exists()){
			response = new Response(Response.STATUS_OK, 'Retrieved all posts successfully', snapshot.val());
		} else {
			response = new Response(Response.STATUS_NO_CONTENT, 'No posts exist', {});
		}
		response.send(res);
	})
});

router.get('/posts/:id', function(req, res, next){
	let db = admin.database();
	let ref = db.ref("/posts");
	let post = ref.child(req.params.id)

	post.on("value", snapshot => {
		let response = null;
		if(snapshot.exists()){
			response = new Response(Response.STATUS_OK, 'Retrieved posts successfully', snapshot.val());
		} else {
			response = new Response(Response.STATUS_NOT_FOUND, 'Could not find snapshot', null);
		}
		response.send(res);
	})
});


router.post('/posts', function(req, res, next){
	let response = null;
	admin.auth().verifyIdToken(req.body.idToken).then(decodedToken=>{
		let title = escapeUnsafe(req.body.title).trim();
		let id = makeId(title);
		let db = admin.database();
		let ref = db.ref("/posts");
		let post = ref.child(id);
		post.set({
			title: escapeUnsafe(req.body.title),
			subtitle: escapeUnsafe(req.body.subtitle),
			content: escapeUnsafe(req.body.content),
			image: req.body.image,
			snippet: escapeUnsafe(req.body.snippet),
			date: (Math.floor(Date.now()/(1000 * 60))).toString(),
			id: id
		}).then(()=>{
			response = new Response(Response.STATUS_OK, 'Post created successfully', null);
			response.send(res);
		}).catch(error=>{
			response = new Response(Response.STATUS_INTERNAL_ERROR, 'Error saving post', error);
			response.send(res);
		})
	}).catch(function(error) {
		response = new Response(Response.STATUS_INTERNAL_ERROR, error.toString(), null);
		response.send(res)
	});
})

router.put('/posts/:id', function(req, res, next){
	let response = null;
	admin.auth().verifyIdToken(req.body.idToken).then(decodedToken=>{
		let db = admin.database();
		let post = db.ref("/posts").child(req.params.id)
		post.update({
			title: escapeUnsafe(req.body.title),
			subtitle: escapeUnsafe(req.body.subtitle),
			content: escapeUnsafe(req.body.content),
			image: req.body.image,
			snippet: escapeUnsafe(req.body.snippet)
		}).then(()=>{
			response = new Response(Response.STATUS_OK, 'Post saved successfully', null);
			response.send(res);
		}).catch(error=>{
			response = new Response(Response.STATUS_INTERNAL_ERROR, 'Error saving post', error);
			response.send(res);
		})

	}).catch(function(error) {
		response = new Response(Response.STATUS_INTERNAL_ERROR, error, null);
		response.send(res)
	});
})

router.delete('/posts/:id', function(req, res, next){
	let response = null;
	admin.auth().verifyIdToken(req.body.idToken).then(decodedToken=>{
		let db = admin.database();
		let post = db.ref("/posts").child(req.params.id)
		post.remove().then(()=>{
			response = new Response(Response.STATUS_OK, 'Post deleted successfully', null);
			response.send(res);
		}).catch(error=>{
			response = new Response(Response.STATUS_INTERNAL_ERROR, 'Error deleting post', error);
			response.send(res);
		})

	}).catch(function(error) {
		response = new Response(Response.STATUS_UNAUTHORIZED, 'User is unauthenticated. Please reauthenticate and try again.', error.toString());
		response.send(res)
	});
})


router.post('/verify-token', function(req, res, next){
	const idToken = req.body.idToken
	const expiresIn = 60 * 60 * 24 * 5 * 1000;

	let response = null;
	admin.auth().createSessionCookie(req.body.idToken, { expiresIn })
	.then(function(cookie) {
		const options = { maxAge: expiresIn, httpOnly: true }
		res.cookie('session', cookie, options)
		response = new Response(Response.STATUS_OK, "Verification success", null) 
		response.send(res)
	}).catch(function(error) {
		response = new Response(Response.STATUS_UNAUTHORIZED, "Could not verify", error)
		response.send(res)
	})
})

module.exports = router;
