from pathlib import Path
import shutil

from PIL import Image, ImageDraw
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
PUBLIC = ROOT / "public" / "downloads"
TMP = ROOT / "tmp" / "pdfs"
PDF = OUT / "checklist-resiliencia-techops.pdf"

EMERALD = HexColor("#059669")
EMERALD_DARK = HexColor("#047857")
CYAN = HexColor("#0891b2")
INK = HexColor("#0f172a")
SLATE = HexColor("#475569")
LIGHT = HexColor("#e2e8f0")
PALE = HexColor("#ecfdf5")
WHITE = HexColor("#ffffff")


def wrap(text, font, size, max_width):
    words, lines, current = text.split(), [], ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def text(c, value, x, y, size=10, color=INK, font="Helvetica", width=None, leading=None):
    c.setFillColor(color)
    c.setFont(font, size)
    lines = wrap(value, font, size, width) if width else [value]
    leading = leading or size * 1.35
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def header(c, page, section):
    w, h = A4
    c.setStrokeColor(LIGHT)
    c.line(42, h - 42, w - 42, h - 42)
    text(c, "Tech", 42, h - 31, 13, INK, "Helvetica-Bold")
    text(c, "OPS", 72, h - 31, 13, EMERALD, "Helvetica-Bold")
    c.setFillColor(SLATE)
    c.setFont("Helvetica", 8)
    c.drawRightString(w - 42, h - 31, section)
    c.drawRightString(w - 42, 28, f"{page} / 4")


def footer(c):
    c.setFillColor(SLATE)
    c.setFont("Helvetica", 8)
    c.drawString(42, 28, "Checklist de resiliencia operativa · TechOPS")


def draw_mark_pdf(c, x, y, size):
    def polygon(points, color):
        path = c.beginPath()
        first_x, first_y = points[0]
        path.moveTo(x + first_x * size / 96, y + (96 - first_y) * size / 96)
        for px, py in points[1:]:
            path.lineTo(x + px * size / 96, y + (96 - py) * size / 96)
        path.close()
        c.setFillColor(HexColor(color))
        c.drawPath(path, stroke=0, fill=1)

    polygon([(13, 18), (46, 18), (40, 36), (22, 36)], "#48efbc")
    polygon([(50, 18), (83, 18), (74, 36), (56, 36)], "#1fcbb2")
    polygon([(46, 18), (50, 18), (56, 36), (40, 36)], "#6dffda")
    polygon([(40, 36), (56, 36), (56, 75), (48, 88), (40, 75)], "#0fb79e")
    polygon([(48, 36), (56, 36), (56, 75), (48, 88)], "#087e8d")
    polygon([(56, 36), (74, 36), (68, 47), (56, 47)], "#076f83")


def checkbox(c, number, title, body, x, y, width):
    c.setStrokeColor(EMERALD)
    c.setLineWidth(1)
    c.roundRect(x, y - 11, 12, 12, 2, stroke=1, fill=0)
    text(c, f"{number:02d}", x + 21, y, 8, EMERALD_DARK, "Helvetica-Bold")
    text(c, title, x + 48, y, 9.5, INK, "Helvetica-Bold", width - 48)
    lines = wrap(body, "Helvetica", 8.2, width - 48)
    by = y - 13
    for line in lines:
        text(c, line, x + 48, by, 8.2, SLATE)
        by -= 10
    return min(by - 9, y - 49)


def checklist_page(c, page, section, intro, items):
    w, h = A4
    header(c, page, section)
    y = h - 83
    y = text(c, section, 42, y, 22, INK, "Helvetica-Bold", w - 84, 27)
    y = text(c, intro, 42, y - 7, 9.5, SLATE, "Helvetica", w - 84, 14) - 15
    for number, title, body in items:
        y = checkbox(c, number, title, body, 42, y, w - 84)
    footer(c)
    c.showPage()


