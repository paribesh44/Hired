from fastapi import APIRouter, Depends, status
from forms import cv
from fpdf import FPDF, HTMLMixin


router = APIRouter(
    tags=['CV Maker'],
    prefix="/cvmaker"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createCV(form: cv.CVForm = Depends()):
    cv(form)
    return form


def cv(cv_data):
    html = f"""
        <section>
            <font size="18"><p align="center"><b>{cv_data.name}</b></p></font>
            <p align="center">Email: {cv_data.email}</p>
            <p align="center">Contact: {cv_data.mobile}</p>
            <p align="center">LinkedIn: {cv_data.linkedin}</p>
            <p align="center">Github: {cv_data.github}</p>
        </section>
        <section>
            <font size="18"><p><b>Skills</b></p></font>
            <p>&nbsp;&nbsp;&nbsp;{cv_data.skills}</p>
        </section>
        <br>
        <section>
            <font size="18"><p><b>Experience</b></p></font>
            <p><b>&nbsp;&nbsp;&nbsp;{cv_data.organization}, {cv_data.position}</b> ({cv_data.duration})</p>
            <p>&nbsp;&nbsp;&nbsp;{cv_data.experience_description}</p>
        </section>
        <br>
        <section>
            <font size="18"><p><b>Project</b></p></font>
            <p><b>&nbsp;&nbsp;&nbsp;{cv_data.project_title}</b> ({cv_data.project_link})</p>
            <p>&nbsp;&nbsp;&nbsp;{cv_data.project_description}</p>
        </section>
        <br>
        <section>
            <font size="18"><p><b>Education</b></p></font>
            <p><b>&nbsp;&nbsp;&nbsp;{cv_data.university}</b> ({cv_data.qualification}, {cv_data.year})</p>
            <p>&nbsp;&nbsp;&nbsp;{cv_data.education_description}</p>
        </section>
        <br>
        <section>
            <font size="18"><p><b>Extra-Curriculars/Activities</b></p></font>
            <ul>
                <li><b>Languages:</b> {cv_data.languages}</li>
                <li><b>Hobbies:</b> {cv_data.hobbies}</li>
                <li>{cv_data.achievement}</li>
            </ul>
        </section>
    """

    class MyFPDF(FPDF, HTMLMixin):
        pass
    
    # remove space from the name
    def cv_name(name):
        return "".join(name.split())

    pdf = MyFPDF('P', 'mm')
    pdf.add_page()
    pdf.write_html(html)
    pdf.output(f"static/cv/cv_{cv_name(cv_data.name)}.pdf", "F")

    # def cv(cv_data):
    
    # title = ['20,000 Leagues Under the Sea']
    # class PDF(FPDF):
    #     def header(self):
    #         # font
    #         self.set_font('helvetica', 'B', 15)
    #         # Calculate width of title and position
    #         title_w = self.get_string_width(title[1]) + 6
    #         doc_w = self.w
    #         self.set_x((doc_w - title_w) / 2)
    #         # Title
    #         self.cell(title_w, 10, title[1], ln=1, align='C')
    #         # Line break
    #         self.ln(10)

    # # Create a PDF object
    # pdf = PDF('P', 'mm', 'Letter')

    # # metadata
    # pdf.set_title(title)

    # # Add Page
    # pdf.add_page()

    # pdf.output('pdf_1.pdf')