const render = function(count, users) {
return `
    <html>
        <head>
            <link href="fonts.googleapis.com/css?family=Hind"; rel="stylesheet">
            <style>
                * { font-family: verdana}

                ul li {
                    font-family: 'Hind', sans-serif;
                }
            </style>
        </head>
        <body>
            <h1>Hello from express</h1>
            <h2>By Dharmendra</h2>
            <p>count = ${count}</p>
            <form action="/addUser" method="POST">
                <input type="text" name="name">
                <input type="submit" value="Add">
            </form>
            <form action="/clear" method="POST">
                <input type="submit" value="clear">
            </form>
            <div style="padding: 10px;border: 2px dotted red;background: #4a6f5a;color: white;font-family: verdana;text-transform: capitalize;">
                <ul>
                    ${users.map((user) => {
                        return `<li>${user}</li>`
                    }).join('')}
                </ul>
            </div>
        </body>
    </html>
`
}

const getCount = function(req) {
    req.session.count = req.session.count || 0;
    return ++req.session.count;
}

const addUser = function(req, res, name) {
    req.session.users = req.session.users || [];
    req.session.users.push(name);
}

const getUser = function(req) {
    return req.session.users || [];
}

exports.default = {
    controller: function(req, res) {
        let count = getCount(req);
        let users = getUser(req);
        res.contentType('html');
        res.send(render(count, users));
    },
    addUser: function(req, res) {
        addUser(req, res, req.body.name);
        let count = getCount(req);
        let users = getUser(req);
        res.contentType('html');
        res.send(render(count, users));
    },
    clear : function(req, res) {
        req.session.users = [];
        req.session.count = 0;
        res.contentType('html');
        res.send(render(req.session.count, req.session.users));
    }
}