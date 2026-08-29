#!/usr/bin/env python3
"""Module with an async generator that
yields random floats after a delay."""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Loop 10 times, sleeping 1 second before yielding a
     random float each iteration."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
