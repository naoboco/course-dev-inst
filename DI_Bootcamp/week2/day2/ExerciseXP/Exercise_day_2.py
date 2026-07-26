# exercice 1

def display_message():
    print("I am learning about functions in Python.")


display_message()

# exercice 2 

def favorite_book(title):
    print(f"One of my favorite books is {title}.")


favorite_book("Alice in Wonderland")

# exercice 3

def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")


describe_city("Reykjavik", "Iceland")
describe_city("Paris")

# exercice 4

import random


def compare_numbers(number):
    random_number = random.randint(1, 100)

    if number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {number}, Random number: {random_number}")


compare_numbers(50)

# exercice 5

def make_shirt(size="large", text="I love Python"):
    while not isinstance(text, str) or text.strip() == "" or text.strip().isdigit():
        print("Error: the message must contain text, not only numbers.")
        text = input("Enter a valid shirt message: ")

    print(f"The size of the shirt is {size} and the text is '{text}'.")


make_shirt()
make_shirt("medium")
make_shirt("small", "Custom message")
make_shirt(size="small", text="1234")

# exercice 6 

magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]


def show_magicians(magicians):
    for magician in magicians:
        print(magician)


def make_great(magicians):
    for index in range(len(magicians)):
        magicians[index] = magicians[index] + " the Great"


make_great(magician_names)
show_magicians(magician_names)

# exercice 7

import random


def get_random_temp(season):
    if season == "winter":
        return random.uniform(-10, 16)
    elif season == "spring":
        return random.uniform(10, 25)
    elif season == "summer":
        return random.uniform(24, 40)
    else:
        return random.uniform(10, 25)


def main():
    month = int(input("Enter a month number (1-12): "))

    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    elif month in [9, 10, 11]:
        season = "autumn"
    else:
        print("Error: the month must be between 1 and 12.")
        return

    temperature = round(get_random_temp(season), 1)

    print(f"The temperature right now is {temperature} degrees Celsius.")

    if temperature < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temperature < 16:
        print("Quite chilly! Don't forget your coat.")
    elif temperature < 24:
        print("Nice weather.")
    elif temperature < 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It's really hot! Stay cool.")


main()