#!/usr/bin/env python3
"""
fourth mudluee
"""

def schools_by_topic(mongo_collection, topic):
    """" returns the list of school having a specific topic """
    x =  mongo_collection.find({"topic": topic})
    return list(x)


if __name__=="__main__":
    main()
