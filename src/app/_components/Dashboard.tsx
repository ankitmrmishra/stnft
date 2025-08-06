"use client";

import { useState } from "react";
import {
  Plus,
  Grid3X3,
  Folder,
  Settings,
  MoreVertical,
  ExternalLink,
  Share,
  Eye,
  TrendingUp,
  Wallet,
  Zap,
  Users,
  DollarSign,
  Activity,
  Star,
  Download,
  Edit,
  Trash2,
  Filter,
  Search,
  Bell,
  ChevronDown,
  BarChart3,
  PieChart,
  Calendar,
  Clock,
  Award,
  Sparkles,
  ImageIcon,
  FileText,
  Palette,
  Brain,
} from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Progress } from "~/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarFooter,
} from "~/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

// Mock data for comprehensive dashboard
const mockNFTs = [
  {
    id: 1,
    title: "Mystic Forest Chronicles",
    snippet:
      "Deep within the enchanted woods, ancient secrets whisper through the leaves...",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    createdAt: "2 hours ago",
    status: "minted",
    price: "2.5 SOL",
    views: 1247,
    likes: 89,
    rarity: "Legendary",
    aiModel: "DALL-E 3",
    mintAddress: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgHkv",
  },
  {
    id: 2,
    title: "Cyberpunk Dreams",
    snippet:
      "Neon lights pierce through the digital rain as consciousness merges with code...",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    createdAt: "1 day ago",
    status: "listed",
    price: "1.8 SOL",
    views: 892,
    likes: 156,
    rarity: "Epic",
    aiModel: "Midjourney",
    mintAddress: "9yKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgHkv",
  },
  {
    id: 3,
    title: "Ocean's Memory",
    snippet:
      "Waves carry stories of forgotten civilizations beneath the azure depths...",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop",
    createdAt: "3 days ago",
    status: "draft",
    price: "0 SOL",
    views: 234,
    likes: 45,
    rarity: "Rare",
    aiModel: "Stable Diffusion",
    mintAddress: null,
  },
  {
    id: 4,
    title: "Desert Mirage Tales",
    snippet:
      "Golden sands shift to reveal ancient pyramids hidden by time and magic...",
    image:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
    createdAt: "5 days ago",
    status: "sold",
    price: "3.2 SOL",
    views: 2156,
    likes: 234,
    rarity: "Mythic",
    aiModel: "DALL-E 3",
    mintAddress: "5xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgHkv",
  },
  {
    id: 5,
    title: "Stellar Odyssey",
    snippet:
      "Among distant stars, a lone explorer discovers worlds beyond imagination...",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
    createdAt: "1 week ago",
    status: "minted",
    price: "4.1 SOL",
    views: 3421,
    likes: 567,
    rarity: "Legendary",
    aiModel: "Midjourney",
    mintAddress: "3xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgHkv",
  },
  {
    id: 6,
    title: "Urban Symphony",
    snippet: "City lights dance to the rhythm of a thousand untold stories...",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop",
    createdAt: "1 week ago",
    status: "listed",
    price: "1.5 SOL",
    views: 1876,
    likes: 298,
    rarity: "Epic",
    aiModel: "Stable Diffusion",
    mintAddress: "1xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgHkv",
  },
];

const statsData = [
  {
    title: "Total Revenue",
    value: "24.7 SOL",
    change: "+12.5%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "NFTs Created",
    value: "127",
    change: "+8.2%",
    icon: ImageIcon,
    trend: "up",
  },
  {
    title: "Total Views",
    value: "45.2K",
    change: "+23.1%",
    icon: Eye,
    trend: "up",
  },
  {
    title: "Active Collectors",
    value: "1,234",
    change: "+5.7%",
    icon: Users,
    trend: "up",
  },
];

