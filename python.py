def chatbot():
    print("Hello! I'm your friendly chatbot.")
    bot_name = input("What would you like to call me? (Give me a nickname): ")
    
    if not bot_name.strip():
        bot_name = "ChatBot"

    print(f"Nice! From now on, you can call me '{bot_name}'. Let's chat! (Type 'bye' to exit)")

    while True:
        user_input = input("You: ")
        if user_input.lower() in ['bye', 'exit', 'quit']:
            print(f"{bot_name}: Goodbye! Have a great day!")
            break
        else:
            print(f"{bot_name}: That's interesting! Tell me more.")