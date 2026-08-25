#!/usr/bin/env python3
""""
this module will explain the annotations
"""
import typing


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    """
    a type-annotated function sum_mixed_list which
    takes a list mxd_lst of integers and floats and
    returns their sum as a float.
    """
    return sum(mxd_lst)
