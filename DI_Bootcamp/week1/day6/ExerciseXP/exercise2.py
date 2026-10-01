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