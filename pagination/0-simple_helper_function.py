#!/usr/bin/env python3
"""
pages
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    :param page:
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end
