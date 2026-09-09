#!/usr/bin/env python3
"""
fiiiirstt use pymongodb
"""


def list_all(mongo_collection):
    """returning the collection list"""
    return list(mongo_collection.find({}))


if __name__ == "__main__":
    main()
