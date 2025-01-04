# Emil Emoji

Emil Emoji is a Discord bot designed to notify your server whenever a new emoji is added. It monitors emoji creation events and announces them in the server's #general channel (or logs an error if the channel is not found).

## Features

- **Emoji Notifications:** Sends a message in the #general channel whenever a new emoji is created.

- **Customizable Behavior:** Easily extend functionality for other emoji-related events or customize the announcement channel.

## Requirements

- **Node.js:** Ensure you have Node.js installed (v16.9.0 or higher).

- **Discord Bot Token:** You need a bot token from the Discord Developer Portal.

## Setup

### 1. Clone the repository
  
```bash
git clone https://github.com/your-username/emil-emoji.git
cd emil-emoji
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file in the project root and add your bot token

```env
BOT_TOKEN=your-bot-token-here
```

### 4. Start the bot

```bash
npm start
```

## How It Works

- Listens for emojiCreate events in Discord servers where the bot is added.

- Finds the #general channel (or logs an error if the channel is missing).

- Sends a celebratory message along with the newly added emoji.

## Example Output

When a new emoji is added, Emil Emoji will post:

![image](https://github.com/user-attachments/assets/04fd2b1a-8c20-462b-a632-7ad2855a8afd)

## Contributing

Contributions are welcome! If you want to add features, improve the code, or fix bugs, feel free to fork the repository and submit a pull request.

## License

This project is currently not licensed under a specific license. However, it is open-source and free to use, modify, and distribute. If you have any questions or concerns, please feel free to reach out to me.

---

Happy emoji-ing! 🚀
