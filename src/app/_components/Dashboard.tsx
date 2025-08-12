"use client";

import { useState } from "react";
import {
  Plus,
  Sparkles,
  X,
  BookOpen,
  Palette,
  Zap,
  Globe,
  Hash,
} from "lucide-react";
import Image from "next/image";

import { Button } from "~/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from "~/components/ui/sidebar";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getUserInitials } from "./navbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import Logo from "../../../public/favicon.svg";

function CreateStoryDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    style: "",
    mood: "",
    setting: "",
    characters: "",
    tags: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Story data:", formData);
  //   // Here you would typically send the data to your API
  //   setIsOpen(false);
  //   // Reset form
  //   setFormData({
  //     title: "",
  //     description: "",
  //     genre: "",
  //     style: "",
  //     mood: "",
  //     setting: "",
  //     characters: "",
  //     tags: "",
  //   });
  // };

  // This is the updated part!
  const handleSubmitimagegen = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setGeneratedImageUrl(null);
    setIsOpen(false); // Close the dialog immediately

    try {
      const response = await fetch("/api/gen-images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Something went wrong");
      }

      setGeneratedImageUrl(result.imageUrl);
      // Reset form after successful submission
      setFormData({
        title: "",
        description: "",
        genre: "",
        style: "",
        mood: "",
        setting: "",
        characters: "",
        tags: "",
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => handleSubmitimagegen}
          size="lg"
          className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 font-semibold text-white shadow-lg transition-all duration-200 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-xl"
        >
          <Plus className="mr-2 h-5 w-5" />
          Create Story
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <BookOpen className="h-6 w-6 text-emerald-600" />
            Create Your Story
          </DialogTitle>
          <DialogDescription>
            Tell us your story and we'll help you generate stunning images. Be
            as detailed as possible for better results.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmitimagegen} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-base font-medium">
              Story Title *
            </Label>
            <Input
              id="title"
              placeholder="Enter your story title..."
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              required
              className="text-lg"
            />
          </div>

          {/* Description/Story */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-base font-medium">
              Story Description *
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your story in detail. Include plot, scenes, characters, and any specific visual elements you want to see in the generated images..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              required
              rows={6}
              className="resize-none text-base leading-relaxed"
            />
            <p className="text-sm text-gray-500">
              The more detailed your description, the better the AI can
              understand and visualize your story.
            </p>
          </div>

          {/* Genre and Style */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="genre" className="text-base font-medium">
                Genre
              </Label>
              <Select
                value={formData.genre}
                onValueChange={(value) => handleInputChange("genre", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="sci-fi">Science Fiction</SelectItem>
                  <SelectItem value="mystery">Mystery</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="horror">Horror</SelectItem>
                  <SelectItem value="historical">Historical</SelectItem>
                  <SelectItem value="contemporary">Contemporary</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="style" className="text-base font-medium">
                Art Style
              </Label>
              <Select
                value={formData.style}
                onValueChange={(value) => handleInputChange("style", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realistic">Realistic</SelectItem>
                  <SelectItem value="cartoon">Cartoon/Anime</SelectItem>
                  <SelectItem value="painterly">Painterly</SelectItem>
                  <SelectItem value="digital-art">Digital Art</SelectItem>
                  <SelectItem value="watercolor">Watercolor</SelectItem>
                  <SelectItem value="oil-painting">Oil Painting</SelectItem>
                  <SelectItem value="sketch">Sketch</SelectItem>
                  <SelectItem value="abstract">Abstract</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mood and Setting */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mood" className="text-base font-medium">
                Mood/Atmosphere
              </Label>
              <Select
                value={formData.mood}
                onValueChange={(value) => handleInputChange("mood", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select mood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mysterious">Mysterious</SelectItem>
                  <SelectItem value="peaceful">Peaceful</SelectItem>
                  <SelectItem value="dramatic">Dramatic</SelectItem>
                  <SelectItem value="whimsical">Whimsical</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="bright">Bright</SelectItem>
                  <SelectItem value="romantic">Romantic</SelectItem>
                  <SelectItem value="adventurous">Adventurous</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="setting" className="text-base font-medium">
                Setting/Environment
              </Label>
              <Input
                id="setting"
                placeholder="e.g., Medieval castle, Space station, Forest..."
                value={formData.setting}
                onChange={(e) => handleInputChange("setting", e.target.value)}
              />
            </div>
          </div>

          {/* Characters */}
          <div className="space-y-2">
            <Label htmlFor="characters" className="text-base font-medium">
              Key Characters
            </Label>
            <Input
              id="characters"
              placeholder="Describe main characters, their appearance, clothing, etc..."
              value={formData.characters}
              onChange={(e) => handleInputChange("characters", e.target.value)}
            />
            <p className="text-sm text-gray-500">
              Include physical descriptions, clothing, expressions, and poses
              you want to see.
            </p>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label htmlFor="tags" className="text-base font-medium">
              Additional Tags
            </Label>
            <Input
              id="tags"
              placeholder="e.g., magical, futuristic, vintage, colorful, minimalist..."
              value={formData.tags}
              onChange={(e) => handleInputChange("tags", e.target.value)}
            />
            <p className="text-sm text-gray-500">
              Add any additional visual elements, colors, or themes you want to
              emphasize.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
            >
              <Zap className="mr-2 h-4 w-4" />
              Generate Story Images
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function AppSidebar() {
  const { data: session } = useSession();
  return (
    <Sidebar className="border-r border-slate-200 bg-white">
      <SidebarHeader className="border-b border-slate-100 p-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src={Logo || "/placeholder.svg"}
            alt=""
            width={100}
            height={100}
            className="size-8"
          />
          <span className="text-xl font-semibold text-gray-900">StoryMint</span>
        </div>

        {/* User Profile */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src={session?.user?.image || ""} />
              <AvatarFallback>
                {session?.user?.name ? getUserInitials(session.user.name) : "U"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p className="font-medium text-gray-900">{session?.user?.name}</p>
            <p className="text-sm text-gray-500">{session?.user?.email}</p>
          </div>
        </div>

        {/* Create Story Button */}
        <CreateStoryDialog />
      </SidebarHeader>

      <SidebarContent className="px-4">
        {/* Empty sidebar content - can add more items later if needed */}
      </SidebarContent>
    </Sidebar>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main className="p-8">
            <div className="flex min-h-[60vh] items-center justify-center">
              <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold text-slate-900">
                  Welcome to StoryMint
                </h1>
                <p className="text-lg text-slate-600">
                  Click the "Create Story" button in the sidebar to get started
                </p>
              </div>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
