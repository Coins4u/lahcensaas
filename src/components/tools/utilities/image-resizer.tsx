"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ToolShell } from "../ToolShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Download, RefreshCw } from "lucide-react";

export function ImageResizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [width, setWidth] = useState(800);
  const [quality, setQuality] = useState(0.85);
  const [fileName, setFileName] = useState("resized-image.jpg");

  const renderImage = useCallback(() => {
    const img = imageRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;

    const targetWidth = Math.max(1, width);
    const ratio = img.height / img.width;
    const h = Math.round(targetWidth * ratio);
    canvas.width = targetWidth;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, targetWidth, h);
    setPreview(canvas.toDataURL("image/jpeg", Math.min(1, Math.max(0.1, quality))));
  }, [width, quality]);

  useEffect(() => {
    if (imageRef.current) renderImage();
  }, [renderImage]);

  const processFile = (file: File) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      imageRef.current = img;
      setFileName(`resized-${file.name.replace(/\.[^.]+$/, "")}.jpg`);
      renderImage();
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const download = () => {
    if (!preview) return;
    const a = document.createElement("a");
    a.href = preview;
    a.download = fileName;
    a.click();
  };

  return (
    <ToolShell
      actions={
        <>
          <Button size="sm" variant="outline" onClick={renderImage} disabled={!imageRef.current}>
            <RefreshCw className="h-4 w-4" /> Apply
          </Button>
          <Button size="sm" onClick={download} disabled={!preview}>
            <Download className="h-4 w-4" /> Download
          </Button>
        </>
      }
    >
      <input
        type="file"
        accept="image/*"
        onChange={(e) => e.target.files?.[0] && processFile(e.target.files[0])}
        className="text-sm"
      />
      <div className="flex flex-wrap gap-4">
        <Input
          label="Target width (px)"
          type="number"
          min={1}
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="w-40"
        />
        <Input
          label="JPEG quality (0–1)"
          type="number"
          step={0.05}
          min={0.1}
          max={1}
          value={quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          className="w-40"
        />
      </div>
      <canvas ref={canvasRef} className="hidden" />
      {preview && (
        <img src={preview} alt="Preview" className="max-h-64 rounded-lg border border-slate-200" />
      )}
    </ToolShell>
  );
}
