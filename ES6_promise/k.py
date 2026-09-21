from typing import List
def middle_char(word: str) -> str:
    if len(word) % 2 != 0:
        return word[len(word)//2]
    else:
        return word [len(word)//2 - 1: len(word)//2 + 1]

print(middle_char("lkl"))