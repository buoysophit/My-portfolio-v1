"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { 
  MapPinIcon, 
  MailIcon, 
  PhoneIcon, 
  SendIcon,
  CheckCircleIcon,
  ExternalLinkIcon
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Side - Contact Information */}
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                Get In Touch
              </Badge>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
                yOffset={8}
                text="Let's Work Together"
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-lg text-muted-foreground max-w-md"
                text="Have a project in mind or just want to chat? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible."
              />
            </div>
          </BlurFade>

          {/* Contact Information Cards */}
          <div className="space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MailIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a 
                      href={`mailto:${DATA.contact.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {DATA.contact.email}
                    </a>
                  </div>
                </div>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <PhoneIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <div className="space-y-1">
                      <a 
                        href={`tel:${DATA.contact.tel1}`}
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        {DATA.contact.tel1}
                      </a>
                      <a 
                        href={`tel:${DATA.contact.tel2}`}
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        {DATA.contact.tel2}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/10 rounded-full">
                    <MapPinIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">{DATA.contact.address}</p>
                  </div>
                </div>
              </Card>
            </BlurFade>
          </div>

          {/* Social Media Links */}
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect with me</h3>
              <div className="flex gap-4">
                {Object.entries(DATA.contact.social)
                  .filter(([, social]) => social.navbar)
                  .map(([name, social]) => (
                    <Button
                      key={name}
                      variant="outline"
                      size="lg"
                      className="group hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <social.icon className="h-5 w-5" />
                        <span>{name}</span>
                        <ExternalLinkIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  ))}
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Right Side - Contact Form */}
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Let's discuss your project"
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group transition-all duration-300"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'idle' && (
                  <>
                    <SendIcon className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    Send Message
                  </>
                )}
                {formStatus === 'sending' && (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Sending...
                  </>
                )}
                {formStatus === 'sent' && (
                  <>
                    <CheckCircleIcon className="mr-2 h-4 w-4" />
                    Message Sent!
                  </>
                )}
              </Button>

              {formStatus === 'sent' && (
                <div className="text-center text-sm text-green-600 dark:text-green-400">
                  Thank you! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </Card>
        </BlurFade>
      </div>
    </section>
  );
}