#chalenge 1

number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

multiples = []

for multiplier in range(1, length + 1):
    multiples.append(number * multiplier)

print(multiples)

#chalenge 2

word = input("Entrez un mot ")

new_word = ""

for letter in word:
    if new_word == "" or letter != new_word[-1]:
        new_word += letter

print(new_word)