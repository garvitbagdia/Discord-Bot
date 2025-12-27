DISCORD BOT

This is a simple Discord bot built using Node.js and discord.js.
The project is created for learning purposes and basic bot development.

---

DESCRIPTION

The bot connects to Discord using a secure bot token stored in environment variables.
It listens for basic commands and can be extended with additional features easily.

---

FEATURES

* Connects to Discord successfully
* Handles basic commands
* Uses environment variables for security
* Simple and beginner-friendly structure

---

TECHNOLOGIES USED

* Node.js
* discord.js
* dotenv

---

PROJECT STRUCTURE

Discord-Bot
index.js
command.js
package.json
package-lock.json
.gitignore
.env

---

ENVIRONMENT SETUP

Create a file named .env in the project root and add your bot token:

DISCORD_TOKEN=your_discord_bot_token_here

Do not share or upload your bot token to GitHub.

---

INSTALLATION STEPS

1. Clone the repository
   git clone [https://github.com/garvitbagdia/Discord-Bot.git](https://github.com/garvitbagdia/Discord-Bot.git)

2. Go to the project folder
   cd Discord-Bot

3. Install dependencies
   npm install

---

RUNNING THE BOT

Start the bot using the command below:
node index.js

If everything is configured correctly, the bot will come online in your Discord server.

---

SECURITY NOTES

* Keep your bot token private
* Add .env to .gitignore
* Reset the token if it is exposed

---

FUTURE IMPROVEMENTS

* Add slash commands
* Add moderation commands
* Deploy the bot on a server

---

AUTHOR

Garvit Bagdia
GitHub: [https://github.com/garvitbagdia](https://github.com/garvitbagdia)

