#!/usr/bin/env python3
"""
Module with a coroutine that waits for a random delay.
"""
import random
import asyncio


def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay between 0
    and max_delay (inclusive), return it."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
