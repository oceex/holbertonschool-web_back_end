#!/usr/bin/env python3
"""Module with a coroutine that waits for a random delay."""
import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """return the list of all the delays (float values).
     The list of the delays should be in ascending order."""
    x = []
    async with asyncio.TaskGroup() as q:
        for _ in range(n):
            x.append(await q.create_task(wait_random(max_delay)))
    return x
