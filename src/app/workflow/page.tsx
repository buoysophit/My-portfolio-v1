import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { WorkflowImage } from "@/components/workflow-image";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

// Gallery images for the workflow showcase
const GALLERY_IMAGES = [
  {
    src: "/assets/img/Pro1.gif",
    videoSrc: "/assets/video/Pro1.webm",
    alt: "Development Environment in Action", 
    description: "My complete development environment with i3wm and terminal setup",
    category: "workflow"
  },
  {
    src: "/assets/img/Pro2.gif",
    videoSrc: "/assets/video/Pro2.webm", 
    alt: "Active Coding Session",
    description: "Multiple terminals and editors in a productive coding session", 
    category: "workflow"
  },
  {
    src: "/assets/img/Pro3.gif",
    alt: "Complete Workflow Demo",
    description: "Demonstration of my complete development workflow and tools",
    category: "workflow"
  },
  {
    src: "/assets/imgpro/i3.gif",
    alt: "i3wm Window Manager",
    description: "i3wm tiling window manager in action with dynamic workspace switching",
    category: "system"
  }
];

export default function WorkflowPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="gap-4 flex justify-between items-start">
        <div className="flex-col flex flex-1 space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="font-bold text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          My Workflow & Setup
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="max-w-[700px] text-muted-foreground text-lg leading-relaxed">
          Here&apos;s my complete development setup and workflow using ROG laptop with Arch Linux, 
          featuring i3wm and Hyprland window managers for maximum productivity and customization.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-wrap gap-3 mt-4">
          <Badge variant="secondary" className="text-sm">Linux Enthusiast</Badge>
          <Badge variant="secondary" className="text-sm">Window Manager Expert</Badge>
          <Badge variant="secondary" className="text-sm">Productivity Focused</Badge>
            </div>
          </BlurFade>
        </div>
          </div>
        </div>
      </section>
            {/* Gallery Section - fr0st.xyz Pictures Style */}
      <section id="workflow-gallery" className="pb-8">
        <div className="mx-auto w-full max-w-4xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 20}>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-3xl flex items-center gap-3">
            <span className="text-2xl">📷</span>
            Workflow Gallery
          </h2>
          <Badge variant="outline" className="text-sm">
            Click images for details
          </Badge>
        </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 21}>
        <Card className="border border-primary/20 bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
          <span className="text-2xl">🖼️</span>
          Visual Showcase
            </CardTitle>
            <CardDescription className="text-base">
          A collection of photos showcasing my development environment, workflow demonstrations, 
          and the aesthetic beauty of a well-configured Linux system.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* First row - Single featured image */}
            <BlurFade delay={BLUR_FADE_DELAY * 22}>
          <div className="grid grid-cols-1 gap-4">
            <WorkflowImage
              src="/assets/imgpro/i3.gif"
              alt="Workflow Overview"
              title="Complete Workflow Overview"
              description="My primary development workspace showcasing the complete i3wm setup"
            />
          </div>
            </BlurFade>

            {/* Second row - Development Environment Screenshots */}
            <BlurFade delay={BLUR_FADE_DELAY * 23}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WorkflowImage
              src="/workflowos/2025-07-20_17-40.png"
              alt="Development Environment"
              title="Active Development Session"
              description="Multiple terminals and code editors in productive coding workflow"
            />
            
            <WorkflowImage
              src="/workflowos/2025-07-20_17-45.png"
              alt="Terminal Workspace"
              title="Terminal-Centric Workflow"
              description="Command-line focused development environment with multiple panes"
            />
          </div>
            </BlurFade>

            {/* Third row - System Management & Window Manager */}
            <BlurFade delay={BLUR_FADE_DELAY * 24}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WorkflowImage
              src="/workflowos/2025-07-20_17-48.png"
              alt="System Monitoring"
              title="System Resource Management"
              description="Real-time system monitoring and resource usage visualization"
            />
            
            <WorkflowImage
              src="/workflowos/1.png"
              alt="i3wm Window Manager Demo"
              title="i3wm in Action"
              description="Dynamic window tiling and workspace switching demonstration"
            />
          </div>
            </BlurFade>

            {/* Fourth row - Advanced Configuration */}
            <BlurFade delay={BLUR_FADE_DELAY * 25}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WorkflowImage
              src="/workflowos/2025-07-20_18-00.png"
              alt="Advanced Terminal Setup"
              title="Customized Terminal Environment"
              description="Highly customized terminal with enhanced productivity tools"
            />
            
            <WorkflowImage
              src="/workflowos/2025-07-20_18-05.png"
              alt="Application Management"
              title="Application Launcher & System Tools"
              description="Rofi application launcher and integrated system management utilities"
            />
          </div>
            </BlurFade>
          </CardContent>
        </Card>
          </BlurFade>
        </div>
      </section>


      <section id="hardware-setup">
        <div className="mx-auto w-full max-w-4xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="font-bold text-3xl flex items-center gap-3">
              <span className="text-2xl">💻</span>
              Hardware & Operating System
            </h2>
          </BlurFade>
          
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <Card className="border border-primary/20 bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="text-3xl">🏎️</span>
                  ROG Gaming Laptop
                </CardTitle>
                <CardDescription className="text-base">
                  My primary development machine optimized for coding, designing, and high-performance computing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <span className="text-xl">🐧</span>
                      Operating System
                    </h4>
                    <Badge variant="outline" className="text-base px-4 py-2">Arch Linux</Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      Rolling release Linux distribution known for its simplicity, minimalism, and bleeding-edge packages. 
                      Provides complete control over the system with exceptional performance.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <span className="text-xl">⚡</span>
                      Performance Benefits
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">~200MB RAM at idle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Fast boot times (&lt;10s)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Optimized power management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>

      <Separator className="opacity-30" />

      <section id="window-managers">
        <div className="mx-auto w-full max-w-4xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="font-bold text-3xl flex items-center gap-3">
              <span className="text-2xl">🪟</span>
              Window Managers
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <Card className="h-full border border-primary/20 bg-gradient-to-br from-blue-500/5 to-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">⌨️</span>
                    i3wm - Primary Setup
                  </CardTitle>
                  <CardDescription>Tiling Window Manager for Maximum Productivity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline">Keyboard Driven</Badge>
                    <Badge variant="outline">Lightweight</Badge>
                    <Badge variant="outline">Customizable</Badge>
                    <Badge variant="outline">Fast</Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    My go-to window manager for development work. Features automatic window tiling, 
                    workspace management, and complete keyboard control for efficient coding sessions.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">Key Configuration</h5>
                      <div className="bg-muted/30 rounded-lg p-3 space-y-1 text-sm font-mono">
                        <div>• Super + Return → Terminal</div>
                        <div>• Super + d → App Launcher</div>
                        <div>• Super + q → Close Window</div>
                        <div>• Super + h/j/k/l → Focus</div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-2">Features I Use</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Polybar with system monitoring</li>
                        <li>• Custom workspace layouts</li>
                        <li>• Rofi application launcher</li>
                        <li>• i3-gaps for clean spacing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <Card className="h-full border border-primary/20 bg-gradient-to-br from-purple-500/5 to-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">✨</span>
                    Hyprland - Modern Experience
                  </CardTitle>
                  <CardDescription>Wayland Compositor with Beautiful Animations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline">Wayland Native</Badge>
                    <Badge variant="outline">Animations</Badge>
                    <Badge variant="outline">Modern</Badge>
                    <Badge variant="outline">Gestures</Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    For creative work and presentations when I want a more visually appealing desktop 
                    with smooth animations and modern Wayland features.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">Visual Features</h5>
                      <div className="bg-muted/30 rounded-lg p-3 space-y-1 text-sm">
                        <div>• Smooth window animations</div>
                        <div>• Blur effects & transparency</div>
                        <div>• Advanced window rules</div>
                        <div>• Multi-monitor support</div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-2">Use Cases</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Creative design work</li>
                        <li>• Client presentations</li>
                        <li>• Media consumption</li>
                        <li>• Modern app compatibility</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      <Separator className="opacity-30" />

      <section id="development-tools">
        <div className="mx-auto w-full max-w-4xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="font-bold text-3xl flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              Development Environment
            </h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <Card className="border border-primary/20 bg-gradient-to-br from-green-500/5 to-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Essential Development Stack</CardTitle>
                <CardDescription>The core tools that power my development workflow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <span className="text-xl">📝</span>
                      Editors & IDEs
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">Neovim</Badge>
                        <span className="text-sm text-muted-foreground">Primary editor</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">VS Code</Badge>
                        <span className="text-sm text-muted-foreground">GUI alternative</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">Vim</Badge>
                        <span className="text-sm text-muted-foreground">Quick edits</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <span className="text-xl">🖥️</span>
                      Terminal & Shell
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">Kitty</Badge>
                        <span className="text-sm text-muted-foreground">GPU accelerated</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">Zsh</Badge>
                        <span className="text-sm text-muted-foreground">Oh My Zsh</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">Tmux</Badge>
                        <span className="text-sm text-muted-foreground">Session management</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <span className="text-xl">📊</span>
                      System Monitoring
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">Polybar</Badge>
                        <span className="text-sm text-muted-foreground">Status bar</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">Neofetch</Badge>
                        <span className="text-sm text-muted-foreground">System info</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">htop</Badge>
                        <span className="text-sm text-muted-foreground">Process monitor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>

      <Separator className="opacity-30" />

      <section id="workflow-philosophy">
        <div className="mx-auto w-full max-w-4xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="font-bold text-3xl flex items-center gap-3">
              <span className="text-2xl">🧠</span>
              Workflow Philosophy
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Performance First",
                icon: "🚀",
                description: "Exceptional performance with minimal resource usage. Arch Linux with tiling window managers provides lightning-fast responses and efficient multitasking.",
                metrics: ["~200MB RAM at idle", "Sub-10s boot times", "Hardware acceleration"]
              },
              {
                title: "Total Customization", 
                icon: "🎨",
                description: "Complete control over every aspect of the desktop environment. Every keybinding, color, and behavior is tailored to my specific workflow needs.",
                metrics: ["Custom keybindings", "Personalized themes", "Workflow optimization"]
              },
              {
                title: "Keyboard Efficiency",
                icon: "⚡",
                description: "Mouse-free workflow with vim-style navigation and custom shortcuts. Rapid context switching between applications and workspaces.",
                metrics: ["Vim-style navigation", "Custom shortcuts", "Zero mouse dependency"]
              },
              {
                title: "Continuous Learning",
                icon: "🔧",
                description: "Using Arch Linux and window managers deepens understanding of Linux systems, shell scripting, and system administration.",
                metrics: ["System knowledge", "Shell scripting", "Linux expertise"]
              }
            ].map((item, index) => (
              <BlurFade key={item.title} delay={BLUR_FADE_DELAY * (12 + index)}>
                <Card className="h-full border border-primary/20 bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.icon}</span>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="pt-2 space-y-2">
                      {item.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-30" />

      <section id="config-showcase">
        <div className="mx-auto w-full max-w-4xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <h2 className="font-bold text-3xl flex items-center gap-3">
              <span className="text-2xl">⚙️</span>
              Configuration Highlights
            </h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <Card className="border border-primary/20 bg-gradient-to-br from-orange-500/5 to-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">🔗</span>
                  My i3wm Configuration
                </CardTitle>
                <CardDescription>
                  Complete dotfiles and configuration for my Arch Linux i3 setup
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h5 className="font-medium mb-3">Repository Features:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Complete i3wm configuration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Polybar with custom modules</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">Rofi application launcher</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">Kitty terminal configuration</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Neovim with Lua config</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Zsh shell configuration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm">Picom compositor settings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-sm">Custom scripts & automation</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div>
                    <p className="font-medium">Ready to explore my configuration?</p>
                    <p className="text-sm text-muted-foreground">
                      Complete setup guide, keybindings, and customization tips included
                    </p>
                  </div>
                  <a
                    href="https://github.com/buoysophit/My-config-archlinux-i3wm.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <span className="text-lg">🔗</span>
                    View on GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>


    </main>
  );
}
