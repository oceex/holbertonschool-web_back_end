#!/usr/bin/env python3
"""
fourth mudluee
"""


def schools_by_topic(mongo_collection, topic):
    """" returns the list of school having a specific topic """
    return list(mongo_collection.find({"topic": topic}))


if __name__ == "__main__":
    main()
