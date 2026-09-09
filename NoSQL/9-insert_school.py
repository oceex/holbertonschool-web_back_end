#!/usr/bin/env python3
"""
second mudluee
"""


def insert_school(mongo_collection, **kwargs):
    """ inserts a new document in a collection based on kwargs """
    x = mongo_collection.insert_one(kwargs)
    return x.inserted_id


if __name__=="__main__":
    main()
