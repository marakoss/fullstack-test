import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import isScramble from './utils/string';

const app = express();
const pub = path.join(__dirname, 'public');

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(pub, 'index.html'));
});

app.post('/isscramble', (req, res) => {

    const scrambled = req.body.scrambled;
    const needle = req.body.needle;

    let flag = false;

    if (typeof scrambled === 'string' && typeof needle === 'string') {
        flag = isScramble(scrambled, needle);
    } else {
        return res.status(500).send('Missing arguments');
    }

    if (flag) {
        return res.json({'result': scrambled + ' contains letters of ' + needle});
    }
    
    return res.json({'result': scrambled + ' doesn\'t contain letters of ' + needle});
    
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));