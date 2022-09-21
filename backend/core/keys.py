import enum


class Settings():
    class UserType(enum.Enum):
        JOBSEEKER: int = 1
        COMPANIES: int = 2

    class GoogleAuthKeys():
        GOOGLE_CLIENT_ID = "175650401622-onqiv8uq290uloo8ql0ps1a02mi1vjoe.apps.googleusercontent.com"
        GOOGLE_CLIENT_SECRET = "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"

    class JWTtokenKeys():
        SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
        ALGORITHM = "HS256"

    class Mailhog():
        SMTP_TLS = False
        SMTP_PORT = 1025
        SMTP_HOST = "localhost"
        SMTP_USER = "smptuser"
        SMTP_PASSWORD = "password"
