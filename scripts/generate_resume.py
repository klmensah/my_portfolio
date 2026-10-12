from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Lawrence-Mensah-Resume.pdf"
PUBLIC_COPY = ROOT / "public" / "Lawrence-Mensah-Resume.pdf"

INK = colors.HexColor("#171717")
MUTED = colors.HexColor("#5f5f5f")
GOLD = colors.HexColor("#c58a18")
PALE_GOLD = colors.HexColor("#fff7e6")
RULE = colors.HexColor("#ded8ce")


def project_block(title: str, stack: str, description: str, styles: dict) -> list:
    return [
        Paragraph(title, styles["project_title"]),
        Paragraph(stack, styles["stack"]),
        Paragraph(description, styles["body"]),
        Spacer(1, 3.5 * mm),
    ]


def build_resume() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_COPY.parent.mkdir(parents=True, exist_ok=True)

    base = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle(
            "Name", parent=base["Title"], fontName="Helvetica-Bold", fontSize=25,
            leading=28, textColor=INK, spaceAfter=2 * mm, alignment=TA_LEFT,
        ),
        "headline": ParagraphStyle(
            "Headline", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=10.5,
            leading=14, textColor=GOLD, spaceAfter=2 * mm,
        ),
        "links": ParagraphStyle(
            "Links", parent=base["Normal"], fontName="Helvetica", fontSize=8.5,
            leading=12, textColor=MUTED,
        ),
        "section": ParagraphStyle(
            "Section", parent=base["Heading2"], fontName="Helvetica-Bold", fontSize=9.5,
            leading=12, textColor=INK, spaceBefore=1 * mm, spaceAfter=2.2 * mm,
            borderPadding=(0, 0, 1.5 * mm, 0),
        ),
        "body": ParagraphStyle(
            "Body", parent=base["BodyText"], fontName="Helvetica", fontSize=8.6,
            leading=12.2, textColor=MUTED, spaceAfter=1.5 * mm,
        ),
        "project_title": ParagraphStyle(
            "ProjectTitle", parent=base["Heading3"], fontName="Helvetica-Bold", fontSize=9.2,
            leading=12, textColor=INK, spaceAfter=0.8 * mm,
        ),
        "stack": ParagraphStyle(
            "Stack", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=7.5,
            leading=10, textColor=GOLD, spaceAfter=1 * mm,
        ),
        "skill_title": ParagraphStyle(
            "SkillTitle", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8.3,
            leading=11, textColor=INK, spaceAfter=0.8 * mm,
        ),
        "skill_body": ParagraphStyle(
            "SkillBody", parent=base["Normal"], fontName="Helvetica", fontSize=8,
            leading=11.2, textColor=MUTED, spaceAfter=2.6 * mm,
        ),
        "education": ParagraphStyle(
            "Education", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8.6,
            leading=12, textColor=INK, spaceAfter=0.7 * mm,
        ),
    }

    doc = SimpleDocTemplate(
        str(OUTPUT), pagesize=A4, rightMargin=17 * mm, leftMargin=17 * mm,
        topMargin=14 * mm, bottomMargin=13 * mm,
        title="Lawrence Mensah - Software Developer Resume",
        author="Lawrence Mensah",
        subject="Software developer resume",
    )

    story = [
        Paragraph("LAWRENCE MENSAH", styles["name"]),
        Paragraph("SOFTWARE DEVELOPER | ODOO, TYPESCRIPT, NEXT.JS &amp; DOCKER", styles["headline"]),
        Paragraph(
            'Accra, Ghana&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;'
            '<link href="https://klmensah.github.io/my_portfolio/" color="#5f5f5f">Portfolio</link>'
            '&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;'
            '<link href="https://github.com/klmensah" color="#5f5f5f">GitHub</link>'
            '&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;'
            '<link href="https://www.linkedin.com/in/lawrence-mensah-3659a110a/" color="#5f5f5f">LinkedIn</link>',
            styles["links"],
        ),
        Spacer(1, 3.2 * mm),
        HRFlowable(width="100%", thickness=1, color=GOLD, spaceBefore=0, spaceAfter=4 * mm),
        Paragraph("PROFESSIONAL SUMMARY", styles["section"]),
        Paragraph(
            "Software developer building practical workflow and information-management systems for "
            "organisations with complex operational processes. Experienced with Dockerised Odoo and "
            "Next.js applications for correspondence intake, document routing, physical-file tracking, "
            "multi-branch administration, finance, attendance, and reporting.",
            styles["body"],
        ),
        Spacer(1, 1.5 * mm),
    ]

    left_column = [Paragraph("SELECTED PROJECTS", styles["section"])]
    left_column.extend(project_block(
            "Correspondence &amp; Document Engine",
            "ODOO 19 | POSTGRESQL | DOCKER",
            "Correspondence intake, minuting, task routing, work-product management, physical-file "
            "tracking, filing, assessments, and executive dashboards.",
            styles,
        ))
    left_column.extend(project_block(
            "Legal Workflow &amp; Physical File Tracking System",
            "NEXT.JS | TYPESCRIPT | PRISMA | POSTGRESQL | DOCKER",
            "Registry and practitioner workspaces with physical-file movement tracking, collaborative "
            "drafting, document export, task management, and operational dashboards.",
            styles,
        ))
    left_column.extend(project_block(
            "Multi-Branch Church Management System",
            "ODOO 19 | POSTGRESQL | DOCKER",
            "Multi-branch membership, attendance, programmes, giving, expenditure approvals, "
            "contributions, communications, and operational reporting.",
            styles,
        ))

    right_column = [
        Paragraph("TECHNICAL SKILLS", styles["section"]),
        Paragraph("Enterprise &amp; backend", styles["skill_title"]),
        Paragraph("Odoo, Python, Node.js, PostgreSQL, Prisma", styles["skill_body"]),
        Paragraph("Frontend", styles["skill_title"]),
        Paragraph("TypeScript, React, Next.js, Tailwind CSS", styles["skill_body"]),
        Paragraph("Delivery &amp; tooling", styles["skill_title"]),
        Paragraph("Docker, Caddy, Git, GitHub Actions", styles["skill_body"]),
        Spacer(1, 2 * mm),
        Paragraph("EDUCATION", styles["section"]),
        Paragraph("Bachelor of Science in Information Technology", styles["education"]),
        Paragraph("University of Ghana", styles["body"]),
        Spacer(1, 2 * mm),
        Paragraph("CORE FOCUS", styles["section"]),
        Paragraph(
            "Workflow automation<br/>Document management<br/>Enterprise applications<br/>"
            "Data-driven systems<br/>Operational reporting",
            styles["skill_body"],
        ),
    ]

    columns = Table([[left_column, right_column]], colWidths=[112 * mm, 57 * mm], hAlign="LEFT")
    columns.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (0, 0), 0),
        ("RIGHTPADDING", (0, 0), (0, 0), 8 * mm),
        ("LEFTPADDING", (1, 0), (1, 0), 7 * mm),
        ("RIGHTPADDING", (1, 0), (1, 0), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("LINEBEFORE", (1, 0), (1, 0), 0.7, RULE),
        ("BACKGROUND", (1, 0), (1, 0), PALE_GOLD),
        ("BOX", (1, 0), (1, 0), 0.4, RULE),
    ]))
    story.append(columns)

    def footer(canvas, document):
        canvas.saveState()
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.5)
        canvas.line(17 * mm, 9.5 * mm, A4[0] - 17 * mm, 9.5 * mm)
        canvas.setFont("Helvetica", 7)
        canvas.setFillColor(MUTED)
        canvas.drawString(17 * mm, 6 * mm, "Lawrence Mensah | Software Developer")
        canvas.drawRightString(A4[0] - 17 * mm, 6 * mm, "Portfolio resume")
        canvas.restoreState()

    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    PUBLIC_COPY.write_bytes(OUTPUT.read_bytes())


if __name__ == "__main__":
    build_resume()
