def pairs(k, arr):
    arr.sort(reverse=True)
    list_of_pairs = list()
    for num in arr:
        num_pair = num - k
        if num_pair in arr:
            list_of_pairs.append([num, num_pair])
    return len(list_of_pairs)