import re

MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%'''

matrix = [list(row) for row in MATRIX_STR.strip("\n").splitlines()]

message = ""

for col in range(len(matrix[0])):
    for row in range(len(matrix)):
        message += matrix[row][col]

decoded_message = re.sub(r"(?<=[a-zA-Z])[^a-zA-Z]+(?=[a-zA-Z])", " ", message)

print(decoded_message)