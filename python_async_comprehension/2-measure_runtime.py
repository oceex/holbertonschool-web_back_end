#!/usr/bin/env python3
"""Module that defines a coroutine to measure the runtime of running
several async comprehensions in parallel.
"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Execute async_comprehension four times in parallel using
    asyncio.gather, measure how long that takes in total, and
    return the elapsed time in seconds.
    """
    start_time = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    return time.time() - start_time
