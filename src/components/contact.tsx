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
    <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Side - Contact Information */}
        <div className="space-y-6 sm:space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="space-y-3 sm:space-y-4">
              <Badge variant="outline" className="w-fit">
                Get In Touch
              </Badge>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl sm:text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl/none"
                yOffset={8}
                text="Let's Work Together"
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-base sm:text-lg text-muted-foreground max-w-md"
                text="Have a project in mind or just want to chat? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible."
              />
            </div>
          </BlurFade>

          {/* Contact Information Cards */}
          <div className="space-y-3 sm:space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <MailIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">Email</h3>
                    <a 
                      href={`mailto:${DATA.contact.email}`}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      {DATA.contact.email}
                    </a>
                  </div>
                </div>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-blue-500/10 rounded-full flex-shrink-0">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">Phone</h3>
                    <div className="space-y-1">
                      <a 
                        href={`tel:${DATA.contact.tel1}`}
                        className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {DATA.contact.tel1}
                      </a>
                      <a 
                        href={`tel:${DATA.contact.tel2}`}
                        className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {DATA.contact.tel2}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-green-500/10 rounded-full flex-shrink-0">
                    <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base">Location</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{DATA.contact.address}</p>
                  </div>
                </div>
              </Card>
            </BlurFade>
          </div>

          {/* Social Media Links */}
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Connect with me</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {Object.entries(DATA.contact.social)
                  .filter(([, social]) => social.navbar)
                  .map(([name, social]) => (
                    <Button
                      key={name}
                      variant="outline"
                      size="sm"
                      className="group hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-start sm:justify-center"
                      asChild
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="text-sm">{name}</span>
                        <ExternalLinkIcon className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto sm:ml-0" />
                      </a>
                    </Button>
                  ))}
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Right Side - Contact Form */}
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <Card className="p-4 sm:p-6 lg:p-8 shadow-lg border-0 bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs sm:text-sm font-medium">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs sm:text-sm font-medium">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs sm:text-sm font-medium">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs sm:text-sm font-medium">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Let's discuss your project"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group transition-all duration-300 text-sm sm:text-base"
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
                <div className="text-center text-xs sm:text-sm text-green-600 dark:text-green-400">
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