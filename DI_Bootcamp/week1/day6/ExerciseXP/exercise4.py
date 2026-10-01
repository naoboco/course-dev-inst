users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

characters_to_index = {
    character: index
    for index, character in enumerate(users)
}

index_to_characters = {
    index: character
    for index, character in enumerate(users)
}

sorted_characters = {
    character: index
    for index, character in enumerate(sorted(users))
}

print(characters_to_index)
print(index_to_characters)
print(sorted_characters)