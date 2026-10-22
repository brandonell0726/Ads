"""Mezcla los efectos de Mixkit encima del audio del anuncio renderizado (música incluida)."""
import subprocess, sys
from pathlib import Path
base = Path(__file__).parent
video = Path(sys.argv[1]); salida = Path(sys.argv[2])
# (archivo, inicio en el anuncio s, recorte s, volumen, fundido de salida s)
efectos = [
    ("1535", 0.00, 1.75, 0.55, 0.4),   # contacto y arranque
    ("1538", 1.55, 3.6, 0.50, 0.8),    # coche que pasa rápido (dron, conduce)
    ("788",  1.70, 2.2, 0.45, 1.0),    # impacto en la caída
    ("1484", 6.55, 0.9, 0.45, 0.3),    # barrido hacia la ciudad
    ("1554", 6.86, 5.1, 0.30, 0.8),    # ciudad
    ("3115", 11.75, 0.6, 0.55, 0.2),   # barrido hacia el parque
    ("1232", 12.0, 3.4, 0.30, 0.6),    # hojas, carrera
    ("1469", 15.15, 1.3, 0.45, 0.3),   # barrido hacia la pista
    ("2161", 17.40, 1.2, 0.80, 0.4),   # golpe del saque
    ("1474", 18.75, 1.1, 0.40, 0.4),   # derecha
    ("166",  20.52, 0.6, 0.45, 0.2),   # ráfaga
    ("166",  20.95, 0.6, 0.45, 0.2),
    ("166",  21.38, 0.6, 0.45, 0.2),
    ("166",  21.81, 0.6, 0.45, 0.2),
    ("1474", 22.15, 1.6, 0.35, 0.6),   # las cuatro juntas
    ("788",  25.68, 2.6, 0.40, 1.4),   # cierre
]
cmd = ["ffmpeg", "-v", "error", "-y", "-i", str(video)]
for f, *_ in efectos:
    cmd += ["-i", str(base / "sfx" / f"{f}.mp3")]
partes, etiquetas = [], ["[0:a]"]
for i, (f, t, dur, vol, fo) in enumerate(efectos, start=1):
    ms = int(t * 1000)
    partes.append(f"[{i}:a]atrim=0:{dur},asetpts=PTS-STARTPTS,afade=t=out:st={max(0, dur - fo)}:d={fo},"
                  f"volume={vol},adelay={ms}|{ms},aformat=channel_layouts=stereo[e{i}]")
    etiquetas.append(f"[e{i}]")
filtro = ";".join(partes) + f";{''.join(etiquetas)}amix=inputs={len(etiquetas)}:normalize=0:duration=first,alimiter=limit=0.95[a]"
cmd += ["-filter_complex", filtro, "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "256k",
        "-movflags", "+faststart", str(salida)]
subprocess.run(cmd, check=True)
print(salida)
