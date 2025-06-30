"use client";

import React from "react";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const osData = [
	{
		name: "Windows 11",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg",
		badge: "Main OS",
	},
	{
		name: "Arch Linux",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg",
		badge: "Custom",
	},
	{
		name: "Ubuntu",
		icon: "/assets/ubuntu.png", // Local image path
		badge: "Server",
	},
];

export default function OSExperience() {
	return (
		<section id="os-experience">
			<div className="flex min-h-0 flex-col gap-y-3">
				<BlurFade delay={BLUR_FADE_DELAY * 9}>
					<h2 className="text-xl font-bold">OS Experience</h2>
				</BlurFade>

				<BlurFade delay={BLUR_FADE_DELAY * 9.2}>
					<div className="grid grid-cols-3 gap-4">
						{osData.map((os, index) => (
							<div
								key={os.name}
								className="relative bg-muted/30 border rounded-xl p-4 group hover:shadow-lg transition-all duration-300 hover:scale-105"
							>
								<div className="flex flex-col items-center text-center space-y-2">
									<div className="relative">
										<Image
											src={os.icon}
											alt={os.name}
											width={32}
											height={32}
											className="w-8 h-8"
										/>
									</div>
									<h3 className="text-sm font-semibold">{os.name}</h3>
									<span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
										{os.badge}
									</span>
								</div>
							</div>
						))}
					</div>
				</BlurFade>
			</div>
		</section>
	);
}