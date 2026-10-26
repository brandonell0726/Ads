import json, subprocess, sys, os
# usage: build.py edl.json out.mp4
# Run in the Higgsfield sandbox from ~/bthnys/edit, with the clips in clips/<name>.mp4,
# the track at ~/bthnys/music/371.mp3 and the beat grid (musica.json "kicks") at ~/bthnys/music/grid.json.
edl=json.load(open(sys.argv[1])); out=sys.argv[2]
FPS=30
g=json.load(open(os.path.expanduser('~/bthnys/music/grid.json')))
kicks=g['kicks']; T=g['T']; AS=kicks[0]-0.010
def beat_time(b):  # b in beats (float) from the drop
    i=int(b); f=b-i
    if i+1<len(kicks): t=kicks[i]+f*(kicks[i+1]-kicks[i])
    else: t=kicks[-1]+(b-(len(kicks)-1))*T
    return t-AS
os.makedirs('segs',exist_ok=True)
cur=0.0; frames=[]; lst=open('segs/list.txt','w')
for n,s in enumerate(edl['shots']):
    end=cur+s['beats']
    f0=round(beat_time(cur)*FPS) if cur>0 else 0
    f1=round(beat_time(end)*FPS)
    if n==len(edl['shots'])-1: f1=round((beat_time(end)+edl.get('tail_s',0.4))*FPS)
    nf=f1-f0
    seg=f'segs/s{n:02d}.mp4'
    subprocess.run(['ffmpeg','-v','error','-y','-ss',str(s['off']),'-i',f"clips/{s['clip']}.mp4",'-vf','scale=1080:-2:flags=lanczos,crop=1080:1920,fps=30,setpts=N/(30*TB),setsar=1','-frames:v',str(nf),'-r','30','-video_track_timescale','15360','-c:v','libx264','-crf','16','-preset','medium','-pix_fmt','yuv420p','-an',seg],check=True)
    lst.write(f"file 's{n:02d}.mp4'\n"); frames.append((s['clip'],f0,nf)); cur=end
lst.close()
tail=edl.get('tail_s',0.4)
total_frames=sum(f[2] for f in frames)
subprocess.run(['ffmpeg','-v','error','-y','-f','concat','-safe','0','-i','segs/list.txt','-vf','setpts=N/(30*TB)','-r','30','-fps_mode','cfr','-c:v','libx264','-crf','16','-preset','medium','-pix_fmt','yuv420p','video.mp4'],check=True)
dur=total_frames/FPS
subprocess.run(['ffmpeg','-v','error','-y','-ss',f'{AS:.3f}','-t',f'{dur:.3f}','-i',os.path.expanduser('~/bthnys/music/371.mp3'),'-af',f"afade=t=out:st={dur-edl.get('fade_s',0.7):.3f}:d={edl.get('fade_s',0.7)},volume=-1.5dB,alimiter=limit=0.89:level=disabled,aresample=48000",'-c:a','aac','-b:a','192k','audio.m4a'],check=True)
subprocess.run(['ffmpeg','-v','error','-y','-i','video.mp4','-i','audio.m4a','-map','0:v','-map','1:a','-c:v','copy','-c:a','copy','-shortest','-movflags','+faststart',out],check=True)
print('shots',len(frames),'frames',total_frames,'dur',round(dur,3))
for c,f0,nf in frames: print(c,f0,nf)