def make_pdf():
    OUT.mkdir(parents=True, exist_ok=True)
    PUBLIC.mkdir(parents=True, exist_ok=True)
    TMP.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(PDF), pagesize=A4, pageCompression=1)
    c.setTitle("Checklist de resiliencia operativa para CTOs")
    c.setAuthor("TechOPS")
    w, h = A4

    c.setFillColor(INK)
    c.rect(0, 0, w, h, stroke=0, fill=1)
    draw_mark_pdf(c, w - 124, h - 128, 72)
    text(c, "Tech", 48, h - 62, 18, WHITE, "Helvetica-Bold")
    text(c, "OPS", 90, h - 62, 18, HexColor("#34d399"), "Helvetica-Bold")
    text(c, "CHECKLIST PARA CTOs Y LÍDERES DE IT", 48, h - 172, 10, HexColor("#67e8f9"), "Helvetica-Bold")
    y = text(c, "Resiliencia operativa", 48, h - 215, 35, WHITE, "Helvetica-Bold", 430, 40)
    y = text(c, "30 controles para revisar observabilidad, respuesta a incidentes, plataforma, capacidad y continuidad.", 48, y - 18, 14, HexColor("#cbd5e1"), "Helvetica", 440, 21)
    c.setFillColor(HexColor("#13241d"))
    c.roundRect(48, 176, w - 96, 190, 14, stroke=0, fill=1)
    text(c, "Cómo utilizarlo", 68, 335, 13, WHITE, "Helvetica-Bold")
    instructions = [
        "1. Reúne a responsables de plataforma, desarrollo y seguridad.",
        "2. Marca cada control: sí, parcial, no o no aplica.",
        "3. Registra evidencia; evita evaluar por percepción.",
        "4. Selecciona tres prioridades para los próximos 30 días.",
    ]
    iy = 305
    for item in instructions:
        text(c, item, 68, iy, 10, HexColor("#d1fae5"), "Helvetica", 430)
        iy -= 29
    text(c, "Este material orienta una conversación interna; no sustituye una evaluación técnica del entorno.", 48, 105, 8.5, HexColor("#94a3b8"), "Helvetica", 430)
    text(c, "techops · Guatemala y Latinoamérica", 48, 48, 8.5, HexColor("#64748b"))
    c.showPage()

    items_1 = [
        (1, "Objetivos de servicio definidos", "Los servicios críticos tienen objetivos de disponibilidad, latencia y error acordados con el negocio."),
        (2, "Telemetría esencial cubierta", "Métricas, logs y trazas cubren el flujo crítico de extremo a extremo."),
        (3, "Dashboards orientados a decisiones", "Las vistas responden estado, impacto y causa probable; no solo muestran infraestructura."),
        (4, "Alertas accionables", "Cada alerta tiene responsable, severidad, contexto y una acción inicial conocida."),
        (5, "Correlación entre señales", "El equipo puede pasar de una alerta a logs y trazas relacionados sin búsquedas manuales extensas."),
        (6, "Cobertura de dependencias", "Servicios externos, colas, bases de datos y red están incluidos en la visión operativa."),
        (7, "Retención y costos controlados", "La retención de telemetría responde a necesidades reales y tiene límites de costo."),
        (8, "Propiedad de las señales", "Existe un responsable para mantener dashboards, reglas y fuentes de datos."),
        (9, "Revisión periódica", "Las alertas y dashboards obsoletos se eliminan o ajustan de forma programada."),
        (10, "Acceso seguro a observabilidad", "Los permisos se asignan por rol y la información sensible se protege."),
    ]
    checklist_page(c, 2, "01 · Observabilidad", "Marca cada control y anota la evidencia que respalda la respuesta.", items_1)

    items_2 = [
        (11, "Roles de incidente claros", "Se conocen las responsabilidades de coordinación, diagnóstico, comunicación y recuperación."),
        (12, "Escalamiento documentado", "Los contactos, horarios y criterios de escalamiento están disponibles y actualizados."),
        (13, "Runbooks accesibles", "Los incidentes frecuentes tienen pasos iniciales claros y verificables."),
        (14, "Comunicación con negocio", "Existe un formato para informar impacto, progreso y próximos pasos sin jerga innecesaria."),
        (15, "Registro cronológico", "Las decisiones y cambios realizados durante un incidente quedan registrados."),
        (16, "Postmortem sin culpables", "Los incidentes relevantes producen acciones asignadas y fechas de seguimiento."),
        (17, "Cambios trazables", "Cada despliegue puede vincularse con autor, versión, aprobación y resultado."),
        (18, "Reversión probada", "Los servicios críticos tienen mecanismos de rollback conocidos y practicados."),
        (19, "Guardias sostenibles", "La carga de alertas y escalamiento no depende de una sola persona."),
        (20, "Ejercicios de respuesta", "El equipo practica escenarios críticos antes de necesitarlos en producción."),
    ]
    checklist_page(c, 3, "02 · Incidentes y cambio", "Evalúa tanto la documentación como la capacidad real de ejecutar bajo presión.", items_2)

    header(c, 4, "03 · Plataforma, capacidad y continuidad")
    y = h - 83
    y = text(c, "Plataforma, capacidad y continuidad", 42, y, 21, INK, "Helvetica-Bold", w - 84, 26)
    items_3 = [
        (21, "Infraestructura reproducible", "La configuración puede reconstruirse desde código o procedimientos versionados."),
        (22, "Configuración consistente", "Los entornos reducen diferencias manuales y validan cambios antes de producción."),
        (23, "Límites y solicitudes definidos", "Los componentes tienen recursos y políticas alineados con su comportamiento real."),
        (24, "Capacidad validada", "Las pruebas representan flujos y picos relevantes para el negocio."),
        (25, "Cuellos de botella conocidos", "El equipo distingue límites de aplicación, datos, red e infraestructura."),
        (26, "Dependencias críticas inventariadas", "Se conoce qué falla cuando cada dependencia no está disponible."),
        (27, "Copias verificadas", "Los respaldos se restauran periódicamente y se mide el tiempo de recuperación."),
        (28, "Objetivos de recuperación", "RTO y RPO están definidos para los servicios realmente críticos."),
        (29, "Continuidad probada", "Los procedimientos de recuperación se ejercitan y actualizan con evidencia."),
        (30, "Conocimiento transferido", "La operación no depende de conocimiento tácito concentrado en pocas personas."),
    ]
    y -= 12
    for item in items_3:
        y = checkbox(c, *item, 42, y, w - 84)
    c.setFillColor(PALE)
    c.roundRect(42, 63, w - 84, 93, 10, stroke=0, fill=1)
    text(c, "Plan de 30 días", 58, 134, 11, EMERALD_DARK, "Helvetica-Bold")
    text(c, "1. Prioridad: ____________________   Responsable: __________   Fecha: ________", 58, 113, 8.5, INK)
    text(c, "2. Prioridad: ____________________   Responsable: __________   Fecha: ________", 58, 94, 8.5, INK)
    text(c, "3. Prioridad: ____________________   Responsable: __________   Fecha: ________", 58, 75, 8.5, INK)
    footer(c)
    c.save()
    shutil.copy2(PDF, PUBLIC / PDF.name)


