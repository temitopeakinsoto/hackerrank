def equalize(l):
    char_count = {}
    num_to_del = 0
    highest_count = 0
    if len(l) == 0:
        return char_count

    for item in l:
        if item in char_count:
            char_count[item] += 1
        else:
            char_count[item] = 1

    for val in char_count:
        if char_count[val] > highest_count:
            highest_count = char_count[val]
            
    num_to_del = len(l) - highest_count
    return num_to_del