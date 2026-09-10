#!/usr/bin/env python3
""" returns all students sorted by average score."""


def top_students(mongo_collection):
    """
    top top
    """
    students = mongo_collection.find({})
    result = []
    for student in students:
        total = 0
        count = 0
        for topic in student["topics"]:
            total += topic["score"]
            count += 1
        student["averageScore"] = total / count
        result.append(student)
    return sorted(result, key=lambda x: x["averageScore"], reverse=True)