def make_favicons():
    for size in (16, 32, 64):
        scale = 8
        img = Image.new("RGBA", (size * scale, size * scale), (0, 0, 0, 0))
        d = ImageDraw.Draw(img)
        s = size * scale / 96

        def polygon(points, fill):
            d.polygon([(round(px * s), round(py * s)) for px, py in points], fill=fill)

        d.rounded_rectangle((round(2 * s), round(2 * s), round(94 * s), round(94 * s)), radius=round(20 * s), fill="#07140f")
        polygon([(13, 18), (46, 18), (40, 36), (22, 36)], "#48efbc")
        polygon([(50, 18), (83, 18), (74, 36), (56, 36)], "#1fcbb2")
        polygon([(46, 18), (50, 18), (56, 36), (40, 36)], "#6dffda")
        polygon([(40, 36), (56, 36), (56, 75), (48, 88), (40, 75)], "#0fb79e")
        polygon([(48, 36), (56, 36), (56, 75), (48, 88)], "#087e8d")
        polygon([(56, 36), (74, 36), (68, 47), (56, 47)], "#076f83")
        img.resize((size, size), Image.Resampling.LANCZOS).save(ROOT / "public" / f"favicon-{size}.png")


if __name__ == "__main__":
    make_pdf()
    make_favicons()
    print(PDF)
