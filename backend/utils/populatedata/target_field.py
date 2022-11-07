from typing import List
from pydantic import Json
from datetime import datetime

target_fields: List[Json] = [
    {
        "name": "Front-End Web",
        "languages": ["React", "HTML", "CSS", "Javascript", "HTTP"]
    },
    {
        "name": "Back-End Web",
        "languages": ["Databases", "Algorithms", "Web frameworks", "Server"]
    },
    {
        "name": "Mobile Development",
        "languages": ["Andriod SDK", "Flutter", "Kotlin"]
    },
    {
        "name": "Machine Learning",
        "languages": ["Supervised Learning", "Unsupervised Learning"]
    },
    {
        "name": "Deep Learning",
        "languages": ["Neural Network", "CNN", "RNN", "Computer Vision"]
    },
    {
        "name": "Data Mining",
        "languages": ["Python", "Pandas", "Numpy"]
    }
]