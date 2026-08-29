#!/usr/bin/env python3
"""Module with a coroutine that waits for a random delay."""
import asyncio
from typing import List


task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """Spawn wait_random n times and return delays in ascending order."""
    delays = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays

n = 5
max_delay = 6
print(asyncio.run(task_wait_n(n, max_delay)))
