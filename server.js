const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Endpoint to get all surveillance data
app.get('/api/surveillance', (req, res) => {
    const results = [];
    fs.createReadStream('./data/malaria_data.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
});

app.listen(PORT, () => {
    console.log(`Epidemiology Dashboard running at http://localhost:${PORT}`);
});
const bodyParser = require('body-parser');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// NEW: Endpoint to receive new patient data
app.post('/api/add-case', (req, res) => {
    // Construct the CSV row from form data
    const newCase = `\n${req.body.id},${req.body.age},${req.body.gender},${req.body.county},${req.body.sub || 'N/A'},${req.body.lat},${req.body.lng},${req.body.result},${req.body.type},${new Date().toISOString()}`;
    
    fs.appendFile('./data/malaria_data.csv', newCase, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error saving data");
        }
        // Redirect back to the map with a success parameter
        res.redirect('/index.html?success=1');
    });
});