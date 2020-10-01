const { Client } = require('pg');
const http = require('http');

const dbclient = new Client({
   user: 'postgres',
   host: 'icsagear-1.c4fxt0ukb7r1.us-east-2.rds.amazonaws.com',
   database: 'postgres',
   password: 'icsagearmasterpassword',
   port: 5432,
})

dbclient.connect((err) => {
   if (err) {
      console.log('Error connecting to database:')
      console.log(err);
      console.log('Exitting backend due to fatal error ^')
      exit(-1);
   } else {
      console.log('Connected to DB')
   }
})

const serverS = http.createServer((req, res) => {
   // console.log(req)
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', '*');
   res.writeHead(200, { 'Content-Type': 'application/json' });

   var body = "";
   req.on('data', (chunk) => {
      body += chunk;
   });
   req.on('end', function () {
      // console.log('method: ' + req.method)
      // console.log('url: ' + req.url)
      // console.log('headers: ')
      // console.log(req.headers)
      if(req.headers.path == '/add'){
         console.log('add listing')
         body = JSON.parse(body)
         var firstName = body["firstName"].value
         var lastName = body["lastName"].value
         var email = body["email"].value
         var city = body["city"].value
         var state = body["state"].value
         var zip = body["zip"].value
         var searchTerms = body["searchTerms"].value
         var category = body["category"].value
         var condition = body["condition"].value
         var image = body["image"].value
         var param = {}
         if (firstName) param['firstName'] = firstName
         if (lastName) param['lastName'] = lastName
         if (email) param['email'] = email
         if (city) param['city'] = city
         if (state) param['state'] = state
         if (zip) param['zip'] = zip
         if (searchTerms) param['searchTerms'] = searchTerms
         if (category) param['category'] = category
         if (condition) param['condition'] = condition
         if (image) param['image'] = image
         console.log(param)

      } else if(req.headers.path == '/search'){
         console.log('search listing')
      }
      

      ans = { 'lmao': 5 }

      res.end(JSON.stringify(ans));
   });


});

serverS.on('error', (err) => {
   console.log('stream error:')
   console.error(err)
});

serverS.on('stream', (stream, headers) => {
   console.log('header:')
   console.log(headers)
   switch (headers[':path']) {
      case '/recentlyplayed':
         console.log('recentlyplaying lols')
         break;
      default:
         console.log(`unknown header: ${headers[':path']}`)
   }
});




function streamRespond(stream, t, headers = {
   'content-type': 'text',
   ':status': 200
}
) {
   try {
      stream.respond(headers);
      stream.write(t, function () {
         stream.end()
      });
   } catch (streamerr) {
      console.log(streamerr)
   }
}


serverS.listen(8443, function () {
   console.log('https server is up');
});

