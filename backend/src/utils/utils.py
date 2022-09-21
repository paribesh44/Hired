from datetime import timedelta
import emails
import logging
from pathlib import Path
from emails.template import JinjaTemplate
from typing import Dict, Any
from src import JWTtokens

from src.models.user import User
from ..core import keys


async def send_email(email_to: str,
                     subject_template: str = "",
                     html_template: str = "bdkjasbd",
                     environment: Dict[str, Any] = {},
                     ):
    assert True, "no provided configuration for email variables"
    message = emails.Message(
        subject=JinjaTemplate(subject_template),
        html=JinjaTemplate(html_template),
        mail_from=("Hired"),
    )
    smtp_options = {"host": keys.Settings.Mailhog.SMTP_HOST,
                    "port": keys.Settings.Mailhog.SMTP_PORT}
    if keys.Settings.Mailhog.SMTP_TLS:
        smtp_options["tls"] = True
    if keys.Settings.Mailhog.SMTP_USER:
        smtp_options["user"] = keys.Settings.Mailhog.SMTP_USER
    if keys.Settings.Mailhog.SMTP_PASSWORD:
        smtp_options["password"] = keys.Settings.Mailhog.SMTP_PASSWORD

    response = message.send(to=email_to,
                            render=environment, smtp=smtp_options)

    logging.info(f"send email result: {response}")


async def send_verification_email(user: User) -> None:
    project_name = "Hired"
    subject = f"{project_name} - Verification Email"
    with open("src/templates/verify-account.html") as f:
        template_str = f.read()
    verification_token = JWTtokens.create_access_token(
        data={"sub": user.email}, expires_delta=timedelta(hours=24))

    # server_host = settings.FRONTEND_URL_BASE

    link = f"http://localhost:8000/verify?token={verification_token}"
    await send_email(
        email_to=user.email,
        subject_template=subject,
        html_template=template_str,
        environment={
            "name": user.email,
            "link": link,
            # "frontbase": settings.FRONTEND_URL_BASE,
        },
    )
