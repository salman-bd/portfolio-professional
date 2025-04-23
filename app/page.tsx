import Link from "next/link"
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  bg-black">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative py-20 md:py-24 lg:min-h-screen flex items-center bg-gray-950 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="absolute inset-0 z-0 opacity-30">
              <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center w-full">
                  {/* Left Content */}
                  <div className="space-y-4 animate-slide-in-left order-2 md:order-1">
                    <p className="text-xl font-medium text-gray-400 tracking-wider">HELLO I'M</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading">
                      <span className="gradient-text">Ariful Islam Shaon</span>
                    </h1>
                    <Button asChild size="lg" className="rounded-full px-8 animate-pulse-glow mt-4">
                      <Link href="/about">
                        View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Center Image - Moved to top on mobile */}
                  <div className="hero-image-container animate-scale animate-delay-300 order-1 md:order-2 mx-auto w-full max-w-[280px] md:max-w-[320px]">
                    <div className="relative w-full p-4 aspect-square bg-gradient-to-b from-gray-800 to-black rounded-xl overflow-hidden flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src="/shaon.jpg"
                          alt="Ariful Islam"
                          fill
                          className="object-cover object-center rounded-xl shadow-lg"
                          priority
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="space-y-6 animate-slide-in-right order-3">
                    <h2 className="text-2xl font-bold">About Me</h2>
                    <p className="text-gray-400">
                      A professional <span className="text-primary">financial expert</span> with expertise in accounting and
                      financial management, delivering accurate reporting and analysis.
                    </p>
                    <div className="space-y-4">
                      <p className="text-lg font-medium">Find me on</p>
                      <div className="flex space-x-4">
                        <Link
                          href="#"
                          className="w-10 h-10 rounded-full bg-rose-900 flex items-center justify-center hover:bg-primary/20 transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="h-5 w-5" />
                        </Link>
                        <Link
                          href="#"
                          className="w-10 h-10 rounded-full bg-rose-900 flex items-center justify-center hover:bg-primary/20 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                          href="#"
                          className="w-10 h-10 rounded-full bg-rose-900  flex items-center justify-center hover:bg-primary/20 transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="h-5 w-5" />
                        </Link>
                        <Link
                          href="#"
                          className="w-10 h-10 rounded-full bg-rose-900 flex items-center justify-center hover:bg-primary/20 transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-muted/10 py-20 md:py-24">
          <div className="container  max-w-7xl mx-auto px-4 md:px-6">
            <div className="mb-12 text-center animate-slide-up">
              <h2 className="section-heading">What I Do</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Specialized accounting and financial management services
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="card-hover animate-slide-up animate-delay-100">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <CardTitle>Financial Management</CardTitle>
                  <CardDescription>Comprehensive financial management and reporting services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Daily financial statements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Bank reconciliation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Accounts receivable monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="card-hover animate-slide-up animate-delay-200">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle>Accounting Software</CardTitle>
                  <CardDescription>Expert in various accounting software solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Tally & Quickbooks Online</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Traacs accounting software</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Trincome implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="card-hover animate-slide-up animate-delay-300">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle>Financial Reporting</CardTitle>
                  <CardDescription>Detailed financial reporting and analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Balance sheet preparation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Profit & loss statements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Financial analysis & reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 py-20 md:py-24">
          <div className="container max-w-7xl mx-auto px-4 text-center md:px-6">
            <div className="animate-slide-up">
              <h2 className="section-heading">Ready to Work Together?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
                Let's discuss how I can help with your accounting and financial management needs.
              </p>
              <Button asChild size="lg" className="mt-8 animate-pulse-glow">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
