#1

keys = ["Ten", "Twenty", "Thirty"]
values = [10, 20, 30]

result = dict(zip(keys, values))

print(result)

#2

family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}

def calculate_total(family):
    total = 0

    for name, age in family.items():
        if age < 3:
            price = 0
        elif age <= 12:
            price = 10
        else:
            price = 15

        print(f"{name}: ${price}")
        total += price

    print(f"Total: ${total}")

calculate_total(family)

user_family = {}

while True:
    name = input("Enter family member's name (or 'done'): ").strip()

    if name.lower() == "done":
        break

    if not name:
        print("Name cannot be empty.")
        continue

    try:
        age = int(input(f"Enter {name}'s age: "))

        if age < 0:
            print("Age cannot be negative.")
            continue

        user_family[name] = age

    except ValueError:
        print("Please enter a valid age.")

calculate_total(user_family)

#3

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2

print(f"Zara's clients include {', '.join(brand['type_of_clothes'])}.")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

brand.pop("creation_date")

print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(list(brand.keys()))

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print(brand)

#4

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
