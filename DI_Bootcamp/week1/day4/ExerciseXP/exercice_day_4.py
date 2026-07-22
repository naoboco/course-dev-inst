#exrcice 1

my_fav_numbers = {3,7,10}

my_fav_numbers.add(15)
my_fav_numbers.add(20)

my_fav_numbers.remove(20)

friend_fav_numbers = {2,8,12}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)


#exercice 2 

my_tuple = (1,2,3)

my_tuple = my_tuple + (4,5)

print(my_tuple)

#exercice 3

basket = ["Bananas", "Apples", "Oranges","Blueberries"]
basket.remove("Bananas")
basket.remove("Blueberries")

basket.append("Kiwi")
basket.insert(0, "Apples")

Apples_count = basket.count("Apples")
print("Number of aples:", Apples_count)

basket.clear()

print("final basket:", basket)


# exercice 4

numbers = []

for number in range(3, 11):
    if number % 2 == 0:
        numbers.append(number // 2)
    else:
        numbers.append(number / 2)

print(numbers)

# exercice 5

# imprimer tt les numeros
for number in range(1, 21):
    print(number)

# print les nombres pair
for number in range(1, 21):
    if number % 2 == 0:
        print(number)

# exercice 6 

name = input("Enter your name: ")

while True:
    if not name.isdigit() and len(name) >= 3:
        print("Thank you")
        break

    name = input("Give the correct name: ")


# exercice 7

favorite_fruits = input(
    "Entrez votre favorit fruits, separated by spaces: "
).lower().split()

chosen_fruit = input("Entre the name of any fruit: ").lower()

if chosen_fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

    #exercice 8

toppings = []

while True:
    topping = input("Enter a pizza topping or type 'quit': ").strip()

    if topping.lower() == "quit":
        break

    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

total_cost = 10 + (len(toppings) * 2.50)

print("Your toppings:", ", ".join(toppings))
print(f"Total cost: ${total_cost:.2f}")

#exercice 9

number_of_people = int(input("How many people want tickets? "))

total_cost = 0

for person in range(number_of_people):
    age = int(input(f"Enter the age of person {person + 1}: "))

    if age < 3:
        print("Ticket: Free")
    elif age <= 12:
        total_cost += 10
        print("Ticket: $10")
    else:
        total_cost += 15
        print("Ticket: $15")

print(f"Total ticket cost: ${total_cost}")