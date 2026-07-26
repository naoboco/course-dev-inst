MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM#
$a 
#t%'''


# Step 1: Convert the string into a 2D list
rows = MATRIX_STR.strip("\n").split("\n")
matrix = [list(row) for row in rows]


# Step 2: Read the matrix column by column
column_message = ""

for column_index in range(len(matrix[0])):
    for row_index in range(len(matrix)):
        column_message += matrix[row_index][column_index]


# Steps 3 and 4: Keep letters and replace symbol groups with spaces
decoded_message = ""
symbols_found = False

for character in column_message:
    if character.isalpha():
        if symbols_found and decoded_message:
            decoded_message += " "

        decoded_message += character
        symbols_found = False

    elif decoded_message:
        symbols_found = True


# Step 5: Print the secret message
print(decoded_message)