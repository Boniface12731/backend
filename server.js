const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyparser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on  port ${PORT}`);
})

const policies = [];

app.post('/api/policies', (req, res) => {
    const {policyName, premiumAmount} = req.body;
    const newPolicy = {policyName, premiumAmount};
    policies.push(newPolicy);
    res.status(201).json(newPolicy);
});

app.get('/api/policies', (req, res) => {
    res.json(policies)
});