function AppSidebar() {
  return (
    <Sidebar className="border-r border-slate-200 bg-white">
      <SidebarHeader className="border-b border-slate-100 p-6">
        {/* Logo */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-800">StoryMint</span>
        </div>

        {/* User Profile & Stats Card */}
        <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-emerald-200">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback className="bg-emerald-100 font-semibold text-emerald-700">
                  AK
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg text-slate-800">
                  Alex Kumar
                </CardTitle>
                <CardDescription className="flex items-center gap-1 text-sm text-slate-600">
                  <Wallet className="h-3 w-3" />
                  alex.sol
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">127</div>
                <div className="text-xs text-slate-600">NFTs Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">24.7</div>
                <div className="text-xs text-slate-600">SOL Earned</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-slate-600">Creator Level</span>
                <span className="font-medium text-emerald-600">Pro</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Primary CTA */}
        <Button
          size="lg"
          className="mt-4 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 font-semibold text-white shadow-lg transition-all duration-200 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-xl"
        >
          <Plus className="mr-2 h-5 w-5" />
          Create New Story
        </Button>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="font-medium text-slate-500">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive
                  className="data-[active=true]:border-emerald-200 data-[active=true]:bg-emerald-50 data-[active=true]:text-emerald-700"
                >
                  <Grid3X3 className="h-4 w-4" />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <TrendingUp className="h-4 w-4" />
                  <span>Performance</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="font-medium text-slate-500">
            Creation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Brain className="h-4 w-4" />
                  <span>AI Studio</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Palette className="h-4 w-4" />
                  <span>Art Generator</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FileText className="h-4 w-4" />
                  <span>Story Editor</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="font-medium text-slate-500">
            Collection
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Folder className="h-4 w-4" />
                  <span>My Collections</span>
                  <Badge
                    variant="secondary"
                    className="ml-auto bg-emerald-100 text-emerald-700"
                  >
                    12
                  </Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Award className="h-4 w-4" />
                  <span>Achievements</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Activity className="h-4 w-4" />
                  <span>Activity</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="font-medium text-slate-500">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-slate-100 p-4">
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">
                AI Credits
              </span>
            </div>
            <div className="mb-1 text-2xl font-bold text-blue-900">847</div>
            <Progress value={65} className="mb-2 h-2" />
            <Button
              size="sm"
              variant="outline"
              className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              Upgrade Plan
            </Button>
          </CardContent>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
}

function StatsCard({ stat }: { stat: (typeof statsData)[0] }) {
  const Icon = stat.icon;
  return (
    <Card className="border-slate-200 bg-white transition-shadow duration-200 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600">{stat.title}</p>
            <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            <p
              className={`mt-1 flex items-center gap-1 text-sm ${
                stat.trend === "up" ? "text-emerald-600" : "text-red-600"
              }`}
            >
              <TrendingUp className="h-3 w-3" />
              {stat.change} from last month
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 p-3">
            <Icon className="h-6 w-6 text-emerald-700" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function NFTCard({ nft }: { nft: (typeof mockNFTs)[0] }) {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Mythic":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Legendary":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Epic":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Rare":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "minted":
        return "bg-emerald-100 text-emerald-800";
      case "listed":
        return "bg-blue-100 text-blue-800";
      case "sold":
        return "bg-purple-100 text-purple-800";
      case "draft":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="group overflow-hidden border-slate-200 bg-white transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={nft.image || "/placeholder.svg"}
            alt={nft.title}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={`${getStatusColor(nft.status)} border font-medium`}>
            {nft.status.charAt(0).toUpperCase() + nft.status.slice(1)}
          </Badge>
          <Badge className={`${getRarityColor(nft.rarity)} border font-medium`}>
            {nft.rarity}
          </Badge>
        </div>

        {/* Action menu */}
        <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 bg-white/90 shadow-md hover:bg-white"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit Story
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share className="mr-2 h-4 w-4" />
                Share NFT
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Download Image
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ExternalLink className="mr-2 h-4 w-4" />
                View on Explorer
              </DropdownMenuItem>
              {nft.status === "minted" && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete NFT
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Price overlay */}
        {nft.price !== "0 SOL" && (
          <div className="absolute right-3 bottom-3 rounded-full bg-black/80 px-3 py-1 text-sm font-semibold text-white">
            {nft.price}
          </div>
        )}
      </div>

      <CardContent className="p-5">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
            {nft.title}
          </h3>
          <div className="flex items-center gap-1 text-slate-500">
            <Star className="h-4 w-4" />
            <span className="text-sm">{nft.likes}</span>
          </div>
        </div>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-600">
          {nft.snippet}
        </p>

        <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {nft.createdAt}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {nft.views.toLocaleString()} views
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400">
              <Brain className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-medium text-slate-600">
              {nft.aiModel}
            </span>
          </div>

          {nft.mintAddress && (
            <Button variant="outline" size="sm" className="h-7 text-xs">
              <ExternalLink className="mr-1 h-3 w-3" />
              Explorer
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="mx-auto max-w-lg border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 text-center">
        <CardContent className="p-12">
          <div className="mb-8">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200">
              <Sparkles className="h-10 w-10 text-emerald-600" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Your Creative Journey Begins
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Transform your imagination into stunning NFTs with the power of AI.
            Create your first story and watch it come to life as unique digital
            art.
          </p>
          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 font-semibold text-white shadow-lg transition-all duration-200 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-xl"
            >
              <Plus className="mr-2 h-5 w-5" />
              Create Your First Story
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              <Eye className="mr-2 h-5 w-5" />
              Explore Gallery
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Dashboard() {
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const hasNFTs = !showEmptyState && mockNFTs.length > 0;

  const filteredNFTs = mockNFTs.filter((nft) => {
    const matchesSearch =
      nft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || nft.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main className="p-8">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="mb-2 text-4xl font-bold text-slate-900">
                  Welcome back, Alex 👋
                </h1>
                <p className="text-lg text-slate-600">
                  Ready to create something extraordinary today?
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></div>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Calendar className="h-4 w-4" />
                      Last 30 days
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                    <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                    <DropdownMenuItem>Last 90 days</DropdownMenuItem>
                    <DropdownMenuItem>All time</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {hasNFTs ? (
              <>
                {/* Stats Grid */}
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {statsData.map((stat, index) => (
                    <StatsCard key={index} stat={stat} />
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                  <Card className="border-0 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="rounded-xl bg-white/20 p-3">
                          <Plus className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">
                            Create Story
                          </h3>
                          <p className="text-sm text-emerald-100">
                            Start your next masterpiece
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="rounded-xl bg-white/20 p-3">
                          <Brain className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">AI Studio</h3>
                          <p className="text-sm text-blue-100">
                            Generate stunning artwork
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="rounded-xl bg-white/20 p-3">
                          <TrendingUp className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Analytics</h3>
                          <p className="text-sm text-purple-100">
                            Track your performance
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Search and Filters */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                  <div className="relative flex-1">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
                    <Input
                      placeholder="Search your stories..."
                      value={searchQuery}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setSearchQuery(event.target.value)
                      }
                      className="border-slate-200 bg-white pl-10"
                    />
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="gap-2 border-slate-200 bg-white"
                      >
                        <Filter className="h-4 w-4" />
                        Filter:{" "}
                        {selectedFilter === "all"
                          ? "All"
                          : selectedFilter.charAt(0).toUpperCase() +
                            selectedFilter.slice(1)}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => setSelectedFilter("all")}
                      >
                        All Stories
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setSelectedFilter("minted")}
                      >
                        Minted
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setSelectedFilter("listed")}
                      >
                        Listed
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setSelectedFilter("sold")}
                      >
                        Sold
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setSelectedFilter("draft")}
                      >
                        Drafts
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Content Tabs */}
                <Tabs defaultValue="gallery" className="mb-6">
                  <TabsList className="border border-slate-200 bg-white">
                    <TabsTrigger
                      value="gallery"
                      className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
                    >
                      Gallery View
                    </TabsTrigger>
                    <TabsTrigger
                      value="list"
                      className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
                    >
                      List View
                    </TabsTrigger>
                    <TabsTrigger
                      value="analytics"
                      className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
                    >
                      Analytics
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="gallery" className="mt-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {filteredNFTs.map((nft) => (
                        <NFTCard key={nft.id} nft={nft} />
                      ))}
                    </div>

                    {filteredNFTs.length === 0 && (
                      <div className="py-12 text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                          <Search className="h-8 w-8 text-slate-400" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">
                          No stories found
                        </h3>
                        <p className="text-slate-600">
                          Try adjusting your search or filter criteria.
                        </p>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="list" className="mt-6">
                    <Card className="border-slate-200 bg-white">
                      <CardContent className="p-0">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="border-b border-slate-200 bg-slate-50">
                              <tr>
                                <th className="p-4 text-left font-semibold text-slate-700">
                                  Story
                                </th>
                                <th className="p-4 text-left font-semibold text-slate-700">
                                  Status
                                </th>
                                <th className="p-4 text-left font-semibold text-slate-700">
                                  Price
                                </th>
                                <th className="p-4 text-left font-semibold text-slate-700">
                                  Views
                                </th>
                                <th className="p-4 text-left font-semibold text-slate-700">
                                  Created
                                </th>
                                <th className="p-4 text-left font-semibold text-slate-700">
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {filteredNFTs.map((nft) => (
                                <tr
                                  key={nft.id}
                                  className="border-b border-slate-100 hover:bg-slate-50"
                                >
                                  <td className="p-4">
                                    <div className="flex items-center gap-3">
                                      <Image
                                        src={nft.image || "/placeholder.svg"}
                                        alt={nft.title}
                                        width={48}
                                        height={48}
                                        className="rounded-lg object-cover"
                                      />
                                      <div>
                                        <div className="font-semibold text-slate-900">
                                          {nft.title}
                                        </div>
                                        <div className="line-clamp-1 text-sm text-slate-600">
                                          {nft.snippet}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="p-4">
                                    <Badge
                                      className={getStatusColor(nft.status)}
                                    >
                                      {nft.status.charAt(0).toUpperCase() +
                                        nft.status.slice(1)}
                                    </Badge>
                                  </td>
                                  <td className="p-4 font-semibold">
                                    {nft.price}
                                  </td>
                                  <td className="p-4">
                                    {nft.views.toLocaleString()}
                                  </td>
                                  <td className="p-4 text-slate-600">
                                    {nft.createdAt}
                                  </td>
                                  <td className="p-4">
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                          <MoreVertical className="h-4 w-4" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                          View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                          Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                          Share
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="analytics" className="mt-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <Card className="border-slate-200 bg-white">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-emerald-600" />
                            Revenue Trends
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
                            <p className="font-medium text-emerald-700">
                              Revenue Chart Placeholder
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-slate-200 bg-white">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <PieChart className="h-5 w-5 text-blue-600" />
                            NFT Distribution
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                            <p className="font-medium text-blue-700">
                              Distribution Chart Placeholder
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Demo Toggle */}
                <div className="fixed right-6 bottom-6">
                  <Button
                    onClick={() => setShowEmptyState(!showEmptyState)}
                    className="bg-slate-800 text-white shadow-lg hover:bg-slate-900"
                  >
                    {showEmptyState ? "Show Dashboard" : "Show Empty State"}
                  </Button>
                </div>
              </>
            ) : (
              <EmptyState />
            )}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "minted":
      return "bg-emerald-100 text-emerald-800";
    case "listed":
      return "bg-blue-100 text-blue-800";
    case "sold":
      return "bg-purple-100 text-purple-800";
    case "draft":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
