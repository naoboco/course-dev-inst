keys = ["Ten", "Twenty", "Thirty"]
values = [10, 20, 30]


def convert_lists_to_dictionary(keys_list, values_list):
    pass


family = {
    "rick": 43,
    "beth": 13,
    "morty": 5,
    "summer": 8
}


def get_ticket_price(age):
    pass


def calculate_family_total(family_members):
    total = 0

    for name, age in family_members.items():
        price = get_ticket_price(age)
        print(f"{name}: $" + str(price))
        total += price

    return total


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


def update_zara_brand(brand_data):
    pass


users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]


def characters_to_indexes(characters):
    pass


def indexes_to_characters(characters):
    pass


def sorted_characters_to_indexes(characters):
    pass


if __name__ == "__main__":
    converted = convert_lists_to_dictionary(keys, values)
    print(converted)

    total_cost = calculate_family_total(family)
    print("Total: $" + str(total_cost))

    updated_brand = update_zara_brand(brand)
    print(updated_brand)

    print(characters_to_indexes(users))
    print(indexes_to_characters(users))
    print(sorted_characters_to_indexes(users))
