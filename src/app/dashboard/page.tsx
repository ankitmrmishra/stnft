"use client";

import type React from "react";

import { useState, useCallback } from "react";
import {
  Upload,
  ImageIcon,
  X,
  Check,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  status: "uploading" | "success" | "error";
}

export default function Dashboard() {
  const [image, setImage] = useState<UploadedImage | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isMinting, setIsMinting] = useState(false);

  const handleFileSelect = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    if (!file) {
      return;
    }
    if (!file.type.startsWith("image/")) return;

    const newImage: UploadedImage = {
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: URL.createObjectURL(file),
      status: "uploading" as const,
    };

    setImage(newImage);

    // Simulate upload process
    setTimeout(
      () => {
        setImage((prev) =>
          prev
            ? { ...prev, status: Math.random() > 0.1 ? "success" : "error" }
            : null,
        );
      },
      1000 + Math.random() * 2000,
    );
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      handleFileSelect(e.dataTransfer.files);
    },
    [handleFileSelect],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const removeImage = useCallback(() => {
    if (image) {
      URL.revokeObjectURL(image.preview);
      setImage(null);
      setIsMinting(false);
    }
  }, [image]);

  const handleMintNFT = useCallback(async () => {
    if (!image || image.status !== "success") return;

    setIsMinting(true);

    // Simulate NFT minting process
    setTimeout(() => {
      setIsMinting(false);
      alert("NFT minted successfully! 🎉");
    }, 3000);
  }, [image]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
            <ImageIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            NFT Image Upload
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Upload your image and mint it as an NFT. Support for JPG, PNG, GIF,
            and WebP formats.
          </p>
        </div>

        {/* Upload Area - Only show if no image uploaded */}
        {!image && (
          <Card className="mb-8">
            <div
              className={`relative rounded-xl border-2 border-dashed p-12 text-center transition-all duration-200 ${
                isDragOver
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-300 hover:border-blue-400 hover:bg-slate-50"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(e.target.files)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />

              <div className="space-y-4">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <Upload className="h-10 w-10 text-blue-600" />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    Drop your image here
                  </h3>
                  <p className="mb-4 text-slate-600">
                    or click to browse from your device
                  </p>
                  <Button
                    size="lg"
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Choose Image
                  </Button>
                </div>

                <p className="text-sm text-slate-500">
                  Supports: JPG, PNG, GIF, WebP • Max size: 10MB
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Single Image Display */}
        {image && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">
                Your Image
              </h2>
              <Button
                variant="outline"
                onClick={removeImage}
                className="bg-transparent text-slate-600 hover:text-slate-900"
              >
                <X className="mr-2 h-4 w-4" />
                Remove Image
              </Button>
            </div>

            <Card className="mx-auto max-w-2xl overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={image.preview || "/placeholder.svg"}
                  alt="Uploaded image"
                  fill
                  className="size-10 object-cover"
                />

                {/* Upload Status */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
                      image.status === "uploading"
                        ? "bg-blue-100 text-blue-800"
                        : image.status === "success"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {image.status === "uploading" && (
                      <>
                        <div className="h-3 w-3 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                        Uploading...
                      </>
                    )}
                    {image.status === "success" && (
                      <>
                        <Check className="h-3 w-3" />
                        Ready to Mint
                      </>
                    )}
                    {image.status === "error" && (
                      <>
                        <AlertCircle className="h-3 w-3" />
                        Upload Failed
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-medium text-slate-900">
                      {image.file.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {(image.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>

                {image.status === "success" && (
                  <div className="space-y-3">
                    <Button
                      onClick={handleMintNFT}
                      disabled={isMinting}
                      className="w-full bg-green-600"
                    >
                      {isMinting ? (
                        <>
                          <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Minting NFT...
                        </>
                      ) : (
                        <>Mint as NFT</>
                      )}
                    </Button>
                    <p className="text-center text-xs text-slate-500">
                      Transform your image into a unique digital collectible
                    </p>
                  </div>
                )}

                {image.status === "error" && (
                  <Button
                    onClick={() => setImage(null)}
                    variant="outline"
                    className="w-full"
                  >
                    Try Again
                  </Button>
                )}
              </div>
            </Card>
          </div>
        )}

        {/* Empty State */}
        {!image && (
          <div className="py-12 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <ImageIcon className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-slate-900">
              Ready to create your NFT
            </h3>
            <p className="text-slate-600">Upload an image to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}
