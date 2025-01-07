# Emil Emoji

Emil Emoji is a Discord bot designed to notify your server whenever a new emoji is added. It monitors emoji creation events and announces them in a user-specified channel, configurable via an environment variable (or logs an error if the channel is not found).

## Features

- **Emoji Notifications:** Sends a message in the user-specified channel whenever a new emoji is created.

- **Customizable Behavior:** Easily extend functionality for other emoji-related events or customize the announcement channel.

## Requirements

- **Node.js:** Ensure you have Node.js installed (v16.9.0 or higher).

- **Discord Bot Token:** You need a bot token from the [Discord Developer Portal](https://discord.com/developers/docs/intro).

## Setup

### 1. Clone the repository
  
```bash
git clone https://github.com/D4C4N/emil-emoji.git
cd emil-emoji
```

### 2. Install dependencies

```bash
npm install
npm install typescript ts-node @types/node @types/discord.js dotenv
```

### 3. Create a `.env` file in the project root and add your bot token and announcement channel

```env
BOT_TOKEN=your-bot-token-here
ANNOUNCE_CHANNEL=your-channel-name
```

### 4. Run in development mode

```bash
npm start
```

### 5. (Optional) Build for production

If you want to compile the TypeScript code and run it in production:

```bash
npm run build
node dist/index.js
```

## How It Works

- Listens for emojiCreate events in Discord servers where the bot is added.

- Finds the specified channel (via the `ANNOUNCE_CHANNEL` environment variable) or defaults to `#general` if not specified.

- Sends a celebratory message along with the newly added emoji.

## Example Output

When a new emoji is added, Emil Emoji will post:

![image](https://github.com/user-attachments/assets/04fd2b1a-8c20-462b-a632-7ad2855a8afd)

## Contributing

Contributions are welcome! If you want to add features, improve the code, or fix bugs, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

---

Happy emoji-ing! 🚀
