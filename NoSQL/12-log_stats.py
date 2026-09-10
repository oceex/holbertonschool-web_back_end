#!/usr/bin/env python3
"""
mongodb
"""
from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    logs = client["logs"]
    nginx = logs["nginx"]
    x = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print(f"{nginx.count_documents({})} logs")
    print("Methods:")
    for n in x:
        b = nginx.count_documents({"method": n})
        print(f"    method {n}: {b}")

    status = nginx.count_documents({"method": "GET", "path": "/status"})
    print(f"{status} status check")