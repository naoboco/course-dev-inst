import random

wordslist = [
    "correction", "childich", "beach", "python",
    "assertive", "interference", "complete",
    "share", "credit card", "rush", "south"
]


def display_word(word, guessed_letters):
    hidden_word = ""

    # Creat the hidden word
    for letter in word:
        if letter == " ":
            hidden_word += " "
        elif letter in guessed_letters:
            hidden_word += letter
        else:
            hidden_word += "*"

    return hidden_word


def play():
    # Chose a random word
    word = random.choice(wordslist)

    # Keep all the letters alredy used
    guessed_letters = []
    wrong_guesses = 0

    body_parts = [
        "head",
        "body",
        "left arm",
        "right arm",
        "left leg",
        "right leg"
    ]

    print("Welcome to Hangman!")

    # Continue until the player win or make 6 errors
    while wrong_guesses < 6:
        hidden_word = display_word(word, guessed_letters)

        print("\nWord:", hidden_word)
        print("Body parts:", body_parts[:wrong_guesses])

        if "*" not in hidden_word:
            print("You win! The word was:", word)
            return

        guess = input("Guess a letter: ")

        # Chek if the input is correct
        if len(guess) != 1 or not guess.isalpha():
            print("Please enter one letter.")
            continue

        if guess in guessed_letters:
            print("You already try this letter.")
            continue

        guessed_letters.append(guess)

        if guess in word:
            print("Correct!")
        else:
            print("Wrong! Adding:", body_parts[wrong_guesses])
            wrong_guesses += 1

    print("Body parts:", body_parts[:wrong_guesses])


play()