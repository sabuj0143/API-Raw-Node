/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Sabuj Howlader
 *
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
