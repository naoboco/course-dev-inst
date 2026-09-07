keys = ["Ten", "Twenty", "Thirty"]
values = [10, 20, 30]


def convert_lists_to_dictionary(keys_list, values_list):
    return dict(zip(keys_list, values_list))


family = {
    "rick": 43,
    "beth": 13,
    "morty": 5,
    "summer": 8
}


def get_ticket_price(age):
    if age < 3:
        return 0
    elif age <= 12:
        return 10
    return 15


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
    brand_data["number_stores"] = 2
    brand_data["country_creation"] = "Spain"

    if "Desigual" not in brand_data["international_competitors"]:
        brand_data["international_competitors"].append("Desigual")

    if "creation_date" in brand_data:
        del brand_data["creation_date"]

    return brand_data


users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]


def characters_to_indexes(characters):
    return {character: index for index, character in enumerate(characters)}


def indexes_to_characters(characters):
    return {index: character for index, character in enumerate(characters)}


def sorted_characters_to_indexes(characters):
    sorted_characters = sorted(characters)
    return {character: index for index, character in enumerate(sorted_characters)}


def check_exercise_1():
    expected = {
        "Ten": 10,
        "Twenty": 20,
        "Thirty": 30
    }

    result = convert_lists_to_dictionary(keys, values)
    assert result == expected, "Exercise 1: le dictionnaire obtenu est incorrect"
    print("Exercise 1 OK")


def check_exercise_2():
    assert get_ticket_price(2) == 0, "Exercise 2: moins de 3 ans doit etre gratuit"
    assert get_ticket_price(5) == 10, "Exercise 2: de 3 a 12 ans doit couter 10 dollars"
    assert get_ticket_price(13) == 15, "Exercise 2: plus de 12 ans doit couter 15 dollars"
    assert calculate_family_total(family) == 50, "Exercise 2: le total familial est incorrect"
    print("Exercise 2 OK")


def check_exercise_3():
    updated_brand = update_zara_brand(brand)

    assert updated_brand["number_stores"] == 2, "Exercise 3: number_stores doit valoir 2"
    assert updated_brand["country_creation"] == "Spain", "Exercise 3: ajoute country_creation"
    assert "Desigual" in updated_brand["international_competitors"], "Exercise 3: ajoute Desigual"
    assert "creation_date" not in updated_brand, "Exercise 3: supprime creation_date"
    assert updated_brand["major_color"]["US"] == ["pink", "green"], "Exercise 3: verifie les couleurs US"
    print("Exercise 3 OK")


def check_exercise_4():
    expected_characters = {
        "Mickey": 0,
        "Minnie": 1,
        "Donald": 2,
        "Ariel": 3,
        "Pluto": 4
    }
    expected_indexes = {
        0: "Mickey",
        1: "Minnie",
        2: "Donald",
        3: "Ariel",
        4: "Pluto"
    }
    expected_sorted = {
        "Ariel": 0,
        "Donald": 1,
        "Mickey": 2,
        "Minnie": 3,
        "Pluto": 4
    }

    assert characters_to_indexes(users) == expected_characters, "Exercise 4: characters vers indexes incorrect"
    assert indexes_to_characters(users) == expected_indexes, "Exercise 4: indexes vers characters incorrect"
    assert sorted_characters_to_indexes(users) == expected_sorted, "Exercise 4: tri alphabetique incorrect"
    print("Exercise 4 OK")


if __name__ == "__main__":
    check_exercise_1()
    check_exercise_2()
    check_exercise_3()
    check_exercise_4()
