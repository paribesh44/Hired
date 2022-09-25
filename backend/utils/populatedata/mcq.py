from typing import List
from pydantic import Json

mcqs: List[Json] = [
    {
        "question": "what is html",
        "answers": ["html", "css", "js", "none"],
        "correct_answer": "html",
        "target_field_id": 1
    },
    {
        "question": "what is css",
        "answers": ["html", "css", "js", "none"],
        "correct_answer": "css",
        "target_field_id": 1
    },
    {
        "question": "what is js",
        "answers": ["html", "css", "js", "none"],
        "correct_answer": "js",
        "target_field_id": 1
    },
    {
        "question": "what is sql",
        "answers": ["sql", "fastapi", "server", "django"],
        "correct_answer": "sql",
        "target_field_id": 2
    },
    {
        "question": "what is fastapi",
        "answers": ["sql", "fastapi", "server", "django"],
        "correct_answer": "fastapi",
        "target_field_id": 2
    },
    {
        "question": "what is django",
        "answers": ["sql", "fastapi", "server", "django"],
        "correct_answer": "django",
        "target_field_id": 2
    }
]