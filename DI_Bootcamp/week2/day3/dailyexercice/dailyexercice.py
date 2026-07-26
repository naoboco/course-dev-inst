import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number = 3728


def find_pairs(numbers, target):
    numbers_seen = set()
    pairs = set()

    for number in numbers:
        missing_number = target - number

        if missing_number in numbers_seen:
            pair = tuple(sorted((number, missing_number)))
            pairs.add(pair)

        numbers_seen.add(number)

    return pairs


result = find_pairs(list_of_numbers, target_number)

for first_number, second_number in sorted(result):
    print(
        f"{first_number} and {second_number} "
        f"sums to the target number {target_number}"
    )