const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const dbpath = path.join(__dirname, "cricketTeam.db");
const app = express();

let db = null;
const initializeDBandserver = async () => {
  try {
    db = await open({
      filename: dbpath,
      directory: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("server started");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBandserver();
