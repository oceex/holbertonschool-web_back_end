#!/usr/bin/env python3
from pymongo import MongoClient

client = MongoClient("mongodb://127.0.0.1:27017")
logs = client["logs"]
nginx = logs["nginx"]
x = ["GET", "POST", "PUT", "PATCH", "DELETE"]
print(f"{nginx.count_documents({})} logs")
print("Methods:")
for n in x:
    b = nginx.count_documents({"method": n})
    print(f"method {n}: {b}")

print(f"{logs.count_documents({})} status check")
