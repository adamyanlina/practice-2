const path = require('path');
require('dotenv')
.config({ path: path.resolve(__dirname + '../../.env') });

exports.port = process.env.PORT;