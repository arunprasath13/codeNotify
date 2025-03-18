const express = require('express');
const axios = require("axios");
const dotenv = require("dotenv")
require("dotenv").config();
const cron = require("node-cron");
const app = express();
const PORT = process.env.PORT || 5000;



const fetchContests = async () => {
    try{
        const response = await axios.get("https://codeforces.com/api/contest.list");
        const upcomingContest = response.data.result.filter((contest) => (contest.phase === "BEFORE" && contest.type === "CF"));
        return upcomingContest;
    }

    catch(error){
        console.log(error)
        return [];
    }
}

fetchContests().then((result) => console.log(result));




app.listen(PORT,() => console.log("Server is up"))