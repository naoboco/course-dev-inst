def create_board():
    # Creat an empty 3x3 game board
    return [[" " for _ in range(3)] for _ in range(3)]


def display_board(board):
    # Display the curent board
    print("\n    1   2   3")
    print("  +---+---+---+")

    for index, row in enumerate(board):
        print(f"{index + 1} | {row[0]} | {row[1]} | {row[2]} |")
        print("  +---+---+---+")


def player_input(board, player):
    # Ask the player to chose a position
    while True:
        try:
            print(f"\nPlayer {player}'s turn")
            row = int(input("Enter row (1-3): "))
            column = int(input("Enter column (1-3): "))

            # Chek if the position is inside the board
            if row not in range(1, 4) or column not in range(1, 4):
                print("Error: row and column must be between 1 and 3.")
                continue

            # Chek if the position is alredy occupied
            if board[row - 1][column - 1] != " ":
                print("Error: this position is already occupied.")
                continue

            # Put the player symbol in the selected position
            board[row - 1][column - 1] = player
            break

        except ValueError:
            # This error happen if the user dont enter a number
            print("Error: please enter numbers only.")


def check_win(board, player):
    # Chek every row and column
    for index in range(3):
        if all(board[index][column] == player for column in range(3)):
            return True

        if all(board[row][index] == player for row in range(3)):
            return True

    # Chek the first diagonal
    if all(board[index][index] == player for index in range(3)):
        return True

    # Chek the second diagonal
    if all(board[index][2 - index] == player for index in range(3)):
        return True

    return False


def check_tie(board):
    # The game is tie when every position is full
    return all(cell != " " for row in board for cell in row)


def play():
    # Initialyse the game
    board = create_board()
    current_player = "X"

    print("Welcome to TIC TAC TOE!")

    # Continue playing until someone win or the board is full
    while True:
        display_board(board)
        player_input(board, current_player)

        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            break

        if check_tie(board):
            display_board(board)
            print("The game is a tie!")
            break

        # Swich between player X and player O
        current_player = "O" if current_player == "X" else "X"


play()