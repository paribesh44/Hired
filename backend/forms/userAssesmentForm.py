from fastapi import Form
from typing import List, Optional

class UserAssignmentForm:
    def __init__(
        self,
        target_field_id: int = Form(1),
        chosen_answers: List[str] = Form(["css", "html", "js"]),
        visibility: bool = Form(False)
    ):
        self.target_field_id = target_field_id
        self.chosen_answers = chosen_answers
        self.visibility = visibility
