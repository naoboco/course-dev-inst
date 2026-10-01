#1

word = input("Enter a word: ")

letter_indices = {}

for index, letter in enumerate(word):
    if letter in letter_indices:
        letter_indices[letter].append(index)
    else:
        letter_indices[letter] = [index]

print(letter_indices)

#2

items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

wallet = "$300"

wallet = int(wallet.replace("$", "").replace(",", ""))

basket = []

for item, price in items_purchase.items():
    price = int(price.replace("$", "").replace(",", ""))

    if wallet >= price:
        basket.append(item)
        wallet -= price

if basket:
    print(sorted(basket))
else:
    print("Nothing")
