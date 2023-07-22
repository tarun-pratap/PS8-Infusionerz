import re
from fastapi import FastAPI, HTTPException
from fastapi import FastAPI
app = FastAPI()


def extract_info(text):
    info_dict = {}
    arr = []
    key_value_patterns = {
        "Name:": r"Name:\s*(.*)",
        "Date of Birth:": r"Date of Birth:\s*(\d{2}-\d{2}-\d{4})",
        "Blood Group:": r"Blood Group:\s*(\w+[+-]?\s*\w+)",
        "Organ Donor:": r"Organ Donor:\s*(\w)",
        "Address:": r"Address:\s*(.*)",
    }
    joined_text = " ".join(text)

    for key, pattern in key_value_patterns.items():
        match = re.search(pattern, joined_text)
        if match:
            info_dict[key] = match.group(1).strip()
            arr.append(info_dict[key])

    return info_dict

##MAKE SURE TO PASS IN VECTOR OF STRINGS

result = extract_info(["Indian Union Driving Licence\n\nIssued by Uttar Pradesh @\n\nset / UP14 20220001484\n\nIssue Date Validity(NT) _Validity(TR)*\n10-01-2022 04-06-2043\n\n; Holder's Signature\nName: PRATHAM\nDate of Birth: 05-06-2003 Blood Group: O+ VE Organ Donor: N\nSon/Daughter/Wife of: KRISHNA ASAWA\n\nAddress:\n\n44, Dwarikapuri Colony Kotra Road, Bhopal\n462003\n\nDate of First Issue (10-01-2025)\n"])

print(result['Date of Birth:'])
print(result['Blood Group:'])
