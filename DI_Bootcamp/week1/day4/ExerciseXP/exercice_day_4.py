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
basket.remove("Banana")
basket.remove("Blueberries")

basket.append("Kiwi")
basket.insert(0, "Apples")

Apples_count = basket.count("Apples")
print("Number of aples:", Apples_count)

basket.clear()

print("final basket:" basket)