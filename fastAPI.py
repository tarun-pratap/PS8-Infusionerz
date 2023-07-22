import pytesseract
from PIL import Image
import re
from fastapi import FastAPI, HTTPException
pytesseract.pytesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
from fastapi import FastAPI


app = FastAPI()



@app.post("/{img_name}")
def get_text(img_name):
    image = Image.open(img_name)
    text = pytesseract.pytesseract.image_to_string(image)
    return text




# @app.post("/{text}")
# def read_item(text):
#     name_pattern = r"Name:(.*)"
#     details = {}
#     name_match = re.search(name_pattern, text, re.IGNORECASE)
#     if name_match:
#         details["name"] = name_match.group(1).strip()
#     return details["name"]

# def extract_info(text):
#     info_dict = {}
#     ex = get_text()
#     print(ex)
#     key_value_patterns = {
#         "Name:": r"Name:\s*(.*)",
#         "Date of Birth:": r"Date of Birth:\s*(\d{2}-\d{2}-\d{4})",
#         "Blood Group:": r"Blood Group:\s*(\w+[+-]?\s*\w+)",
#         "Organ Donor:": r"Organ Donor:\s*(\w)",
#         "Address:": r"Address:\s*(.*)",
#     }
#     joined_text = " ".join(text)

#     for key, pattern in key_value_patterns.items():
#         match = re.search(pattern, joined_text)
#         if match:
#             info_dict[key] = match.group(1).strip()

#     return info_dict

@app.post("/name")
def process_text(text: str):
    name_pattern = r"Name:(.*)"
    details = {}
    name_match = re.search(name_pattern, text, re.IGNORECASE)
    if name_match:
        details["name"] = name_match.group(1).strip()
        details["name"] = details["name"].split("\\n")[0]
    return {"name": details["name"]}

# @app.post("/dob")
# def process_text(text: str):
#     dob_pattern = r"\b\d{2}-\d{2}-\d{4}\b"  # New regex for DOB (dd-mm-yyyy format)
#     details = {}
#     dob_match = re.search(dob_pattern, text, re.IGNORECASE)
#     if dob_match:
#         details["dob"] = dob_match.group(0)  # Directly use the matched DOB
#     return {"dob": details["dob"]}

# @app.post("/bloodgroup")
# def process_text(text: str):
#     blood_group_pattern = r"\b[A-ABO][+-]\s*VE\b"
#     details = {}
#     blood_group_match = re.search(blood_group_pattern, text, re.IGNORECASE)
#     if blood_group_match:
#         details["blood_group"] = blood_group_match.group(0).strip()
#     return {"blood_group": details["blood_group"]}

# @app.post("/organdonor")
# def process_text(text: str):
#     organ_donor_pattern = r"\b[NY]\b"  # New regex for Organ Donor (either "N" or "Y")
#     details = {}
#     organ_donor_match = re.search(organ_donor_pattern, text, re.IGNORECASE)
#     if organ_donor_match:
#         details["organ_donor"] = organ_donor_match.group(0).strip()
#     return {"organ_donor": details["organ_donor"]}

# @app.post("/relativematch")
# def process_text(text: str):
#     relative_pattern = r"(?:Son|Daughter|Wife) of:(.*)"
#     details = {}
#     relative_match = re.search(relative_pattern, text, re.IGNORECASE)
#     if relative_match:
#         details["relative"] = relative_match.group(1).strip()
#         details["relative"] = details["relative"].split("\\n")[0]
#     return {"relative_match": details["relative"]}

# @app.post("/relativematch")
# def process_text(text: str):
#     relative_pattern = r"(?:Son|Daughter|Wife) of:(.*)"
#     details = {}
#     relative_match = re.search(relative_pattern, text, re.IGNORECASE)
#     if relative_match:
#         details["relative"] = relative_match.group(1).strip()
#         details["relative"] = details["relative"].split("\\n")[0]
#     return {"relative_match": details["relative"]}
 
# @app.post("/address")
# def process_text(text: str):
#     address_pattern = r"Address:(.*?)\d{6}"  # Regex for extracting address
#     details = {}
#     address_match = re.search(address_pattern, text, re.IGNORECASE | re.DOTALL)
#     if address_match:
#         details["address"] = address_match.group(1).strip()
#         #details["address"] = details["address"].split("\\n")[0]
#     return {"address": details["address"]}








    
        

