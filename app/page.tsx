import Link from "next/link"
import { ArrowRight, Award, BookOpen, Briefcase, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-xl font-medium text-gray-400">HELLO</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  I'm <span className="gradient-text">Ariful Islam</span>
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold">
                  A <span className="text-primary">Financial Expert</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-lg">
                  Accounts In-Charge with expertise in financial management and accounting software, delivering accurate
                  financial reporting and analysis.
                </p>
                <div className="pt-4">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/about">
                      View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-primary/20 z-10 rounded-2xl"></div>
                <div className="h-[500px] w-full rounded-2xl overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <div className="text-6xl text-primary/20 font-bold">A I S</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="section-heading">What I Do</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Specialized accounting and financial management services
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="card-hover">
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
              <Card className="card-hover">
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
              <Card className="card-hover">
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
        <section className="bg-primary/10 py-20">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h2 className="section-heading">Ready to Work Together?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
              Let's discuss how I can help with your accounting and financial management needs.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
