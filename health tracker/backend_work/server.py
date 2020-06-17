from flask import Flask
from flask import request
import json
import csv
import math

app = Flask(__name__)

@app.route("/calculate", methods = ["POST", "GET"])
def calculate():
    # gender, weight in kg, height in cm, age in years, Exercise(little, light, moderate, heavy, very heavy)
    gender = request.json["gender"]
    weight = float(request.json["weight"])
    height = float(request.json["height"])
    age = int(request.json["age"])
    exercise = request.json["exercise"]

    data = {
        "gender": gender,
        "weight": weight,
        "height": height,
        "age": age,
        "exercise": exercise
    }

    cal = 0

    if gender == "male":
        cal = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    else:
        cal = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)

    if exercise == "ne":
        cal = cal * 1.2
    elif exercise == "le":
        cal = cal * 1.375
    elif exercise == "le":
        cal = cal * 1.55
    elif exercise == "le":
        cal = cal * 1.725
    else:
        cal = cal * 1.9

    return str(math.ceil(cal))

@app.route("/register", methods = ["POST", "GET"])
def register():
    f_name = request.json["f_name"]
    l_name = request.json["l_name"]
    email = request.json["email"]
    password = request.json["password"]
    mobile = request.json["mobile"]

    data = {
        "ids": "",
        "f_name": f_name,
        "l_name": l_name,
        "email": email,
        "password": password,
        "mobile": mobile,
        "cal": 0,
        "task": "",
        "task_cal":"",
        "food":"",
        "food_cal":""
    }

    handle_csv = open("register_login.csv", "r")

    read = csv.DictReader(handle_csv)

    all_data = []

    ids = 0 

    for item in read:
        if email == item["email"]:
            return json.dumps({"error": False, "message": "User Already Exists!"})
        all_data.append(item)
        ids = int(item["ids"]) + 1

    handle_csv.close()

    data["ids"] = ids
    all_data.append(data)

    handle_csv_2 = open("register_login.csv", "w")

    header = data.keys()

    write = csv.DictWriter(handle_csv_2, fieldnames= header)

    write.writeheader()
    write.writerows(all_data)

    handle_csv_2.close()

    return json.dumps({"error": False, "message": "User Added!"})


@app.route("/login", methods = ["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]

    handle_csv = open("register_login.csv", "r")

    read = csv.DictReader(handle_csv)

    for i in read:
        if i["email"] == email and i["password"] == password:
            return {"error":"False", "message": "Logged in!", "data": i}

    return json.dumps({"error":False, "message": "email or password is wrong!"})

@app.route("/update", methods = ["POST", "GET"])
def update():
    ids = request.json["id"]
    cal = request.json["cal"]
    food = request.json["food"]
    food_cal = request.json["food_cal"]
    task = request.json["task"]
    task_cal = request.json["task_cal"]

    handle_csv = open("register_login.csv", "r")

    read = csv.DictReader(handle_csv)

    all_data = []

    for i in read:
        if int(i["ids"]) == int(ids):
            all_data.append({"ids": i["ids"], "f_name": i["f_name"], "l_name": i["l_name"], "email": i["email"], "password": i["password"], "mobile": i["mobile"], "cal": cal, "task": task, "task_cal": task_cal, "food":food, "food_cal":food_cal})
        else:
            all_data.append(i)

    handle_csv_2 = open("register_login.csv", "w")

    header = all_data[0].keys()

    write = csv.DictWriter(handle_csv_2, fieldnames= header)

    write.writeheader()
    write.writerows(all_data)

    handle_csv_2.close()

    return "Data just got updates"