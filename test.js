const { query } = require('./database'); // Adjust the path according to your project structure

async function performQuery() {
    try {
        const result = await query('SELECT NOW()');
        console.log('Query result:', result.rows);
    } catch (err) {
        console.error('Error executing query:', err);
    }
}

performQuery();