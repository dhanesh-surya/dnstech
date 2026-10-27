import os

filepath = r'C:\Users\LEGION\Downloads\Project\dnstechsupport\app\about\page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace 's with 's (but only in JSX text, not in code)
# We need to replace the actual apostrophe character with HTML entity
# but careful not to break the code

# Let's just replace the specific instances we know about
replacements = [
    (r"Let's discuss", "Let's discuss"),
]

for old, new in replacements:
    content = content.replace(old, new)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed about page")