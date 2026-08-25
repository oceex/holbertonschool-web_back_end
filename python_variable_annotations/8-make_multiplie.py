#!/usr/bin/env python3
""""
this module will explain the annotations
"""


def make_multiplier(multiplier: float) -> float:
    """
    a type-annotated function make_multiplier that
     takes a float multiplier as argument and returns
      a function that multiplies a float by multiplier.
    """
    return lambda x: multiplier * x
