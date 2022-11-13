from typing import List
from pydantic import Json
from datetime import datetime

target_fields: List[Json] = [
    {
        "name": "Front-End Web",
        "difficulty": "Easy",
        "languages": ["React", "HTML", "CSS", "Javascript", "HTTP"]
    },
    {
        "name": "Back-End Web",
        "difficulty": "Medium",
        "languages": ["Databases", "Algorithms", "Web frameworks", "Server"]
    },
    {
        "name": "Mobile Development",
        "difficulty": "Easy",
        "languages": ["Andriod SDK", "Flutter", "Kotlin"]
    },
    {
        "name": "Machine Learning",
        "difficulty": "Hard",
        "languages": ["Supervised Learning", "Unsupervised Learning"]
    },
    {
        "name": "Deep Learning",
        "difficulty": "Hard",
        "languages": ["Neural Network", "CNN", "RNN", "Computer Vision"]
    },
    {
        "name": "Data Mining",
        "difficulty": "Medium",
        "languages": ["Python", "Pandas", "Numpy"]
    }
]