import { BarChart, CheckCircle2, Database } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-20 md:py-24">
          <div className="container max-7xl mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="section-heading">Skills & Expertise</h1>
              <p className="mt-6 text-xl text-muted-foreground">
                My professional skills and expertise in accounting, financial management, and software tools.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Skills Section */}
        <section className="bg-muted/30 py-20 md:py-24">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="mb-12 flex items-center">
              <BarChart className="mr-2 h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Professional Skills</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Traacs (Accounting Software)</CardTitle>
                  <CardDescription>Advanced proficiency in Traacs accounting software</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Proficiency</span>
                      <span className="text-primary">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Tally</CardTitle>
                  <CardDescription>Expert in Tally accounting software</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Proficiency</span>
                      <span className="text-primary">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Quickbooks Online</CardTitle>
                  <CardDescription>Advanced skills in Quickbooks Online</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Proficiency</span>
                      <span className="text-primary">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Trincome</CardTitle>
                  <CardDescription>Strong knowledge of Trincome software</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Proficiency</span>
                      <span className="text-primary">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Skills Section */}
        <section className="bg-background py-20 md:py-24">
          <div className="container max-7xl mx-auto px-4 md:px-6">
            <div className="mb-12 flex items-center">
              <CheckCircle2 className="mr-2 h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Special Skills</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center">Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <div className="relative h-32 w-32">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">90%</span>
                      </div>
                      <svg className="h-32 w-32" viewBox="0 0 100 100">
                        <circle
                          className="stroke-muted-foreground/20"
                          cx="50"
                          cy="50"
                          r="45"
                          fill="transparent"
                          strokeWidth="8"
                        />
                        <circle
                          className="stroke-primary"
                          cx="50"
                          cy="50"
                          r="45"
                          fill="transparent"
                          strokeWidth="8"
                          strokeDasharray="283"
                          strokeDashoffset="28.3"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center">Teamwork</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <div className="relative h-32 w-32">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">95%</span>
                      </div>
                      <svg className="h-32 w-32" viewBox="0 0 100 100">
                        <circle
                          className="stroke-muted-foreground/20"
                          cx="50"
                          cy="50"
                          r="45"
                          fill="transparent"
                          strokeWidth="8"
                        />
                        <circle
                          className="stroke-primary"
                          cx="50"
                          cy="50"
                          r="45"
                          fill="transparent"
                          strokeWidth="8"
                          strokeDasharray="283"
                          strokeDashoffset="14.15"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center">Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <div className="relative h-32 w-32">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">85%</span>
                      </div>
                      <svg className="h-32 w-32" viewBox="0 0 100 100">
                        <circle
                          className="stroke-muted-foreground/20"
                          cx="50"
                          cy="50"
                          r="45"
                          fill="transparent"
                          strokeWidth="8"
                        />
                        <circle
                          className="stroke-primary"
                          cx="50"
                          cy="50"
                          r="45"
                          fill="transparent"
                          strokeWidth="8"
                          strokeDasharray="283"
                          strokeDashoffset="42.45"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center">Time Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <div className="relative h-32 w-32">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">92%</span>
                      </div>
                      <svg className="h-32 w-32" viewBox="0 0 100 100">
                        <circle
                          className="stroke-muted-foreground/20"
                          cx="50"
                          cy="50"
                          r="45"
                          fill="transparent"
                          strokeWidth="8"
                        />
                        <circle
                          className="stroke-primary"
                          cx="50"
                          cy="50"
                          r="45"
                          fill="transparent"
                          strokeWidth="8"
                          strokeDasharray="283"
                          strokeDashoffset="22.64"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="bg-muted/30 py-20 md:py-24">
          <div className="container max-7xl mx-auto px-4 md:px-6">
            <div className="mb-12 flex items-center">
              <Database className="mr-2 h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Microsoft Office Suite</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span>Microsoft Excel</span>
                        <span className="text-primary">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span>Microsoft Word</span>
                        <span className="text-primary">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span>Microsoft PowerPoint</span>
                        <span className="text-primary">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Data Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span>Advanced Excel Functions</span>
                        <span className="text-primary">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span>Power BI</span>
                        <span className="text-primary">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span>SQL Basics</span>
                        <span className="text-primary">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
