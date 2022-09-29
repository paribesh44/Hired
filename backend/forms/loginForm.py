from fastapi import Form


class LoginForm:
    def __init__(
        self,
        username: str = Form(...),
        password: str = Form(...),
        # remember_me: Union[bool, None] = Form(...),
    ):
        self.username = username
        self.password = password
        # self.remember_me = remember_me
